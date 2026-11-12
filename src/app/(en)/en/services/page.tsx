import ServicesPage from "@/components/pages/ServicesPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "services");

export default function Page() {
  return (
    <Shell lang="en" page="services" alt={altPath("en", "services")}>
      <ServicesPage lang="en" />
    </Shell>
  );
}
