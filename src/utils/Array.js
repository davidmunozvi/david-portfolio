export const range = (start, end) => 
  (typeof start && typeof end) === 'number' ? Array(end - start + 1).fill().map((_, index) => start + index) : [];