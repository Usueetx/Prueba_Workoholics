
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Header />
      <Main />
      <Footer />
      </BrowserRouter>
  );
}

export default App;
