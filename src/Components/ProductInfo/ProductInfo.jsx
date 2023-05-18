import { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContext';
import CartIcon from '../../images/icon-cart.svg';
import Plus from '../../images/icon-plus.svg';
import Minus from '../../images/icon-minus.svg';

import './ProductInfo.css';

const ProductInfo = ({ product }) => {
  const { company, name, description, price, discount } = product;

  const { cartItems, setCartItems } = useContext(AppContext);

  const [quantity, setQuantity] = useState(0);

  let finalPrice = (price / 100) * discount;

  // Aggiunge prodotto al carrello, se il prodotto è già presente allora modificherà solo la quantità
  function addToCart(product, quantity, finalPrice) {
    const existingIndex = cartItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingIndex] = {
        ...updatedCartItems[existingIndex],
        quantity: updatedCartItems[existingIndex].quantity + quantity,
      };
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prev) => [
        ...prev,
        { product: product, quantity: quantity, price: finalPrice },
      ]);
    }

    setQuantity(0);
  }

  return (
    <section className="product__info__container">
      <h4 className="product__info__company">{company}</h4>
      <h3 className="product__info__name">{name}</h3>
      <p className="product__info__description">{description}</p>

      <div className="container__price">
        {discount ? (
          <>
            <div className="container__price__discounted">
              <span className="discounted__price">
                ${finalPrice?.toFixed(2)}
              </span>
              <span className="discount">{discount}%</span>
            </div>
            <p className="discounted__price__original">${price.toFixed(2)}</p>
          </>
        ) : (
          <p>${price?.toFixed(2)}</p>
        )}
      </div>

      <div className="product__info__buttons__container">
        <div className="container__quantity">
          <button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 0}
            className="quantity__button"
          >
            <img
              src={Minus}
              alt="Minus icon."
            />
          </button>
          <span className="quantity__text">{quantity}</span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="quantity__button"
          >
            <img
              src={Plus}
              alt="Plus icon."
            />
          </button>
        </div>

        <button
          onClick={() => addToCart(product, quantity, finalPrice)}
          disabled={quantity === 0}
          className="add__to__cart__button"
        >
          <img
            src={CartIcon}
            alt="Cart icon."
            className="cart__icon__product__info"
          />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};
export default ProductInfo;
