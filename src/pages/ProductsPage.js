import Header from '../components/layout/Header'
import banner from '../assets/banner.png'


function ProductsPage() {
  return (
    <>
      <Header 
          txt_1='The AiExchange'
          txt_2='A digital marketplace for medical AI'
          txt_3='that facilitates the connection between AI developers'
          txt_4='Learn More'
          banner={banner}
      />
    </>
  )
}

export default ProductsPage