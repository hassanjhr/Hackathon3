import FeaturedProducts from "./components/feature";
import HeroSection from "./components/hero";
import LatestBlog from "./components/latestblog";
import LatestProducts from "./components/latestproduct";
import ProductFeatures from "./components/productfeatures";
import ShopexOffer from "./components/shopexoffer";
import Sponsors from "./components/sponsors";
import SubscribeSection from "./components/subcribesection";
import TopCategories from "./components/topcategories";
import TrendingProducts from "./components/trendingproducts";

const Home = async () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <ShopexOffer />
      <ProductFeatures />
      <TrendingProducts />
      <TopCategories />
      <SubscribeSection />
      <Sponsors />
      <LatestBlog /> 
    </div>
  );
};

export default Home;









// export default function Home() {
//   return (
//     <div>
//     <HeroSection/>
//     <FeaturedProducts/>
//     <LatestProducts/>
//     <ShopexOffer/>
//     <ProductFeatures/>
//     <TrendingProducts/>
//     {/* <DiscountItem/> */}
//     <TopCategories/>
//     <SubscribeSection/>
//     <Sponsors/>
//     <LatestBlog/>
//     {/* <ProductCards/> */}
    
    
//         </div>
//   );
// }
