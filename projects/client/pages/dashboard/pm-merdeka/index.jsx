// Pembahasan 12 Oktober 2022
import React from 'react';
import Meta from '../../../components/Meta';
import { API_URL } from '../../../helper';
import { HiRefresh } from 'react-icons/hi';
import axios from 'axios';

const Main = (props) => {

    // Menampung data yang didapat dari API
    const [data, setData] = React.useState([]); // menentukan default value pada state sesuai data yang akan digunakan

    // Menyiapkan fungsi untuk get data dari API saat pertama kali page dirender
    const getData = async () => {
        try {
            let res = await axios.get(API_URL + `/pm-merdeka/data`);
            setData(res.data.data_pmmerdeka)
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getData();
    }, []);

    const printData = () => {
        return data.map((value, idx) => {
            return <tr key={value.idmerdeka} className="bg-white border-b">
                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                    {idx + 1}
                </th>
                <td className="py-4 px-6">
                    {value.type}
                </td>
                <td className="py-4 px-6">
                    {value.mahasiswa}
                </td>
                <td className="py-4 px-6">
                    {value.kode_jadwal}
                </td>
                <td className="py-4 px-6">
                    {value.mk_host}
                </td>
                <td className="py-4 px-6">
                    {value.sks}
                </td>
                <td className="py-4 px-6">
                    {value.nilai}
                </td>
            </tr>
        })
    }

    return <>
        <Meta title="PM-Merdeka | UPN" />
        <div className='container p-5'>
            <div className='box bg-secondary'>
                <div className='border-b flex justify-between items-center border-slate-200/50 p-5'>
                    <h2 className='font-medium text-base'>
                        PM-Merdeka
                    </h2>
                    <button type="button" className="text-white flex items-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <HiRefresh size={24} className="mr-3" /> Refresh
                    </button>
                </div>
                <hr className='my-5' style={{ border: '1.5px solid black' }} />
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-5">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-white uppercase bg-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    No
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Tipe
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Mahasiswa
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Kode Jadwal
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    MK Host
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    SKS
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Nilai
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Menjalankan fungsi printData */}
                            {printData()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default Main;