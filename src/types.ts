export type Language = 'en' | 'ta';

export type BirdId = 'vulture' | 'owl' | 'crow' | 'cock' | 'peacock';

export type ActivityType = 'Rule' | 'Eat' | 'Walk' | 'Sleep' | 'Die';

export type RelationshipType = 'self' | 'friend' | 'enemy' | 'neutral';

export type PakshaType = 'valarpirai' | 'theipirai';

export type DayOfWeek = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';

export interface DayCalculationMeta {
  id: string; // e.g. 'valarpirai_sunday'
  paksha: PakshaType;
  dayOfWeek: DayOfWeek;
  name: string; // e.g. "Valarpirai Sunday"
  tamilName: string; // e.g. "வளர்பிறை ஞாயிறு"
  isReady: boolean;
  dayRulingBird?: BirdId;
  dayDyingBird?: BirdId;
  nightRulingBird?: BirdId;
  nightDyingBird?: BirdId;
  dyingBird?: BirdId;
  notes?: string;
}

export interface BirdInfo {
  id: BirdId;
  name: string;
  tamilName: string;
  element: string;
  direction: string;
  rulingPlanet: string;
  description: string;
  color: string;
  accentColor: string;
  dayRelation: 'Ruling Bird' | 'Dying Bird' | 'Friend' | 'Enemy' | 'Self';
  nightRelation: 'Ruling Bird' | 'Dying Bird' | 'Friend' | 'Enemy' | 'Self';
}

export interface SubPeriod {
  birdId: BirdId;
  star: number;
  activity: ActivityType;
  startTime: string; // e.g. "6:00 AM"
  durationMinutes: number;
  endTime: string; // e.g. "6:30 AM"
  startMinutesFromMidnight: number;
  endMinutesFromMidnight: number;
}

export interface BirdColumn {
  birdId: BirdId;
  mainActivity: ActivityType;
  subPeriods: SubPeriod[];
}

export interface Jama {
  jamaNumber: number; // 1 to 10
  isDay: boolean; // 1-5 Day, 6-10 Night
  title: string; // e.g. "Valar Pirai Jama 1"
  startTime: string; // "6:00 AM"
  endTime: string; // "8:24 AM"
  startMinutesFromMidnight: number;
  endMinutesFromMidnight: number;
  columns: Record<BirdId, BirdColumn>;
}

export interface ActivityDetail {
  activity: ActivityType;
  tamilName: string;
  weight: number; // 100, 80, 50, 25, 5
  status: 'Supreme' | 'Favorable' | 'Moderate' | 'Inauspicious' | 'Critical';
  color: string;
  bgLight: string;
  description: string;
  recommendation: string;
}
