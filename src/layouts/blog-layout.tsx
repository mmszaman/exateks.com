import { FooterLite } from '@/components/footer';
import { BlogHeader } from '@/components/header/blog-header';

interface BlogLayoutProps {
  children: React.ReactNode;
}

export function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <BlogHeader />
      <main className="flex-1">{children}</main>
      <FooterLite />
    </div>
  );
}
