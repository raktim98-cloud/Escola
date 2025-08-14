import FootSubscribe from "./sideComponents/FootSubscribe"
import FooterImage from "../image/footer_image.png"

function Footer() {
  return (
    <section>
        <div className="container">
           
            <div
            className="py-10"
            style={{backgroundImage:`url(${FooterImage.src})`,
            backgroundSize: 'cover',
        backgroundPosition: 'center',
          }}>
{/* absulate subscribe part */}
<div>
   <FootSubscribe/>
</div>
            </div>
        </div>
    </section>
  )
}

export default Footer