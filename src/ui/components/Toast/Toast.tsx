import { ToastInput } from '@/providers/toast/types';

export function Toast({ type, body }: ToastInput) {
  return (
    <div
      className={`absolute bottom-5 right-5 bg-red-300 animate-fadeIn px-6 py-4 rounded-lg text-white  ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
      {body}
    </div>
  );
}
