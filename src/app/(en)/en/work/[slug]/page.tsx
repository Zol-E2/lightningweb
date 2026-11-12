import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/pages/CaseStudyPage";
import Shell from "@/components/Shell";
import { altPath } from "@/lib/i18n";
import { REF_KEYS, isRefKey } from "@/lib/refs";
import { caseMetadata } from "@/lib/seo";

/** Only the projects listed in refs.ts exist; anything else is a 404. */
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return REF_KEYS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return isRefKey(slug) ? caseMetadata("en", slug) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!isRefKey(slug)) notFound();
  return (
    <Shell lang="en" page="work" alt={altPath("en", "work", slug)}>
      <CaseStudyPage lang="en" k={slug} />
    </Shell>
  );
}
