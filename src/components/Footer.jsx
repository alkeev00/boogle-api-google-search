import React from 'react'
import CountryLookup from './CountryLookup'
import { format } from 'date-fns'

const Footer = () => {
	return (
		<footer className='absolute bottom-0 text-sm text-pink-100 w-full bg-zinc-800'>
			<div className='border-t border-zinc-900 px-8 py-3 flex items-center justify-between'>
				<CountryLookup />
				<p>alkeev00 © {format(new Date(), 'yyyy')} All Rights Reserved</p>
			</div>
		</footer>
	)
}

export default Footer
