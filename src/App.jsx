import { useEffect, useMemo, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProgressSection from "./components/ProgressSection";
import ProgressTaskStatus from "./components/ProgressTaskStatus";
import ResolvedTaskStatus from "./components/ResolvedTaskStatus";
import TicketSection from "./components/TicketsSection";
import TicketSkeleton from "./components/TicketSkeleton";

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => {
        toast.error("Error fetching data.");
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const progressCount = useMemo(() => {
    return tickets.filter((t) => t.status === "In Progress").length;
  }, [tickets]);

  const progressTickets = useMemo(() => {
    return tickets.filter((t) => t.status === "In Progress");
  }, [tickets]);

  const resolvedCount = useMemo(() => {
    return tickets.filter((t) => t.status === "Resolved").length;
  }, [tickets]);

  const resolvedTickets = useMemo(() => {
    return tickets.filter((t) => t.status === "Resolved");
  }, [tickets]);

  const handleProgressAction = (id) => {
    const ticket = tickets.find((ticket) => ticket.id === id);
    if (ticket.status === "In Progress") {
      return toast.warn(`Ticket already in progress.`);
    }
    const newTickets = tickets.map((ticket) => {
      if (ticket.id === id) {
        ticket.status = "In Progress";
      }
      return ticket;
    });
    toast.success("Ticket progress has been started.");
    setTickets(newTickets);
  };

  const handleResolvedAction = (id) => {
    const ticket = tickets.find((ticket) => ticket.id === id);
    if (ticket.status === "Resolved") {
      return toast.warn(`Ticket already in Resolved.`);
    }
    const newTickets = tickets.map((ticket) => {
      if (ticket.id === id) {
        ticket.status = "Resolved";
      }
      return ticket;
    });
    toast.success("Ticket resolved sucessfully.");
    setTickets(newTickets);
  };

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="grow space-y-6 container py-12 mx-auto w-full px-6">
        {/* Progress Card Section */}
        <ProgressSection
          progressCount={progressCount}
          resolvedCount={resolvedCount}
        />
        {/* Tickets Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-8">
            <div>
              <h2 className="my-2 text-2xl font-bold">Customer Tickets</h2>
              {!isLoading ? (
                <TicketSection
                  onProgressAction={handleProgressAction}
                  tickets={tickets}
                />
              ) : (
                <TicketSkeleton />
              )}
            </div>
          </div>
          <div className="col-span-4">
            <h2 className="my-2 text-2xl font-bold">Task Status</h2>
            <div className="space-y-4 mt-4">
              <ProgressTaskStatus
                tickets={progressTickets}
                onResolvedAction={handleResolvedAction}
              />
              <ResolvedTaskStatus tickets={resolvedTickets} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </main>
  );
}
