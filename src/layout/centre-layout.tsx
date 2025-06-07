import { ReactNode } from "react";

export interface CentreLayoutProps {
  children: ReactNode;
}

export default function CentreLayout({ children }: CentreLayoutProps) {
  return (
    <div className="w-full h-full col-span-4 xl:mx-auto flex flex-col items-center">{children}</div>
  );
}
