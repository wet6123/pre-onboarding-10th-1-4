export const setItem = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getItem = (key: string): string | null => localStorage.getItem(key);

export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};