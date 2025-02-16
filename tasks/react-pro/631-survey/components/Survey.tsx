import React, { useState } from 'react';
import { SurveyContext } from './context';
import { SurveyProps } from './types';
import { ShortAnswer } from './ShortAnswer';
import { LongAnswer } from './LongAnswer';
import { Choice } from './Choice';
import { Submit } from './Submit';
  
const Survey = ({ children, onSubmit }: SurveyProps) => {
  const [values, setValues] = useState<Record<string, any>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSubmit) {
      throw new Error('onSubmit callback is required!');
    }
    onSubmit(values);
  };

  return (
    <SurveyContext.Provider value={{ handleSubmit, values, setValues }}>
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        {children}
      </form>
    </SurveyContext.Provider>
  );
};

Survey.ShortAnswer = ShortAnswer;
Survey.LongAnswer = LongAnswer;
Survey.Choice = Choice;
Survey.Submit = Submit;

export default Survey;
