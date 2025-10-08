import React from "react";
import ServingSection from "../components/ServingSection";

const Home = () => {
  return (
    <main className="bg-white">
      <ServingSection />
      
      {/* Service Area Banner */}
      <section className="w-full bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-base text-white md:text-lg font-medium leading-relaxed">
            Our service area includes but is not limited to: Waterbury, Prospect, Cheshire, Naugatuck, Wolcott, Southington, East Hartford, Farmington, Hartford, Middletown, New Britain, Rocky Hill, Southington, West Hartford, Wethersfield and Windsor.
          </p>
        </div>
      </section>


  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
  {/* Custom Vending Layouts Section */}
  <div className="bg-gray-150 rounded-lg overflow-hidden shadow-sm">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[250px]">
      {/* Left side - Content */}
      <div className="p-6 lg:p-10 flex flex-col justify-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          Featuring Smart Cooler Technology
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Revolutionize the way you access snacks and drinks! Our Smart Cooler allows customers to simply tap their 
          card, grab what they want, and go, no lines, no waiting. Perfect for standalone use or in markets where 
          traditional coolers face high shrinkage, it combines convenience, security, and seamless checkout 
          technology in one sleek, modern unit.
        </p>
      </div>
      {/* //All our vending machines come equipped with remote monitoring technology,
          allowing us to track inventory levels, machine status, and sales data in real-time.
          This ensures your machines are always stocked and functioning optimally.
          Plus, our cashless payment options make transactions quick and easy for your employees. */}

      {/* Right side - Image container */}
      <div className=" flex items-center justify-center min-h-[200px]">
          <img
            src="/smartcooler.jpg"
            alt="Vending machine with cashless payment"
            className="rounded-lg shadow-md object-contain h-96 w-auto"
          />
      </div>

    </div>
  </div>



      {/* Micromarkets Section */}
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
        <div className="min-h-[200px]">
          <div className="p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 lg:mb-2">
                Micromarkets - fresh, self-serve solutions
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Fresh food, self-checkout kiosks, and flexible shelving for workplaces
                of all sizes. 
              </p>
            </div>
            <div className="mt-6 lg:mt-0">
              <a href="/micromarket" className="bg-red-600 hover:bg-red-700  text-white px-8 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm">
                See Micromarkets
              </a>
            </div>
          </div>
        </div>
      </div>

  </div>


      {/* Hero Section
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Welcome to Bees Vending
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8">
          Modern vending & micromarkets designed for convenience, variety, and
          reliability. Refresh your breakroom with our latest technology.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Get Started
        </a>
      </section>
       */}
      
    </main>
  );
};

export default Home;
