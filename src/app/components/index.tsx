import { useState } from 'react'
import Head from 'next/head'

const Counter: React.FunctionComponent = () => {
    const [count, setCount] useState(0)

    return (
        <div>
            <Head>
                <title>Counter</title>
            </Head>
        </div>
    )
}