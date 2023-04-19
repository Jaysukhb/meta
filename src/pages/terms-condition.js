import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import Logo from "../images/logo.png";
import {Link} from "gatsby";

const TermCondition = () => {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [openLanguage, setOpenLanguage] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setOpenLanguage(!openLanguage)
  };

  const languageOptions = [{lang: "en", label: "English", path: "/terms-condition/"}];
  return (
    <>
      <Helmet>
        <title>Y2meta: Terms and Conditions - YouTube Downloader</title>
        <meta
          name="description"
          content="Certain rules and guidelines of Y2meta YouTube Downloader are given in this legal document. Users must agree to use the Website."/>
        <meta name="robots" content="noindex,nofollow"/>
        <link rel="icon" href={Logo}/>
        <link rel="canonical" href="https://y2meta.mobi/terms-condition/"/>
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
          <h1 className="text-center font-semibold my-4	text-2xl">Terms and Conditions</h1>
          <p className="mb-2.5">Welcome to Y2meta!</p>
          <p className="mb-2.5">By accessing or using our website, you agree to be bound by these Terms and Conditions,
            our Privacy Policy, and any other guidelines, rules, or policies that we may publish from time to time. If
            you
            do not agree to these Terms and Conditions, please do not use our website.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Use of the Website</h1>
          <p className="mb-2.5">Y2meta provides a platform for users to convert and download YouTube videos in various
            formats. By using our website, you agree to use it only for lawful purposes and in accordance with these
            Terms
            and Conditions. You agree not to use the website for any illegal or unauthorized activity, including but not
            limited to:<br/>
            a. Uploading or downloading copyrighted content without permission <br/>
            b. Distributing content that is defamatory, obscene, or offensive<br/>
            c. Hacking, attempting to hack, or damaging our website or our users’ computers in any way.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">User Accounts</h1>
          <p className="mb-2.5">To use certain features of the website, you may be required to create an account. You
            are
            responsible for maintaining the confidentiality of your account information, including your password, and
            for
            all activities that occur under your account. You agree to notify us immediately of any unauthorized use of
            your account or password or any other breach of security.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Intellectual Property</h1>
          <p className="mb-2.5">Y2meta respects the intellectual property rights of others and expects our users to do
            the
            same. You must not use our website to infringe the intellectual property rights of any person or entity. If
            you believe that your work has been copied in a way that constitutes copyright infringement, please contact
            us.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Disclaimer of Warranties</h1>
          <p className="mb-2.5">The website and all content and services provided through it are provided on an “as is”
            and “as available” basis, without any warranty or condition, express, implied, or statutory. Y2meta does not
            warrant that the website will be uninterrupted or error-free or that any errors will be corrected.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Limitation of Liability</h1>
          <p className="mb-2.5">In no event shall Y2meta or its affiliates, licensors, or service providers be liable
            for
            any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use
            of the website or any content or services provided through it.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Indemnification</h1>
          <p className="mb-2.5">You agree to indemnify, defend, and hold harmless Y2meta and its affiliates, licensors,
            and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs,
            expenses, or fees (including reasonable attorneys’ fees) arising out of or relating to your violation of
            these
            Terms and Conditions or your use of the website.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Governing Law and Dispute Resolution</h1>
          <p className="mb-2.5">These Terms and Conditions shall be governed by and construed in accordance with the
            laws
            of the state of [insert state] without giving effect to any choice or conflict of law provision or rule. Any
            dispute arising out of or relating to these Terms and Conditions shall be submitted to confidential
            arbitration in the state of [insert state], except that to the extent you have in any manner violated or
            threatened to violate our intellectual property rights, we may seek injunctive or other appropriate relief
            in
            any state or federal court in the state.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Changes to the Terms and Conditions</h1>
          <p className="mb-2.5">Y2meta reserves the right, at its sole discretion, to modify or replace these Terms and
            Conditions at any time. Your continued use of the website after any such changes constitutes your acceptance
            of the new Terms and Conditions.</p>
          <h1 className="mt-3	mb-2 text-xl font-semibold">Contact Us</h1>
          <p className="md:mb-16 mb-2.5">If you have any questions about these Terms and Conditions or the website,
            please
            contact us at Admin.</p>
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
export default TermCondition