import { Alert, Snackbar } from '@mui/material';
import React from 'react';

function Snack({ isOpen, handleClose }) {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={1000}>
      <Alert severity="success">Товар дабвлен в корзину!</Alert>
    </Snackbar>
  );
}

export default Snack;
