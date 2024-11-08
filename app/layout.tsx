import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { EdgeStoreProvider } from "@/lib/edgestore";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "Obsidian — Elevate Productivity: Tasks, Projects, Notes.",
  description:
    "Obsidian is a freemium productivity and note-taking web application. It offers organizational tools including task management, project tracking, to-do lists, and bookmarking.",
  openGraph: {
    url: "/",
    title: "Obsidian — Elevate Productivity: Tasks, Projects, Notes.",
    description:
      "Obsidian is a freemium productivity and note-taking web application. It offers organizational tools including task management, project tracking, to-do lists, and bookmarking.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obsidian — Elevate Productivity: Tasks, Projects, Notes.",
    description:
      "Obsidian is a freemium productivity and note-taking web application. It offers organizational tools including task management, project tracking, to-do lists, and bookmarking.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="motion-theme"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
