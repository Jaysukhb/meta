import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import {Link, navigate} from "gatsby";
import Logo from "../../images/logo.png";
import Quality from "../../images/quality.svg";
import Video from "../../images/video.svg";
import Downloads from "../../images/download.svg";
import Gift from "../../images/gift.svg";
import '../../styles/global.css';

const YouTubeDownloader = () => {
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
    {lang: "en", label: "English", path: "/"},
    {lang: "de", label: "Deutsch", path: "/de/"},
    {lang: "es", label: "Español", path: "/es/"},
    {lang: "fr", label: "Français", path: "/fr/"},
    {lang: "hi", label: "हिन्दी / Hindi", path: "/hi/"},
    {lang: "id", label: "Indonesian", path: "/id/"},
    {lang: "it", label: "Italiano", path: "/it/"},
    {lang: "ja", label: "ह日本語", path: "/ja/"},
    {lang: "ko", label: "한국어", path: "/ko/"},
    {lang: "my", label: "Myanmar (မြန်မာ)", path: "/my/"},
    {lang: "ms", label: "Malay", path: "/ms/"},
    {lang: "ph", label: "Filipino", path: "/ph/"},
    {lang: "pt", label: "Português", path: "/pt/"},
    {lang: "ru", label: "Русский", path: "/ru/"},
    {lang: "th", label: "ไทย", path: "/th/"},
    {lang: "tr", label: "Türkçe", path: "/tr/"},
    {lang: "vi", label: "Tiếng Việt", path: "/vi/"},
    {lang: "zh-cn", label: "简体中文", path: "/zh-cn/"},
    {lang: "zh-tw", label: "繁體中文", path: "/zh-tw/"},
    {lang: "ar", label: "عربي", path: "/ar/"},
    {lang: "bn", label: "বাঙালি", path: "/bn/"},
  ];

  return (
    <>
      <Helmet>
        <title>Y2meta - تنزيل يوتيوب مجاني | تحميل يوتيوب فيديو</title>
        <meta
          name="description"
          content="Y2meta هي أداة تنزيل YouTube مجانية شهيرة تسمح بتنزيل فيديو YouTube مجانًا بجودة عالية بدقة 1080 بكسل و 2160 بكسل و 2 كيلو و 4 كيلو و 8 كيلو بدون تثبيت البرنامج."/>
        <meta name="robots" content="noindex,nofollow"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Y2meta"/>
        <meta property="og:locale" content="ar"/>
        <meta property="og:title" content="Y2meta - تنزيل يوتيوب مجاني | تحميل يوتيوب فيديو"/>
        <meta
          property="og:description"
          content="Y2meta هي أداة تنزيل YouTube مجانية شهيرة تسمح بتنزيل فيديو YouTube مجانًا بجودة عالية بدقة 1080 بكسل و 2160 بكسل و 2 كيلو و 4 كيلو و 8 كيلو بدون تثبيت البرنامج."/>
        <meta property="og:image" content={Logo}/>
        <meta property="og:url" content="https://y2meta.mobi/ar/"/>
        <link rel="icon" href={Logo}/>
        <link rel="canonical" href="https://y2meta.mobi/ar/"/>
        <link rel="alternate" hrefLang="en" href="https://y2meta.mobi/"/>
        <link rel="alternate" hrefLang="de" href="https://y2meta.mobi/de/"/>
        <link rel="alternate" hrefLang="es" href="https://y2meta.mobi/es/"/>
        <link rel="alternate" hrefLang="fr" href="https://y2meta.mobi/fr/"/>
        <link rel="alternate" hrefLang="hi" href="https://y2meta.mobi/hi/"/>
        <link rel="alternate" hrefLang="id" href="https://y2meta.mobi/id/"/>
        <link rel="alternate" hrefLang="it" href="https://y2meta.mobi/it/"/>
        <link rel="alternate" hrefLang="ja" href="https://y2meta.mobi/ja/"/>
        <link rel="alternate" hrefLang="ko" href="https://y2meta.mobi/ko/"/>
        <link rel="alternate" hrefLang="my" href="https://y2meta.mobi/my/"/>
        <link rel="alternate" hrefLang="ms" href="https://y2meta.mobi/ms/"/>
        <link rel="alternate" hrefLang="ph" href="https://y2meta.mobi/ph/"/>
        <link rel="alternate" hrefLang="pt" href="https://y2meta.mobi/pt/"/>
        <link rel="alternate" hrefLang="ru" href="https://y2meta.mobi/ru/"/>
        <link rel="alternate" hrefLang="th" href="https://y2meta.mobi/th/"/>
        <link rel="alternate" hrefLang="tr" href="https://y2meta.mobi/tr/"/>
        <link rel="alternate" hrefLang="vi" href="https://y2meta.mobi/vi/"/>
        <link rel="alternate" hrefLang="zh-cn" href="https://y2meta.mobi/zh-cn/"/>
        <link rel="alternate" hrefLang="zh-tw" href="https://y2meta.mobi/zh-tw/"/>
        <link rel="alternate" hrefLang="ar" href="https://y2meta.mobi/ar/"/>
        <link rel="alternate" hrefLang="bn" href="https://y2meta.mobi/bn/"/>
        <link rel="alternate" hrefLang="x-default" href="https://y2meta.mobi/"/>
      </Helmet>
      <div className="mx-auto md:max-w-[890px] px-3">
        <header className="h-[68px] flex items-center top-0">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="lg:w-0 lg:flex-1">
                <Link to="/ar/" className="flex items-center">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - برنامج تنزيل فيديو من اليوتيوب</h1>
            <p>قم بتنزيل مقاطع فيديو YouTube بصيغة MP3 و MP4 بجودة عالية مجانًا</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">أفضل برنامج تنزيل فيديو من اليوتيوب</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta هو برنامج تنزيل YouTube الأكثر شعبية والذي يسمح لك بتنزيل مقاطع فيديو YouTube مجانًا. لا حاجة
              لتثبيت تطبيقات وبرامج الطرف الثالث لحفظ مقاطع فيديو YouTube على جهازك الشخصي. فقط أنت بحاجة إلى متصفح
              موثوق واتصال بالإنترنت. استمتع بتنزيل مقاطع الفيديو المفضلة لديك من YouTube و Facebook و Video و
              Dailymotion و Youku ومواقع المشاركة الاجتماعية الأخرى بالجودة التي تريدها. يوفر Y2meta الطريقة الأكثر
              أمانًا لتنزيل مقاطع فيديو YouTube بجودة HD ولا يتطلب تسجيل الدخول أو مشاركة المعلومات الشخصية.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              قم بتنزيل الصوت والفيديو على YouTube بتنسيقات مختلفة مثل MP3 و WEBM و MP4 و M4V و 3GP و WMV و FLV و MO
              وغيرها ، ومعدلات بت MP3 مختلفة بما في ذلك 64 كيلوبت في الثانية و 128 كيلوبت في الثانية و 192 كيلوبت في
              الثانية و 256 كيلوبت في الثانية و 320 كيلوبت في الثانية. يعمل Y2meta بسلاسة على جهاز الكمبيوتر والجوال
              والجهاز اللوحي والجهاز الآخر. إنه برنامج تنزيل YouTube بسيط وسهل.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>كيفية تنزيل مقاطع فيديو YouTube باستخدام Y2meta؟</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  افتح موقع YouTube وانسخ عنوان URL الخاص بـ YouTube الذي تريد تنزيله على جهازك
                </li>
                <li className="mb-2.5">الصق عنوان URL المنسوخ في مربع البحث Y2meta واختر تنسيق MP4 أو MP3</li>
                <li className="mb-2.5">
                  انتظر بضع ثوان حتى يكتمل التحويل واضغط على الزر "تنزيل"
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>مزايا Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">قم بتحويل وتنزيل مقاطع فيديو YouTube غير محدودة مجانًا</li>
                <li className="mb-2.5">طريقة سريعة وسهلة لتنزيل وحفظ أي فيديو يوتيوب</li>
                <li className="mb-2.5">برنامج تنزيل YouTube الخاص بنا متوافق تمامًا مع جميع الأجهزة</li>
                <li className="mb-2.5">إنه مجاني دائمًا ولا يحتاج إلى التسجيل</li>
                <li className="mb-2.5">نحن نقدم ملفات صوت وفيديو عالية الجودة</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <img className="inline" src={Quality} width="50" height="50" alt="quality"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100٪ آمن ومجاني</h3>
                <p>
                  تقدم Y2meta تنزيل mp3 و mp4 من YouTube مجانًا تمامًا. كما أن أداة تنزيل الفيديو من YouTube هذه آمنة
                  تمامًا وآمنة من الفيروسات والبرامج الضارة.
                </p>
              </div>
            </div>
            <div>
              <img className="inline" src={Video} width="50" height="50" alt="video"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">تحميل الفيديو بسرعة وسهولة</h3>
                <p>
                  تساعدك أداة Y2meta على تنزيل ملفات MP3 و MP4 من YouTube بسرعة. ما عليك سوى لصق عنوان URL المنسوخ على
                  YouTube في مربع البحث والنقر فوق الزر "تحويل". ما عليك سوى اتباع الخطوات البسيطة لتنزيل فيديو YouTube.
                </p>
              </div>
            </div>
            <div>
              <img className="inline" src={Downloads} width="50" height="50" alt="download"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">قم بتنزيل مقاطع فيديو YouTube غير محدودة</h3>
                <p>
                  باستخدام Y2meta Downloader هذا ، قم بتنزيل مقاطع فيديو YouTube بقدر ما تريد دون أي قيود. إنه مجاني
                  تمامًا ولا داعي للتسجيل والدخول.
                </p>
              </div>
            </div>
            <div>
              <img className="inline" src={Gift} width="50" height="50" alt="gift"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">دعم جودة متعددة</h3>
                <p>
                  تقدم Y2meta جودة صوت وفيديو متعددة حتى تتمكن من تحويل مقاطع فيديو YouTube إلى تنسيقات MP3 و 3GP و MP4
                  و WMA و M4A و FLV و WEBM و MO وما إلى ذلك.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">التعليمات</h2>
            <h3 className="mt-2.5 font-semibold">ما هو Y2meta؟</h3>
            <p>
              Y2meta هو أفضل برنامج لتنزيل مقاطع الفيديو من YouTube والذي يسمح لك بتنزيل الفيديو من YouTube بسرعة
              ومجانًا. أيضا ، تحويل يوتيوب إلى MP3 بجودة عالية.
            </p>
            <h3 className="mt-2.5 font-semibold">هل Y2meta مجاني تمامًا؟</h3>
            <p>
              نعم ، Y2meta مجاني تمامًا لاستخدام وتنزيل مقاطع فيديو YouTube. لست بحاجة إلى دفع أي مبلغ اشتراك ، فقط
              تحتاج إلى عنوان URL لفيديو YouTube الذي تريد تنزيله على جهازك.
            </p>
            <h3 className="mt-2.5 font-semibold">كيفية تنزيل مقاطع فيديو YouTube على iPhone؟</h3>
            <p>
              تختلف عملية مستخدمي iPhone قليلاً عن جميع الاستخدامات. تحتاج إلى استخدام متصفح Safari على نظام iOS 13 أو
              الحصول على المستندات من خلال تطبيق Readdle وجميع العمليات هي نفسها كما هو مذكور أعلاه.
            </p>
            <h3 className="mt-2.5 font-semibold">هل Y2meta آمن لتنزيل مقاطع الفيديو من YouTube؟</h3>
            <p>
              نعم ، قم بتنزيل مقاطع فيديو YouTube باستخدام أداة التنزيل الخاصة بنا ، فأنت لست بحاجة إلى مشاركة أي
              معلومات شخصية ولا تحتاج أيضًا إلى تثبيت تطبيقات وبرامج تابعة لجهات خارجية على أجهزتك.
            </p>
            <h3 className="mt-2.5 font-semibold">ما هي تنسيقات الفيديو / الصوت المدعومة؟</h3>
            <p>
              نحن نقدم العديد من التنسيقات عالية الجودة ونسمح لك بتنزيل mp3 بجودة 320 كيلو بايت في الثانية و 256 كيلو
              بايت في الثانية و 192 كيلو بت في الثانية و 128 كيلو بت في الثانية ومعدل بت 64 كيلو بت في الثانية و mp4
              بجودة 720 بكسل و 1080 بكسل و 1440 بكسل و 2160 بكسل.
            </p>
            <h3 className="mt-2.5 font-semibold">أين يتم تخزين ملف فيديو YouTube الذي تم تنزيله على جهازي؟</h3>
            <p>
              بعد حفظ الفيديو على جهاز الكمبيوتر الخاص بك من Youtube ، تحقق مباشرة في متصفحك من "سجل التنزيل" أو مجلد
              "التنزيلات" في جهازك.
            </p>
            <h3 className="mt-2.5 font-semibold">هل برنامج تنزيل فيديو YouTube هذا متوافق مع جميع الأجهزة؟</h3>
            <p>
              نعم ، يدعم Y2meta تنزيل مقاطع الفيديو من YouTube ويعمل بسلاسة على جميع الأجهزة مثل أجهزة الكمبيوتر والجوال
              والأجهزة اللوحية وجميع أنواع المتصفحات مثل Chrome و Firefox و Microsoft Edge و Safari و Opera وغيرها.
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

export default YouTubeDownloader;
