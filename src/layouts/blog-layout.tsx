import { BlogHeader } from '@/components/layout/headers/blog-header';
import { BlogFooter } from '@/components/layout/footers/blog-footer';

interface BlogLayoutProps {
  children: React.ReactNode;
}

export function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <BlogHeader />
      <main className="flex-1">{children}</main>
      <BlogFooter />
    </div>
  );
}
