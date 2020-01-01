import React  from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router'


const Login = () => {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />

            <div>
                <input/>
                <input/>
                <button onClick={() => axios.post('https://minddock-be.herokuapp.com/login')
                    .then(() => {
                        router.push('/profile')
                    })}>Zaloguj sie</button>
            </div>

        </div>
    )
}


export default Login
