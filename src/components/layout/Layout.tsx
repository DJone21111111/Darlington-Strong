import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col w-[1920px] max-w-full mx-auto bg-background">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
