import AboutPage from "@/components/pages/AboutPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "about");

export default function Page() {
  return (
    <Shell lang="en" page="about" alt={altPath("en", "about")}>
      <AboutPage lang="en" />
    </Shell>
  );
}
