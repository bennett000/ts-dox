export function noop() {}

export function partial<T extends (...args: any[]) => any>(
  fn: Function, ...bound: any[]
): T {
  function partialApplication(...args: any[]) {
    return fn(...bound, ...args);
  }

  return <T>partialApplication;
}
