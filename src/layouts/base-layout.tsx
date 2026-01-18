import { BaseHeader } from '@/components/layout/headers/base-header';
import { BaseFooter } from '@/components/layout/footers/base-footer';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <BaseHeader />
      <main className="flex-1">{children}</main>
      <BaseFooter />
    </div>
  );
}
