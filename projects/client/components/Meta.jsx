import Head from 'next/head';

// Component untuk mengkonfigurasi tampilan meta data jika link dari website dishare
// konfigurasi yang diterapkan pada og atau open graph meta data
// open graph meta data merupakan konfigurasi untuk open browse atau situs umum
const Meta = (props) => {

    return <Head>
        <title>{props.title}</title>
        <meta property='og:title' content='Rubick | Welcome'/>
        <meta property='og:description' content='Dashboard Web App'/>
    </Head>
}

export default Meta;