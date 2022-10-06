import React from 'react';

const Main = (props) => {

    return <div className='container p-5'>
        <div className='box bg-secondary'>
            <div className='border-b border-slate-200/50 p-5'>
                <h2 className='font-medium text-base'>
                    Profile Information
                </h2>
            </div>
            <div className='p-5'>
                <div className='flex'>
                    {/* Image Profile */}
                    <div className="border-2 w-96 border-dashed shadow-sm border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                        <div className="h-40 relative image-fit cursor-pointer zoom-in mx-auto">
                            <img
                                className="rounded-md"
                                alt="Midone Tailwind HTML Admin Template"
                                src='https://i.stack.imgur.com/l60Hf.png'
                            />
                        </div>
                        <div className="mx-auto cursor-pointer relative mt-5">
                            <button type="button" className="btn btn-primary w-full">
                                Change Photo
                            </button>
                            <input
                                type="file"
                                className="w-full h-full top-0 left-0 absolute opacity-0"
                            />
                        </div>
                    </div>
                    <div className='w-full pl-5'>
                        <div>
                            <label
                                htmlFor="update-profile-form-1"
                                className="form-label"
                            >
                                Username
                            </label>
                            <input
                                id="update-profile-form-1"
                                type="text"
                                className="form-control"
                                placeholder="Input text"
                                disabled
                            />
                        </div>
                        <div className='mt-3'>
                            <label
                                htmlFor="update-profile-form-1"
                                className="form-label"
                            >
                                Email
                            </label>
                            <input
                                id="update-profile-form-1"
                                type="text"
                                className="form-control"
                                placeholder="Input text"
                                disabled
                            />
                        </div>
                        <div className='mt-3'>
                            <label
                                htmlFor="update-profile-form-1"
                                className="form-label"
                            >
                                Role
                            </label>
                            <input
                                id="update-profile-form-1"
                                type="text"
                                className="form-control"
                                placeholder="Input text"
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Main;