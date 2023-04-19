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
  const [selectedLanguage, setSelectedLanguage] = useState("bn");
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
        navigate("/download", { state: { url: inputValue }});
      } else {
        navigate("/search", { state: { url: inputValue }});
      }
    }
  };

  const handleClickConvert = () => {
    if (isYtUrl(inputValue)) {
      navigate("/download", { state: { url: inputValue }});
    } else {
      navigate("/search", { state: { url: inputValue }});
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
        <title>Y2meta - বিনামূল্যে ইউটিউব ডাউনলোডার | ইউটিউব ভিডিও ডাউনলোড করুন</title>
        <meta
          name="description"
          content="Y2meta জনপ্রিয় ফ্রি ইউটিউব ডাউনলোডার সফ্টওয়্যার ইনস্টল ছাড়াই 1080p, 2160p, 2k, 4k, 8k-এ উচ্চ মানের সাথে বিনামূল্যে YouTube ভিডিও ডাউনলোড করার অনুমতি দেয়।"/>
        <meta name="robots" content="noindex,nofollow"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Y2meta"/>
        <meta property="og:locale" content="bn"/>
        <meta property="og:title" content="Y2meta - বিনামূল্যে ইউটিউব ডাউনলোডার | ইউটিউব ভিডিও ডাউনলোড করুন"/>
        <meta
          property="og:description"
          content="Y2meta জনপ্রিয় ফ্রি ইউটিউব ডাউনলোডার সফ্টওয়্যার ইনস্টল ছাড়াই 1080p, 2160p, 2k, 4k, 8k-এ উচ্চ মানের সাথে বিনামূল্যে YouTube ভিডিও ডাউনলোড করার অনুমতি দেয়।"/>
        <meta property="og:image" content={Logo}/>
        <meta property="og:url" content="https://y2meta.mobi/bn/"/>
        <link rel="icon" href={Logo}/>
        <link rel="canonical" href="https://y2meta.mobi/bn/"/>
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
                <Link to="/bn/" className="flex items-center">
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
                      to="/bn/">
                      YouTube Downloader
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                      to="/bn/youtube-to-mp3/">
                      YouTube to MP3
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                      to="/bn/youtube-to-mp4/">
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
                            to="/bn/">
                            YouTube Downloader
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                            to="/bn/youtube-to-mp3/">
                            YouTube to MP3
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                            to="/bn/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - YouTube ভিডিও ডাউনলোডার</h1>
            <p>বিনামূল্যের জন্য MP3, এবং MP4 উচ্চ মানের YouTube ভিডিও ডাউনলোড করুন</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="এখানে ইউটিউব লিঙ্ক অনুসন্ধান বা পেস্ট করুন..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  অনুসন্ধান করুন
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              আমাদের পরিষেবা ব্যবহার করে আপনি আমাদের
              <Link className="text-heading-clr" to="/terms-condition"> শর্তাবলী স্বীকার করছেন।</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">সেরা ইউটিউব ভিডিও ডাউনলোডার</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta হল সবচেয়ে জনপ্রিয় YouTube ডাউনলোডার যা আপনাকে বিনামূল্যে YouTube ভিডিও ডাউনলোড করতে দেয়। আপনার ব্যক্তিগত ডিভাইসে YouTube ভিডিও সংরক্ষণ করতে তৃতীয় পক্ষের অ্যাপ্লিকেশন এবং সফ্টওয়্যার ইনস্টল করার প্রয়োজন নেই৷ শুধু আপনার একটি নির্ভরযোগ্য ব্রাউজার এবং ইন্টারনেট সংযোগ প্রয়োজন। ইউটিউব, ফেসবুক, ভিডিও, ডেইলিমোশন, ইউকু এবং অন্যান্য সামাজিক শেয়ারিং ওয়েবসাইটগুলি থেকে আপনার পছন্দের মানের সাথে আপনার পছন্দের ভিডিওগুলি ডাউনলোড করে উপভোগ করুন৷ Y2meta HD কোয়ালিটির সাথে YouTube ভিডিও ডাউনলোড করার সবচেয়ে নিরাপদ উপায় প্রদান করে এবং লগইন বা ব্যক্তিগত তথ্য শেয়ার করার প্রয়োজন নেই।
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              YouTube অডিও এবং ভিডিও বিভিন্ন ফরম্যাটে ডাউনলোড করুন যেমন MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO, ইত্যাদি এবং 64kbps, 128kbps, 192kbps, 256kbps এবং 320kbps সহ বিভিন্ন MP3 বিট রেট। Y2meta আপনার কম্পিউটার, মোবাইল, ট্যাবলেট এবং অন্যান্য ডিভাইসে মসৃণভাবে কাজ করে। এটি একটি সহজ এবং সহজ YouTube ডাউনলোডার।
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>কিভাবে Y2meta ব্যবহার করে YouTube ভিডিও ডাউনলোড করবেন?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube ওয়েবসাইট খুলুন এবং YouTube URL অনুলিপি করুন যা আপনি আপনার ডিভাইসে ডাউনলোড করতে চান
                </li>
                <li className="mb-2.5">Y2meta অনুসন্ধান বাক্সে অনুলিপি করা URL পেস্ট করুন এবং MP4 বা MP3 বিন্যাস চয়ন করুন</li>
                <li className="mb-2.5">
                  রূপান্তর সম্পূর্ণ না হওয়া পর্যন্ত কয়েক সেকেন্ড অপেক্ষা করুন এবং "ডাউনলোড" বোতাম টিপুন
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta সুবিধা</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">বিনামূল্যে সীমাহীন YouTube ভিডিও রূপান্তর এবং ডাউনলোড করুন</li>
                <li className="mb-2.5">যেকোনো ইউটিউব ভিডিও ডাউনলোড এবং সেভ করার দ্রুত এবং সহজ উপায়</li>
                <li className="mb-2.5">আমাদের YouTube ডাউনলোডার সমস্ত ডিভাইসের সাথে সম্পূর্ণরূপে সামঞ্জস্যপূর্ণ</li>
                <li className="mb-2.5">এটি সর্বদা বিনামূল্যে এবং নিবন্ধনের প্রয়োজন নেই</li>
                <li className="mb-2.5">আমরা উচ্চ-মানের অডিও এবং ভিডিও ফাইল সরবরাহ করি</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <img className="inline" src={Quality} width="50" height="50" alt="quality"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% নিরাপদ এবং বিনামূল্যে</h3>
                <p>
                  Y2meta YouTube থেকে mp3 এবং mp4 সম্পূর্ণ বিনামূল্যে ডাউনলোড করার অফার করে। এছাড়াও এই YouTube ভিডিও ডাউনলোডার ভাইরাস এবং ম্যালওয়্যার থেকে সম্পূর্ণ নিরাপদ এবং সুরক্ষিত।
                </p>
              </div>
            </div>
            <div>
              <img className="inline" src={Video} width="50" height="50" alt="video"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Download Video Fast and Easily</h3>
                <p>
                  Y2meta tool helps you to download MP3 and MP4 from YouTube quickly. Simply paste copied YouTube URL
                  into the search box and click on the "Convert" button. just follow the simple steps to Download
                  YouTube Video.
                </p>
              </div>
            </div>
            <div>
              <img className="inline" src={Downloads} width="50" height="50" alt="download"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Download Unlimited YouTube Videos</h3>
                <p>
                  Using this Y2meta Downloader Download YouTube Videos as much as you want without any limitations.
                  it's completely free and no need to register and login.
                </p>
              </div>
            </div>
            <div>
              <img className="inline" src={Gift} width="50" height="50" alt="gift"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Support Multiple quality</h3>
                <p>
                  Y2meta offers multiple Audio and video qualities so you can convert YouTube Videos to MP3, 3GP, MP4,
                  WMA, M4A, FLV, WEBM, MO formats, etc.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">FAQ</h2>
            <h3 className="mt-2.5 font-semibold">What is Y2meta?</h3>
            <p>
              Y2meta is best YouTube Video Downloader that allow you to Download Video from YouTube quickly and for
              Free. also, convert YouTube to Mp3 in high quality.
            </p>
            <h3 className="mt-2.5 font-semibold">Is Y2meta Totally Free?</h3>
            <p>
              Yes, Y2meta is completely free to use and download YouTube videos. you don't need to pay any subscription
              amount just need the YouTube video URL that You want to download on your device.
            </p>
            <h3 className="mt-2.5 font-semibold">How to download YouTube videos to iPhone?</h3>
            <p>
              The process of iPhone users is slightly different from All use. You need to use Safari browser on iOS 13
              or get Documents by Readdle app and all process is the same as above.
            </p>
            <h3 className="mt-2.5 font-semibold">Is Y2meta safe to download Videos from YouTube?</h3>
            <p>
              Yes, Download YouTube Videos using our Downloader you don't need to share any personal information and
              Also don't need to install third-party applications and software on your devices.
            </p>
            <h3 className="mt-2.5 font-semibold">What are the supported video/audio formats?</h3>
            <p>
              We provide various high-quality formats and allow you to download mp3 in 320kbps, 256kbps, 192kbps,
              128kbps, 64kbps bit rate and mp4 with 720p, 1080p, 1440p, 2160p quality.
            </p>
            <h3 className="mt-2.5 font-semibold">Where is the downloaded YouTube video file stored on my device?</h3>
            <p>
              After video is saved to your computer from Youtube then check directly in your browser "download history"
              or "Downloads" folder in your device.
            </p>
            <h3 className="mt-2.5 font-semibold">Is this YouTube video downloader compatible with all devices?</h3>
            <p>
              Yes, Y2meta supports downloading videos from YouTube works smoothly on all devices such as computers,
              mobile, and tablets, and all types of browsers like Chrome, Firefox, Microsoft Edge, Safari, Opera and
              etc.
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
