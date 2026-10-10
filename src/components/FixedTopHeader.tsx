import React, { useMemo } from 'react';
import { BirdId, PakshaType, DayOfWeek, DayCalculationMeta } from '../types';
import { PANCHA_PAKSHI_DAYS } from '../data/panchaPakshiRegistry';
import { BirdLogo } from './BirdLogo';
import { BIRD_EMOJIS } from './BirdSelectModal';
import { useLanguage } from '../context/LanguageContext';
import {
  Calendar,
  MapPin,
  Sun,
  Moon,
  Search,
  CalendarDays,
} from 'lucide-react';

export interface FixedTopHeaderProps {
  selectedPaksha: PakshaType;
  selectedDay: DayOfWeek;
  selectedCalendarDate: Date | null;
  locationName: string;
  dayMeta?: DayCalculationMeta;
  runningJamaNumber?: number;
  onScrollToSection: (sectionId: string) => void;
  selectedBird: BirdId;
  onSelectBird: (bird: BirdId) => void;
  onOpenCalendarModal: () => void;
  onOpenLookupModal: () => void;
  theme: string;
  setTheme: (theme: 'bright' | 'dark') => void;
  language: string;
  setLanguage: (lang: 'en' | 'ta') => void;
}

const DAY_ABBR_MAP: Record<DayOfWeek, string> = {
  sunday: 'Sun',
  monday: 'Mon',
  tuesday: 'Tue',
  wednesday: 'Wed',
  thursday: 'Thu',
  friday: 'Fri',
  saturday: 'Sat',
};

export const FixedTopHeader: React.FC<FixedTopHeaderProps> = ({
  selectedPaksha,
  selectedDay,
  selectedCalendarDate,
  locationName,
  dayMeta,
  runningJamaNumber = 1,
  onScrollToSection,
  selectedBird,
  onSelectBird,
  onOpenCalendarModal,
  onOpenLookupModal,
  theme,
  setTheme,
  language,
  setLanguage,
}) => {
  const { t, getBirdName } = useLanguage();

  // 1. Day & Date Calculation State (e.g. "Thei Wed Oct 7" or "Valar Wed Oct 7")
  const dateBadgeString = useMemo(() => {
    const pakshaPrefix = selectedPaksha === 'valarpirai' ? 'Valar' : 'Thei';
    const weekdayShort = DAY_ABBR_MAP[selectedDay] || 'Wed';
    const d = selectedCalendarDate || new Date();
    const monthShort = d.toLocaleString('en-US', { month: 'short' });
    const dayNum = d.getDate();
    return `${pakshaPrefix} ${weekdayShort} ${monthShort} ${dayNum}`;
  }, [selectedPaksha, selectedDay, selectedCalendarDate]);

  // 2. Active calculation reference location (e.g. Chennai by default, or user's custom chosen city)
  const displayLocation = useMemo(() => {
    const trimmed = (locationName || '').trim();
    return trimmed.length > 0 ? trimmed : 'Chennai';
  }, [locationName]);

  // 3. Both Day Ruler (Jama 1 to 5) and Night Ruler (Jama 6 to 10), and Dying bird during selected day window
  const { dayRulingBird, nightRulingBird, dayDyingBird, activeDayMeta } = useMemo(() => {
    const activeDayId = `${selectedPaksha}_${selectedDay}`;
    const meta = dayMeta || PANCHA_PAKSHI_DAYS.find((d) => d.id === activeDayId);
    const dayRBird: BirdId = (meta?.dayRulingBird as BirdId) || 'vulture';
    const nightRBird: BirdId = (meta?.nightRulingBird as BirdId) || 'crow';
    const dBird: BirdId = (meta?.dayDyingBird as BirdId) || (meta?.dyingBird as BirdId) || 'owl';
    return {
      dayRulingBird: dayRBird,
      nightRulingBird: nightRBird,
      dayDyingBird: dBird,
      activeDayMeta: meta,
    };
  }, [selectedPaksha, selectedDay, dayMeta]);

  // Real-time active ruler indication based on running Jama (Jama 1-5 is Day, Jama 6-10 is Night)
  const isCurrentTimeDayJama = runningJamaNumber >= 1 && runningJamaNumber <= 5;

  return (
    <header
      id="fixed-top-header"
      className="fixed top-0 left-0 right-0 z-40 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors duration-150 pt-[calc(8px+env(safe-area-inset-top,0px))] pb-2"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-2">
        {/* ROW 1: [Golden logo] [Date chip] [Location chip] [Calendar] [Search] [Sun] [Language] */}
        <div className="flex items-center gap-1 w-full flex-nowrap overflow-hidden">
          {/* Golden logo with selected bird icon */}
          <button
            type="button"
            onClick={() => onScrollToSection('section-bird')}
            className="w-[30px] h-[30px] rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm border border-slate-200 dark:border-slate-800 shrink-0 cursor-pointer select-none active:scale-95 transition-all shadow-2xs"
            title={`${getBirdName(selectedBird)} (Pancha Pakshi)`}
            aria-label={`${getBirdName(selectedBird)} logo`}
          >
            {BIRD_EMOJIS[selectedBird] || '🦅'}
          </button>

          {/* Date chip */}
          <button
            type="button"
            id="header-date-day-badge"
            onClick={() => onScrollToSection('section-date-day')}
            className="h-[30px] px-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/30 text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-2xs whitespace-nowrap shrink-0"
            title={language === 'ta' ? 'தேதி மற்றும் நாள் பகுதிக்கு செல்ல கிளிக் செய்யவும்' : 'Click to scroll to Date & Day section'}
          >
            <Calendar className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0 hidden min-[400px]:block date-chip-calendar-icon" />
            <span>{dateBadgeString}</span>
          </button>

          {/* Location chip */}
          <button
            type="button"
            id="header-location-badge"
            onClick={() => onScrollToSection('section-location')}
            className="h-[30px] px-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-900 dark:text-sky-300 border border-sky-500/30 text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer active:scale-95 shadow-2xs flex-1 min-w-0 min-[370px]:min-w-[72px] overflow-hidden"
            title={language === 'ta' ? `கணக்கீட்டு இடம்: ${displayLocation} (செல்ல கிளிக் செய்யவும்)` : `Reference Location: ${displayLocation} (Click to scroll)`}
          >
            <MapPin className="w-3 h-3 text-sky-600 dark:text-sky-400 shrink-0" />
            <span className="truncate">{displayLocation}</span>
          </button>

          {/* Calendar button */}
          <button
            type="button"
            onClick={onOpenCalendarModal}
            className="w-[30px] h-[30px] rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer shrink-0 flex items-center justify-center active:scale-95 shadow-2xs"
            title={t('realtimeCalendar')}
            aria-label={t('realtimeCalendar')}
          >
            <CalendarDays className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          </button>

          {/* Search button */}
          <button
            type="button"
            onClick={onOpenLookupModal}
            className="w-[30px] h-[30px] rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer shrink-0 flex items-center justify-center active:scale-95 shadow-2xs"
            title={t('timeLookup')}
            aria-label={t('timeLookup')}
          >
            <Search className="w-3.5 h-3.5 text-amber-500" />
          </button>

          {/* Sun / Theme button */}
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'bright' : 'dark')}
            className="w-[30px] h-[30px] rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer shrink-0 flex items-center justify-center active:scale-95 shadow-2xs"
            title={language === 'ta' ? 'தோற்றம் மாற்றவும்' : 'Toggle Theme'}
            aria-label={language === 'ta' ? 'தோற்றம் மாற்றவும்' : 'Toggle Theme'}
          >
            <Sun className="w-3.5 h-3.5 dark:hidden text-amber-500" />
            <Moon className="w-3.5 h-3.5 hidden dark:block text-amber-400" />
          </button>

          {/* Language button */}
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
            className="w-[30px] h-[30px] rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-[14px] font-semibold flex items-center justify-center text-center transition-colors cursor-pointer shrink-0 active:scale-95 shadow-2xs"
            title={language === 'en' ? 'Switch to Tamil' : 'Switch to English'}
            aria-label={language === 'en' ? 'Switch to Tamil' : 'Switch to English'}
          >
            {language === 'en' ? 'த' : 'EN'}
          </button>
        </div>

        {/* ROW 2: The bird strip full width. Everything else that was in the header goes here or below it. */}
        <div
          id="header-ruling-dying-status"
          className="w-full h-[30px] sm:h-[32px] rounded-lg bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-2 py-0 text-[11px] shadow-2xs flex items-center justify-between sm:justify-start sm:gap-4 overflow-hidden"
          title={`${activeDayMeta?.name || selectedDay}: Day Ruler (Jama 1-5), Night Ruler (Jama 6-10)`}
        >
          {/* Day Ruler (Jama 1 to 5) */}
          <button
            type="button"
            onClick={() => onScrollToSection('section-bird')}
            className={`flex items-center gap-1 px-1 py-0.5 rounded-md cursor-pointer hover:opacity-85 text-left transition-all ${
              isCurrentTimeDayJama ? 'bg-amber-500/15 border border-amber-500/40' : ''
            }`}
            title={`👑 ${language === 'ta' ? 'பகல் அரசு பட்சி (சாமம் 1-5)' : 'Day Ruler (Jama 1 to 5)'}: ${getBirdName(dayRulingBird)}`}
          >
            <span className="text-xs select-none" aria-hidden="true">👑</span>
            <span className="text-[10px] text-amber-800 dark:text-amber-300 font-bold whitespace-nowrap hidden sm:inline">
              {language === 'ta' ? 'பகல் (1-5):' : 'Day (1-5):'}
            </span>
            <BirdLogo birdId={dayRulingBird} size="xs" showName />
          </button>

          <span className="text-slate-300 dark:text-slate-700 select-none text-[10px]">•</span>

          {/* Night Ruler (Jama 6 to 10) */}
          <button
            type="button"
            onClick={() => onScrollToSection('section-bird')}
            className={`flex items-center gap-1 px-1 py-0.5 rounded-md cursor-pointer hover:opacity-85 text-left transition-all ${
              !isCurrentTimeDayJama ? 'bg-purple-500/15 border border-purple-500/40' : ''
            }`}
            title={`👑 ${language === 'ta' ? 'இரவு அரசு பட்சி (சாமம் 6-10)' : 'Night Ruler (Jama 6 to 10)'}: ${getBirdName(nightRulingBird)}`}
          >
            <span className="text-xs select-none" aria-hidden="true">👑</span>
            <span className="text-[10px] text-purple-800 dark:text-purple-300 font-bold whitespace-nowrap hidden sm:inline">
              {language === 'ta' ? 'இரவு (6-10):' : 'Night (6-10):'}
            </span>
            <BirdLogo birdId={nightRulingBird} size="xs" showName />
          </button>

          <span className="text-slate-300 dark:text-slate-700 select-none text-[10px]">•</span>

          {/* Dying Bird (💀 with <BirdLogo>) */}
          <button
            type="button"
            onClick={() => onScrollToSection('section-bird')}
            className="flex items-center gap-1 px-1 py-0.5 rounded-md cursor-pointer hover:opacity-85 text-left transition-opacity"
            title={`💀 ${language === 'ta' ? 'சாவு பட்சி' : 'Dying Bird'}: ${getBirdName(dayDyingBird)}`}
          >
            <span className="text-xs select-none" aria-hidden="true">💀</span>
            <span className="text-[10px] text-rose-800 dark:text-rose-300 font-bold whitespace-nowrap hidden sm:inline">
              {language === 'ta' ? 'சாவு:' : 'Die:'}
            </span>
            <BirdLogo birdId={dayDyingBird} size="xs" showName />
          </button>

          {/* Quick Bird select dropdown on large viewports */}
          <div className="hidden xl:block ml-auto">
            <select
              value={selectedBird}
              onChange={(e) => onSelectBird(e.target.value as BirdId)}
              aria-label="Quick Select Bird"
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-800 dark:text-slate-200 rounded-md px-2 py-0.5 focus:outline-none focus:ring-1 focus:ring-amber-500 shadow-2xs cursor-pointer"
            >
              <option value="vulture">🦅 {getBirdName('vulture')}</option>
              <option value="owl">🦉 {getBirdName('owl')}</option>
              <option value="crow">🐦 {getBirdName('crow')}</option>
              <option value="cock">🐓 {getBirdName('cock')}</option>
              <option value="peacock">🦚 {getBirdName('peacock')}</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
