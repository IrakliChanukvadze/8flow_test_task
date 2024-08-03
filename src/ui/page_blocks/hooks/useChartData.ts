import { useFetch } from 'src/hooks';
import { useChartFilter } from './useChartFilters';
import { TChartResponse } from '../type';
import { useEffect, useState } from 'react';
import { useToastContext } from '@/providers/toast';
import { filterMinMax } from '../utils/filterMinMax';

export const useChartData = () => {
  const { dataRange, reset, setMax, setMin } = useChartFilter();
  const { data, isError, errorMessage, refetch } = useFetch<TChartResponse>('/api/data/chart-data');

  const [filteredData, setFilteredData] = useState(data?.data);

  const { renderToast } = useToastContext();

  useEffect(() => {
    if (data) {
      setFilteredData({
        datasetOne: filterMinMax({
          dataSet: data?.data?.datasetOne,
          min: dataRange.min,
          max: dataRange.max,
        }),
        datasetTwo: filterMinMax({
          dataSet: data?.data?.datasetTwo,
          min: dataRange.min,
          max: dataRange.max,
        }),
      });
    } else {
      setFilteredData(undefined);
    }
  }, [data, dataRange.min, dataRange.max]);

  useEffect(() => {
    if (isError) {
      renderToast('error', errorMessage || 'Error Text');
    }
  }, [isError, renderToast, errorMessage]);

  useEffect(() => {
    if (data) {
      renderToast('success', data?.message || 'Data has been successfully loaded');
    }
  }, [data, renderToast]);
  return { dataRange, reset, setMax, setMin, data: filteredData, refetch };
};
