import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export function AppWrapper({ children }: Props) {
  return (
    <div className="flex min-h-screen w-screen justify-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      <div className="flex h-[calc(100vh-225px)] w-full flex-col items-center overflow-y-auto px-2 py-4 lg:h-[calc(100vh-125px)] lg:w-[1280px] lg:px-0">
        {children}
      </div>
    </div>
  );
}
