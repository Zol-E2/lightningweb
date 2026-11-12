import PrivacyPage from "@/components/pages/PrivacyPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("hu", "privacy");

export default function Page() {
  return (
    <Shell lang="hu" page="privacy" alt={altPath("hu", "privacy")}>
      <PrivacyPage lang="hu" />
    </Shell>
  );
}
