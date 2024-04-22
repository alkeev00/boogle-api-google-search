import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import { FaGoogle } from 'react-icons/fa'
import SearchHeaderOptions from './SearchHeaderOptions'

const SearchHeader = () => {
	return (
		<header className='sticky top-0 bg-zinc-800'>
			<div className='flex w-full p-6 items-center justify-between'>
				<Link href='/'>
					<h1 className='text-3xl font-bold select-none hidden sm:flex'>
						<div className='text-pink-400'>B</div>
						<div className='text-pink-200'>o</div>
						<div className='text-pink-700'>o</div>
						<div className='text-pink-300'>g</div>
						<div className='text-pink-400'>l</div>
						<div className='text-pink-500'>e</div>
					</h1>
				</Link>
				<div className='flex-1'>
					<SearchBox />
				</div>
				<Link
					href={'https://developers.google.com/custom-search?hl=en'}
					className=' flex items-center gap-2 text-pink-100 hover:text-pink-400 transition duration-300'
				>
					<FaGoogle className='text-xl' />
					API Search Engine
				</Link>
			</div>
			<SearchHeaderOptions />
		</header>
	)
}

export default SearchHeader
