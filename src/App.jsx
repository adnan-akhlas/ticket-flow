import { use, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProgressCard from "./components/ProgressCard";
import TicketCard from "./components/TicketCard";
import { getData } from "./loader/data";

const dataPromise = getData("/data.json");

export default function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const tickets = use(dataPromise);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="grow space-y-6 max-w-7xl py-12 mx-auto full px-6">
        {/* Progress Card Section */}
        <div className="grid grid-cols-2 gap-6 w-full">
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
        {/* Tickets Card Section */}
        <div>
          <div>
            <h2 className="my-2 text-2xl font-semibold">Customer Tickets</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
