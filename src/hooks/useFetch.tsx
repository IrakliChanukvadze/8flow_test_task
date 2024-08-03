import { useState, useEffect, useCallback } from 'react';

interface FetchResult<T> {
  data: T | null;
  isLoading: boolean;
  errorMessage: string | null;
  refetch: () => void;
  isError: boolean;
}

export function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const result: T = await response.json();
      setData(result);
      setErrorMessage(null);
      setIsError(false);
    } catch (err: any) {
      setErrorMessage(err.message);
      setIsError(true);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setIsError, setData, url, setErrorMessage]);

  const refetch = () => {
    void fetchData();
  };
  useEffect(() => {
    void fetchData();
  }, [url, fetchData]);

  return { data, isLoading, errorMessage, isError, refetch };
}
