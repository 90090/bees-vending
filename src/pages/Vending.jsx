import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Calltoaction from "../components/Calltoaction";
import { Candy, CreditCard, Smartphone, Wrench } from "lucide-react";

const categories = {
  Beverages: [
    { name: "Bang Energy", img: "./items/beverages/Bang_Energy.png" },
    { name: "Canada Dry", img: "./items/beverages/Bottle_Canada_Dry.png" },
    { name: "Cherry Coke", img: "./items/beverages/Bottle_Cherry.png" },
    { name: "Coca Cola", img: "./items/beverages/Bottle_Cola.png" },
    { name: "Diet Coke", img: "./items/beverages/Bottle_Diet.png" },
    { name: "Diet Dr Pepper", img: "./items/beverages/Bottle_Dr_Pepper_Diet.png" },
    { name: "Dr Pepper", img: "./items/beverages/Bottle_Dr_Pepper.png" },
    { name: "Fanta", img: "./items/beverages/Bottle_Fanta.png" },
    { name: "Fairlife", img: "./items/beverages/Fairlife.png" },
    { name: "Minute Maid Blue Raspberry", img: "./items/beverages/Minute_Maid_Blue.png" },
    { name: "Minute Maid Lemonade", img: "./items/beverages/Minute_Maid.png" },
    { name: "Monster Energy", img: "./items/beverages/Monster_Energy.png" },
    { name: "Mountain Dew", img: "./items/beverages/Mountain_Dew.png" },
    { name: "Peace Tea", img: "./items/beverages/Peace_Tea.png" },
    { name: "Powerade Fruit Punch", img: "./items/beverages/Powerade_Red.png" },
    { name: "Powerade Lemon Lime", img: "./items/beverages/Powerade_Yellow.png" },
    { name: "Smart Water", img: "./items/beverages/Smart_Water.png" },
    { name: "Sprite", img: "./items/beverages/Sprite.png" },
    { name: "Vitamin Water", img: "./items/beverages/Vitamin_Water.png" },
    { name: "Monster Zero Ultra", img: "./items/beverages/White_Monster.png" },
  ],
  Snacks: [
    { name: "Cape Cod Chips", img: "./items/snacks/CapeCod.png" },
    { name: "Cheeto Crunch", img: "./items/snacks/Cheeto_Crunch.png" },
    { name: "Cheeto Puffs", img: "./items/snacks/Cheeto_Puffs.png" },
    { name: "Clif Bar Nut Butter", img: "./items/snacks/Clif_Butter.png" },
    { name: "Clif Bars", img: "./items/snacks/Cliff_Bar.png" },
    { name: "Clif Builders", img: "./items/snacks/Cliff_Builders.png" },
    { name: "Coffee Cakes", img: "./items/snacks/Coffee_Cakes.png" },
    { name: "Cupcakes", img: "./items/snacks/Cupcakes.png" },
    { name: "Dentyne Peppermint", img: "./items/snacks/Dentyne_Peppermint.png" },
    { name: "Dentyne Spearmint", img: "./items/snacks/Dentyne_Spearmint.png" },
    { name: "Doritos", img: "./items/snacks/Doritos.png" },
    { name: "Fritos Twists", img: "./items/snacks/Fritos_Twists.png" },
    { name: "Fruit Chews", img: "./items/snacks/Fruit_Chews.png" },
    { name: "Funyuns", img: "./items/snacks/Funyuns.png" },
    { name: "Gushers", img: "./items/snacks/Gushers.png" },
    { name: "Hershey Kisses", img: "./items/snacks/Hershey_Kisses.png" },
    { name: "Honey Bun", img: "./items/snacks/Honey_Bun.png" },
    { name: "Ice Breakers", img: "./items/snacks/Ice_Breakers.png" },
    { name: "Jack Links", img: "./items/snacks/Jack_Links.png" },
    { name: "KitKat", img: "./items/snacks/KitKat.png" },
    { name: "Lays Baked", img: "./items/snacks/Lays_Baked.png" },
    { name: "Lays Sourcream", img: "./items/snacks/Lays_Sourcream.png" },
    { name: "Mike and Ikes", img: "./items/snacks/Mike_and_Ikes.png" },
    { name: "Mini Donuts", img: "./items/snacks/Mini_Donuts.png" },
    { name: "MnM Peanut", img: "./items/snacks/MnM_Peanut.png" },
    { name: "Nature Valley Bars", img: "./items/snacks/Nature_Valley.png" },
    { name: "Planters Peanuts", img: "./items/snacks/Planters.png" },
    { name: "PopChips", img: "./items/snacks/PopChips.png" },
    { name: "Protein Bars", img: "./items/snacks/Protein_Bar.png" },
    { name: "Reeses Cups", img: "./items/snacks/Reeses_Cups.png" },
    { name: "Reeses Pieces", img: "./items/snacks/Reeses_Pieces.png" },
    { name: "Ruffles", img: "./items/snacks/Ruffles.png" },
    { name: "Snickers Mini", img: "./items/snacks/Snickers_Mini.png" },
    { name: "Snickers", img: "./items/snacks/Snickers.png" },
    { name: "Stacys Pita Chips", img: "./items/snacks/Stacys_Pita_Chips.png" },
    { name: "SunChips", img: "./items/snacks/SunChips.png" },
    { name: "Swedish Fish", img: "./items/snacks/Swedish_Fish.png" },
    { name: "Tropical Plantains", img: "./items/snacks/Tropical_Plantains.png" },
    { name: "Twizzlers", img: "./items/snacks/Twizzlers.png" },
    { name: "Volpi Snacks", img: "./items/snacks/Volpi.png" },
  ],
  Food: [
    { name: "Sausage Egg and Cheese Sandwich", img: "./items/food/food1.jpg" },
    { name: "Chicken Rice and Cheese Burrito", img: "./items/food/food2.jpg" },
    { name: "Fried Chicken Sandwich", img: "./items/food/food3.png" },
    { name: "Traditional Itallian Sub", img: "./items/food/food4.jpg" },
    { name: "Deli Meat Sandwich", img: "./items/food/food5.jpg" },
    { name: "Sausage and Pepperoni Calzone", img: "./items/food/food6.jpg" },
    { name: "Smoked Ham and Swiss Sub", img: "./items/food/food7.jpg" },
    { name: "Italian Style Sub", img: "./items/food/food8.jpg" },
    { name: "Chicken Caesar Wrap", img: "./items/food/food9.jpg" },
    { name: "Turkey Club Wrap", img: "./items/food/food10.jpg" },
    { name: "Chipotle Chicken Wrap", img: "./items/food/food11.jpg" },
    { name: "Mozzeralla Pepperoni Rolltini", img: "./items/food/food12.png" },
    { name: "Chicken and Waffle Sandwich", img: "./items/food/food13.png" },
  ],
};

export default function VendingSection() {
  const [activeCategory, setActiveCategory] = useState("Beverages");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // update itemsPerPage responsively
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6);
      } else if (window.innerWidth <= 768) {
        setItemsPerPage(4);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // chunk items into pages (array of pages, each page is an array of items)
  const chunkArray = (arr, size) => {
    if (!arr || size <= 0) return [];
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const items = categories[activeCategory] || [];
  const pages = chunkArray(items, itemsPerPage);
  const totalPages = Math.max(1, pages.length);

  // reset page on category or itemsPerPage change
  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory, itemsPerPage]);

  // read hash on load
  useEffect(() => {
    const updateCategoryFromHash = () => {
      if (window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        const category = Object.keys(categories).find(
          (cat) => cat.toLowerCase() === hash
        );
        if (category) setActiveCategory(category);
      }
    };

    // initialize on load
    updateCategoryFromHash();

    // listen for hash changes
    window.addEventListener("hashchange", updateCategoryFromHash);

    // cleanup listener on unmount
    return () => window.removeEventListener("hashchange", updateCategoryFromHash);
  }, []);


  // navigation
  const handlePrevious = () => setCurrentPage((p) => Math.max(0, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1));

  const handleTabClick = (cat) => {
    setActiveCategory(cat);
    window.history.replaceState(null, "", `#${cat.toLowerCase()}`);
  };

  // touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartX.current - touchEndX;
    const deltaY = Math.abs(touchStartY.current - touchEndY);

    // horizontal swipe only, threshold 50px
    if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > 50) {
      if (deltaX > 0 && currentPage < totalPages - 1) {
        handleNext();
      } else if (deltaX < 0 && currentPage > 0) {
        handlePrevious();
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <head>
       <title> Vending | Bee's Vending | Expert Vending Machines & Micro-Markets</title>
       <meta name="description" content="Discover Bee's Vending solutions for your workplace. Learn about our vending machines and micro-markets today!" />
      </head>
      {/* Intro copy */}
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Enjoy reliable, modern vending service
      </h2>
      <p className="mt-2 text-gray-600 text-lg">
        Snacks, beverages, and fresh food at your fingertips.
      </p>

      {/* What we offer */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto text-sm md:text-base text-gray-700">
        <div className="flex items-start space-x-2">
          <Candy className="w-6 h-6 text-red-600" />
          <span className="">National brand favorites plus healthy selections</span>
        </div>
        <div className="flex items-start space-x-2">
          <CreditCard className="w-6 h-6 text-red-600" />
          <span className="">Cashless payments: credit, debit, and mobile</span>
        </div>
        <div className="flex items-start space-x-2">
          <Smartphone className="w-6 h-6 text-red-600" />
          <span className="">Remote monitoring to keep machines full & working</span>
        </div>
        <div className="flex items-start space-x-2">
          <Wrench className="w-6 h-6 text-red-600" />
          <span className="whitespace-nowrap">24/7 support for quick service when you need it</span>
        </div>
      </div>
    </div>
      {/* Tabs */}
      <div className="flex space-x-3 mb-8 overflow-x-auto">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => handleTabClick(cat)}
            className={`px-6 py-3 rounded-lg font-medium transition whitespace-nowrap ${
              activeCategory === cat
                ? "bg-red-600 text-white shadow-md"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left arrow */}
        {currentPage > 0 && (
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
        )}

        {/* Viewport */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track: do NOT set width = totalPages*100% here */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {/* each page is exactly the viewport width (100%) */}
            {pages.map((pageItems, pageIdx) => (
              <div
                key={pageIdx}
                className="w-full flex-shrink-0 px-2 p-4"
                style={{ width: "100%" }}
              >
                {/* grid inside the page - responsive columns */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                  {pageItems.map((item, idx) => (
                    <div
                      key={`${activeCategory}-${pageIdx}-${idx}`}
                      className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition cursor-pointer flex flex-col items-center text-center"
                    >
                      <div className="w-40 h-40 rounded-xl flex items-center justify-center overflow-hidden mb-4">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-60 h-60 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        {item.name}
                      </h3>
                    </div>
                  ))}
                  {/* If page has fewer items than grid slots, add empty placeholders so layout looks even (optional) */}
                  {Array.from({ length: Math.max(0, itemsPerPage - pageItems.length) }).map((_, i) => (
                    <div key={`ph-${i}`} className="hidden md:block" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        {currentPage < totalPages - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        )}
      </div>

      {/* dots */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-3 h-3 rounded-full transition ${
                currentPage === idx ? "bg-red-600 scale-110" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      )}

      <div className="md:hidden text-center mt-4 text-sm text-gray-500">Swipe to browse items</div>

      <Calltoaction />
    </div>
  );
}
