import React from "react";
import FooterItem from "../FooterItem/FooterItem";
import { Link } from "react-router-dom";
import Input from "./../../Components/Form/Input";
import { emailValidator } from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import swal from "sweetalert";

import "./Footer.css";

export default function Footer() {
   const [formState, onInputHandler] = useForm(
      {
         email: {
            value: "",
            isValid: false,
         },
      },
      false
   );

   const addNewEmail = (event) => {
      event.preventDefault();
      const newEmail = {
         email: formState.inputs.email.value,
      };

      fetch("http://localhost:4000/v1/newsletters", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newEmail),
      }).then((res) => {
         if (res.ok) {
            swal({
               title: "ایمیل شما با موفقیت در خبرنامه ثبت شد",
               icon: "success",
               buttons: "خیلی هم عالی",
            });
         }
      });
   };

   return (
      <footer className="footer">
         <div className="container">
            <div className="footer-widgets">
               <div className="row">
                  <FooterItem title="درباره ما">
                     <p className="footer-widgets__text"> سایت پشتیبانی و پاسخگویی دانشگاه علامه طباطبایی با هدف ارائه خدمات آموزشی و مشاوره‌ای به دانشجویان و اساتید، بستری فراهم کرده است تا کاربران بتوانند به راحتی تیکت‌های خود را ثبت کرده و پاسخ‌های لازم را دریافت کنند. همچنین دسترسی به جدیدترین دوره‌های آموزشی، مقالات علمی و رویدادهای دانشگاه از دیگر خدمات این سایت است.</p>
                  </FooterItem>

                  <FooterItem title="آخرین مطالب">
                     <div className="footer-widgets__links">
                        <a href="#" className="footer-widgets__link">
                           دوره هوش مصنوعی (AI Basics)
                        </a>
                        <a href="#" className="footer-widgets__link">
                           دوره علم داده (Data Science Fundamentals)
                        </a>
                        <a href="#" className="footer-widgets__link">
                           همایش نوروساینس (Neuroscience Conference 2024)
                        </a>
                        <a href="#" className="footer-widgets__link">
                           کارگاه پیشرفته یادگیری عمیق (Advanced Deep Learning Workshop)
                        </a>
                        <a href="#" className="footer-widgets__link">
                           همایش فناوری‌های نوین در آموزش (Innovative Technologies in Education Conference)
                        </a>
                     </div>
                  </FooterItem>

                  <FooterItem title="دسترسی سریع">
                     <div className="row">
                        <div className="col-6">
                           <a href="#" className="footer-widgets__link">
                              دوره Python
                           </a>
                        </div>

                        <div className="col-6">
                           <a href="#" className="footer-widgets__link">
                              دوره React.js
                           </a>
                        </div>

                        <div className="col-6">
                           <a href="#" className="footer-widgets__link">
                              دوره علم داده
                           </a>
                        </div>

                        <div className="col-6">
                           <Link to="/contact" className="footer-widgets__link">
                              ارتباط با ما
                           </Link>
                        </div>
                        <div className="col-12">
                           <span className="footer-widgets__title">اشتراک در خبرنامه</span>
                           <span className="footer-widgets__text text-center d-block">جهت اطلاع از آخرین اخبار و تخفیف های سایت مشترک شوید!</span>
                           <form action="#" className="footer-widgets__form">
                              <Input element="input" id="email" type="text" className="footer-widgets__input" placeholder="ایمیل خود را وارد کنید." onInputHandler={onInputHandler} validations={[emailValidator()]} />
                              <button type="submit" className="footer-widgets__btn" onClick={addNewEmail}>
                                 عضویت
                              </button>
                           </form>
                        </div>
                     </div>
                  </FooterItem>
               </div>
            </div>
         </div>

         <div className="footer__copyright">
            <span className="footer__copyright-text">تهیه شده توسط فاطمه کرابی</span>
         </div>
      </footer>
   );
}
