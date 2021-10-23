/* eslint-disable react/prop-types */
import React from 'react'

const PresentationCard = ({title, children}) => {
	return (
		<div className='mt-10'>
			<h3 className='mb-4'>{title}</h3>
			{children}
		</div>
	)
}

export function Presentation() {
	return (
		<section className='px-20'>
			<h2 className='text-3xl mt-16'>Presentation</h2>
			<PresentationCard title='about_david()'>
				<p>
					Undergraduate in Computer Science with 4 years of professional
					experience in nacional and international enterprises on development,
					architecture, infrastructure and software roadmap.
				</p>
			</PresentationCard>
			<PresentationCard title='carrer_objectives()'>
				<p>
					My main objective is to develop workspace experiences where teams can
					build better products that can enhance people&apos;s life. As complete
					professional, who understands tech and business requirements and can
					implement solutions in a variety of languages and technologies, I aim
					to help other people grow in their tech carrers through free mentoring
					and consultancy.
				</p>
			</PresentationCard>
		</section>
	)
}
