import { Suspense, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProgressSection from "./components/ProgressSection";
import TicketSection from "./components/TicketsSection";
import TicketSkeleton from "./components/TicketSkeleton";

export default function App() {
  const [progressCount, setProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="grow space-y-6 max-w-7xl py-12 mx-auto w-full px-6">
        {/* Progress Card Section */}
        <ProgressSection
          progressCount={progressCount}
          resolvedCount={resolvedCount}
        />
        {/* Tickets Card Section */}
        <Suspense fallback={<TicketSkeleton />}>
          <TicketSection />
        </Suspense>
      </section>
      <Footer />
    </main>
  );
}
