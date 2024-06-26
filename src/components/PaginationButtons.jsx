'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export default function PaginationButtons() {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const searchTerm = searchParams.get('searchTerm')
	const startIndex = +searchParams.get('start') || 1
	return (
		<div className='text-pink-400 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-10 sm:px-0'>
			{startIndex >= 10 && (
				<Link
					href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
				>
					<div className='flex flex-col items-center  hover:underline'>
						<p>Previous Page</p>
					</div>
				</Link>
			)}
			{startIndex <= 90 && (
				<Link
					href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
				>
					<div className='flex flex-col items-center  hover:underline'>
						<p>Next Page</p>
					</div>
				</Link>
			)}
		</div>
	)
}
