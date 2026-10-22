import { createContext, useContext } from 'react';

export type ToastType = 'success' | 'error';

export interface ToastCtx {
  addToast: (msg: string, type?: ToastType) => void;
}

export const ToastContext = createContext<ToastCtx>({ addToast: () => {} });

export const useToast = () => useContext(ToastContext);
