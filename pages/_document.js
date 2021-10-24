// pages/_document.js
import React from 'react'
import Document, {Html, Main, Head, NextScript} from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta
						name='keywords'
						content='David Alen, JavaScript, TypeScript, Software Engineer, Senior Software Engineer, GitHub, Open Source'
					/>
					<meta name='description' content='David Alen website' />
					<meta name='author' content='David Alen' />
					<link
						href='https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Kaisei+Opti&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
