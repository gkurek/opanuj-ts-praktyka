// function rainbowText(text: string) {
//   return text.split('').map((char: string, index: number) => {
//     const hue = Math.floor((index / text.length) * 360);
//     return (
//       <span key={index} style={{ color: `hsl(${hue}, 80%, 50%)` }}>
//         {char}
//       </span>
//     );
//   });
// }

import React from 'react';
import { TextProps } from './BaseText';

export default function withRainbow(_WrappedComponent: React.ComponentType<TextProps>) {
  return function RainbowComponent(props: TextProps) {
    const text = props.text;
    const rainbowChars = text.split('').map((char: string, index: number) => {
      const hue = Math.floor((index / text.length) * 360);
      return (
        <span key={index} style={{ color: `hsl(${hue}, 80%, 50%)` }}>
          {char}
        </span>
      );
    });

    return <span data-testid="rainbow">{rainbowChars}</span>;
  };
}
