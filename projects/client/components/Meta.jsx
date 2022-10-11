import Head from 'next/head';

// Component untuk mengkonfigurasi tampilan meta data jika link dari website dishare
// konfigurasi yang diterapkan pada og atau open graph meta data
// open graph meta data merupakan konfigurasi untuk open browse atau situs umum
const Meta = (props) => {

    return <Head>
        <title>{props.title}</title>
        <meta property='og:title' content='Rubick | Welcome' />
        <meta property='og:description' content='Dashboard Web App' />
        {/* Import Flowbite CDN */}
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
    </Head>
}

export default Meta;