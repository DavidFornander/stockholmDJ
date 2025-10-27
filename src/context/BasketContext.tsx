"use client";

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

import { DJ } from '@/types/dj';

// Types for basket management
export interface Equipment {
  id: string;
  name: string;
  cost: number;
  category: string;
}

export interface BasketItem {
  type: 'dj' | 'photographer' | 'venue';
  itemId: string;
  itemName: string;
  itemTitle: string;
  selectedDate: string;
  selectedHours: number;
  selectedGear: Equipment[];
  basePrice: number;
  totalPrice: number;
  timestamp: number;
  djData?: DJ; // Store full DJ data for display
}

interface BasketState {
  items: BasketItem[];
  totalPrice: number;
  isOpen: boolean;
}

type BasketAction =
  | { type: 'ADD_ITEM'; payload: BasketItem }
  | { type: 'REMOVE_ITEM'; payload: string } // itemId
  | { type: 'UPDATE_GEAR'; payload: { itemId: string; gear: Equipment[] } }
  | { type: 'UPDATE_HOURS'; payload: { itemId: string; hours: number } }
  | { type: 'UPDATE_DATE'; payload: { itemId: string; date: string } }
  | { type: 'CLEAR_BASKET' }
  | { type: 'TOGGLE_BASKET' }
  | { type: 'LOAD_FROM_STORAGE'; payload: BasketItem[] };

const initialState: BasketState = {
  items: [],
  totalPrice: 0,
  isOpen: false,
};

// Calculate total price for basket
const calculateTotalPrice = (items: BasketItem[]): number => {
  return items.reduce((total, item) => total + item.totalPrice, 0);
};

// Calculate item total price
const calculateItemPrice = (basePrice: number, hours: number, gear: Equipment[]): number => {
  const gearCost = gear.reduce((sum, item) => sum + item.cost, 0);
  return (basePrice * hours) + gearCost;
};

function basketReducer(state: BasketState, action: BasketAction): BasketState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItems = [...state.items, action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: calculateTotalPrice(newItems),
      };
    }

    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(item => item.itemId !== action.payload);
      return {
        ...state,
        items: filteredItems,
        totalPrice: calculateTotalPrice(filteredItems),
      };
    }

    case 'UPDATE_GEAR': {
      const updatedGearItems = state.items.map(item =>
        item.itemId === action.payload.itemId
          ? {
              ...item,
              selectedGear: action.payload.gear,
              totalPrice: calculateItemPrice(item.basePrice, item.selectedHours, action.payload.gear),
            }
          : item
      );
      return {
        ...state,
        items: updatedGearItems,
        totalPrice: calculateTotalPrice(updatedGearItems),
      };
    }

    case 'UPDATE_HOURS': {
      const updatedHoursItems = state.items.map(item =>
        item.itemId === action.payload.itemId
          ? {
              ...item,
              selectedHours: action.payload.hours,
              totalPrice: calculateItemPrice(item.basePrice, action.payload.hours, item.selectedGear),
            }
          : item
      );
      return {
        ...state,
        items: updatedHoursItems,
        totalPrice: calculateTotalPrice(updatedHoursItems),
      };
    }

    case 'UPDATE_DATE': {
      const updatedDateItems = state.items.map(item =>
        item.itemId === action.payload.itemId
          ? { ...item, selectedDate: action.payload.date }
          : item
      );
      return {
        ...state,
        items: updatedDateItems,
      };
    }

    case 'CLEAR_BASKET':
      return {
        ...state,
        items: [],
        totalPrice: 0,
      };

    case 'TOGGLE_BASKET':
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case 'LOAD_FROM_STORAGE':
      return {
        ...state,
        items: action.payload,
        totalPrice: calculateTotalPrice(action.payload),
      };

    default:
      return state;
  }
}

interface BasketContextType {
  state: BasketState;
  addItem: (item: Omit<BasketItem, 'timestamp' | 'totalPrice'>) => void;
  removeItem: (itemId: string) => void;
  updateGear: (itemId: string, gear: Equipment[]) => void;
  updateHours: (itemId: string, hours: number) => void;
  updateDate: (itemId: string, date: string) => void;
  clearBasket: () => void;
  toggleBasket: () => void;
  isItemInBasket: (itemId: string) => boolean;
  getItemFromBasket: (itemId: string) => BasketItem | undefined;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export function BasketProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(basketReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedBasket = localStorage.getItem('stockholmDJ-basket');
      if (savedBasket) {
        const items = JSON.parse(savedBasket);
        dispatch({ type: 'LOAD_FROM_STORAGE', payload: items });
      }
    } catch (error) {
      console.warn('Failed to load basket from localStorage:', error);
    }
  }, []);

  // Save to localStorage whenever basket changes
  useEffect(() => {
    try {
      localStorage.setItem('stockholmDJ-basket', JSON.stringify(state.items));
    } catch (error) {
      console.warn('Failed to save basket to localStorage:', error);
    }
  }, [state.items]);

  const addItem = (item: Omit<BasketItem, 'timestamp' | 'totalPrice'>) => {
    const newItem: BasketItem = {
      ...item,
      timestamp: Date.now(),
      totalPrice: calculateItemPrice(item.basePrice, item.selectedHours, item.selectedGear),
    };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const updateGear = (itemId: string, gear: Equipment[]) => {
    dispatch({ type: 'UPDATE_GEAR', payload: { itemId, gear } });
  };

  const updateHours = (itemId: string, hours: number) => {
    dispatch({ type: 'UPDATE_HOURS', payload: { itemId, hours } });
  };

  const updateDate = (itemId: string, date: string) => {
    dispatch({ type: 'UPDATE_DATE', payload: { itemId, date } });
  };

  const clearBasket = () => {
    dispatch({ type: 'CLEAR_BASKET' });
  };

  const toggleBasket = () => {
    dispatch({ type: 'TOGGLE_BASKET' });
  };

  const isItemInBasket = (itemId: string): boolean => {
    return state.items.some(item => item.itemId === itemId);
  };

  const getItemFromBasket = (itemId: string): BasketItem | undefined => {
    return state.items.find(item => item.itemId === itemId);
  };

  return (
    <BasketContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateGear,
        updateHours,
        updateDate,
        clearBasket,
        toggleBasket,
        isItemInBasket,
        getItemFromBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
}
