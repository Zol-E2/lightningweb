import AboutPage from "@/components/pages/AboutPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("hu", "about");

export default function Page() {
  return (
    <Shell lang="hu" page="about" alt={altPath("hu", "about")}>
      <AboutPage lang="hu" />
    </Shell>
  );
}
