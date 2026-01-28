import { FooterLite } from '@/components/footer';
import { InfoHeader } from '@/components/header/info-header';

interface InfoLayoutProps {
  children: React.ReactNode;
}

export function InfoLayout({ children }: InfoLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <InfoHeader />
      <main className="flex-1">{children}</main>
      <FooterLite />
    </div>
  );
}
