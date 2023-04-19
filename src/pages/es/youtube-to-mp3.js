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
  const [selectedLanguage, setSelectedLanguage] = useState("es");
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
        <title>YouTube to MP3 Converter - Y2meta</title>
        <meta
          name="description"
          content="Y2meta is Free YouTube to MP3 Converter, allow to MP3 from YouTube Free on PC, iPhone, and Android without install software."/>
        <meta name="robots" content="noindex,nofollow"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Y2meta"/>
        <meta property="og:locale" content="es"/>
        <meta property="og:title" content="YouTube to Mp3 Converter - Y2meta"/>
        <meta
          property="og:description"
          content="Y2meta is Free YouTube to MP3 Converter, allow to MP3 from YouTube Free on PC, iPhone, and Android without install software."/>
        <meta property="og:image" content={Logo}/>
        <meta property="og:url" content="https://y2meta.mobi/es/youtube-to-mp3/"/>
        <link rel="icon" href={Logo}/>
        <link rel="canonical" href="https://y2meta.mobi/es/youtube-to-mp3/"/>
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
                <Link to="/es/" className="flex items-center">
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
                      to="/es/">
                      YouTube Downloader
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                      to="/es/youtube-to-mp3/">
                      YouTube to MP3
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                      to="/es/youtube-to-mp4/">
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
                            to="/es/">
                            YouTube Downloader
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                            to="/es/youtube-to-mp3/">
                            YouTube to MP3
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                            to="/es/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">YouTube to MP3 Converter</h1>
            <p>Convert and download YouTube videos to MP3 free</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">Best YouTube to MP3 Converter</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta is a fast and simple YouTube to MP3 converter. Our Popular YouTube to MP3 downloader allows you to
              easily convert and download YouTube videos to MP3 in High quality and free of cost. Also, you can download
              mp3 with multiple quality options such as 64kbps, 128kbps, 192kbps, and upto 320kbps.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              This YouTube to Mp3 converter works smoothly on All devices including desktops, laptops, tablets, and
              smartphones without installing any application or software. The conversion process is quick and convenient
              Just paste YouTube URL and a few simple steps your youtube mp3 file ready for download in a few seconds.
              it's totally safe and secure YouTube MP3 converter.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>How to Convert YouTube Video to MP3 Online for Free</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Paste YouTube video URL or insert Keyword into search box, then click "Search" button.
                </li>
                <li className="mb-2.5">Choose MP3 quality and press "Download" button.</li>
                <li className="mb-2.5">
                  Wait few seconds and After successful Mp3 conversion click on Download button.
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta Advantages</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Convert and Download MP3 files from YouTube without any limitation</li>
                <li className="mb-2.5">No need to install any software and without registration</li>
                <li className="mb-2.5">100% Safe and Secure YouTube Converter</li>
                <li className="mb-2.5">compatible with all browsers and Devices</li>
                <li className="mb-2.5">Totally Free convert Youtube to mp3 with High quality audio</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <img className="inline" width="50" height="50" src={Quality} alt="quality"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Easy and Fast Conversion</h3>
                <p>
                  Download MP3 from YouTube is Easy Just enter the YouTube URL that you want to download and click the
                  Download button. your converted files ready in a few seconds.
                </p>
              </div>
            </div>
            <div>
              <img className="inline" width="50" height="50" src={Video} alt="video"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Provide High-Quality Formats</h3>
                <p>
                  We offer to convert YouTube to mp3 in high-quality formats such as 64kbps, 128kbps, 192kbps, 256kbps,
                  and 320 kbps. You can choose and download As per the requirement.
                </p>
              </div>
            </div>
            <div>
              <img className="inline" width="50" height="50" src={Downloads} alt="download"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Conversion Without limitation</h3>
                <p>
                  Convert any YouTube video to MP3 without limitation for free of cost. There is no need to install any
                  software or apps to download Mp3 from Youtube.
                </p>
              </div>
            </div>
            <div>
              <img className="inline" width="50" height="50" src={Gift} alt="gift"/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Compatible with All Platforms</h3>
                <p>
                  Our YouTube Converter is compatible with All types of devices PC, Tablet, iPhone, Android phone, etc
                  Also Y2meta support all browsers including Chrome, Microsoft Edge, Firefox, Opera, and any other.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">FAQ</h2>
            <h3 className="mt-2.5 font-semibold">Is this YouTube to MP3 converter free to use?</h3>
            <p>
              Yes, Our Y2meta converter is totally free to download Mp3 from YouTube without register an account
            </p>
            <h3 className="mt-2.5 font-semibold">Can I use this Youtube to mp3 on all devices?</h3>
            <p>
              Yes, of course, This YouTube to Mp3 converter supports all types of devices including computers, Mobile,
              and Tablets.
            </p>
            <h3 className="mt-2.5 font-semibold">How to download MP3 from YouTube videos?</h3>
            <p>Copy Youtube Video link that you want to convert YouTube to mp3</p>
            <p>Paste YouTube URL into search box</p>
            <p>Press Search button then choose Mp3 and click on convert button</p>
            <p>Wait a few seconds for conversion successfully completed then click the "Download" button.</p>
            <h3 className="mt-2.5 font-semibold">What is the maximum number of Mp3 downloads from YouTube?</h3>
            <p>
              You can convert YouTube to Mp3 unlimited and there are no restrictions when it comes to using this YouTube
              converter. all features totally free of cost and without limitation.
            </p>
            <h3 className="mt-2.5 font-semibold">Do I need to install a browser extension or software?</h3>
            <p>
              No, Our YouTube Converter works on the web so you don't need to install any software or extension. you
              just need a web browser and a reliable internet connection.
            </p>
            <h3 className="mt-2.5 font-semibold">it is safe to download mp3 from YouTube using this YouTube
              converter?</h3>
            <p>
              Yes, Our Youtube to Mp3 converter is secure with SSL layer that make sure that those people can download
              videos safely. we daily monitoring security our YouTube To Mp3 converter for safe from viruses and
              malware.
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
