// Pembahasan tgl 07 Oktober 2022
import React from 'react';
import { useRouter } from 'next/router';
import i18next from '../i18n';
const ChangeLng = (props) => {

    const router = useRouter();

    const onChangeLanguage = () => {
        let params = router.locale;

        if (params === 'id') {
            return router.push('/en');
        }
        return router.push('/id');
    }

    return <button onClick={onChangeLanguage} type='button'
        className="text-white font-bold py-3 px-4 mt-3 xl:mt-0 align-top">
        {i18next.t('ButtonLng.title')}
    </button>
}

export default ChangeLng;