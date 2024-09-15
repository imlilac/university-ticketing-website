import React, { useEffect, useState } from "react";
import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import Breadcrumb from "./../../Components/Breadcrumb/Breadcrumb";
// import domPurify from 'dompurify'

import "./ArticleInfo.css";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";
import { useParams } from "react-router-dom";

export default function ArticleInfo() {
   const [articleDetails, setArticleDetails] = useState({});
   const [articleCategory, setArticleCategory] = useState({});
   const [articleCreator, setArticleCreator] = useState({});
   const [articleCreateDate, setArticleCreateDate] = useState("");
   const { articleName } = useParams();

   useEffect(() => {
      fetch(`http://localhost:4000/v1/articles/${articleName}`)
         .then((res) => res.json())
         .then((articleInfo) => {
            setArticleDetails(articleInfo);
            setArticleCategory(articleInfo.categoryID);
            setArticleCreator(articleInfo.creator);
            setArticleCreateDate(articleInfo.createdAt);
         });
   }, []);

   return (
      <>
         <Topbar />
         <Navbar />

         <Breadcrumb
            links={[
               { id: 1, title: "خانه", to: "" },
               {
                  id: 2,
                  title: "مقاله ها",
                  to: "category-info/frontend",
               },
               {
                  id: 3,
                  title: " هوش مصنوعی",
                  to: "course-info/ai",
               },
            ]}
         />

         <main className="main">
            <div className="container">
               <div className="row">
                  <div className="col-8">
                     <div className="article">
                        <h1 className="article__title">{articleDetails.title}</h1>
                        <div className="article__header">
                           <div className="article-header__category article-header__item">
                              <i className="far fa-folder article-header__icon"></i>
                              <a href="#" className="article-header__text">
                                 {articleCategory.title}
                              </a>
                           </div>
                           <div className="article-header__category article-header__item">
                              <i className="far fa-user article-header__icon"></i>
                              <span className="article-header__text">ارسال شده توسط {articleCreator.name}</span>
                           </div>
                           <div className="article-header__category article-header__item">
                              <i className="far fa-eye article-header__icon"></i>
                              <span className="article-header__text">تاریخ انتشار: {articleCreateDate.slice(0, 10)}</span>
                           </div>
                        </div>
                        <img src="/images/blog/article-4.jpg" alt="Article Cover" className="article__banner" />
                        <div className="article__score">
                           <div className="article__score-icons">
                              <img src="/images/svgs/star_fill.svg" className="article__score-icon" />
                              <img src="/images/svgs/star_fill.svg" className="article__score-icon" />
                              <img src="/images/svgs/star_fill.svg" className="article__score-icon" />
                              <img src="/images/svgs/star_fill.svg" className="article__score-icon" />
                              <img src="/images/svgs/star.svg" className="article__score-icon" />
                           </div>
                           <span className="article__score-text">4.2/5 - (5 امتیاز)</span>
                        </div>

                        <p className="article__paragraph paragraph">هوش مصنوعی (AI) یکی از حوزه‌های نوین و پیشرفته فناوری است که تلاش می‌کند تا ماشین‌ها و سیستم‌ها را قادر سازد به شیوه‌ای مشابه با انسان‌ها فکر کنند، یاد بگیرند و تصمیم‌گیری کنند. با استفاده از الگوریتم‌ها و مدل‌های پیچیده، سیستم‌های هوش مصنوعی می‌توانند داده‌های عظیمی را تحلیل کنند و از الگوها و اطلاعات به دست آمده برای حل مسائل مختلف استفاده کنند.</p>
                        <p className="article__paragraph paragraph">هوش مصنوعی کاربردهای گسترده‌ای در زمینه‌های مختلف مانند پزشکی، آموزش، صنعت، تجارت و حمل‌ونقل دارد. از تشخیص بیماری‌ها گرفته تا بهینه‌سازی فرایندهای تولیدی و شخصی‌سازی تجارب مشتریان در تجارت الکترونیکی، AI به افزایش کارایی و دقت در انجام وظایف کمک می‌کند.</p>
                        <p className="article__paragraph paragraph">یکی از قابلیت‌های برجسته هوش مصنوعی، یادگیری ماشین (Machine Learning) است که به سیستم‌ها اجازه می‌دهد بدون نیاز به برنامه‌ریزی مستقیم، از تجربیات گذشته خود درس بگیرند و عملکردشان را بهبود بخشند. این فناوری‌ها به تدریج به بخشی جدایی‌ناپذیر از زندگی روزمره ما تبدیل شده‌اند و انتظارات زیادی برای آینده‌ای هوشمندتر و کارآمدتر دارند.</p>

                        <div className="article-read">
                           <span className="article-read__title">آنچه در این مقاله خواهید خواند</span>
                           <ul className="article-read__list">
                              <li className="article-read__item">
                                 <a href="#" className="article-read__link">
                                    تعریف و اهمیت هوش مصنوعی در دنیای امروز
                                 </a>
                              </li>
                              <li className="article-read__item">
                                 <a href="#" className="article-read__link">
                                    پردازش زبان طبیعی (NLP) و تعامل انسان با ماشین
                                 </a>
                              </li>
                              <li className="article-read__item">
                                 <a href="#" className="article-read__link">
                                    یادگیری عمیق (Deep Learning) و کاربردهای پیشرفته آن
                                 </a>
                              </li>
                              <li className="article-read__item">
                                 <a href="#" className="article-read__link">
                                    نقش هوش مصنوعی در بهداشت و درمان
                                 </a>
                              </li>
                           </ul>
                        </div>

                        <p className="article__paragraph paragraph">هوش مصنوعی (AI) به عنوان یکی از مهم‌ترین انقلاب‌های فناوری در قرن ۲۱، قادر است به مدل‌سازی رفتارهای پیچیده انسانی و پردازش حجم عظیمی از داده‌ها در زمان کم بپردازد. این فناوری به سیستم‌ها امکان می‌دهد که به صورت خودکار و هوشمند، اطلاعات را تجزیه و تحلیل کنند و تصمیم‌گیری‌های دقیق‌تری انجام دهند. این قابلیت‌ها باعث شده هوش مصنوعی به سرعت در صنایع مختلف به‌کار گرفته شود و به بهبود عملکردها کمک کند.</p>
                        <p className="article__paragraph paragraph">یکی از شاخه‌های مهم هوش مصنوعی، پردازش زبان طبیعی (NLP) است. این شاخه به ماشین‌ها کمک می‌کند تا زبان انسان‌ها را بفهمند، تفسیر کنند و به آن پاسخ دهند. از برنامه‌های چت‌بات گرفته تا سیستم‌های ترجمه خودکار و تحلیل متون، NLP امکان تعامل موثر و طبیعی‌تر بین انسان‌ها و کامپیوترها را فراهم می‌کند. این تکنولوژی در صنعت‌های خدمات مشتری، تحلیل داده‌های متنی و حتی سلامت روانی کاربرد فراوان دارد.</p>

                        <p className="article__paragraph paragraph">یادگیری عمیق (Deep Learning) نیز از دیگر فناوری‌های کلیدی در هوش مصنوعی است که با الهام از ساختار مغز انسان، به سیستم‌ها امکان شناسایی الگوهای پیچیده در داده‌ها را می‌دهد. این روش در حوزه‌های مختلفی از جمله تشخیص تصویر، تشخیص صدا و وسایل نقلیه خودران استفاده می‌شود. الگوریتم‌های یادگیری عمیق، سیستم‌هایی را قادر می‌سازند تا با تحلیل داده‌های ورودی، بهبود یابند و عملکرد خود را بدون دخالت انسان به مرور زمان بهتر کنند.</p>
                        <p className="article__paragraph paragraph">کاربردهای هوش مصنوعی فراتر از صنعت فناوری است و به حوزه‌هایی مانند پزشکی و بهداشت نیز نفوذ کرده است. سیستم‌های مبتنی بر هوش مصنوعی می‌توانند با تحلیل داده‌های پزشکی، تشخیص‌های دقیق‌تری ارائه دهند، درمان‌ها را بهینه کنند و به پزشکان در تصمیم‌گیری کمک کنند. از سیستم‌های تصویربرداری پزشکی گرفته تا تحلیل ژنوم، AI نقش مهمی در پیشبرد علم پزشکی دارد.</p>

                        <img src="/images/blog/article7.jpg" alt="Article Image" className="article__seconadary-banner" />

                        {/* <div className="article-section" dangerouslySetInnerHTML={{ __html: domPurify.sanitize(articleDetails.body) }}> */}
                        {/* <h2 className="article-section__title">
                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                  </h2>
                  <p className="paragraph article-section__text">
                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
                    سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
                    هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
                    شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
                    و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
                    کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
                    به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
                    اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
                    و به زبان فارسی این زبان را یاد بگیرید.
                  </p> */}
                        {/* </div> */}

                        <p className="article__paragraph paragraph">در نهایت، هوش مصنوعی در کنار مزایای فراوان خود، چالش‌هایی مانند مسائل اخلاقی و حریم خصوصی را نیز به همراه دارد. همان‌طور که AI به جمع‌آوری و تحلیل داده‌های شخصی می‌پردازد، سوالاتی درباره نحوه استفاده از این داده‌ها و حفظ حریم خصوصی افراد به وجود می‌آید. به همین دلیل، توسعه‌دهندگان و قانون‌گذاران باید تلاش کنند تا همزمان با پیشرفت‌های تکنولوژیکی، اصول اخلاقی و قوانین محافظت از حریم خصوصی نیز رعایت شود.</p>

                        <div className="article-social-media">
                           <span className="article-social-media__text">اشتراک گذاری :</span>
                           <a href="#" className="article-social-media__link">
                              <i className="fab fa-telegram-plane article-social-media__icon"></i>
                           </a>
                           <a href="#" className="article-social-media__link">
                              <i className="fab fa-twitter article-social-media__icon"></i>
                           </a>
                           <a href="#" className="article-social-media__link">
                              <i className="fab fa-facebook-f article-social-media__icon"></i>
                           </a>
                        </div>
                     </div>

                     <div className="suggestion-articles">
                        <div className="row">
                           <div className="col-6">
                              <div className="suggestion-articles__right suggestion-articles__content">
                                 <a href="#" className="suggestion-articles__icon-link">
                                    <i className="fas fa-arrow-right suggestion-articles__icon"></i>
                                 </a>
                                 <a href="#" className="suggestion-articles__link">
                                    هوش مصنوعی: انقلاب تکنولوژیک در دنیای مدرن
                                 </a>
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="suggestion-articles__left suggestion-articles__content">
                                 <a href="#" className="suggestion-articles__icon-link">
                                    <i className="fas fa-arrow-left suggestion-articles__icon"></i>
                                 </a>
                                 <a href="#" className="suggestion-articles__link">
                                    آینده هوش مصنوعی: چالش‌ها، فرصت‌ها و نقش آن در زندگی روزمره
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-4"></div>
               </div>
            </div>
         </main>

         <Footer />
      </>
   );
}
