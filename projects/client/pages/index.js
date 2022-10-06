import React from 'react';
import logoUrl from "../assets/images/logo.svg";
// import logoMBKM from "@/assets/images/logo-mbkm.png";
import illustrationUrl from "../assets/images/illustration.svg";
import Image from 'next/image';
import Link from 'next/link';
import BtnChangeLng from '../components/ChangeLng';
import i18next from '../i18n';
import Meta from '../components/Meta';

function Home(props) {
  const [toggle, setToggle] = React.useState(true);
  return (
    <>
    <Meta title="Welcome"/>
      <div className="bg-primary">
        <div className="container sm:px-10">
          <div className="block xl:grid grid-cols-2 gap-4">
            {/* BEGIN: Login Info */}
            <div className="hidden xl:flex flex-col min-h-screen">
              <a href="" className="-intro-x flex items-center pt-5">
                <Image
                  src={logoUrl}
                  alt="Midone Tailwind HTML Admin Template"
                  width="32px"
                  height="30px"
                />
              </a>
              <div className="my-auto">
                <Image
                  src={illustrationUrl}
                  alt="Midone Tailwind HTML Admin Template"
                  className="-intro-x w-1/2 -mt-16"
                />
                <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                  A few more clicks to <br />
                  sign in to your account.
                </div>
                <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                  Manage all your e-commerce accounts in one place
                </div>
              </div>
            </div>
            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <div>
              <div className="-intro-x text-right pt-5">
                <BtnChangeLng />
              </div>
              <div className="h-auto xl:h-screen flex py-5 xl:py-0 my-auto ">
                <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                  <h2 className="intro-x font-bold text-white text-2xl xl:text-3xl text-center xl:text-left">
                    {i18next.t('SignInPage.title')}
                  </h2>
                  <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">
                    A few more clicks to sign in to your account. Manage all your
                    e-commerce accounts in one place
                  </div>
                  <div className="intro-x mt-8">
                    <input
                      type="text"
                      className="intro-x login__input w-full py-3 px-4 block"
                      placeholder={i18next.t('SignInPage.form.email')}
                    />
                    <input
                      type="password"
                      className="intro-x login__input w-full py-3 px-4 block mt-4"
                      placeholder={i18next.t('SignInPage.form.password')}
                    />
                  </div>
                  <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                    <div className="flex items-center mr-auto">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="border-2 border-white rounded-lg mr-2"
                      />
                      <label
                        className="cursor-pointer select-none text-white"
                        htmlFor="remember-me"
                      >
                        {i18next.t('SignInPage.content.checkBox')}
                      </label>
                    </div>
                    <a className="text-white" href="">{i18next.t('SignInPage.content.forgot')}</a>
                  </div>
                  <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                    <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">
                      {i18next.t('SignInPage.button.signIn')}
                    </button>
                    <Link href='/regis'>
                      <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">
                        {i18next.t('SignInPage.button.signUp')}
                      </button>
                    </Link>
                  </div>
                  <div className="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left">
                    By signin up, you agree to our
                    <a className="text-primary dark:text-slate-200" href="">
                      Terms and Conditions
                    </a>
                    &
                    <a className="text-primary dark:text-slate-200" href="">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Login Form */}
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;