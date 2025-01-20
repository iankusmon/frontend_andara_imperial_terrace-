import YoutubeShort from '@/components/YoutubeShort'
import Hero from '@/components/Hero'
import MiniBanner from '@/components/MiniBanner'
import MiniHomepage from '@/components/MiniHomepage';
import SiteMap from '@/components/SiteMap'
import Landmark from '@/components/Landmark'
import VillaType from '@/components/VillaType'
import Article from '@/components/Article'

export default function Home() {
  return (
    <>
      <Hero />
      <MiniHomepage />
      <SiteMap />
      <YoutubeShort />
      <VillaType />
      <Article />
      <MiniBanner />
    </>
  
  )
}
