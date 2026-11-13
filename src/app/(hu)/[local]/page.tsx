import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalLandingPage from "@/components/pages/LocalLandingPage";
import Shell from "@/components/Shell";
import { LOCAL, localBySlug } from "@/lib/local";

/** Only the city pages listed in local.ts exist; anything else is a 404. */
export const dynamicParams = false;

type Props = { params: Promise<{ local: string }> };

export function generateStaticParams() {
  return LOCAL.map((l) => ({ local: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = localBySlug((await params).local);
  if (!p) return {};
  const path = `/${p.slug}`;
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: path },
    openGraph: {
      title: p.title,
      description: p.description,
      url: path,
      locale: "hu_HU",
      type: "website",
      siteName: "LightningWeb",
      images: [
        { url: "/og.png", width: 1200, height: 630, alt: "LightningWeb" },
      ],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function Page({ params }: Props) {
  const p = localBySlug((await params).local);
  if (!p) notFound();
  return (
    <Shell lang="hu" page="services" alt="/en">
      <LocalLandingPage p={p} />
    </Shell>
  );
}
