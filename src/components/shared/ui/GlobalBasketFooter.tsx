"use client";

import React from 'react';
import { useBasket } from '@/context/BasketContext';
import { ShoppingCart, X, Clock, Calendar, Users } from 'lucide-react';

const GlobalBasketFooter: React.FC = () => {
  const { state, toggleBasket, removeItem } = useBasket();
  
  if (state.items.length === 0) {
    return null; // Don't show footer if basket is empty
  }

  return (
    <>
      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Basket Summary */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleBasket}
                className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <div className="relative">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.items.length}
                  </span>
                </div>
                <span className="font-medium">
                  {state.items.length} {state.items.length === 1 ? 'tjänst' : 'tjänster'}
                </span>
              </button>
              
              {/* Quick preview of items */}
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                {state.items.slice(0, 2).map((item, index) => (
                  <span key={item.itemId} className="flex items-center gap-1">
                    {index > 0 && <span className="text-gray-400">•</span>}
                    <Users className="w-4 h-4" />
                    {item.itemName}
                    <Clock className="w-4 h-4 ml-1" />
                    {item.selectedHours}h
                  </span>
                ))}
                {state.items.length > 2 && (
                  <span className="text-gray-400">
                    +{state.items.length - 2} mer
                  </span>
                )}
              </div>
            </div>

            {/* Total Price & Actions */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {state.totalPrice.toLocaleString('sv-SE')} kr
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Totalt inkl. utrustning
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Gå till bokning
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Basket Panel */}
      {state.isOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-xl z-50 transform transition-transform duration-300">
          <div className="max-w-7xl mx-auto">
            {/* Panel Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Din bokning
              </h3>
              <button
                onClick={toggleBasket}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Basket Items */}
            <div className="max-h-80 overflow-y-auto">
              {state.items.map((item) => (
                <div
                  key={item.itemId}
                  className="flex items-center justify-between px-4 py-4 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {item.itemName}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.itemTitle}
                        </p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(item.selectedDate).toLocaleDateString('sv-SE')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.selectedHours} timmar
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Selected Gear */}
                    {item.selectedGear.length > 0 && (
                      <div className="mt-2 ml-15">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Vald utrustning:</p>
                        <div className="flex flex-wrap gap-1">
                          {item.selectedGear.map((gear, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded"
                            >
                              {gear.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-right ml-4">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {item.totalPrice.toLocaleString('sv-SE')} kr
                    </div>
                    <button
                      onClick={() => removeItem(item.itemId)}
                      className="text-red-500 hover:text-red-700 text-xs mt-1"
                    >
                      Ta bort
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Panel Footer */}
            <div className="flex items-center justify-between px-4 py-4 bg-gray-50 dark:bg-gray-800">
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  Totalt: {state.totalPrice.toLocaleString('sv-SE')} kr
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {state.items.length} tjänst{state.items.length !== 1 ? 'er' : ''} valda
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={toggleBasket}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Fortsätt handla
                </button>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Slutför bokning
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {state.isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleBasket}
        />
      )}
    </>
  );
};

export default GlobalBasketFooter;
