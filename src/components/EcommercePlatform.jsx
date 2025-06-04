import amazon from '../images/Amazon.webp'
import indusmela from '../images/Indusmela.webp'


function EcommercePlatform() {
  return (
    <>
  
    {/* <!-- E-commerce Shopping Platform --> */}
    <div className="container store-container">
        <div className="g-3 row">
            {/* <!-- Amazon Button --> */}
            <div className="col-12 col-md-6">
                <a href="https://www.amazon.in/stores/JnB/page/4619FB37-DF68-4B82-8D4E-E8177DFB2979?lp_asin=B0CSSM6LH7&ref_=ast_bln" target="_blank" rel="noreferrer" className="text-decoration-underline">
                    <div className="amazon-box store-box">
                        <span>Also available on</span>
                        <img src={amazon} alt="Amazon" />
                    </div>
                </a>
            </div>

            {/* <!-- Indusmela Button --> */}
            <div className="col-12 col-md-6">
                <a href="https://indusmela.in/collections/jnb" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div className="indusmela-box store-box">
                        <span>Shop from our <br/> one-stop store!</span>
                        <img src={indusmela} alt="IndusMela" />
                    </div>
                </a>
            </div>
        </div>
    </div>

    </>
  )
}

export default EcommercePlatform






