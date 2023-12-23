import { useState, useCallback, Dispatch, SetStateAction } from 'react';

type UseLocalStorage<T> = [T | undefined, Dispatch<SetStateAction<T>>];

function useLocalStorage<T>(key: string, initialValue?: T): UseLocalStorage<T> {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T | undefined>(initial);

  const setStoredValue = useCallback(
    (newValue: SetStateAction<T>) => {
      const updatedValue =
        typeof newValue === 'function'
          ? (newValue as (prevValue: T | undefined) => T)(value)
          : newValue;

      localStorage.setItem(key, JSON.stringify(updatedValue));

      // Update state
      setValue(updatedValue);
    },
    [key, value],
  );

  return [value, setStoredValue];
}

export default useLocalStorage;
