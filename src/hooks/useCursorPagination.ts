// src/hooks/useCursorPagination.ts
import { useState } from 'react';

export const useCursorPagination = () => {
  const [cursor, setCursor] = useState<string>('');
  const [history, setHistory] = useState<string[]>(['']);

  const goToNext = (nextCursor: string | null | undefined) => {
    if (!nextCursor) return;

    setHistory((prev) => [...prev, nextCursor]);
    setCursor(nextCursor);
  };

  const goToPrev = () => {
    setHistory((prev) => {
      if (prev.length <= 1) return prev;

      const newHistory = prev.slice(0, -1);
      const prevCursor = newHistory[newHistory.length - 1];

      setCursor(prevCursor);
      return newHistory;
    });
  };

  const reset = () => {
    setCursor('');
    setHistory(['']);
  };

  const canGoPrev = history.length > 1;

  return {
    cursor,
    setCursor,
    goToNext,
    goToPrev,
    reset,
    canGoPrev,
  };
};
