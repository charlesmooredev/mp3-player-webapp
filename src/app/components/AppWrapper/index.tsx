import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export function AppWrapper({ children }: Props) {
  return (
    <div className="flex h-screen w-screen justify-center overflow-hidden bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      <div className="flex w-full flex-col items-center space-y-1 px-2 lg:w-[1280px] lg:px-0">{children}</div>
    </div>
  );
}
