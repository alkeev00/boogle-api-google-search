import { Montserrat } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'Boogle',
	description: 'Boogle Searcher',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${montserrat.className} relative min-h-screen bg-zinc-800`}
			>
				{children}
				<Footer />
			</body>
		</html>
	)
}
