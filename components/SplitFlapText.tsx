
import React from 'react';
import { SplitFlapChar } from './SplitFlapChar';

interface SplitFlapTextProps {
  text: string;
  length?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const SplitFlapText: React.FC<SplitFlapTextProps> = ({ text, length = 10, size = 'md' }) => {
  const paddedText = text.padEnd(length, ' ').slice(0, length);

  return (
    <div className="flex gap-[2px] p-1 overflow-visible">
      {paddedText.split('').map((char, i) => (
        <SplitFlapChar key={i} char={char} size={size} />
      ))}
    </div>
  );
};
