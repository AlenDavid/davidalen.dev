import React from 'react'
import Head from 'next/head'

import {Experiences, Hero, Presentation, Stack, Footer} from '../components/'

export default function Home() {
	return (
		<>
			<Head>
				<title>David Alen</title>
			</Head>
			<main>
				<Hero />
				<div className='container mx-auto'>
					<Presentation />
					<Stack />
					<Experiences />
				</div>
				<Footer />
			</main>
		</>
	)
}
