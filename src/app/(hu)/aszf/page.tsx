import TermsPage from "@/components/pages/TermsPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("hu", "terms");

export default function Page() {
  return (
    <Shell lang="hu" page="terms" alt={altPath("hu", "terms")}>
      <TermsPage lang="hu" />
    </Shell>
  );
}
