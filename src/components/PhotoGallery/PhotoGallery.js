import { useState } from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';



const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const {
        children,
        classes,
        onClose,
        ...other
    } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose
                ? (
                    <IconButton
                        aria-label="close"
                        className={classes.closeButton}
                        onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                )
                : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);


export default function PhotoGallery({getCurrentProducts}) {

        // gallery modal
        const [thumbsSwiper,setThumbsSwiper] = useState(null);
        const [open,setOpen] = useState(false);
        const handleClickOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                <p className='gallery-button'>گالری تصاویر</p>
            </Button>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}>
                <DialogTitle
                    id="customized-dialog-title"
                    className='customized-dialog-title-goodspage'
                    onClose={handleClose}></DialogTitle>
                <DialogContent dividers>
                    <Swiper
                        style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff'
                    }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{
                        swiper: thumbsSwiper
                    }}
                        className="mySwiper2">
                        <SwiperSlide><img
                            className='img-fluid'
                            src={getCurrentProducts
            ?.img_1}
                            alt={getCurrentProducts
            ?.name}/></SwiperSlide>
                        <SwiperSlide><img
                            className='img-fluid'
                            src={getCurrentProducts
            ?.img_2}
                            alt={getCurrentProducts
            ?.name}/></SwiperSlide>
                        <SwiperSlide><img
                            className='img-fluid'
                            src={getCurrentProducts
            ?.img_3}
                            alt={getCurrentProducts
            ?.name}/></SwiperSlide>
                        <SwiperSlide><img
                            className='img-fluid'
                            src={getCurrentProducts
            ?.img_4}
                            alt={getCurrentProducts
            ?.name}/></SwiperSlide>
                        <SwiperSlide><img
                            className='img-fluid'
                            src={getCurrentProducts
            ?.img_5}
                            alt={getCurrentProducts
            ?.name}/></SwiperSlide>
                        <SwiperSlide><img
                            className='img-fluid'
                            src={getCurrentProducts
            ?.img_6}
                            alt={getCurrentProducts
            ?.name}/></SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesVisibility={true}
                        watchSlidesProgress={true}
                        className="mySwiper">
                        <SwiperSlide><img
                            className='img-fluid'
                            src={getCurrentProducts
            ?.img_1}
                            alt={getCurrentProducts
            ?.name}/></SwiperSlide>
                        <SwiperSlide><img
                            className='img-fluid'
                            src={getCurrentProducts
            ?.img_2}
                            alt={getCurrentProducts
            ?.name}/></SwiperSlide>
                        <SwiperSlide><img
                            className='img-fluid'
                            src={getCurrentProducts
            ?.img_3}
                            alt={getCurrentProducts
            ?.name}/></SwiperSlide>
                        <SwiperSlide><img
                            className='img-fluid'
                            src={getCurrentProducts
            ?.img_4}
                            alt={getCurrentProducts
            ?.name}/></SwiperSlide>
                        <SwiperSlide><img
                            className='img-fluid'
                            src={getCurrentProducts
            ?.img_5}
                            alt={getCurrentProducts
            ?.name}/></SwiperSlide>
                        <SwiperSlide><img
                            className='img-fluid'
                            src={getCurrentProducts
            ?.img_6}
                            alt={getCurrentProducts
            ?.name}/></SwiperSlide>
                    </Swiper>
                </DialogContent>
            </Dialog>
        </div>
    )
}
