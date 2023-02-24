import "./App.css";
import { CardContainer } from "./components/CardContainer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroContainer } from "./components/HeroContainer";
import { Subscribe } from "./components/Subscribe";
import { TopDeal } from "./components/TopDeal";

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
