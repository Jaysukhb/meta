import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import Logo from "../images/logo.png";
import Quality from "../images/quality.svg";
import Video from "../images/video.svg";
import Downloads from "../images/download.svg";
import Gift from "../images/gift.svg";
import '../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
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
                      to="/">
                      YouTube Downloader
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                      to="/youtube-to-mp3/">
                      YouTube to MP3
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                      to="/youtube-to-mp4/">
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
                            to="/">
                            YouTube Downloader
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                            to="/youtube-to-mp3/">
                            YouTube to MP3
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                            to="/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - YouTube Video Downloader</h1>
            <p>Download YouTube videos in MP3, and MP4 high quality for free</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="Search or paste youtube link here..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  Search
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              By using our service you are accepting our
              <Link className="text-heading-clr" to="/terms-condition"> Term and Conditions.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">Best YouTube Video Downloader</h2>
            <h3 className="text-lg text-justify	my-2.5">
              <Link className="text-[#551A8B] mr-1" to="https://y2meta.mobi/">
                Y2meta
              </Link>
              is the most popular YouTube Downloader which allows you to Download YouTube videos for free. No need to
              install third-party Applications and software to save YouTube videos on Your personal device. Just You
              require a reliable browser and internet connection. Enjoy downloading your favorite videos from YouTube,
              Facebook, Video, Dailymotion, Youku, and other social sharing websites with the quality you want. Y2meta
              provides the safest way to Download YouTube videos with HD Quality and no require to login or share
              personal
              information.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Download YouTube audio and video in various formats such as MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO, etc,
              and different MP3 bit rates including 64kbps, 128kbps, 192kbps, 256kbps and 320kbps. Y2meta works smoothly
              on your computer, mobile, Tablet, and other Device. it's a simple and Easy YouTube Downloader.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>How to download YouTube videos using Y2meta?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Open YouTube website and copy YouTube URL that you want to download to your Device
                </li>
                <li className="mb-2.5">Paste Copied URL into Y2meta Search box and choose MP4 or MP3 format</li>
                <li className="mb-2.5">
                  Wait a few seconds till conversion is completed and press the "Download" button
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta Advantages</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Convert and download unlimited YouTube videos Free of cost</li>
                <li className="mb-2.5">Fast and easy way to download and save any YouTube video</li>
                <li className="mb-2.5">Our YouTube downloader fully compatible with all devices</li>
                <li className="mb-2.5">It's always free and doesn't need to registration</li>
                <li className="mb-2.5">We provide high-quality audio and video files</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <img className="inline" src={Quality} width="50" height="50" alt="quality"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% Safe and Free</h3>
                <p>
                  Y2meta offers download mp3 and mp4 from YouTube totally free. Also this YouTube Video Downloader
                  totally safe and secure from viruses and Malware.
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

export const Head = () => (
  <>
    <title>Y2meta - Free Youtube Downloader | Download Youtube Video</title>
    <meta
      name="description"
      content="Y2meta is popular Free YouTube Downloader allow to Download YouTube video for Free with high quality in 1080p, 2160p, 2k, 4k, 8k without install software."/>
    <meta name="robots" content="noindex,nofollow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="en"/>
    <meta property="og:title" content="Y2meta - Free Youtube Downloader | Download Youtube Video"/>
    <meta
      property="og:description"
      content="Y2meta is popular Free YouTube Downloader allow to Download YouTube video for Free with high quality in 1080p, 2160p, 2k, 4k, 8k without install software."/>
    <meta property="og:image" content="src/images/logo.png"/>
    <meta property="og:image" content="/images/logo.png"/>
    <meta property="og:image" content="/images/video.svg"/>
    <meta property="og:url" content="https://y2meta.mobi/"/>
    <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzVBNzVEMUUwODIwNjgxMUJFRENFQzEyQjE3RTA1MkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0FGQkU3OUY4QzVBMTFFNjg5MjFGQTQwRjIxQUIzMTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0FGQkU3OUU4QzVBMTFFNjg5MjFGQTQwRjIxQUIzMTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBRUVDOEQ5OEM1QTExRTZCMTE5QjZBNUM4OEFCQjI0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"/>
    <link rel="canonical" href="https://y2meta.mobi/"/>
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
  </>
)