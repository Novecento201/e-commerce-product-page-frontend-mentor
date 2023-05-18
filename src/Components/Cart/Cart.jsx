import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../Context/AppContext';
import CartIcon from '../../images/icon-cart.svg';
import DeleteIcon from '../../images/icon-delete.svg';

import './Cart.css';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems, setCartItems } = useContext(AppContext);

  const cartRef = useRef();

  // Ottiene il totale della quantità dei prodotti nel carrello
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Gestire lo stato del cart se si clicca al di fuori di esso
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [cartRef]);

  // Rimuove prodotto dal carrello in base all'id
  function removeProductFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
  }

  return (
    <>
      <div
        className="cart__container"
        ref={cartRef}
      >
        <button
          className="cart__icon"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {totalQuantity > 0 && (
            <div className="cart__items__number">{totalQuantity}</div>
          )}
          <img
            src={CartIcon}
            alt="Icon of a cart"
            className="svg__icon"
          />
        </button>

        <div className={`cart__content ${isOpen && 'active__cart'}`}>
          <h4>Cart</h4>
          <div className="cart__items">
            {cartItems.length <= 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cartItems.map((prod) => (
                  <div
                    key={prod.product.id}
                    className="prod__card__container"
                  >
                    <img
                      src={prod.product.thumbnail[0]}
                      alt="Product image"
                    />
                    <div className="prod__cart__info">
                      <p>{prod.product.name}</p>
                      <div>
                        ${prod.price?.toFixed(2)} x {prod.quantity}{' '}
                        <span className="total__price__cart">
                          ${(prod.price * prod.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => removeProductFromCart(prod.product.id)}
                      className="delete__button"
                    >
                      <img
                        src={DeleteIcon}
                        alt="Delete icon."
                        className="svg__icon"
                      />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    console.log('You have checked out');
                    setCartItems([]);
                  }}
                  className="checkout__button"
                >
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
