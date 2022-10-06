// import '../styles/globals.css';
import "../assets/css/app.css";
import { RecoilRoot } from 'recoil';
import LayoutSideNav from '../layout/side-menu';

// Multilanguage
import i18next from '../i18n';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.locale) {
    i18next.changeLanguage(router.locale);
  }
  return <RecoilRoot>
    <LayoutSideNav pages={<Component {...pageProps} />} />
  </RecoilRoot>
}

export default MyApp
