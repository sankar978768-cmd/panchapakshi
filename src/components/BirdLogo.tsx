import React from 'react';
import { BirdId } from '../types';
import { BIRDS } from '../data/panchaPakshiData';
import { useLanguage } from '../context/LanguageContext';

export interface BirdLogoProps {
  birdId: BirdId;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showName?: boolean;
  className?: string;
  onClick?: () => void;
}

const BIRD_EMOJIS: Record<BirdId, string> = {
  vulture: '🦅',
  owl: '🦉',
  crow: '🐦',
  cock: '🐓',
  peacock: '🦚',
};

export const BirdLogo: React.FC<BirdLogoProps> = ({
  birdId,
  size = 'sm',
  showName = false,
  className = '',
  onClick,
}) => {
  const { getBirdName } = useLanguage();
  const birdInfo = BIRDS[birdId] || BIRDS.vulture;
  const displayName = getBirdName(birdId);
  const emoji = BIRD_EMOJIS[birdId] || '🐦';

  const sizeClasses = {
    xs: {
      box: 'w-5 h-5 text-xs',
      text: 'text-[11px]',
      badge: 'px-1.5 py-0.5 gap-1',
    },
    sm: {
      box: 'w-6 h-6 text-sm',
      text: 'text-xs',
      badge: 'px-2 py-0.5 gap-1.5',
    },
    md: {
      box: 'w-8 h-8 text-base',
      text: 'text-sm',
      badge: 'px-2.5 py-1 gap-2',
    },
    lg: {
      box: 'w-10 h-10 text-lg',
      text: 'text-base',
      badge: 'px-3 py-1.5 gap-2.5',
    },
  }[size];

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      id={`bird-logo-${birdId}`}
      className={`inline-flex items-center rounded-lg font-medium transition-all select-none ${
        onClick ? 'cursor-pointer hover:opacity-90 active:scale-95' : ''
      } ${sizeClasses.badge} ${className}`}
      style={{
        backgroundColor: `${birdInfo.color}15`,
        borderColor: `${birdInfo.color}40`,
        borderWidth: '1px',
      }}
      title={displayName}
    >
      <span
        className={`flex items-center justify-center shrink-0 rounded-md font-bold leading-none ${sizeClasses.box}`}
        style={{
          color: birdInfo.color,
        }}
        aria-hidden="true"
      >
        {emoji}
      </span>
      {showName && (
        <span
          className={`font-bold tracking-tight truncate ${sizeClasses.text}`}
          style={{ color: birdInfo.color }}
        >
          {displayName}
        </span>
      )}
    </div>
  );
};
