import PrivacyPage from "@/components/pages/PrivacyPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "privacy");

export default function Page() {
  return (
    <Shell lang="en" page="privacy" alt={altPath("en", "privacy")}>
      <PrivacyPage lang="en" />
    </Shell>
  );
}
