import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ToastType, ToastInput } from './types';
import { Toast } from '@/components/Toast';

interface ToastProps {
  renderToast: (type: ToastType, message: string) => void;
}

const ToastContext = createContext<ToastProps | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toastData, setToastData] = useState<ToastInput | null>();
  const renderToast = useCallback((type: ToastType, message: string) => {
    setToastData({ type, body: message });
    setTimeout(() => {
      setToastData(null);
    }, 3000);
  }, []);

  const values = useMemo(
    () => ({
      renderToast,
    }),
    [renderToast],
  );

  return (
    <ToastContext.Provider value={values}>
      {toastData && <Toast {...toastData} />}
      {children}
    </ToastContext.Provider>
  );
}

export const useToastContext = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }

  return context;
};
