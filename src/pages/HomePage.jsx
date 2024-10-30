import React, { useEffect } from 'react'
import PageNav from '../components/PageNav'
import styles from './HomePage.module.css'
import HeroSection from '../components/HeroSection'
import ExploreSection from '../components/ExploreSection'
import DiscoverSection from '../components/DiscoverSection'
import ReviewsSection from '../components/ReviewsSection'
import ShowCaseProduct from '../components/ShowCaseProduct'
import { newProductArrivals, showCaseProductWears } from '../dummydata/DummyData'
import Services from '../components/Services'
import LastSection from '../components/LastSection'
import Footer from '../components/Footer'
import AOS  from 'aos'
import 'aos/dist/aos.css';

function HomePage() {

  
  return (
    <div data-aos="fade-in">
      <div className={styles.homePageHead}>
        <div className={styles.homeNav}>
          <PageNav />
        </div>
        <HeroSection />
      </div>

      <ShowCaseProduct showCaseProducts={showCaseProductWears} />
      <ExploreSection />
      <DiscoverSection />
      <ShowCaseProduct title='Newest Products' showCaseProducts={newProductArrivals}/>
      <ReviewsSection />
      <Services />
      <LastSection />
      <Footer />
    </div>
  )
}

export default HomePage