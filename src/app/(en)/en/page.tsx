import HomePage from "@/components/pages/HomePage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "home");

export default function Page() {
  return (
    <Shell lang="en" page="home" alt={altPath("en", "home")}>
      <HomePage lang="en" />
    </Shell>
  );
}
