import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Register } from "./components/Register.jsx";
import { Login } from "./components/Login.jsx";
import { Cart } from "./components/Cart.jsx";
import { Pizza } from "./components/Pizza";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/*<Register />*/}
      {/*<Login />*/}
      {/*<Cart />*/}
      {/*<Pizza />*/}
      <Footer />
    </>
  );
}

export default App;
