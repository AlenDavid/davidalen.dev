import React from 'react'

export function Experiences() {
	return (
		<section className='px-20 grid grid-cols-2 gap-16'>
			<div>
				<h2 className='text-4xl font-bold mt-16'>Profissional Experiences</h2>
				<div>
					<div>
						<h3>Fabric</h3>
						<p>Senior Software Engineer</p>
						<p>may 2021 - current, through BairesDev nearshore program </p>
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
							Full-cycle activities: Front-end development, Back-end
							development, Code review, Test and Quality Assurance, Deploy and
							DevSecOps
						</p>
					</div>
				</div>
			</div>
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
		</section>
	)
}
