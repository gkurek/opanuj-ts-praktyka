export interface SurveyContextType {
  handleSubmit: (e: React.FormEvent) => void;
  values: Record<string, any>;
  setValues: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

export interface SurveyProps {
  onSubmit?: (values: Record<string, any>) => void;
  children: React.ReactNode;
}

// Add these type declarations to support compound components
declare module './Survey' {
  interface Survey {
    ShortAnswer: React.FC<{
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
    }>;
    LongAnswer: React.FC<{
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
    }>;
    Choice: React.FC<{
      name: string;
      label: string;
      options: Array<{ value: string; label: string }>;
      required?: boolean;
    }>;
    Submit: React.FC<{ children: React.ReactNode }>;
  }
}
