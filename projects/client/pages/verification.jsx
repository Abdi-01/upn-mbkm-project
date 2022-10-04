import React from 'react';
import phoneIllustration from '../assets/images/phone-illustration.svg';
import Image from 'next/image';

const VerifPage = (props) => {

    return <div>
        <div className="container">
            {/* BEGIN: Error Page */}
            <div className="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-left">
                <div className="-intro-x lg:mr-20">
                    <Image
                        src={phoneIllustration}
                        alt="Midone Tailwind HTML Admin Template"
                        width="360px"
                        height="360px"
                    />
                </div>
                <div className="text-white mt-10 lg:mt-0">
                    <div className="intro-x text-4xl font-medium">Verified your account</div>
                    <div className="intro-x text-xl lg:text-3xl font-medium mt-5">
                        Welcome to dashboard.
                    </div>
                    <div className="intro-x text-lg mt-3">
                        Your link expired in 1 hour
                    </div>
                    <button className="intro-x btn py-3 px-4 text-white border-white dark:border-darkmode-400 dark:text-slate-200 mt-10">
                       Verify Now
                    </button>
                </div>
            </div>
            {/* END: Error Page */}
        </div>
    </div>
}

export default VerifPage;