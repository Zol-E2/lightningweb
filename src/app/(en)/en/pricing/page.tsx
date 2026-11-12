import PricingPage from "@/components/pages/PricingPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "pricing");

export default function Page() {
  return (
    <Shell lang="en" page="pricing" alt={altPath("en", "pricing")}>
      <PricingPage lang="en" />
    </Shell>
  );
}
