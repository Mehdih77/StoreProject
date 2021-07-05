import React from 'react'
import Search from '../Search/Search'
import './navbar.css'
import {Link} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Navbar() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


    return (
        <>
<Link to='/' className="navbar-brand" href="#"><img src="/image/logo.png" alt="logo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-2">
            <li className="nav-item">
              <a className="nav-link" href="#">سوپر مارکت </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                تخفیف ها و پیشنهادات
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">لوازم الکترونیکی</a>
                <a className="dropdown-item" href="#"> لوازم خانگی</a>
                <a className="dropdown-item" href="#"> لوازم آرایشی</a>
                <a className="dropdown-item" href="#"> پوشاک</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">دیگر محصولات</a>
              </div>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link" href="#">تماس با ما</Link>
            </li>
            <li className="nav-item">
              <Link to='/aboutus' className="nav-link " href="#" tabindex="-1">درباره ما</Link>
            </li>
          </ul>
          <Search />
          <div className="navbar-left d-flex ml-auto">
        <div className="store-shop"><i class="fas fa-shopping-cart"><span className="qty-shop">3</span></i></div>
        <div className="line-user-shop">|</div>
        <div className="user-icon"><i class="fas fa-user" onClick={handleClickOpen}></i>
        <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" className='customized-dialog-title-user-login' onClose={handleClose}>
              <p>ورود به سایت</p>
        </DialogTitle>
        <DialogContent dividers>
        <form>
  <div className="form-group">
    <label for="exampleInputEmail1">نام کاربری</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">رمز ورود</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">مرا به خاطر بسپار</label>
  </div>
  <button type="submit" className="btn btn-login w-100">ورود</button>
</form>
        </DialogContent>
      </Dialog>
    </div>
        </div>
        </div>
        </nav>
        
        </>
    )
}
