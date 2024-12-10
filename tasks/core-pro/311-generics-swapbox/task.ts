function swapNumbers(a: number, b: number): [number, number] {
  return [b, a];
}

function swapStrings(a: string, b: string): [string, string] {
  return [b, a];
}

export function swapBox<T>(a: T, b: T): [T, T] {
  return [b, a];
}

const [n1, n2] = swapNumbers(10, 20);
const [s1, s2] = swapStrings('hello', 'world');
const [x, y] = swapBox(false, true);

interface Person {
  name: string;
  age: number;
  gender: 'male' | 'female';
}

function getPropertyPerson(obj: Person, key: keyof Person) {
  return obj[key];
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
