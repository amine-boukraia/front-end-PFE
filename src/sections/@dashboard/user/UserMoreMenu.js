import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  DialogTitle,
  DialogContent,
  DialogContentText, DialogActions, Button, Dialog
} from "@mui/material";
// component
import Iconify from '../../../components/Iconify';
import axiosInstance from "../../../axiosInstance";

// ----------------------------------------------------------------------

export default function UserMoreMenu(props) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const approveDoc = async ()=>{
    try {
      await axiosInstance.put(`${process.env.REACT_APP_API_BASE_URL}/admin/documents` ,{docId:props.id})
      handleClose()
      setIsOpen(false)
      props.forceUpdate()
    }catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Approve Document
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to approve the document {props.docTitle} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={approveDoc} autoFocus>
            Approve
          </Button>
        </DialogActions>
      </Dialog>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }} onClick={handleClickOpen}>
          <ListItemIcon>
            <Iconify icon="akar-icons:chat-approve" width={24} height={24} />
          </ListItemIcon>
          <ListItemText  primary="Approve" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>


      </Menu>
    </>
  );
}
