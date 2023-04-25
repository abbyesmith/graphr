import React from 'react';
import Link from 'next/link'; 
import NavBar from './navbar';
import './_app.js'


export default function Home ({currUser}) {
    return (
        <div>
            <NavBar/>
            <h1>{`Welcome ${currUser.username}!`}</h1>
        </div>
    )
}