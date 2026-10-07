import React from 'react';
import { BirdId, Jama, PakshaType } from '../types';
import { BIRDS } from '../data/panchaPakshiData';
import { calculateBirdSummary } from '../utils/calculator';
import { getBirdFriends, getBirdEnemies, getBirdNeutrals } from '../data/birdRelationships';
import { Award, AlertOctagon, Clock, Copy, Check, Heart, ShieldAlert, Scale, Sparkles, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BirdSummaryCardProps {
  selectedBird: BirdId;
  customJamas?: Jama[];
  isCustomSchedule?: boolean;
  sunriseTime?: string;
  sunsetTime?: string;
  paksha?: PakshaType;
  onOpenChart?: () => void;
}

export const BirdSummaryCard: React.FC<BirdSummaryCardProps> = ({
  selectedBird,
  customJamas,
  isCustomSchedule,
  sunriseTime = '06:00',
  sunsetTime = '18:00',
  paksha = 'valarpirai',
  onOpenChart,
}) => {
  const {
    language,
    t,
    getBirdName,
    getActivityName,
    getPakshaName,
    getRelationshipName,
  } = useLanguage();

  const bird = BIRDS[selectedBird];
  const birdDisplayName = getBirdName(selectedBird);
  const summary = calculateBirdSummary(selectedBird, customJamas);
  const [copied, setCopied] = React.useState(false);

  const friends = getBirdFriends(selectedBird, paksha);
  const enemies = getBirdEnemies(selectedBird, paksha);
  const neutrals = getBirdNeutrals(selectedBird, paksha);

  const formatHoursMins = (minutes: number) => {
    const hrs = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    if (hrs === 0) return `${mins}m`;
    if (mins === 0) return `${hrs}h`;
    return `${hrs}h ${mins}m`;
  };

  const handleCopySummary = () => {
    const text = language === 'ta'
      ? `பஞ்ச பட்சி கணக்கீடு - ${birdDisplayName}:
• ${getActivityName('Rule')}: ${formatHoursMins(summary.ruleMinutes)}
• ${getActivityName('Eat')}: ${formatHoursMins(summary.eatMinutes)}
• ${getActivityName('Walk')}: ${formatHoursMins(summary.walkMinutes)}
• ${getActivityName('Sleep')}: ${formatHoursMins(summary.sleepMinutes)}
• ${getActivityName('Die')}: ${formatHoursMins(summary.dieMinutes)}
அதிஷ்ட நேரம்: ${summary.bestTimeSlots.map((s) => `சாமம் ${s.jama} (${s.time})`).join(', ')}
தவிர்க்க வேண்டிய நேரம்: ${summary.cautionTimeSlots.map((s) => `சாமம் ${s.jama} (${s.time})`).join(', ')}`
      : `Pancha Pakshi Calculation for ${bird.name}:
• Rule: ${formatHoursMins(summary.ruleMinutes)}
• Eat: ${formatHoursMins(summary.eatMinutes)}
• Walk: ${formatHoursMins(summary.walkMinutes)}
• Sleep: ${formatHoursMins(summary.sleepMinutes)}
• Die: ${formatHoursMins(summary.dieMinutes)}
Golden Hours: ${summary.bestTimeSlots.map((s) => `Jama ${s.jama} (${s.time})`).join(', ')}
Caution Hours: ${summary.cautionTimeSlots.map((s) => `Jama ${s.jama} (${s.time})`).join(', ')}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="bird-summary-card"
      className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-4"
    >
      {/* Header with Bird Profile */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3.5">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-xl border shadow-inner"
            style={{
              backgroundColor: `${bird.color}20`,
              borderColor: `${bird.color}60`,
              color: bird.color,
            }}
          >
            {birdDisplayName[0]}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white tracking-wide">
                {birdDisplayName} {t('analysisTitle')}
              </h3>
              <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                {getPakshaName(paksha)}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 max-w-xl">
              {language === 'ta'
                ? `ஐந்து தொழில்களில் பட்சியின் நேரப் பங்கீடு மற்றும் அதிஷ்ட/எச்சரிக்கை சாமங்கள்.`
                : bird.description}
            </p>
            {isCustomSchedule ? (
              <div className="flex items-center gap-1.5 text-[11px] text-amber-300 font-mono mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>
                  {language === 'ta'
                    ? `தனிப்பயன் நேர அட்டவணை: சூரியோதயம் ${sunriseTime} • அஸ்தமனம் ${sunsetTime}`
                    : `Calculated with Custom Schedule: Sunrise ${sunriseTime} • Sunset ${sunsetTime}`}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono mt-1">
                <span>
                  {language === 'ta'
                    ? 'நிலையான சாஸ்திர அட்டவணை: சூரியோதயம் 06:00 • அஸ்தமனம் 18:00'
                    : 'Standard Shastra Schedule: Sunrise 06:00 • Sunset 18:00'}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          {onOpenChart && (
            <button
              onClick={onOpenChart}
              id="open-chart-from-summary-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 text-xs font-bold cursor-pointer transition-colors"
            >
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('tabChart')}</span>
            </button>
          )}

          <button
            onClick={handleCopySummary}
            id="copy-bird-summary-btn"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium cursor-pointer transition-colors"
            title={language === 'ta' ? 'கணக்கீட்டு சுருக்கத்தை நகலெடு' : 'Copy calculation summary'}
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            <span>{copied ? t('copiedText') : t('shareSummary')}</span>
          </button>
        </div>
      </div>

      {/* Activity Breakdown Progress Bars */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            {language === 'ta'
              ? `${birdDisplayName} சுழற்சியில் 24 மணி நேரப் பங்கீடு`
              : `24-Hour Time Distribution in ${birdDisplayName}'s Cycle`}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {summary.totalMinutes} {t('minutesSuffix')} (10 {t('dayJamasTitle').includes('சாமங்கள்') ? 'சாமங்கள்' : 'Jamas'})
          </span>
        </div>

        {/* Multi-segment distribution bar */}
        <div className="w-full h-3 rounded-full bg-slate-800 flex overflow-hidden p-0.5 gap-0.5 mb-2.5">
          <div
            className="bg-emerald-500 rounded-l-full"
            style={{ width: `${(summary.ruleMinutes / summary.totalMinutes) * 100}%` }}
            title={`${getActivityName('Rule')}: ${formatHoursMins(summary.ruleMinutes)}`}
          />
          <div
            className="bg-teal-400"
            style={{ width: `${(summary.eatMinutes / summary.totalMinutes) * 100}%` }}
            title={`${getActivityName('Eat')}: ${formatHoursMins(summary.eatMinutes)}`}
          />
          <div
            className="bg-amber-400"
            style={{ width: `${(summary.walkMinutes / summary.totalMinutes) * 100}%` }}
            title={`${getActivityName('Walk')}: ${formatHoursMins(summary.walkMinutes)}`}
          />
          <div
            className="bg-indigo-400"
            style={{ width: `${(summary.sleepMinutes / summary.totalMinutes) * 100}%` }}
            title={`${getActivityName('Sleep')}: ${formatHoursMins(summary.sleepMinutes)}`}
          />
          <div
            className="bg-rose-500 rounded-r-full"
            style={{ width: `${(summary.dieMinutes / summary.totalMinutes) * 100}%` }}
            title={`${getActivityName('Die')}: ${formatHoursMins(summary.dieMinutes)}`}
          />
        </div>

        {/* Legend grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{getActivityName('Rule')}</span>
            </div>
            <div className="text-sm font-bold text-white mt-1">
              {formatHoursMins(summary.ruleMinutes)}
            </div>
            <div className="text-[10px] text-slate-400">
              {Math.round((summary.ruleMinutes / summary.totalMinutes) * 100)}%
            </div>
          </div>

          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-teal-400 font-semibold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>{getActivityName('Eat')}</span>
            </div>
            <div className="text-sm font-bold text-white mt-1">
              {formatHoursMins(summary.eatMinutes)}
            </div>
            <div className="text-[10px] text-slate-400">
              {Math.round((summary.eatMinutes / summary.totalMinutes) * 100)}%
            </div>
          </div>

          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{getActivityName('Walk')}</span>
            </div>
            <div className="text-sm font-bold text-white mt-1">
              {formatHoursMins(summary.walkMinutes)}
            </div>
            <div className="text-[10px] text-slate-400">
              {Math.round((summary.walkMinutes / summary.totalMinutes) * 100)}%
            </div>
          </div>

          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-indigo-400 font-semibold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>{getActivityName('Sleep')}</span>
            </div>
            <div className="text-sm font-bold text-white mt-1">
              {formatHoursMins(summary.sleepMinutes)}
            </div>
            <div className="text-[10px] text-slate-400">
              {Math.round((summary.sleepMinutes / summary.totalMinutes) * 100)}%
            </div>
          </div>

          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80 col-span-2 sm:col-span-1">
            <div className="flex items-center gap-1.5 text-rose-400 font-semibold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>{getActivityName('Die')}</span>
            </div>
            <div className="text-sm font-bold text-white mt-1">
              {formatHoursMins(summary.dieMinutes)}
            </div>
            <div className="text-[10px] text-slate-400">
              {Math.round((summary.dieMinutes / summary.totalMinutes) * 100)}%
            </div>
          </div>
        </div>
      </div>

      {/* Best Hours & Caution Windows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        {/* Golden Time Slots */}
        <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>{t('primeAuspicious')}</span>
          </div>
          <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
            {summary.bestTimeSlots.slice(0, 4).map((slot, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-xs bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-emerald-500/20"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-emerald-300 font-bold">{slot.time}</span>
                  <span className="text-[11px] text-slate-400">
                    ({language === 'ta' ? `சாமம் ${slot.jama}` : `Jama ${slot.jama}`})
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px]">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                    {getActivityName(slot.activity)}
                  </span>
                  <span className="text-amber-400 font-mono">⭐ {slot.star}★</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Caution Time Slots */}
        <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 mb-2">
            <AlertOctagon className="w-4 h-4 text-rose-400" />
            <span>{t('cautionaryWindows')}</span>
          </div>
          <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
            {summary.cautionTimeSlots.slice(0, 4).map((slot, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-xs bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-rose-500/20"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-rose-300 font-bold">{slot.time}</span>
                  <span className="text-[11px] text-slate-400">
                    ({language === 'ta' ? `சாமம் ${slot.jama}` : `Jama ${slot.jama}`})
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px]">
                  <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold">
                    {getActivityName(slot.activity)}
                  </span>
                  <span className="text-slate-400 font-mono">{slot.star}★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bird Friendship & Enemy Compatibility Section */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'ta'
                ? `${birdDisplayName} பட்சியின் உறவுகள் (${getPakshaName(paksha)})`
                : `${birdDisplayName}'s Alliances in ${getPakshaName(paksha)}`}
            </h4>
          </div>
          <span className="text-[11px] text-slate-400">
            {language === 'ta'
              ? 'அந்தர்தசை மற்றும் கிரக சேர்க்கைக்கான வழிகாட்டி'
              : 'Governs planetary affinity & sub-period outcomes'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {/* Friends */}
          <div className="bg-emerald-950/20 border border-emerald-500/25 rounded-lg p-2.5 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                <span>{t('friendsHeader')}</span>
              </span>
              <span className="font-mono text-[10px] bg-emerald-500/20 px-1.5 py-0.2 rounded text-emerald-300">
                {friends.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {friends.map((fId) => {
                const f = BIRDS[fId];
                return (
                  <span
                    key={fId}
                    className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-900 border border-emerald-500/30 text-xs font-semibold text-white"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: f.color }}
                    />
                    <span>{getBirdName(fId)}</span>
                  </span>
                );
              })}
            </div>
            <p className="text-[10px] text-slate-400 pt-1 leading-snug">
              {language === 'ta'
                ? 'நட்பு பட்சிகளின் அந்தர்தசைகளில் சுப பலன்கள் அதிகரிக்கும்.'
                : 'Sub-periods of friend birds yield heightened auspiciousness and power.'}
            </p>
          </div>

          {/* Enemies */}
          <div className="bg-rose-950/20 border border-rose-500/25 rounded-lg p-2.5 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold text-rose-400">
              <span className="flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                <span>{t('enemiesHeader')}</span>
              </span>
              <span className="font-mono text-[10px] bg-rose-500/20 px-1.5 py-0.2 rounded text-rose-300">
                {enemies.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {enemies.map((eId) => {
                const e = BIRDS[eId];
                return (
                  <span
                    key={eId}
                    className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-900 border border-rose-500/30 text-xs font-semibold text-white"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: e.color }}
                    />
                    <span>{getBirdName(eId)}</span>
                  </span>
                );
              })}
            </div>
            <p className="text-[10px] text-slate-400 pt-1 leading-snug">
              {language === 'ta'
                ? 'பகை பட்சிகளின் அந்தர்தசைகளில் விழிப்புணர்வு அவசியம்.'
                : 'Sub-periods of enemy birds demand caution; avoid conflicting ventures.'}
            </p>
          </div>

          {/* Neutrals */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-2.5 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
              <span className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-slate-400" />
                <span>{t('neutralsHeader')}</span>
              </span>
              <span className="font-mono text-[10px] bg-slate-800 px-1.5 py-0.2 rounded text-slate-400">
                {neutrals.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {neutrals.length === 0 ? (
                <span className="text-slate-500 text-[11px] italic">
                  {language === 'ta' ? 'இல்லை' : 'No neutral birds'}
                </span>
              ) : (
                neutrals.map((nId) => {
                  const n = BIRDS[nId];
                  return (
                    <span
                      key={nId}
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-950 border border-slate-800 text-xs text-slate-300"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: n.color }}
                      />
                      <span>{getBirdName(nId)}</span>
                    </span>
                  );
                })
              )}
            </div>
            <p className="text-[10px] text-slate-400 pt-1 leading-snug">
              {language === 'ta'
                ? 'சம பட்சிகளில் நடுத்தரமான பலன்கள் கிடைக்கும்.'
                : 'Delivers balanced and moderate results across daily tasks.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
