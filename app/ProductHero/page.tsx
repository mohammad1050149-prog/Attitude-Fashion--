


import CustomerReviews from "../modules/Product Details/CustomerReviews"
import ProductFeatures from "../modules/Product Details/ProductFeatures"
import ProductFooter from "../modules/Product Details/ProductFooter"
import ProductHero from "../modules/Product Details/ProductHero"
import ProductInfo from "../modules/Product Details/ProductInfo"
import ProductNewsletter from "../modules/Product Details/ProductNewsletter"
import ProductSpecification from "../modules/Product Details/ProductSpecification"
import RelatedProducts from "../modules/Product Details/RelatedProducts"




export default function ProductHeropage(){
    return(
        <div>
            <ProductHero/>
            <ProductInfo/>
<ProductFeatures/>
<ProductSpecification/>
< RelatedProducts/>
<CustomerReviews/>
<ProductNewsletter/>
<ProductFooter/>
        </div>
    )
}