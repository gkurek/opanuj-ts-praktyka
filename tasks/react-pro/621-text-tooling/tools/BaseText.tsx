export interface TextProps {
  text: string;
}

export function BaseText({ text }: TextProps) {
  return <span data-testid={text ? text.toLowerCase().replace(/\s+/g, '-') : 'text'}>{text}</span>;
}
