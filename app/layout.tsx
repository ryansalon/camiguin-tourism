"use client";

import "bootstrap/dist/css/bootstrap.min.css"; 
import "./globals.css";
import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <main className="flex-grow-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="main-content"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <AppFooter />
      </body>
    </html>
  );
}
