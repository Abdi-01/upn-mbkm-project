import React from 'react';
import Meta from '../../../components/Meta';
import { HiRefresh } from 'react-icons/hi';

const Main = (props) => {

    return <>
        <Meta title="PM-Merdeka | UPN" />
        <div className='container p-5'>
            <div className='box bg-secondary'>
                <div className='border-b flex justify-between items-center border-slate-200/50 p-5'>
                    <h2 className='font-medium text-base'>
                        PM-Merdeka
                    </h2>
                    <button type="button" className="text-white flex items-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <HiRefresh size={24} className="mr-3"/> Refresh
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Main;