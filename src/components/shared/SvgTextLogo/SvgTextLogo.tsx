import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number | string;
  letterSpacing?: number;
  fill?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 48,
  fontFamily = 'Arial, sans-serif',
  fontWeight = 'bold',
  letterSpacing = 0,
  fill = '#000000',
}) => {
  const textLength = text.length;
  const charWidth = fontSize * 0.6;
  const totalWidth = textLength * charWidth + (textLength - 1) * letterSpacing + 40;
  const totalHeight = fontSize + 40;
  const xStart = 20;
  const yStart = fontSize + 20;

  return (
    <svg
      width={totalWidth}
      height={totalHeight}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x={xStart}
        y={yStart}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        fill={fill}
        letterSpacing={letterSpacing}
        dominantBaseline="hanging"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
