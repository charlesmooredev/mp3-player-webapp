import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export function MusicPlayerCard({ children }: Props) {
  return (
    <div className="fixed bottom-0 left-1/2 w-screen -translate-x-1/2 space-y-2 rounded-t-lg border-t border-white/50 bg-white/25 p-2 backdrop-blur">
      {children}
    </div>
  );
}
