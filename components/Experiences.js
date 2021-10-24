import React from 'react'

const EducationalExperiences = () => {
	return (
		<div>
			<h2 className='text-4xl font-bold mt-16'>Educational Background</h2>
			<div className='flex flex-col'>
				<div className='mb-6'>
					<h3 className='text-3xl font-bold mt-12'>University Feevale</h3>
					<h4 className='text-2xl font-bold'>Computer Science</h4>
					<p className='text-gray-400'>jan 2017 - current</p>
				</div>
				<div className='flex flex-col'>
					<div>
						<div className='mb-4'>
							<h4 className='text-2xl font-bold'>Academic Directory</h4>
							<p className='font-sans text-gray-400'>2021</p>
						</div>
						<p className='mb-4'>
							Member of Feevale&apos;s Computer Science&apos;s Academic
							Directory
						</p>
					</div>
					<div>
						<div className='mb-4'>
							<h4 className='text-2xl font-bold'>Student Mentor</h4>
							<p className='font-sans text-gray-400'>2018-2020</p>
						</div>
						<p>Calculus mentoring for undergraduate students</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const ProfessionalExperiences = () => {
	return (
		<div>
			<h2 className='text-4xl font-bold mt-16'>Profissional Experiences</h2>
			<div className='flex flex-col'>
				<div className='mb-6 flex flex-col gap-4'>
					<div className='mb-4'>
						<h3 className='text-3xl font-bold mt-12'>Fabric</h3>
						<h4 className='text-2xl font-bold'>Senior Software Engineer</h4>
						<p className='text-gray-400'>
							may 2021 - current, through BairesDev nearshore program{' '}
						</p>
					</div>
					<p>
						Engineer responsible for setting and developing technical
						requirements.
					</p>
					<p>
						Highlights: Solving scalability, maintenance and high complexity
						tasks. Lead maintainer of shared libraries. Training and mentoring
						junior developers. Presenting on brown bag sessions. Code
						best-practices evangelist.
					</p>
					<p>
						Full-cycle activities: Front-end development, Back-end development,
						Code review, Test and Quality Assurance, Deploy and DevSecOps
					</p>
				</div>
				<div className='mb-6 flex flex-col gap-4'>
					<div className='mb-4'>
						<h3 className='text-3xl font-bold mt-12'>SAP</h3>
						<h4 className='text-2xl font-bold'>Software Engineer</h4>
						<p className='text-gray-400'>
							jan 2021 - may 2021, through Meta nearshore program
						</p>
					</div>
					<p>Engineer responsible to recieve and solve user feedback issues.</p>
					<p>Activities:</p>
					<p>Feedback triage Front-end development Back-end development</p>
				</div>
				<div className='mb-6 flex flex-col gap-4'>
					<div className='mb-4'>
						<h3 className='text-3xl font-bold mt-12'>Birdie</h3>
						<h4 className='text-2xl font-bold'>Software Engineer</h4>
						<p className='text-gray-400'>jun 2020 - jan 2021</p>
					</div>
					<p>
						Engineer responsible for aplying business requirements to the
						product.
					</p>
					<p>Highlights:</p>
					<p>
						Built the enterprise&apos;s MVP from scratch. Led the implementation
						of a high-functional schedule system under a short deadline.
					</p>
					<p>Full-cycle activities:</p>
					<p>
						Front-end development, Back-end development, Code review, Test and
						Quality Assurance, Deploy and DevOps
					</p>
				</div>
				<div className='mb-6 flex flex-col gap-4'>
					<div className='mb-4'>
						<h3 className='text-3xl font-bold mt-12'>BringUP</h3>
						<h4 className='text-2xl font-bold'>Software Engineer</h4>
						<p className='text-gray-400'>aug 2018 - jun 2020</p>
					</div>
					<p>
						Engineer responsible for collecting client requirements and
						developing them for the product.
					</p>
					<p>Highlights:</p>
					<p>
						Unique developer in company, had to handle cross development of all
						products. Implemented all product features of 2019 and 2020.
					</p>
					<p>Full-cycle activities:</p>
					<p>
						Front-end development Back-end development Code review Test and
						Quality Assurance Deploy DevOps
					</p>
				</div>
			</div>
		</div>
	)
}

export function Experiences() {
	return (
		<section className='px-20 grid grid-cols-1 lg:grid-cols-2 gap-16'>
			<ProfessionalExperiences />
			<EducationalExperiences />
		</section>
	)
}
