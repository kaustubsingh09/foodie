import { useState } from "react";
import Login from "./components/Login";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      {isLogin ? (
        <main>
          <Meals />
        </main>
      ) : (
        <Login currentEvent={setIsLogin} />
      )}
    </CartProvider>
  );
}

export default App;