import type { Metadata } from "next";
import RootDoc from "@/components/RootDoc";
import NotFoundContent from "@/components/NotFoundContent";

export const metadata: Metadata = {
  title: "404 | LightningWeb",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <RootDoc lang="hu">
      <NotFoundContent />
    </RootDoc>
  );
}
