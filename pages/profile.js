import React, { useEffect }  from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import fetch from 'isomorphic-unfetch';
import axios from "axios";

const Profile = () => {
    useEffect(() => {
        axios.get('https://minddock-be.herokuapp.com/profile').then(result => console.log('result', result))
    })
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />

            <div>
                <h1>Tu bedzie profil psychologa</h1>
            </div>

        </div>
    )
}

// Profile.getInitialProps = async (ctx) => {
//     console.log('ctx', ctx)
//     const psychologist = await fetch('https://minddock-be.herokuapp.com/profile');
//     console.log('psychologistpsychologist', psychologist)
//     return {
//
//     }
//     // return {
//     //     psychologist: await psychologist.json()
//     // }
// }


export default Profile
