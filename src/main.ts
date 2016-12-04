import { partial } from './util';

export function main() {
  const debug = partial(console.log.bind(console), '** DEBUG **');
  debug('testing build');
  return 0;
}
