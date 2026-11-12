import WorkPage from "@/components/pages/WorkPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "work");

export default function Page() {
  return (
    <Shell lang="en" page="work" alt={altPath("en", "work")}>
      <WorkPage lang="en" />
    </Shell>
  );
}
