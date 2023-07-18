import "./index.css";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import Pages from './componenets/Pages'
import Fetchapi from "./componenets/Fetchapi";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pages/>
      <Fetchapi/>
    </div>
  );
}

export default App;
