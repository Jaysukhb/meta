import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import Logo from "../images/logo.png";
import {Link} from "gatsby";

const PrivacyPolicy = () => {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [openLanguage, setOpenLanguage] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setOpenLanguage(!openLanguage)
  };

  const languageOptions = [{lang: "en", label: "English", path: "/privacy-policy/"}];
  return (
    <>
      <Helmet>
        <title>Y2meta: Privacy Policy - YouTube Downloader</title>
        <meta
          name="description"
          content="This is Y2meta Privacy Policy here we describes how we protect the collection and disclosure of your information"/>
        <meta name="robots" content="noindex,nofollow"/>
        <link rel="icon" href={Logo}/>
        <link rel="canonical" href="https://y2meta.mobi/privacy-policy/"/>
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
                      to="/">
                      YouTube Downloader
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                      to="/youtube-to-mp3">
                      YouTube to MP3
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                      to="/youtube-to-mp4">
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
                            to="/youtube-to-mp3">
                            YouTube to MP3
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                            to="/youtube-to-mp4">
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
        <section className="text-justify">
          <h1 className="text-center font-semibold my-4	text-2xl">Privacy Policy</h1>
          <p className="mb-2.5">This Privacy Policy explains how Y2meta collects, uses, and protects the personal
            information of our users. By using our website, you agree to the terms of this Privacy Policy. If you do
            not
            agree with our policies and practices, please do not use our website.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Information We Collect</h1>
          <p className="mb-2.5">When you use our website, we may collect personal information that you voluntarily
            provide
            to us, such as your name, email address, and other contact information. We may also collect non-personal
            information, such as your IP address, browser type, and operating system.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">How We Use Your Information</h1>
          <p className="mb-2.5">We may use your personal information to provide you with the services and products
            that
            you have requested, to send you information about our products and services, and to improve the quality
            of our
            website. We may also use non-personal information to analyze trends and to improve the functionality and
            performance of our website.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Cookies and Other Tracking Technologies</h1>
          <p className="mb-2.5">We use cookies and other tracking technologies to enhance your user experience and to
            collect information about how you use our website. Cookies are small data files that are stored on your
            computer or mobile device when you visit our website. You can disable cookies in your browser settings,
            but
            this may affect the functionality of our website.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Third-Party Services</h1>
          <p className="mb-2.5">We may use third-party services, such as Google Analytics, to analyze website traffic
            and
            usage. These third-party services may use cookies and other tracking technologies to collect information
            about
            your use of our website.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Data Security</h1>
          <p className="mb-2.5">We take reasonable measures to protect the personal information of our users from
            unauthorized access, disclosure, or use. However, no data transmission over the internet or electronic
            storage
            system can be guaranteed to be 100% secure.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Children’s Privacy</h1>
          <p className="mb-2.5">Our website is not intended for children under the age of 13. We do not knowingly
            collect
            personal information from children under the age of 13. If you are a parent or guardian and you believe
            that
            your child has provided us with personal information, please contact us.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Changes to the Privacy Policy</h1>
          <p className="mb-2.5">Y2meta reserves the right to modify or update this Privacy Policy at any time. Your
            continued use of our website after any changes to this Privacy Policy constitutes your acceptance of the
            new
            terms.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Contact Us</h1>
          <p className="md:mb-16 mb-2.5">If you have any questions or concerns about this Privacy Policy or our
            website,
            please contact us at Admin.</p>
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
  )
}
export default PrivacyPolicy