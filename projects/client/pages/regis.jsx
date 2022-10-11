import React from 'react';
import logoUrl from "../assets/images/logo.svg";
// import logoMBKM from "@/assets/images/logo-mbkm.png";
import illustrationUrl from "../assets/images/illustration.svg";
import Image from 'next/image'
import Link from 'next/link';
import axios from 'axios';
import { API_URL } from '../helper';
import Meta from '../components/Meta';
import { useRouter } from 'next/router';

function Regis(props) {
    const router = useRouter();
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [check, setCheck] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    React.useEffect(() => {
        setLoading(false)
    }, [success])

    const onRegis = async () => {
        try {
            if (username === '' || email === '' || password === '') {
                alert('Isi semua form ⚠️')
            } else {
                if (email.includes('@')) {
                    setLoading(!loading)
                    let res = await axios.post(API_URL + `/user-router/regis`, {
                        username,
                        email,
                        password
                    })

                    if (res.data.success) {
                        setSuccess(res.data.success)
                        alert(res.data.msg);
                        router.push('/'); // Reidrect pindah ke login page
                    }
                } else {
                    alert('Email salah ⚠️')
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Meta title="Create your account" />
            <div className="bg-primary">
                <div className="container sm:px-10">
                    <div className="block xl:grid grid-cols-2 gap-4">
                        {/* BEGIN: Login Info */}
                        <div className="hidden xl:flex flex-col min-h-screen">
                            <Link href="/" >
                                <a className="-intro-x flex items-center pt-5">
                                    <Image
                                        src={logoUrl}
                                        alt="Midone Tailwind HTML Admin Template"
                                        width="32px"
                                        height="30px"
                                    />
                                </a>
                            </Link>
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
                        <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                            <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-2/3">
                                <h2 className="intro-x font-bold text-white text-2xl xl:text-3xl text-center xl:text-left">
                                    Sign Up
                                </h2>
                                <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">
                                    A few more clicks to sign in to your account. Manage all your
                                    e-commerce accounts in one place
                                </div>
                                <div className="intro-x mt-8">
                                    <input
                                        type="text"
                                        className="intro-x login__input w-full py-3 px-4 block"
                                        placeholder="Username"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="intro-x login__input w-full py-3 px-4 block my-4"
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        className="intro-x login__input w-full py-3 px-4 block"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="intro-x flex items-center text-slate-400 dark:text-slate-400 mt-4 text-xs sm:text-sm">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        className="border-2 border-white rounded-lg mr-2"
                                        onChange={(e) => setCheck(e.target.checked)}
                                    />
                                    <label
                                        className="cursor-pointer select-none"
                                        htmlFor="remember-me"
                                    >
                                        I agree to the Envato
                                    </label>
                                    <a className="text-primary dark:text-slate-200 ml-1" href="">
                                        Privacy Policy
                                    </a>
                                    .
                                </div>
                                <div className="intro-x mt-5 xl:mt-8 text-center xl:text-right">
                                    <button disabled={!check} type='button' onClick={onRegis} className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 ">
                                        {
                                            loading ?
                                                <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg>
                                                : null
                                        }
                                        Register
                                    </button>
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

export default Regis;