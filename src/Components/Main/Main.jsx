import { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../Context/AppContext';

import Modal from '../Modal/Modal';
import ProductInfo from '../ProductInfo/ProductInfo';
import Carousel from '../Carousel/Carousel';
import Loading from '../Loading/Loading';

import data from '../../../data/db.json';

import './Main.css';

const Main = () => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState('');
  const { isLoading, setIsLoading } = useContext(AppContext);

  // Dati per netify deploy
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setProduct(data.products[0]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Simulazione fetching dati
  // useEffect(() => {
  //   (async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await fetch(`http://localhost:8000/products`);
  //       if (!res.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await res.json();

  //       // Simulare chiamata API

  //       setTimeout(() => {
  //         // In questo caso ho preso il primo prodotto restituito dalla chiamata, in un progetto reale la chiamata dovrebbe restiuire solo 1 prodotto
  //         setProduct(data[0]);
  //         setIsLoading(false);
  //       }, 1000);
  //     } catch (error) {
  //       setError(error.message);
  //       setProduct({});
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);

  if (error)
    return (
      <div className="container error__container">
        <h1>{error}</h1>
        <p>
          Make sure to run{' '}
          <code>"npx json-server --watch data/db.json --port 8000"</code>.
        </p>
      </div>
    );

  return (
    <main className="main__container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* Modal si mostra solo dopo i 1300px e prende il posto di Carousel */}
          <Modal product={product} />
          <Carousel product={product} />
          <ProductInfo product={product} />
        </>
      )}
    </main>
  );
};
export default Main;
