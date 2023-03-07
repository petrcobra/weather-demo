export interface Idle {
    type: 'idle';
  }
  
  export interface Pending {
    type: 'pending';
  }
  
  export interface Done<T> {
    type: 'done';
    data: T;
  }
  
  export interface Fail {
    type: 'fail';
    error: unknown;
  }
  
  export type State<T> = Idle | Pending | Done<T> | Fail;
  export type Signal = AbortController['signal'];
  export type PromiseFunction<T> = (signal: Signal) => Promise<T>;