import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { API_URL } from '../helper';

const Main = (props) => {
    const router = useRouter();
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        keepLogin()
    }, []);

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [data]);

    const keepLogin = async () => {
        try {
            let res = await axios.post(API_URL + `/user-router/auth`, {
                username: "pixobo9792",
                password: "Abcd123!"
            })
            localStorage.setItem('_t', res.data.data);
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    // if (loading) {
    //     return <h2 className='font-medium text-base'>
    //         Loading...
    //     </h2>
    // } else {
    //     if (data.role === props.role) {
    return props.children
    //     } else {
    //         router.push('/error')
    //     }
    // }
    // return <div></div>
}

export default Main;