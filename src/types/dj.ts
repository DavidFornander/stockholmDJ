// Shared types for DJ and gear selection functionality

export interface GearOption {
  name: string;
  cost: number;
}

export interface CompatibleGear {
  speakers: string[];
  djTables: string[];
  players: string[];
  microphones: string[];
  additionalItems: string[];
}

export interface DJ {
  id: string;
  name: string;
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  specialties: string[];
  eventTypes: string[]; // Event types the DJ specializes in
  experience: string;
  imageUrl: string;
  images?: string[]; // Multiple images for carousel
  available: boolean;
  active: boolean; // Controls whether DJ is displayed on the site
  duration: string;
  equipment: string;
  // Enhanced properties for interactive cards
  hourlyRate: number; // Base hourly rate for dynamic pricing
  availability: {
    [date: string]: boolean; // Date -> available (true/false)
  };
  compatibleGear: CompatibleGear;
  model3D?: string; // Optional 3D model file path
}

// Gear options from booking flow - centralized here for reuse
export const gearOptions = {
  speakers: [
    { name: "Ljud finns i lokalen", cost: 0 },
    { name: "2x 15' toppar", cost: 1000 },
    { name: "2x 15' toppar + 1x 18' sub", cost: 2000 },
    { name: "2x 15' toppar + 2x 18' sub", cost: 4000 },
  ],
  djTables: [
    { name: "Finns i lokalen", cost: 0 },
    { name: "Humpter B3 (Svart)", cost: 2000 },
    { name: "Humpter B3 (Vit)", cost: 2500 },
  ],
  players: [
    { name: "Digital", cost: 0 },
    { name: "Vinyl", cost: 2000 },
  ],
  microphones: [
    { name: "Nej, tack", cost: 0 },
    { name: "Trådad", cost: 500 },
    { name: "Trådlös", cost: 1000 },
    { name: "Trådlös (2st)", cost: 1500 },
  ],
  additionalItems: {
    uplighting: [
      { name: "Nej, tack", cost: 0 },
      { name: "Ja, tack", cost: 1000 },
    ],
    strobe: [
      { name: "Nej, tack", cost: 0 },
      { name: "Ja, tack", cost: 500 },
    ],
    ljuspelare: [
      { name: "Nej, tack", cost: 0 },
      { name: "Ja, tack", cost: 1500 },
    ],
    rokmaskin: [
      { name: "Nej, tack", cost: 0 },
      { name: "Ja, tack", cost: 800 },
    ],
    projektor: [
      { name: "Nej, tack", cost: 0 },
      { name: "Ja, tack", cost: 1200 },
    ],
    photoBooth: [
      { name: "Nej, tack", cost: 0 },
      { name: "Ja, tack", cost: 2000 },
    ],
    saxofonist: [
      { name: "Nej, tack", cost: 0 },
      { name: "Ja, tack", cost: 3000 },
    ],
  },
};
