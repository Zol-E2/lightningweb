import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LightningWeb",
    short_name: "LightningWeb",
    description: "Weboldal, webshop, Google és hirdetés kisvállalkozásoknak.",
    start_url: "/",
    display: "browser",
    background_color: "#07080a",
    theme_color: "#07080a",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
