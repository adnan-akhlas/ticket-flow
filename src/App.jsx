import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="grow"></section>
      <Footer />
    </main>
  );
}
