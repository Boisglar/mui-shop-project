import { ShoppingBasket } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

function Header({ handeleCard, orderLen }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Mui Shop
        </Typography>
        <IconButton color="inherit" onClick={handeleCard}>
          <Badge color="secondary" badgeContent={orderLen}>
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
