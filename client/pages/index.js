import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import NavBar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to Graphr</h1>

    </div>
  )
}
