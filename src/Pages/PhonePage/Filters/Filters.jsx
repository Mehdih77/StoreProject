import './Filters.css';
import Accordion from '../../../HOC/Accordion/Accordion';
import ToggleButton from '../../../HOC/Input/ToggleButton/ToggleButton';
import CheckBox from '../../../HOC/Input/CheckBox/CheckBox';

export default function Filter() {

    return ( 
    <> 
    <section className='phone-page-filter mt-4'>
        <div className='post-free phone-page-post-free'>
            <div>
                <div className='post-free-title'>
                    <i className="fas fa-truck"></i>ارسال رایگان سفارش
                    <p className='post-free-text'>اولین سفارش کاربران جدید</p>
                </div>
            </div>
            <img className='post-free-img' src='/image/post-free.png' alt='free-post'/>
        </div>
        <div  className='phone-page-search-input' >
            <p>جستجو در نتایج :</p>
            <hr />
            <div>
                <i className="fas fa-search"></i>
                <input type="search" placeholder='نام محصول یا برند مورد نظر را  بنویسید ...' />
            </div>
        </div>
        <Accordion title='برند'>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Samsung' />
                    <span>سامسونگ</span>
                </div>
                <p>Samsung</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Xiaomi' />
                    <span>شیائومی</span>
                </div>
                <p>Xiaomi</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Apple' />
                    <span>اپل</span>
                </div>
                <p>Apple</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Nokia' />
                    <span>نوکیا</span>
                </div>
                <p>Nokia</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Motorola' />
                    <span>موتورولا</span>
                </div>
                <p>Motorola</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Honor' />
                    <span>آنر</span>
                </div>
                <p>Honor</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='LG' />
                    <span>ال جی</span>
                </div>
                <p>LG</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='HTC' />
                    <span>اچ تی سی</span>
                </div>
                <p>HTC</p>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Google' />
                    <span>گوگل</span>
                </div>
                <p>Google</p>
            </label>
        </Accordion>
        <Accordion title='فروشنده'>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='DigiKala' />
                    <span>دیجی کالا</span>
                </div>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='OfficialSeller' />
                    <span>فروشنده رسمی</span>
                </div>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='TopSeller' />
                    <span>فروشنده برگزیده</span>
                </div>
            </label>
        </Accordion>
        <div className='phone-page-toggle my-2'>
            <ToggleButton id='digiplus'>
               فقط کالاهای <img className='digiplus' src="/image/digiplus.svg" alt="digiplus digikala digi" /> 
            </ToggleButton>
        </div>
        <div className='phone-page-toggle sendBySeller my-2'>
            <div>
                <i className="fas fa-user-tie"></i>
                <p>با خرید از کالاهایی با امکان ارسال توسط فروشنده سفارش خود را زودتر تحویل بگیرید</p>
            </div>
            <ToggleButton id='sendBySeller'>
                امکان ارسال توسط فروشنده
            </ToggleButton>
        </div>
        <div className='phone-page-toggle my-2'>
            <ToggleButton id='immediateSending'>
                فقط ارسال فوری
            </ToggleButton>
        </div>
        <div className='phone-page-toggle my-2'>
            <ToggleButton id='availableGoods'>
                فقط کالاهای موجود
            </ToggleButton>
        </div>
        <div className='phone-page-toggle my-2'>
            <ToggleButton id='availableGoodsInStore'>
                فقط کالاهای موجود در انبار آنلاین شاپ
            </ToggleButton>
        </div>
        <Accordion title='شبکه های ارتباطی'>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='5G' />
                    <span>5G</span>
                </div>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='4G' />
                    <span>4G</span>
                </div>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='3G' />
                    <span>3G</span>
                </div>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='2G' />
                    <span>2G</span>
                </div>
            </label>
        </Accordion>
        <Accordion title='حافظه داخلی'>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='512G' />
                    <span>512 گیگابایت</span>
                </div>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='256G' />
                    <span>256 گیگابایت</span>
                </div>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='128G' />
                    <span>128 گیگابایت</span>
                </div>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='64G' />
                    <span>64 گیگابایت</span>
                </div>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='32G' />
                    <span>32 گیگابایت</span>
                </div>
            </label>
        </Accordion>
        <Accordion title='رنگ ها'>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Black'/>
                    <span>مشکی</span>
                </div>
                <span className='accordion-color black'></span>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='White' />
                    <span>سفید</span>
                </div>
                <span className='accordion-color white'></span>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Blue' />
                    <span>آبی</span>
                </div>
                <span className='accordion-color blue'></span>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Red' />
                    <span>قرمز</span>
                </div>
                <span className='accordion-color red'></span>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Green' />
                    <span>سبز</span>
                </div>
                <span className='accordion-color green'></span>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Cyan' />
                    <span>فیروزه ای</span>
                </div>
                <span className='accordion-color cyan'></span>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Orange' />
                    <span>نارنجی</span>
                </div>
                <span className='accordion-color orange'></span>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Purple' />
                    <span>بنفش</span>
                </div>
                <span className='accordion-color purple'></span>
            </label>
            <label className='accordion-checkbox-label'>
                <div>
                    <CheckBox id='Gold' />
                    <span>طلایی</span>
                </div>
                <span className='accordion-color gold'></span>
            </label>
        </Accordion>
    </section> 
    </>
    )
}