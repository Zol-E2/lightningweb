import RootDoc from "@/components/RootDoc";
import { baseMetadata } from "@/lib/seo";

export const metadata = baseMetadata;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDoc lang="en">{children}</RootDoc>;
}
