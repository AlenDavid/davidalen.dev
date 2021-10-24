import React from 'react'
import Head from 'next/head'

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

// eslint-disable-next-line react/prop-types
function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
				<title property='og:title'>David Alen</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
					key='viewport-meta'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
