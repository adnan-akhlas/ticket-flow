import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProgressSection from "./components/ProgressSection";
import ProgressTaskStatus from "./components/ProgressTaskStatus";
import ResolvedTaskStatus from "./components/ResolvedTaskStatus";
import TicketSkeleton from "./components/TicketSkeleton";
import TicketSection from "./components/TicketsSection";

export default function App() {
  const [progressCount, setProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

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
            <Suspense fallback={<TicketSkeleton />}>
              <TicketSection />
            </Suspense>
          </div>
          <div className="col-span-4">
            <h2 className="my-2 text-2xl font-bold">Task Status</h2>
            <div className="space-y-4 mt-4">
              <ProgressTaskStatus />
              <ResolvedTaskStatus />
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
