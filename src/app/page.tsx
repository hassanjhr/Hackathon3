

import DiscountItem from "./components/discountitem";
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
import ProductCards from "./products/page";


export default function Home() {
  return (
    <div>
    <HeroSection/>
    <FeaturedProducts/>
    <LatestProducts/>
    <ShopexOffer/>
    <ProductFeatures/>
    <TrendingProducts/>
    <DiscountItem/>
    <TopCategories/>
    <SubscribeSection/>
    <Sponsors/>
    <LatestBlog/>
    <ProductCards/>

    </div>
  );
}
