import React, {useState, useEffect} from 'react'
import './moredetails.css'
import {get, post, del} from '../../../Server/Axios'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Loading from '../../../components/Loader/Loading';

export default function MoreDetails({id}) {

    const [phone,
        setPhone] = useState('')
    const [getComments,
        setGetComments] = useState([])
    const [postComments,
        setPostComments] = useState({})
    const [loading,
        setLoading] = useState(false)
    // GET const getUserComments = async () => {   await get('/comments').then(
    // response => { setGetComments(response.data)}) } //POST const postUserComments
    // = async () => {   const response = await post('/comments', postComments);
    // // if for updating the comments   if(response){     getUserComments();   } }
    // //DELETE const deleteUserComments = async (id) => {   const response = await
    // del(`/comments/${id}`);   // if for updating the comments   if(response){
    // getUserComments()     setLoading(true);   } }
    function handleChangeComments(e) {
        setPostComments({
            ...postComments,
            [e.target.name]: e.target.value
        })
    }

    const allComments = getComments.map(comments => {
        return ( <> {
            loading
                ? <Loading/>
                : <li key={comments.id} className="media my-4">
                        <img src="/image/user-1.png" className="mr-3" alt="user-img"/>
                        <div className="media-body">
                            <h5 className="mt-0 mb-1">{comments.name}
                            </h5>
                            {comments.text}
                        </div>
                        <button
                            className='remove-comment-button'
                            >
                            <i className="fas fa-trash"></i>
                        </button>
                    </li>
        } </>
    )
  })



  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   get(`/phone / $ {id}`).then( response => {
  //       setPhone(response.data)
  //   })
  //   getUserComments();
  // }, [id])

    return (
        <section className='container'>
            <div className='row'>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">نقد و بررسی</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">مشخصات</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">دیدگاه کاربران</a>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active scann-goods" id="home" role="tabpanel" aria-labelledby="home-tab">
  
  <p className='scann-goods-title'>نقد و بررسی اجمالی
</p>
  <p className='scann-goods-name'>{phone.eng_name}
</p>
  <p className='scann-goods-body'>{phone.detail}</p>
  
  </div>
  <div className="tab-pane fade goods-detail-tap" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  
  <p className='goods-detail-tap-title'>نقد و بررسی اجمالی
</p>
  <p className='goods-detail-tap-name'>{phone.eng_name}</p>
 
 <div className='row goods-detail-tap-body mt-4'>
   <div className='col-md-3'> <p className='goods-detail-tap-body-title'>مشخصات کلی
  </p></div>
   <div className='col-md-8'>
   <div className='goods-detail-tap-body-table' >
    <ul>
      <li className='goods-detail-tap-body-table-list'>
        <p className='goods-detail-tap-body-table-list-title'>ابعاد</p>
        <p className='goods-detail-tap-body-table-list-text'>165.3x76.8x9.4 میلی‌متر</p>
      </li>
      <li className='goods-detail-tap-body-table-list'>
        <p className='goods-detail-tap-body-table-list-title'>توضیحات سیم کارت</p>
        <p className='goods-detail-tap-body-table-list-text'>سایز نانو (8.8 × 12.3 میلی‌متر) </p>
      </li>
      <li className='goods-detail-tap-body-table-list'>
        <p className='goods-detail-tap-body-table-list-title'>وزن</p>
        <p className='goods-detail-tap-body-table-list-text'>215 گرم </p>
      </li>
      <li className='goods-detail-tap-body-table-list'>
        <p className='goods-detail-tap-body-table-list-title'>ساختار بدنه</p>
        <p className='goods-detail-tap-body-table-list-text'>قاب پشت از جنس پلاستیک </p>
      </li>
      <li className='goods-detail-tap-body-table-list'>
        <p className='goods-detail-tap-body-table-list-title'>ویژگی‌های خاص</p>
        <p className='goods-detail-tap-body-table-list-text'> مجهز به حس‌گر اثرانگشت , مناسب عکاسی , مناسب عکاسی سلفی , مناسب بازی , دارای بدنه مقاوم</p>
      </li>
      <li className='goods-detail-tap-body-table-list'>
        <p className='goods-detail-tap-body-table-list-title'>تعداد سیم کارت</p>
        <p className='goods-detail-tap-body-table-list-text'>دو سیم کارت </p>
      </li>
      <li className='goods-detail-tap-body-table-list'>
        <p className='goods-detail-tap-body-table-list-title'>زمان معرفی</p>
        <p className='goods-detail-tap-body-table-list-text'> 22 مارس 2021</p>
      </li>
      <li className='goods-detail-tap-body-table-list'>
        <p className='goods-detail-tap-body-table-list-title'>شیار مجزا برای کارت حافظه</p>
        <p className='goods-detail-tap-body-table-list-text'>ندارد </p>
      </li>
    </ul>
</div>

   </div>
 
 </div>

  </div>
  <div className="tab-pane fade vote-tab" id="contact" role="tabpanel" aria-labelledby="contact-tab">
           <p className='vote-tap-title'>امتیاز و دیدگاه کاربران </p>
       <p className='vote-tap-name'>{phone.eng_name}</p>
        <div className='vote-tab-body row'>
          <div className='col-md-3 vote-tab-right mb-4'>
           <div className='vota-tab-right-main'>
           <p>کیفیت ساخت</p>
              <div className="progress">
                   <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className='progress-percent progress-percent-custom-1'>75%</span>
           </div>
           <div className='vota-tab-right-main'>
           <p> ارزش خرید به نسبت قیمت</p>
              <div className="progress">
                   <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className='progress-percent progress-percent-custom-2'>50%</span>
           </div>
           <div className='vota-tab-right-main'>
           <p> نوآوری</p>
              <div className="progress">
                   <div className="progress-bar w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className='progress-percent progress-percent-custom-3'>25%</span>
           </div>
           <div className='vota-tab-right-main'>
           <p> امکانات و قابلیت ها</p>
              <div className="progress">
                   <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className='progress-percent progress-percent-custom-4'>50%</span>
           </div>
           <div className='vota-tab-right-main'>
           <p> سهولت استفاده </p>
              <div className="progress">
                   <div claclassNamess="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className='progress-percent progress-percent-custom-5'>75%</span>
           </div>
           <div className='vota-tab-right-main'>
           <p> طراحی و ظاهر</p>
              <div className="progress">
                   <div className="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className='progress-percent progress-percent-custom-6'>100%</span>
           </div>
         <div>
      <Button className='w-100 my-3 vote-right-button' onClick={handleClickOpen}>
      افزودن دیدگـاه      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <form className='comment-vote-form'>
            <input required autoComplete='off' className='comment-input-name' type='text' name='name' onChange={handleChangeComments} placeholder='نام خود را وارد کنید' />
            <TextareaAutosize required className='comment-input-text' type='text' name='text' onChange={handleChangeComments}
             aria-label="minimum height" rowsMin={3} placeholder='دیدگاه خود را بنویسید' />

            <button className='comment-button' type='submit'>ارسال</button>
            </form>
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </div>
          </div>
          <div className='col-md-8 vote-tab-left'>
        <ul className="list-unstyled">
  <li className="media">
    <img src="/image/user-1.png" className="mr-3" alt="user-img" />
    <div className="media-body">
      <h5 className="mt-0 mb-1">آقا</h5>
      عالیییییی اصلا هم سنگین نیست خیلی خوش دست هست تو پکیج هندزفری نبود گلس نازکی روش بود و گارد ژله ای
    </div>
  </li>
  <li className="media my-4">
    <img src="/image/user-2.png" className="mr-3" alt="user-img" />
    <div className="media-body">
      <h5 className="mt-0 mb-1">خانم</h5>
      واقعا همه چی عالیه و بنظرم رنگ سیاهش خیلی زیباست چون از ترکیب چند رنگه سبز بنفش نارنجی من 5600خریدم داخل فروش ویژه شنبه سفارش دادم سه شنبه رسید که عالیه در کل بخرید ارزش خرید بالایی داره    </div>
  </li>
  <li className="media">
    <img src="/image/user-1.png" className="mr-3" alt="user-img" />
    <div className="media-body">
      <h5 className="mt-0 mb-1">کاربر سایت</h5>
      این گوشی رو با گارانتی تسک میران و فروشنده مرکز تامین کالای دیجیتال ایران گرفتم، با توجه به تحقیقاتی که در مورد این گوشی داشتم نگرانی من بیشتر از پک گلوبال و رام گلوبال بود که خوشبختانه همونطور که میخواستم گلوبالش بدستم رسید هنوز فرصت تستش رو پیدا نکردم بعد از تست نظرات دقیق رو اعلام می کنم
    </div>
  </li>
  <li className="media my-4">
    <img src="/image/user-2.png" className="mr-3" alt="user-img" />
    <div className="media-body">
      <h5 className="mt-0 mb-1">کاربر مهمان</h5>
      من یه هفته س این گوشی رو خریدم . گوشی خیلی خوبیه . ظاهرش خوشگل و شیکه ، رابط کاربری ش هم اپدیت داد و ورژن ۱۲.۵ شد . سرعتش عالیه و مشکل خاصی ندیدم . در مورد اینکه بعضی از دوستان گفتن موقع استفاده از اسپیکر پشت گوشی لرزش داره درسته ، که اونم بخاطر اسپیکر بسیار قدرتمندی هست که داره در حدی که انگار یه اسپیکر بلوتوثی دارین استفاده میکنین که البته اون لرزش تو حداکثر ولوم اتفاق میفته . تو ولوم عادی چیزی حس نمیشه . در کل من که خیلی راضیم .
 </div>
  </li>
  {/* {allComments} */}
</ul>
        </div>
      </div>
        </div>
        
  
  </div>
</div>
        </section>
    )
}