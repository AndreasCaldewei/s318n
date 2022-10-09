import { v4 } from 'uuid';

export function createUUID(): string {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
  return v4();
}
