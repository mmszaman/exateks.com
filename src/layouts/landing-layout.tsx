import { FooterMain } from '@/components/footer';
import { LandingHeader } from '@/components/header/landing-header';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">{children}</main>
      <FooterMain />
    </div>
  );
}
