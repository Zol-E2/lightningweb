import ServicesPage from "@/components/pages/ServicesPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("hu", "services");

export default function Page() {
  return (
    <Shell lang="hu" page="services" alt={altPath("hu", "services")}>
      <ServicesPage lang="hu" />
    </Shell>
  );
}
