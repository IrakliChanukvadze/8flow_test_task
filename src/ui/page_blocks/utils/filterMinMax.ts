type TArgs = {
  dataSet: number[];
  min: number | null;
  max: number | null;
};
export const filterMinMax = ({ dataSet, min, max }: TArgs) => {
  if (min === null && max === null) {
    return dataSet;
  }

  const applyMinMax = (item: number): number => {
    let result = item;

    if (min !== null) {
      result = Math.max(min, result);
    }

    if (max !== null) {
      result = Math.min(max, result);
    }

    return result;
  };

  return dataSet.map(applyMinMax);
};
