import Link from 'next/link'
import React, { Suspense } from 'react'
import Parser from 'html-react-parser'
import PaginationButtons from './PaginationButtons'

export default function WebSearchResults({ results }) {
	return (
		<div className='w-full mx-auto px-3 sm:pb-24 pb-52 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
			<p className='text-pink-100 text-sm mb-5 mt-3'>
				About {results.searchInformation?.formattedTotalResults} results (
				{results.searchInformation?.formattedSearchTime} seconds)
			</p>
			{results.items?.map(result => (
				<div className='mb-8 max-w-xl' key={result.link}>
					<div className='group flex flex-col text-zinc-500'>
						<Link href={result.link}>{result.formattedUrl}</Link>
						<Link
							href={result.link}
							className='group-hover:underline decoration-pink-400 text-xl truncate font-medium text-pink-400 visited:text-pink-900'
						>
							{result.title}
						</Link>
					</div>
					<p className='text-pink-100'>{Parser(result.htmlSnippet)}</p>
				</div>
			))}
			<Suspense fallback={<>Loading...</>}>
				<PaginationButtons />
			</Suspense>
		</div>
	)
}
