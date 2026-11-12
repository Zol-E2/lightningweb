import ContactPage from "@/components/pages/ContactPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("hu", "contact");

export default function Page() {
  return (
    <Shell lang="hu" page="contact" alt={altPath("hu", "contact")}>
      <ContactPage lang="hu" />
    </Shell>
  );
}
