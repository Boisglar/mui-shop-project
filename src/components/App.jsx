import { useState } from 'react';
import GoodsList from './GoodsList';
import Search from './Search';

import { goods } from '../data/goods';
import Header from './Header';
import { Container } from '@mui/system';
import Basket from './Basket';
import Snack from './Snack';

const App = () => {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(goods);
  const [isCardOpen, setCardOpen] = useState(false);
  const [isSnackeOpen, setSnackeOpen] = useState(false);

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch('');
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) => good.name.toLowerCase().includes(e.target.value.toLowerCase())),
    );
  };

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        }),
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }
    setSnackeOpen(true);
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  return (
    <>
      <Header handeleCard={() => setCardOpen(true)} orderLen={order.length} />
      <Container sx={{ mt: '1rem' }}>
        <div className="App">
          <div className="container">
            <Search value={search} onChange={handleChange} />
            <GoodsList goods={products} setOrder={addToOrder} />
          </div>
        </div>
      </Container>
      <Basket
        cardOpen={isCardOpen}
        closeCard={() => setCardOpen(false)}
        order={order}
        removeFromOrder={removeFromOrder}
      />
      <Snack isOpen={isSnackeOpen} handleClose={() => setSnackeOpen(false)} />
    </>
  );
};

export default App;
