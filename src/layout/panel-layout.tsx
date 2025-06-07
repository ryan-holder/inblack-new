import { ReactNode } from "react";

interface PanelLayoutProps {
  children: ReactNode;
}

export default function PanelLayout({ children }: PanelLayoutProps) {
  return (
    <div className="w-full max-h-60vh sticky self-start col-span-3 xl:top-44 2xl:top-52">
      {children}
    </div>
  );
}
