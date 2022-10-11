import React from 'react';
import Meta from '../../components/Meta';

const Main = (props) => {

    const [data, setData] = React.useState([
        {
            id: 1,
            title: 'Pengumuman MBKM 2022',
            image: 'https://informatika.umm.ac.id/files/image/Banner.jpg',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        },
        {
            id: 2,
            title: 'Penerimaan MBKM Univ. Indonesia',
            image: 'https://informatika.umm.ac.id/files/image/Banner.jpg',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        },
        {
            id: 3,
            title: 'Penerimaan MBKM Univ. Makasar',
            image: 'https://informatika.umm.ac.id/files/image/Banner.jpg',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        }
    ]);

    const printData = () => {
        // Melooping state data untuk menghasilkan array baru dalam bentuk komponen
        return data.map((value, index) => {
            return <div key={value.id} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                <a href="#">
                    <img class="rounded-t-lg" src={value.image} alt="thumbnail" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{value.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                        {value.content}
                    </p>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600">
                        Read more
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        });
    }

    return <>
        <Meta title="Information" />
        <div className='my-5'>
            <p className='text-4xl'>Information page</p>

            {/* Info Card */}
            <div className='mt-10 flex flex-wrap justify-around'>
                {printData()}
            </div>
        </div>
    </>
}

export default Main;