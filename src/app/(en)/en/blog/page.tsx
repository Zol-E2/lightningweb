import BlogPage from "@/components/pages/BlogPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "blog");

export default function Page() {
  return (
    <Shell lang="en" page="blog" alt={altPath("en", "blog")}>
      <BlogPage lang="en" />
    </Shell>
  );
}
