import { memo } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const DialogBox = memo(function DialogBox({
  open,
  onCloseHandler,
  onChangeHandler,
  dialogContentText,
  dialogContentTitle,
}: any) {
  return (
    <Dialog
      open={open}
      // onClose={handleDialogClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        {dialogContentTitle ? dialogContentTitle : 'هشدار'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {dialogContentText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onCloseHandler(false)}>خیر</Button>
        <Button variant='contained' onClick={onChangeHandler} autoFocus>
          بله
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default DialogBox;
