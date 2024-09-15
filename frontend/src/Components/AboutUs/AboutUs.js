import React from "react";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
import SectionHeader from "./../SectionHeader/SectionHeader";

import "./AboutUs.css";

export default function AboutUs() {
   return (
      <div className="about-us">
         <div className="container">
            <SectionHeader title="ما چه کمکی بهتون میکنیم؟" desc="دانشگاه علامه طباطبایی خدماتی در بستر آنلان ارائه می دهد" />

            <div className="container">
               <div className="row">
                  <AboutUsBox title=" مدیریت آسان تیکت‌ها " desc="سیستم تیکتینگ پیشرفته برای ثبت و پیگیری سریع درخواست‌ها و مشکلات، ویژه برای دانشجویان دانشگاه علامه طباطبایی." icon="fa-regular fa-comments about-us__icon" />
                  <AboutUsBox title="دوره‌های آموزشی به‌روز" desc="دوره‌های تخصصی و پیشرفته برای تقویت مهارت‌های شما در رشته‌های مختلف با تأکید بر نیازهای دانشگاهی." icon="fa-solid fa-book-open-reader about-us__icon" />
                  <AboutUsBox title="همایش‌های آنلاین با حضور بهترین اساتید" desc="شرکت در همایش‌های آنلاین با حضور اساتید برجسته دانشگاه علامه طباطبایی و متخصصان مطرح در رشته‌های مختلف" icon="fa-solid fa-users-rectangle about-us__icon" />
                  <AboutUsBox title="پشتیبانی تخصصی" desc="تیم پشتیبانی ما همیشه در دسترس است تا به سوالات و مشکلات شما در هر زمان پاسخ دهد." icon="fa-solid fa-headset about-us__icon" />
               </div>
            </div>
         </div>
      </div>
   );
}
