import { LandingHeader } from '@/components/layout/headers/landing-header';
import { LandingFooter } from '@/components/layout/footers/landing-footer';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">{children}</main>
      <LandingFooter />
    </div>
  );
}
