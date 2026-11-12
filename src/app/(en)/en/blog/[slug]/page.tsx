import { notFound } from "next/navigation";
import PostPage from "@/components/pages/PostPage";
import Shell from "@/components/Shell";
import { POSTS, postBySlug, postHref } from "@/lib/posts";
import { postMetadata } from "@/lib/seo";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.en.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = postBySlug("en", slug);
  return p ? postMetadata("en", p) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = postBySlug("en", slug);
  if (!p) notFound();
  return (
    <Shell lang="en" page="blog" alt={postHref("hu", p)}>
      <PostPage lang="en" post={p} />
    </Shell>
  );
}
