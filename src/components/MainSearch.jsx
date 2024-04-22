'use client'

import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

const MainSearch = () => {
	const [input, setInput] = useState('')
	const router = useRouter()
	const handleSubmit = e => {
		e.preventDefault()
		if (!input.trim()) return
		router.push(`/search/web?searchTerm=${input}`)
	}
	const randomSearch = async e => {
		const response = await fetch('https://random-word-api.herokuapp.com/word')
			.then(res => res.json())
			.then(data => data[0])
		if (!response) return
		router.push(`/search/web?searchTerm=${response}`)
	}
	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='flex items-center w-full mt-8 mx-auto max-w-[90%] border border-zinc-900 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'
			>
				<AiOutlineSearch className='text-xl text-pink-100 mr-3' />
				<input
					type='text'
					className='flex-grow text-pink-100 bg-zinc-800 focus:outline-none'
					onChange={e => setInput(e.target.value)}
				/>
				<BsFillMicFill className='text-lg text-pink-100 ml-3' />
			</form>
			<div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4'>
				<button
					className='bg-zinc-900 rounded-md text-sm text-pink-100 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md h-10 px-4'
					onClick={handleSubmit}
				>
					Search
				</button>
				<button
					className='bg-zinc-900 rounded-md text-sm text-pink-100 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md h-10 px-4'
					onClick={randomSearch}
				>
					I am Feeling Lucky
				</button>
			</div>
		</>
	)
}

export default MainSearch
