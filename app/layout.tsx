import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Variant SEO Optimizer – Auto-optimize product variant SEO",
  description: "Automatically generate SEO-optimized titles, descriptions, and URLs for your Shopify product variants. Bulk update metadata and sync inventory changes via webhooks."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c684bf69-d891-4778-984a-c6a5f9f13192"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
