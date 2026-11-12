import BlogPage from "@/components/pages/BlogPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("hu", "blog");

export default function Page() {
  return (
    <Shell lang="hu" page="blog" alt={altPath("hu", "blog")}>
      <BlogPage lang="hu" />
    </Shell>
  );
}
