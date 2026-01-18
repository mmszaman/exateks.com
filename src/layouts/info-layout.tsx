import { InfoHeader } from '@/components/layout/headers/info-header';
import { InfoFooter } from '@/components/layout/footers/info-footer';

interface InfoLayoutProps {
  children: React.ReactNode;
}

export function InfoLayout({ children }: InfoLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <InfoHeader />
      <main className="flex-1">{children}</main>
      <InfoFooter />
    </div>
  );
}
