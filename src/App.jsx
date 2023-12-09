import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const App = () => (
  <main className="tlo">
    <section>
      <Navbar />
    </section>
    <section>
      <Hero />
    </section>
  </main>
);

export default App;
