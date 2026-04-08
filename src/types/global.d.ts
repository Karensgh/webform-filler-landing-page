declare global {
  interface Window {
    rdt?: (...args: unknown[]) => void;
  }
}

export {};