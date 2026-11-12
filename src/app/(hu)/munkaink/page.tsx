import WorkPage from "@/components/pages/WorkPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("hu", "work");

export default function Page() {
  return (
    <Shell lang="hu" page="work" alt={altPath("hu", "work")}>
      <WorkPage lang="hu" />
    </Shell>
  );
}
