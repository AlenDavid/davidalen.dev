import React from 'react'
import {Experiences, Hero, Presentation, Stack} from '../components/'

export default function Home() {
	return (
		<main className='container'>
			<Hero />
			<Presentation />
			<Stack />
			<Experiences />
		</main>
	)
}
