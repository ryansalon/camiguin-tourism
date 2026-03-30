"use client";

import { destinations } from "@/data/destinations";
import Hero from "@/components/home/Hero";
import QuickStats from "@/components/home/QuickStats";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import MapSection from "@/components/home/MapSection";
import NewsletterCTA from "@/components/home/NewsletterCTA";

export default function Home() {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Stats/Quick Features */}
      <QuickStats />

      {/* Featured Destinations */}
      <FeaturedDestinations destinations={featuredDestinations} />

      {/* Interactive Map Section */}
      <MapSection destinations={destinations} />

      {/* Newsletter / CTA */}
      <NewsletterCTA />
    </main>
  );
}
