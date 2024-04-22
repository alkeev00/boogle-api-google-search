import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const MainHeader = () => {
	return (
		<header className='flex justify-end p-5 text-md text-pink-100'>
			<div className='flex space-x-4 items-center'>
				<Link
					href={'https://developers.google.com/custom-search?hl=en'}
					className='mt-4 flex items-center gap-2 hover:text-pink-400 transition duration-300'
				>
					<FaGoogle className='text-xl' />
					API Search Engine
				</Link>
			</div>
		</header>
	)
}

export default MainHeader
