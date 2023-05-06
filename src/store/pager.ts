import {
  writable,
  Writable,
} from 'svelte/store';

import {
  PagerData,
  PagerStore,
} from '../types.js';

export const getPager = function () : PagerStore {
  const store : Writable<PagerData> = writable({
    firstPage: null,
    previousPage: null,
    nextPage: null,
    lastPage: null,
  })

  return store
}