import "./App.css";
import { CardContainer } from "./Components/CardContainer";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { HeroContainer } from "./Components/HeroContainer";
import { Subscribe } from "./Components/Subscribe";
import { TopDeal } from "./Components/TopDeal";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroContainer />
      <TopDeal topDeal="Our Top deals" />
      <CardContainer />
      <TopDeal topDeal="Best Selling Product" />
      <CardContainer />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
