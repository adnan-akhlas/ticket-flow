import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProgressCard from "./components/ProgressCard";

export default function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="grow space-y-6 max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-2 gap-6 mt-6 w-full">
          <ProgressCard
            title="In Progress"
            count={inProgressCount}
            from="from-primary"
            to="to-secondary"
          />
          <ProgressCard
            title="Resolved"
            count={resolvedCount}
            from="from-accent"
            to="to-accent-secondary"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
