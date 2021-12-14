import "./App.css";
import {
  Navbar,
  Home,
  Footer,
  Projects,
  Services,
  Testimonial,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Testimonial />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
