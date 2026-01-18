
import React, { useState, useEffect, useCallback } from 'react';
import { CHAR_LIST } from '../constants';

interface SplitFlapCharProps {
  char: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SplitFlapChar: React.FC<SplitFlapCharProps> = ({ char, size = 'md' }) => {
  const [currentChar, setCurrentChar] = useState(' ');
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const targetChar = char.toUpperCase();

  const getNextChar = useCallback((current: string) => {
    const currentIndex = CHAR_LIST.indexOf(current);
    if (currentIndex === -1) return CHAR_LIST[0];
    return CHAR_LIST[(currentIndex + 1) % CHAR_LIST.length];
  }, []);

  useEffect(() => {
    if (!isHovering && currentChar === targetChar) {
      setIsAnimating(false);
      return;
    }

    const tick = () => {
      setIsAnimating(true);
      setCurrentChar(prev => getNextChar(prev));
    };

    const delay = isHovering ? 20 : 40;
    const timeout = setTimeout(tick, delay);
    
    return () => clearTimeout(timeout);
  }, [currentChar, targetChar, isHovering, getNextChar]);

  const sizeClasses = {
    sm: 'w-8 h-12 text-[28px]',
    md: 'w-8 h-12 md:w-8 md:h-14 text-[28px] md:text-[38px]',
    lg: 'w-12 h-20 md:w-16 md:h-24 text-[52px] md:text-[72px]'
  };

  return (
    <div 
      className={`flap-container ${sizeClasses[size]} relative flex flex-col font-black mono select-none cursor-default group overflow-hidden bg-[#1a1a1a] rounded-[2px] shadow-2xl transition-transform duration-75 ${isAnimating ? 'animate-click' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Top half */}
      <div className="relative h-1/2 w-full overflow-hidden border-b-[0.5px] border-black/80 bg-[#222222]">
        <div className="absolute top-0 left-0 w-full h-[200%] flex items-center justify-center text-[#FA8112] leading-none drop-shadow-[0_0_2px_#FA8112]">
          {currentChar}
        </div>
      </div>
      
      {/* Bottom half */}
      <div className="relative h-1/2 w-full overflow-hidden border-t-[0.5px] border-black/80 bg-[#222222]">
        <div className="absolute bottom-0 left-0 w-full h-[200%] flex items-center justify-center text-[#FA8112] leading-none drop-shadow-[0_0_2px_#FA8112]">
          {currentChar}
        </div>
      </div>

      {/* Center hinge line */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black/95 z-10 shadow-[0_0_5px_black]"></div>
      
      {/* Mechanical Overlay */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_2px_5px_rgba(255,255,255,0.1),inset_0_-2px_10px_rgba(0,0,0,0.9)] opacity-50"></div>
    </div>
  );
};
