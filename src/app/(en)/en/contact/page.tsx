import ContactPage from "@/components/pages/ContactPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "contact");

export default function Page() {
  return (
    <Shell lang="en" page="contact" alt={altPath("en", "contact")}>
      <ContactPage lang="en" />
    </Shell>
  );
}
