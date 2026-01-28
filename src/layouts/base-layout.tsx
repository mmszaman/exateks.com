import { FooterMain } from '@/components/footer';
import { BaseHeader } from '@/components/header/base-header';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <BaseHeader />
      <main className="flex-1">{children}</main>
      <FooterMain />
    </div>
  );
}
