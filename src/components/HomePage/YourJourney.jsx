import Bg_Banner from "../../image/6.png"
import BrandLogo from '../sideComponents/BrandLogo'
import Testimonial from './Testimonial'

export default function YourJourney() {
  return (
    <section className='pb-[120px]' style={{
            backgroundImage: `url(${Bg_Banner.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        <div className="container">
            <div>
                <BrandLogo/>
                <Testimonial/>
            </div>
        </div>
    </section>
  )
}
