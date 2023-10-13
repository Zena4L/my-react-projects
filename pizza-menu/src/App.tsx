import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
