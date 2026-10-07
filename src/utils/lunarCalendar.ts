import { PakshaType, DayOfWeek } from '../types';

export interface LunarDayInfo {
  date: Date;
  dateString: string; // YYYY-MM-DD
  dayNumber: number; // 1 to 31
  month: number; // 0 to 11
  year: number;
  dayOfWeek: DayOfWeek;
  paksha: PakshaType;
  tithiIndex: number; // 0 to 29
  tithiNumber: number; // 1 to 15
  tithiNameEn: string;
  tithiNameTa: string;
  elongation: number; // 0 to 360
  illuminationPercent: number; // 0 to 100
  moonPhaseNameEn: string;
  moonPhaseNameTa: string;
  moonEmoji: string;
  isToday: boolean;
  isFullMoon: boolean;
  isNewMoon: boolean;
}

const TITHI_NAMES_EN = [
  'Prathama',
  'Dwitiya',
  'Tritiya',
  'Chaturthi',
  'Panchami',
  'Shashti',
  'Saptami',
  'Ashtami',
  'Navami',
  'Dashami',
  'Ekadashi',
  'Dwadashi',
  'Trayodashi',
  'Chaturdashi',
  'Pournami', // 15
  'Prathama',
  'Dwitiya',
  'Tritiya',
  'Chaturthi',
  'Panchami',
  'Shashti',
  'Saptami',
  'Ashtami',
  'Navami',
  'Dashami',
  'Ekadashi',
  'Dwadashi',
  'Trayodashi',
  'Chaturdashi',
  'Amavasya', // 30
];

const TITHI_NAMES_TA = [
  'பிரதமை',
  'துவிதியை',
  'திருதியை',
  'சதுர்த்தி',
  'பஞ்சமி',
  'சஷ்டி',
  'சப்தமி',
  'அஷ்டமி',
  'நவமி',
  'தசமி',
  'ஏகாதசி',
  'துவாதசி',
  'திரயோதசி',
  'சதுர்த்தசி',
  'பௌர்ணமி',
  'பிரதமை',
  'துவிதியை',
  'திருதியை',
  'சதுர்த்தி',
  'பஞ்சமி',
  'சஷ்டி',
  'சப்தமி',
  'அஷ்டமி',
  'நவமி',
  'தசமி',
  'ஏகாதசி',
  'துவாதசி',
  'திரயோதசி',
  'சதுர்த்தசி',
  'அமாவாசை',
];

const DAYS_MAP: DayOfWeek[] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const toRad = (deg: number) => (deg * Math.PI) / 180;

/**
 * Calculates high precision lunar information (Paksha, Tithi, Illumination, Moon phase)
 * for any given date based on astronomical ephemeris equations.
 */
export function getLunarDayInfo(inputDate: Date): LunarDayInfo {
  // Normalize date to local noon or current local time
  const date = new Date(inputDate);
  const now = new Date();
  const isToday =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  const jd = date.getTime() / 86400000 + 2440587.5;
  const d = jd - 2451545.0; // days since J2000.0

  // Sun mean longitude & anomaly
  const L_sun = (280.4665 + 0.98564736 * d) % 360;
  const M_sun = (357.5291 + 0.98560028 * d) % 360;
  const C_sun =
    1.9148 * Math.sin(toRad(M_sun)) + 0.02 * Math.sin(toRad(2 * M_sun));
  const sunTrueLong = (L_sun + C_sun + 360) % 360;

  // Moon mean longitude & anomaly
  const L_moon = (218.3165 + 13.17639648 * d) % 360;
  const M_moon = (134.9634 + 13.06499295 * d) % 360;
  const D_moon = (297.8502 + 12.19074912 * d) % 360; // mean elongation

  // Moon true longitude with leading lunar perturbations
  const moonCorr =
    6.2886 * Math.sin(toRad(M_moon)) +
    1.274 * Math.sin(toRad(2 * D_moon - M_moon)) +
    0.6583 * Math.sin(toRad(2 * D_moon)) +
    0.2136 * Math.sin(toRad(2 * M_moon)) -
    0.1851 * Math.sin(toRad(M_sun)) -
    0.1143 * Math.sin(toRad(2 * (L_moon - sunTrueLong)));

  const moonTrueLong = (L_moon + moonCorr + 360) % 360;

  let elongation = (moonTrueLong - sunTrueLong) % 360;
  if (elongation < 0) elongation += 360;

  // Tithi is 12 degrees of elongation
  let tithiIndex = Math.floor(elongation / 12);
  if (tithiIndex >= 30) tithiIndex = 29;
  if (tithiIndex < 0) tithiIndex = 0;

  const isValarpirai = elongation < 180;
  const paksha: PakshaType = isValarpirai ? 'valarpirai' : 'theipirai';
  const tithiNumber = (tithiIndex % 15) + 1;

  const illuminationPercent = Math.round(
    ((1 - Math.cos(toRad(elongation))) / 2) * 100
  );

  const isFullMoon = tithiIndex === 14;
  const isNewMoon = tithiIndex === 29;

  let moonPhaseNameEn = 'New Moon';
  let moonPhaseNameTa = 'அமாவாசை';
  let moonEmoji = '🌑';

  if (elongation >= 354 || elongation < 6) {
    moonPhaseNameEn = 'New Moon (Amavasya)';
    moonPhaseNameTa = 'அமாவாசை (புதிய நிலவு)';
    moonEmoji = '🌑';
  } else if (elongation >= 6 && elongation < 84) {
    moonPhaseNameEn = 'Waxing Crescent';
    moonPhaseNameTa = 'வளர்பிறை பிறை';
    moonEmoji = '🌒';
  } else if (elongation >= 84 && elongation < 96) {
    moonPhaseNameEn = 'First Quarter (Half)';
    moonPhaseNameTa = 'முதல் காற்பகுதி';
    moonEmoji = '🌓';
  } else if (elongation >= 96 && elongation < 174) {
    moonPhaseNameEn = 'Waxing Gibbous';
    moonPhaseNameTa = 'வளர்பிறை நிலவு';
    moonEmoji = '🌔';
  } else if (elongation >= 174 && elongation < 186) {
    moonPhaseNameEn = 'Full Moon (Pournami)';
    moonPhaseNameTa = 'பௌர்ணமி (முழு நிலவு)';
    moonEmoji = '🌕';
  } else if (elongation >= 186 && elongation < 264) {
    moonPhaseNameEn = 'Waning Gibbous';
    moonPhaseNameTa = 'தேய்பிறை நிலவு';
    moonEmoji = '🌖';
  } else if (elongation >= 264 && elongation < 276) {
    moonPhaseNameEn = 'Last Quarter (Half)';
    moonPhaseNameTa = 'இறுதி காற்பகுதி';
    moonEmoji = '🌗';
  } else {
    moonPhaseNameEn = 'Waning Crescent';
    moonPhaseNameTa = 'தேய்பிறை பிறை';
    moonEmoji = '🌘';
  }

  const dayOfWeek = DAYS_MAP[date.getDay()];
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayNumber = date.getDate();
  const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(
    dayNumber
  ).padStart(2, '0')}`;

  return {
    date,
    dateString,
    dayNumber,
    month,
    year,
    dayOfWeek,
    paksha,
    tithiIndex,
    tithiNumber,
    tithiNameEn: TITHI_NAMES_EN[tithiIndex] || 'Prathama',
    tithiNameTa: TITHI_NAMES_TA[tithiIndex] || 'பிரதமை',
    elongation,
    illuminationPercent,
    moonPhaseNameEn,
    moonPhaseNameTa,
    moonEmoji,
    isToday,
    isFullMoon,
    isNewMoon,
  };
}

export const MONTH_NAMES_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const MONTH_NAMES_TA = [
  'ஜனவரி',
  'பிப்ரவரி',
  'மார்ச்',
  'ஏப்ரல்',
  'மே',
  'ஜூன்',
  'ஜூலை',
  'ஆகஸ்ட்',
  'செப்டம்பர்',
  'அக்டோபர்',
  'நவம்பர்',
  'டிசம்பர்',
];

/**
 * Builds the calendar matrix for a given year & month (including leading and trailing empty/overflow slots)
 */
export function getMonthCalendarMatrix(
  year: number,
  month: number
): (LunarDayInfo | null)[] {
  const firstDayOfMonth = new Date(year, month, 1);
  const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sun, 1 = Mon ...
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const matrix: (LunarDayInfo | null)[] = [];

  // Empty slots before 1st day of month
  for (let i = 0; i < startingDayOfWeek; i++) {
    matrix.push(null);
  }

  // Days of month
  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, month, day, 12, 0, 0);
    matrix.push(getLunarDayInfo(d));
  }

  // Fill remainder of last week to keep uniform 7-column layout
  while (matrix.length % 7 !== 0) {
    matrix.push(null);
  }

  return matrix;
}
