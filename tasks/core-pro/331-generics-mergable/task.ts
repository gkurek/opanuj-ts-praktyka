//version 1
type MergeableObject1<T> = T extends object ? (T extends Function ? never : T) : never;

// version 2
type ExcludedTypes = Function | string | number | boolean | symbol | bigint;
type MergeableObject<T> = NonNullable<Exclude<T, ExcludedTypes>>;

export function mergeObjects<T, U>(obj1: MergeableObject<T>, obj2: MergeableObject<U>): T & U {
  const merged = { ...obj1, ...obj2 };
  console.log(merged);
  return merged;
}
