import { notFound } from "next/navigation";
import PostPage from "@/components/pages/PostPage";
import Shell from "@/components/Shell";
import { POSTS, postBySlug, postHref } from "@/lib/posts";
import { postMetadata } from "@/lib/seo";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.hu.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = postBySlug("hu", slug);
  return p ? postMetadata("hu", p) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = postBySlug("hu", slug);
  if (!p) notFound();
  return (
    <Shell lang="hu" page="blog" alt={postHref("en", p)}>
      <PostPage lang="hu" post={p} />
    </Shell>
  );
}
