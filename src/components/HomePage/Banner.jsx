
import Banner_Image from "../../image/Banner_Image.png"
import Banner_ from "../../image/Banner_.png"
import Button from "../button/Button"

function Banner() {
  return (
    <section className="relative px-7 py-[150px]"  style={{
        backgroundImage: `url(${Banner_Image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="w-[845px] h-[664px] absolute right-0 top-0 translate-x-0 translate-y-0">
            <img className="w-full h-full object-cover bg-left" src={Banner_.src} alt="" />
        </div>
        <div className="container">
            <div className="grid xl:grid-cols-[532px_1fr] grid-cols-1">
                <div className="flex flex-col gap-[20px]">
                    <h5 className="text-[18px] font-bold leading-[31.5px] -tracking-[0.3px] text-[#4ADA85]">Click Learn Thrive</h5>
                    <h2 className="text-[59px] font-bold leading-[71.4px]  text-white">Unlock your potential through education</h2>
                    <p className="text-[17px]  leading-[26.1px]  text-white pr-10">Magnis viverra nisl rhoncus egestas rhoncus elit at. Massa volutpat eleifend pellentesque vivamus nulla</p>
                    <div><Button text="Contact us" buttonClass="!bg-[#F8BC26] rounded-[5px] px-[36px]" 
                    textClass="text-[#192335] text-[15px] font-medium leading-[60px] tracking-[0.5px] group-hover:text-white transition-all"/></div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Banner