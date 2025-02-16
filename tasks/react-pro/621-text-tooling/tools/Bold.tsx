import React from 'react';
import { TextProps } from './BaseText';

export default function withBold(WrappedComponent: React.ComponentType<TextProps>) {
  return function BoldComponent(props: TextProps) {
    return (
      <span className="font-bold" data-testid="bold">
        <WrappedComponent {...props} />
      </span>
    );
  };
}
