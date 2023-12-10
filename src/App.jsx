import { Hero, Navbar, Overview } from "./sections";

const App = () => (
  <main>
    <div className="tlo">
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
    </div>
    <div className="tlo2">
      <section>
        <Overview />
      </section>
    </div>
  </main>
);

export default App;
