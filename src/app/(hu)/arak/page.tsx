import PricingPage from "@/components/pages/PricingPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("hu", "pricing");

export default function Page() {
  return (
    <Shell lang="hu" page="pricing" alt={altPath("hu", "pricing")}>
      <PricingPage lang="hu" />
    </Shell>
  );
}
