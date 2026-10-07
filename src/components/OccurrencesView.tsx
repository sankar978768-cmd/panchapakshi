import React, { useState } from 'react';
import { BirdId, Jama } from '../types';
import { BIRDS, ACTIVITY_DETAILS } from '../data/panchaPakshiData';
import { findBirdAsSubBird } from '../utils/calculator';
import { Star, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface OccurrencesViewProps {
  selectedBird: BirdId;
  customJamas?: Jama[];
}

export const OccurrencesView: React.FC<OccurrencesViewProps> = ({
  selectedBird,
  customJamas,
}) => {
  const { language, t, getBirdName, getActivityName, getActivityStatus } = useLanguage();
  const [filterActivity, setFilterActivity] = useState<string>('all');
  const bird = BIRDS[selectedBird];
  const birdDisplayName = getBirdName(selectedBird);
  const allOccurrences = findBirdAsSubBird(selectedBird, customJamas);

  const filtered = allOccurrences.filter((item) => {
    if (filterActivity === 'all') return true;
    if (filterActivity === 'auspicious') return item.activity === 'Rule' || item.activity === 'Eat';
    if (filterActivity === 'inauspicious') return item.activity === 'Die' || item.activity === 'Sleep';
    return item.activity === filterActivity;
  });

  return (
    <div id="occurrences-view" className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>
              {language === 'ta'
                ? `${birdDisplayName} பட்சியின் அந்தர்தசை நேரங்கள்`
                : `Every Active Sub-Period for ${birdDisplayName}`}
            </span>
            <span className="text-xs font-normal text-slate-400 font-mono">
              ({filtered.length} {t('intervalsFound')})
            </span>
          </h3>
          <p className="text-xs text-slate-400">
            {language === 'ta'
              ? `பகல் மற்றும் இரவு சுழற்சிகளில் ${birdDisplayName} செயல்படும் அனைத்து அந்தர்தசை நேரங்கள்.`
              : `All Anthardasa time slots across both Day and Night cycles where ${birdDisplayName} is the performing bird.`}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <button
            onClick={() => setFilterActivity('all')}
            id="filter-all-btn"
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              filterActivity === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {t('filterAll')}
          </button>
          <button
            onClick={() => setFilterActivity('auspicious')}
            id="filter-auspicious-btn"
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
              filterActivity === 'auspicious'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'bg-slate-800 text-emerald-400 hover:bg-slate-700'
            }`}
          >
            <CheckCircle2 className="w-3 h-3" />
            <span>{t('filterAuspicious')}</span>
          </button>
          <button
            onClick={() => setFilterActivity('inauspicious')}
            id="filter-inauspicious-btn"
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
              filterActivity === 'inauspicious'
                ? 'bg-rose-500 text-white font-bold'
                : 'bg-slate-800 text-rose-400 hover:bg-slate-700'
            }`}
          >
            <ShieldAlert className="w-3 h-3" />
            <span>{t('filterInauspicious')}</span>
          </button>
        </div>
      </div>

      {/* Grid of Occurrences */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((item, idx) => {
          const act = ACTIVITY_DETAILS[item.activity];
          const isDay = item.jamaNumber <= 5;
          const parentBirdName = getBirdName(item.parentBird);

          return (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl p-3 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-300">
                    {language === 'ta' ? `சாமம் ${item.jamaNumber}` : `Jama ${item.jamaNumber}`} ({isDay ? t('dayPeriod') : t('nightPeriod')})
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {language === 'ta' ? `${parentBirdName} வரிசை` : `Under ${parentBirdName} Column`}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded border ${act.bgLight}`}
                    >
                      {getActivityName(item.activity)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 text-xs font-mono font-bold">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{item.star}★</span>
                  </div>
                </div>

                <div className="text-sm font-mono font-bold text-white mb-1">
                  {item.startTime} – {item.endTime}
                </div>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>
                  {language === 'ta' ? 'கால அளவு:' : 'Duration:'} {item.durationMinutes} {t('minutesSuffix')}
                </span>
                <span className="text-slate-300 font-medium">
                  {getActivityStatus(item.activity)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
