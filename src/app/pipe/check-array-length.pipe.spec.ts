import { CheckArrayLengthPipe } from './check-array-length.pipe';

describe('CheckArrayLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new CheckArrayLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
