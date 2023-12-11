import { Hero, Navbar, Overview, Portfolio } from "./sections";

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
      <section>
        <Portfolio />
      </section>
    </div>
  </main>
);

export default App;
