import { useState, useEffect } from "react";
import Link from "next/link";
// import { Lucide } from "../../base-components";
import logoUrl from "../../assets/images/logo.svg";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MdAccountCircle, MdHome, MdInfo } from 'react-icons/md'
function Main(props) {
    const { pathname } = useRouter();

    if (pathname.includes('dashboard')) {
        return (
            <div className="py-2">
                <div className="flex mt-[4.7rem] md:mt-0">
                    {/* BEGIN: Side Menu */}
                    <nav className="side-nav py-5">
                        <Link
                            href="/dashboard"
                        >
                            <div className="intro-x flex items-center pl-5 pt-4">
                                <Image
                                    src={logoUrl}
                                    alt="Midone Tailwind HTML Admin Template"
                                    width="32px"
                                    height="30px"
                                />
                                <span className="xl:block text-white text-lg ml-3">
                                    Rubick
                                </span>
                            </div>
                        </Link>

                        <ul className="py-3" style={{ marginTop: '20%' }}>
                            {/* BEGIN: First Child */}
                            <li>
                                <Link href='/dashboard/pm-merdeka'>
                                    <a
                                        className={`side-menu ${pathname.includes('pm-merdeka') && 'side-menu--active'}`}
                                        style={{ backgroundColor: pathname.includes('pm-merdeka') && '#F1F5F8' }}
                                    >
                                        <div className="side-menu__icon">
                                            <MdHome size={24}/>
                                        </div>
                                        <div className="side-menu__title">
                                            PM-Merdeka
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/dashboard/profile'>
                                    <a
                                        className={`side-menu ${pathname.includes('profile') && 'side-menu--active'
                                            }`}
                                        style={{ backgroundColor: pathname.includes('profile') && '#F1F5F8' }}
                                    >
                                        <div className="side-menu__icon">
                                            <MdAccountCircle size={24}/>
                                        </div>
                                        <div className="side-menu__title">
                                            Profile
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/dashboard/information'>
                                    <a
                                        className={`side-menu ${pathname.includes('information') && 'side-menu--active'
                                            }`}
                                        style={{ backgroundColor: pathname.includes('information') && '#F1F5F8' }}
                                    >
                                        <div className="side-menu__icon">
                                            <MdInfo size={24}/>
                                        </div>
                                        <div className="side-menu__title">
                                            Information
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            {/* END: First Child */}
                        </ul>
                    </nav>
                    {/* END: Side Menu */}
                    {/* BEGIN: Content */}
                    <div className="content" style={{ backgroundColor: '#F1F5F8', paddingBottom: 0 }}>
                        {/* <TopBar /> */}
                        {props.pages}
                    </div>
                    {/* END: Content */}
                </div>
            </div >
        );
    } else {
        return <>
            {props.pages}
        </>
    }
}

export default Main;
