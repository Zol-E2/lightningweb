import TermsPage from "@/components/pages/TermsPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "terms");

export default function Page() {
  return (
    <Shell lang="en" page="terms" alt={altPath("en", "terms")}>
      <TermsPage lang="en" />
    </Shell>
  );
}
