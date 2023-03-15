import { ShoppingBasket } from '@mui/icons-material';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import BasketItem from './BasketItem';

function Basket({ order = [], removeFromOrder, closeCard = Function.prototype, cardOpen }) {
  return (
    <Drawer anchor="right" open={cardOpen} onClose={closeCard}>
      <List sx={{ width: '400px' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>Корзина пуста!</ListItem>
        ) : (
          <>
            {order.map((item) => (
              <BasketItem key={item.name} {...item} removeFromOrder={removeFromOrder} />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 600 }}>
                Общая стоимость:
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}{' '}
                рублей
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
}

export default Basket;
