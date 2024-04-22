import MainHeader from '@/components/MainHeader'
import MainSearch from '@/components/MainSearch'

export default function Home() {
	return (
		<>
			<MainHeader />
			<div className='flex flex-col items-center mt-24'>
				<h1 className='flex text-8xl font-bold select-none'>
					<div className='text-pink-400'>B</div>
					<div className='text-pink-200'>o</div>
					<div className='text-pink-700'>o</div>
					<div className='text-pink-300'>g</div>
					<div className='text-pink-400'>l</div>
					<div className='text-pink-500'>e</div>
				</h1>
				<MainSearch />
			</div>
		</>
	)
}
