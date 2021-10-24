import React from 'react'
import {Experiences, Hero, Presentation, Stack} from '../components/'

export default function Home() {
	return (
		<main>
			<Hero />
			<div className='container mx-auto'>
				<Presentation />
				<Stack />
				<Experiences />
			</div>
		</main>
	)
}
