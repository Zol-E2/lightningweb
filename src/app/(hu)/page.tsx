import HomePage from "@/components/pages/HomePage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("hu", "home");

export default function Page() {
  return (
    <Shell lang="hu" page="home" alt={altPath("hu", "home")}>
      <HomePage lang="hu" />
    </Shell>
  );
}
