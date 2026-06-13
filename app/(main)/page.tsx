import FeaturedStores from "../components/home/FeaturedStores";
import HeroBanner from "../components/home/HeroBanner";
import ProductSection from "../components/home/ProductSection";
import ShopByCategory from "../components/home/ShopByCategory";
import ShopTheLook from "../components/home/ShopTheLook";

export default function Home() {
  const newTshirts = [
    { storeName: "Street Style", productName: "Oversize Basic", price: 180, isNew: true, colors: ["#FFFFFF", "#000000", "#3B82F6"] },
    { storeName: "Urban Threads", productName: "Graphic Print", price: 220, isNew: true, colors: ["#FFFFFF", "#000000"] },
    { storeName: "Sport Zone", productName: "Dry Fit", price: 150, isNew: true, colors: ["#6B7280", "#2563EB"] },
    { storeName: "Fashion Bazaar", productName: "Crop", price: 160, isNew: true, colors: ["#EC4899", "#FFFFFF"] },
    { storeName: "Elegance", productName: "Polo Classic", price: 250, isNew: true, colors: ["#0D3B47", "#FFFFFF"] },
    { storeName: "Urban Threads", productName: "Henley", price: 190, isNew: true, colors: ["#9CA3AF", "#D4920A"] },
  ];

  const newShirts = [
    { storeName: "Street Style", productName: "Linen Casual", price: 320, isNew: true, colors: ["#FFFFFF", "#BFDBFE"] },
    { storeName: "Elegance", productName: "Oxford Formal", price: 450, isNew: true, colors: ["#FFFFFF", "#3B82F6"] },
    { storeName: "Urban Threads", productName: "Flannel", price: 380, isNew: true, colors: ["#DC2626", "#166534"] },
    { storeName: "Street Style", productName: "Embroidered Polo", price: 290, isNew: true, colors: ["#000000"] },
    { storeName: "Fashion Bazaar", productName: "Satin Night", price: 550, isNew: true, colors: ["#000000", "#6B21A8"] },
    { storeName: "Street Style", productName: "Oversize Casual", price: 340, isNew: true, colors: ["#D1D5DB"] },
  ];

  const newPants = [
    { storeName: "Street Style", productName: "Slim Fit Jeans", price: 450, isNew: true, colors: ["#1E40AF", "#000000"] },
    { storeName: "Urban Threads", productName: "Linen Casual", price: 380, isNew: true, colors: ["#FFEDD5"] },
    { storeName: "Sport Zone", productName: "Jogger", price: 280, isNew: true, colors: ["#6B7280", "#000000"] },
    { storeName: "Elegance", productName: "Chino", price: 420, isNew: true, colors: ["#D4920A", "#1E3A8A"] },
    { storeName: "Street Style", productName: "Cargo", price: 390, isNew: true, colors: ["#166534", "#000000"] },
    { storeName: "Street Style", productName: "Bootcut Jeans", price: 480, isNew: true, colors: ["#2563EB"] },
  ];

  const newShorts = [
    { storeName: "Urban Threads", productName: "Summer Linen", price: 180, isNew: true, colors: ["#FFFFFF", "#FEF08A"] },
    { storeName: "Street Style", productName: "Denim", price: 220, isNew: true, colors: ["#3B82F6"] },
    { storeName: "Sport Zone", productName: "Sport", price: 150, isNew: true, colors: ["#000000", "#9CA3AF"] },
    { storeName: "Street Style", productName: "Cargo", price: 260, isNew: true, colors: ["#8B9295", "#0D3B47"] },
    { storeName: "Urban Threads", productName: "Swim", price: 140, isNew: true, colors: ["#60A5FA", "#FACC15"] },
    { storeName: "Comfort Basics", productName: "Cotton Boxer", price: 120, isNew: true, colors: ["#FFFFFF", "#D1D5DB"] },
  ];

  return (
    <main className="bg-background text-on-background font-body-md text-body-md antialiased rtl">
      <HeroBanner />
      
      <ShopByCategory />
      
      <ProductSection title="وصل جديد: تيشيرتات" products={newTshirts} />
      
      <ShopTheLook />
      
      <ProductSection title="وصل جديد: قمصان" products={newShirts} />
      
      <ProductSection title="وصل جديد: بناطيل" products={newPants} />
      
      <ProductSection title="وصل جديد: شورتات" products={newShorts} />
      
      <FeaturedStores/>
    </main>
  );
}