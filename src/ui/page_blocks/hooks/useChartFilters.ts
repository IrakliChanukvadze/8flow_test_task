import { ChangeEvent, useState } from 'react';

export const useChartFilter = () => {
  const [dataRange, setDataRange] = useState<{ min: number | null; max: number | null }>({ min: null, max: null });
  const reset = () => {
    setDataRange({ min: null, max: null });
  };

  const setMin = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? +e.target.value : null;
    setDataRange(prev => ({ min: value, max: prev.max }));
  };

  const setMax = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? +e.target.value : null;
    setDataRange(prev => ({ max: value, min: prev.min }));
  };

  return { setMax, setMin, dataRange, reset };
};
