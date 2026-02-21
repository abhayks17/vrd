import { Link } from 'react-router-dom'
import ServicesBlock from '../../components/ScrollSection/ServicesBlock'
import '../../components/ScrollSection/ScrollSection.css'
import './Services.css'
import Footer from '../../components/Footer/Footer'
    export default function Services(){
  return (
    <div className="services-page">


      {/* ServicesBlock */}
      <div className="services-block-wrapper">
        <ServicesBlock />
      </div>

      {/* Footer */}
      <Footer/>

    </div>
  )
}