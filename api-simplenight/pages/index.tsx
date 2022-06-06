
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import HeroSection from '../components/HeroSection'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <HeroSection/>
    </Layout>
  )
}

export default HomePage
