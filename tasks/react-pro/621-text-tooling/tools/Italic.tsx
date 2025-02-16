import React from 'react';
import { TextProps } from './BaseText';

export default function withItalics(WrappedComponent: React.ComponentType<TextProps>) {
  return function ItalicComponent(props: TextProps) {
    return (
      <span className="italic" data-testid="italic">
        <WrappedComponent {...props} />
      </span>
    );
  };
}
