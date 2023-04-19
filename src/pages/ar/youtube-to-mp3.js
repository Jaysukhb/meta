import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import {Link, navigate} from "gatsby";
import Logo from "../../images/logo.png";
import Quality from "../../images/quality.svg";
import Video from "../../images/video.svg";
import Downloads from "../../images/download.svg";
import Gift from "../../images/gift.svg";
import '../../styles/global.css';

const YouTubeToMP3 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const [openLanguage, setOpenLanguage] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setOpenLanguage(!openLanguage)
  };

  const isYtUrl = (url) => {
    const ytRegex = new RegExp(
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/g
    );
    return ytRegex.test(url)
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleClickEnter = (e) => {
    if (e.keyCode === 13) {
      if (isYtUrl(inputValue)) {
        navigate("/download", {state: {url: inputValue}});
      } else {
        navigate("/search", {state: {url: inputValue}});
      }
    }
  };

  const handleClickConvert = () => {
    if (isYtUrl(inputValue)) {
      navigate("/download", {state: {url: inputValue}});
    } else {
      navigate("/search", {state: {url: inputValue}});
    }
  };

  const languageOptions = [
    {lang: "en", label: "English", path: "/youtube-to-mp3/"},
    {lang: "de", label: "Deutsch", path: "/de/youtube-to-mp3/"},
    {lang: "es", label: "Español", path: "/es/youtube-to-mp3/"},
    {lang: "fr", label: "Français", path: "/fr/youtube-to-mp3/"},
    {lang: "hi", label: "हिन्दी / Hindi", path: "/hi/youtube-to-mp3/"},
    {lang: "id", label: "Indonesian", path: "/id/youtube-to-mp3/"},
    {lang: "it", label: "Italiano", path: "/it/youtube-to-mp3/"},
    {lang: "ja", label: "ह日本語", path: "/ja/youtube-to-mp3/"},
    {lang: "ko", label: "한국어", path: "/ko/youtube-to-mp3/"},
    {lang: "my", label: "Myanmar (မြန်မာ)", path: "/my/youtube-to-mp3/"},
    {lang: "ms", label: "Malay", path: "/ms/youtube-to-mp3/"},
    {lang: "ph", label: "Filipino", path: "/ph/youtube-to-mp3/"},
    {lang: "pt", label: "Português", path: "/pt/youtube-to-mp3/"},
    {lang: "ru", label: "Русский", path: "/ru/youtube-to-mp3/"},
    {lang: "th", label: "ไทย", path: "/th/youtube-to-mp3/"},
    {lang: "tr", label: "Türkçe", path: "/tr/youtube-to-mp3/"},
    {lang: "vi", label: "Tiếng Việt", path: "/vi/youtube-to-mp3/"},
    {lang: "zh-cn", label: "简体中文", path: "/zh-cn/youtube-to-mp3/"},
    {lang: "zh-tw", label: "繁體中文", path: "/zh-tw/youtube-to-mp3/"},
    {lang: "ar", label: "عربي", path: "/ar/youtube-to-mp3/"},
    {lang: "bn", label: "বাঙালি", path: "/bn/youtube-to-mp3/"},
  ];

  return (
    <>
      <Helmet>
        <title>يوتيوب لتحويل MP3 - Y2meta</title>
        <meta
          name="description"
          content="Y2meta عبارة عن محول مجاني من YouTube إلى MP3 ، يسمح بتحويل MP3 من YouTube مجانًا على الكمبيوتر الشخصي ، و iPhone ، و Android بدون تثبيت برنامج."/>
        <meta name="robots" content="noindex,nofollow"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Y2meta"/>
        <meta property="og:locale" content="ar"/>
        <meta property="og:title" content="يوتيوب لتحويل MP3 - Y2meta"/>
        <meta
          property="og:description"
          content="Y2meta عبارة عن محول مجاني من YouTube إلى MP3 ، يسمح بتحويل MP3 من YouTube مجانًا على الكمبيوتر الشخصي ، و iPhone ، و Android بدون تثبيت برنامج."/>
        <meta property="og:image" content={Logo}/>
        <meta property="og:url" content="https://y2meta.mobi/ar/youtube-to-mp3/"/>
        <link rel="icon" href={Logo}/>
        <link rel="canonical" href="https://y2meta.mobi/ar/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="en" href="https://y2meta.mobi/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="de" href="https://y2meta.mobi/de/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="es" href="https://y2meta.mobi/es/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="fr" href="https://y2meta.mobi/fr/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="hi" href="https://y2meta.mobi/hi/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="id" href="https://y2meta.mobi/id/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="it" href="https://y2meta.mobi/it/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="ja" href="https://y2meta.mobi/ja/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="ko" href="https://y2meta.mobi/ko/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="my" href="https://y2meta.mobi/my/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="ms" href="https://y2meta.mobi/ms/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="ph" href="https://y2meta.mobi/ph/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="pt" href="https://y2meta.mobi/pt/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="ru" href="https://y2meta.mobi/ru/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="th" href="https://y2meta.mobi/th/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="tr" href="https://y2meta.mobi/tr/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="vi" href="https://y2meta.mobi/vi/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="zh-cn" href="https://y2meta.mobi/zh-cn/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="zh-tw" href="https://y2meta.mobi/zh-tw/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="ar" href="https://y2meta.mobi/ar/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="bn" href="https://y2meta.mobi/bn/youtube-to-mp3/"/>
        <link rel="alternate" hrefLang="x-default" href="https://y2meta.mobi/youtube-to-mp3/"/>
      </Helmet>
      <div className="mx-auto md:max-w-[890px] px-3">
        <header className="h-[68px] flex items-center top-0">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="lg:w-0 lg:flex-1">
                <Link to="/" className="flex items-center">
                  <img width="46" height="46" src={Logo} alt="y2meta"/>
                  <h1 className="text-2xl font-semibold w-auto z-50 pl-2">y2meta</h1>
                </Link>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setOpen(!open)}
                  aria-label="Toggle Menu"
                  type="button"
                  className="inline-flex items-center justify-center border border-solid border-heading py-1 px-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    className="h-6 w-6 text-heading-clr"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex">
                <ul className="hidden md:flex">
                  <li>
                    <Link
                      className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                      to="/ar/">
                      YouTube Downloader
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                      to="/ar/youtube-to-mp3/">
                      YouTube to MP3
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                      to="/ar/youtube-to-mp4/">
                      YouTube to MP4
                    </Link>
                  </li>
                  <div className="relative">
                    <button
                      className="text-sm px-3.5 text-heading hover:text-heading-clr"
                      onClick={() => setOpenLanguage(!openLanguage)}>
                      {languageOptions.find((option) => option.lang === selectedLanguage)?.label || "Language"}
                    </button>
                    {openLanguage &&
                      <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-lg">
                        {languageOptions.map((option) => (
                          <Link
                            key={option.lang}
                            to={option.path}
                            className="block px-4 py-0.5 text-gray-800 hover:bg-gray-200"
                            onClick={() => handleLanguageChange(option.lang)}
                          >
                            {option.label}
                          </Link>
                        ))}
                      </div>
                    }
                  </div>
                </ul>
              </nav>
            </div>
          </div>
          <div
            className="absolute top-16 inset-x-0 transition transform origin-top-right md:!hidden z-20"
            style={{display: open ? "block" : "none"}}>
            <div className="shadow-lg">
              <div className="shadow-xs bg-background divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div>
                    <nav className="grid gap-y-8">
                      <ul>
                        <li>
                          <Link
                            className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                            to="/ar/">
                            YouTube Downloader
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                            to="/ar/youtube-to-mp3/">
                            YouTube to MP3
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                            to="/ar/youtube-to-mp4/">
                            YouTube to MP4
                          </Link>
                        </li>
                        <div className="relative">
                          <button
                            className="-m-3 p-3 flex items-center text-heading hover:text-heading-clr transition duration-300"
                            onClick={() => setOpenLanguage(!openLanguage)}>
                            {languageOptions.find((option) => option.lang === selectedLanguage)?.label || "Language"}
                          </button>
                          {openLanguage &&
                            <div className="absolute mt-2 py-2 w-40 bg-white rounded-md shadow-lg">
                              {languageOptions.map((option) => (
                                <Link
                                  key={option.lang}
                                  to={option.path}
                                  className="block px-4 py-0.5 text-gray-800 hover:bg-gray-200"
                                  onClick={() => handleLanguageChange(option.lang)}
                                >
                                  {option.label}
                                </Link>
                              ))}
                            </div>
                          }
                        </div>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="bg-white p-4 border border-solid rounded border-current border-solid-clr container mx-auto">
          <div className="md:py-8 py-7 text-center">
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">يوتيوب لتحويل MP3</h1>
            <p>قم بتحويل وتنزيل مقاطع فيديو YouTube إلى MP3 مجانًا</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="ابحث أو الصق رابط youtube هنا ..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  يبحث
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              باستخدام خدمتنا ، فإنك تقبل
              <Link className="text-heading-clr" to="/terms-condition"> الشروط والأحكام الخاصة بنا.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">أفضل يوتيوب لتحويل MP3</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta هو محول YouTube إلى MP3 سريع وبسيط. يتيح لك برنامج تنزيل YouTube إلى MP3 الشهير تحويل وتنزيل مقاطع
              فيديو YouTube بسهولة إلى MP3 بجودة عالية وبدون تكلفة. يمكنك أيضًا تنزيل mp3 بخيارات جودة متعددة مثل 64
              كيلوبت في الثانية ، و 128 كيلوبت في الثانية ، و 192 كيلوبت في الثانية ، و 320 كيلوبت في الثانية.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              يعمل محول YouTube إلى Mp3 هذا بسلاسة على جميع الأجهزة بما في ذلك أجهزة الكمبيوتر المكتبية وأجهزة الكمبيوتر
              المحمولة والأجهزة اللوحية والهواتف الذكية دون تثبيت أي تطبيق أو برنامج. عملية التحويل سريعة ومريحة ، ما
              عليك سوى لصق عنوان URL على YouTube وبضع خطوات بسيطة على ملف youtube mp3 الخاص بك جاهزًا للتنزيل في بضع
              ثوانٍ. إنه محول YouTube MP3 آمن تمامًا.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>كيفية تحويل فيديو YouTube إلى MP3 عبر الإنترنت مجانًا</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  الصق عنوان URL لفيديو YouTube أو أدخل كلمة رئيسية في مربع البحث ، ثم انقر فوق الزر "بحث".
                </li>
                <li className="mb-2.5">اختر جودة MP3 واضغط على الزر "تنزيل".</li>
                <li className="mb-2.5">
                  انتظر بضع ثوان وبعد تحويل MP3 بنجاح ، انقر فوق الزر تنزيل.
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>مزايا Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">قم بتحويل وتنزيل ملفات MP3 من YouTube دون أي قيود</li>
                <li className="mb-2.5">لا حاجة لتثبيت أي برنامج وبدون تسجيل</li>
                <li className="mb-2.5">100٪ محول يوتيوب آمن وآمن</li>
                <li className="mb-2.5">متوافق مع جميع المتصفحات والأجهزة</li>
                <li className="mb-2.5">برنامج مجاني تمامًا قم بتحويل Youtube إلى mp3 بصوت عالي الجودة</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <img className="inline" src={Quality} width="50" height="50" alt="quality"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">تحويل سهل وسريع</h3>
                <p>
                  تنزيل MP3 من YouTube أمر سهل ، ما عليك سوى إدخال عنوان URL الخاص بـ YouTube الذي تريد تنزيله والنقر
                  فوق الزر "تنزيل". ملفاتك المحولة جاهزة في بضع ثوان.
                </p>
              </div>
            </div>
            <div>
              <img className="inline" src={Video} width="50" height="50" alt="video"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">توفير تنسيقات عالية الجودة</h3>
                <p>
                  نحن نقدم تحويل YouTube إلى mp3 بتنسيقات عالية الجودة مثل 64 كيلو بايت في الثانية و 128 كيلو بايت في
                  الثانية و 192 كيلو بايت في الثانية و 256 كيلو بايت في الثانية و 320 كيلو بايت في الثانية. يمكنك
                  الاختيار والتنزيل حسب المتطلبات.
                </p>
              </div>
            </div>
            <div>
              <img className="inline" src={Downloads} width="50" height="50" alt="download"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">التحويل بلا حدود</h3>
                <p>
                  قم بتحويل أي فيديو YouTube إلى MP3 بدون قيود مجانًا. ليست هناك حاجة لتثبيت أي برامج أو تطبيقات لتنزيل
                  Mp3 من Youtube.
                </p>
              </div>
            </div>
            <div>
              <img className="inline" src={Gift} width="50" height="50" alt="gift"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">متوافق مع جميع المنصات</h3>
                <p>
                  محول YouTube الخاص بنا متوافق مع جميع أنواع أجهزة الكمبيوتر ، الكمبيوتر اللوحي ، iPhone ، هاتف Android
                  ، إلخ ، كما يدعم Y2meta جميع المتصفحات بما في ذلك Chrome و Microsoft Edge و Firefox و Opera وأي متصفح
                  آخر.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">التعليمات</h2>
            <h3 className="mt-2.5 font-semibold">هل هذا محول YouTube إلى MP3 مجاني للاستخدام؟</h3>
            <p>
              نعم ، محول Y2meta الخاص بنا مجاني تمامًا لتنزيل Mp3 من YouTube دون تسجيل حساب
            </p>
            <h3 className="mt-2.5 font-semibold">هل يمكنني استخدام هذا Youtube إلى mp3 على جميع الأجهزة؟</h3>
            <p>
              نعم ، بالطبع ، يدعم محول YouTube إلى MP3 جميع أنواع الأجهزة بما في ذلك أجهزة الكمبيوتر والجوال والأجهزة
              اللوحية.
            </p>
            <h3 className="mt-2.5 font-semibold">كيفية تنزيل MP3 من مقاطع فيديو YouTube؟</h3>
            <p>انسخ رابط فيديو Youtube الذي تريد تحويله من YouTube إلى mp3</p>
            <p>الصق عنوان URL لموقع YouTube في مربع البحث</p>
            <p>اضغط على زر البحث ثم اختر Mp3 وانقر على زر التحويل</p>
            <p>انتظر بضع ثوان حتى يكتمل التحويل بنجاح ثم انقر فوق الزر "تنزيل".</p>
            <h3 className="mt-2.5 font-semibold">ما هو الحد الأقصى لعدد تنزيلات Mp3 من YouTube؟</h3>
            <p>
              يمكنك تحويل YouTube إلى Mp3 بشكل غير محدود ولا توجد قيود عندما يتعلق الأمر باستخدام محول YouTube هذا. جميع
              الميزات خالية تمامًا من التكلفة وبدون قيود.
            </p>
            <h3 className="mt-2.5 font-semibold">هل أحتاج إلى تثبيت امتداد متصفح أو برنامج؟</h3>
            <p>
              لا ، يعمل محول YouTube الخاص بنا على الويب ، لذا لا تحتاج إلى تثبيت أي برنامج أو ملحق. تحتاج فقط إلى متصفح
              ويب واتصال موثوق بالإنترنت.
            </p>
            <h3 className="mt-2.5 font-semibold">من الآمن تنزيل mp3 من YouTube باستخدام محول YouTube هذا؟</h3>
            <p>
              نعم ، محول Youtube to Mp3 الخاص بنا آمن مع طبقة SSL التي تضمن أن هؤلاء الأشخاص يمكنهم تنزيل مقاطع الفيديو
              بأمان. نحن نراقب الأمن يوميًا محول YouTube إلى Mp3 للحماية من الفيروسات والبرامج الضارة.
            </p>
          </div>
        </section>
      </div>
      <footer>
        <div className="md:py-14 py-5	text-sm	text-center border-solid	border-y border-inherit">
          <p className="mb-5	">@2023 y2meta.mobi</p>
          <ul className="flex justify-center">
            <li><Link className="mx-2" to="/about-us/">About</Link></li>
            <li><Link className="mx-2" to="/contact/">Contact</Link></li>
            <li><Link className="mx-2" to="/terms-condition/">Terms of Service</Link></li>
            <li><Link className="mx-2" to="/privacy-policy/">Privacy Policy</Link></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default YouTubeToMP3;
