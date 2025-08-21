import { useState } from 'react'
import Head from 'next/head'

const Counter: React.FunctionComponent = () => {
    const [count, setCount] useState(0)

    return (
        <div>
            <Head>
                <title>Counter</title>
            </Head>
            <h1 style={{ color: 'green' }}></h1>
            <button onClick=
                {() => setCount(count+1)}>
                    Increment
                </button>
        </div>
    )
}

export default Counter;