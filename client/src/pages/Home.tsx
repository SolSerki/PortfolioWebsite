import LiquidEther from '@/components/LiquidEther'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import { Children } from 'react'

export default function Home() {
  return (
    <>
      <Hero />
      <LiquidEther />    
      <TechStack />
    </>
  )
}
