'use client'

import { RxCross2 } from 'react-icons/rx'
import { BsFillMicFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

const SearchBox = () => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const searchTerm = searchParams.get('searchTerm')
	const [term, setTerm] = useState(searchTerm || '')
	const handleSubmit = e => {
		e.preventDefault()
		if (!term.trim()) return
		router.push(`/search/web?searchTerm=${term}`)
	}
	return (
		<form
			onSubmit={handleSubmit}
			className='flex  bg-zinc-900 rounded-full shadow-lg px-5 py-3 ml-0 sm:ml-10 mr-5 flex-grow max-w-3xl items-center'
		>
			<input
				type='text'
				className='w-full focus:outline-none bg-zinc-900 text-pink-100'
				value={term}
				onChange={e => setTerm(e.target.value)}
			/>
			<div className='flex justify-between items-center'>
				<RxCross2
					className='text-2xl text-pink-100 cursor-pointer sm:mr-2'
					onClick={() => setTerm('')}
				/>
				<div className='h-6 w-[1px] bg-zinc-700'></div>
				<AiOutlineSearch
					onClick={handleSubmit}
					className='hidden sm:inline-flex text-2xl text-pink-400  ml-2 cursor-pointer'
				/>
			</div>
		</form>
	)
}

export default SearchBox
