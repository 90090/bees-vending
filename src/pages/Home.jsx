import React from "react";

const Home = () => {
  return (
    <main className="bg-white">

      {/* Features Section */}
     <section className="w-full flex justify-center py-12">
        <div className="w-full max-w-6xl bg-gray-100 rounded-md shadow-sm p-8">
          {/* Intro Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Proudly Serving Connecticut
          </h2>
          <p className="text-gray-600 mb-6">
            Bees Vending is your local, family-owned company with over 50 years of combined experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <a
              href="/vending"
              className="bg-red-600 md:w-80 text-center hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Explore Vending
            </a>
            <a
              href="/contact"
              className="bg-white border md:w-60 text-center border-gray-300 hover:bg-gray-100 text-red-600 px-6 py-3 rounded-md font-medium transition"
            >
              Contact Us
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-md shadow-sm p-4 hover:scale-105 transition-smooth duration-300">
              <h3 className="font-semibold text-gray-900 mb-1">Vending Machines</h3>
              <p className="text-sm text-gray-600">
                Reliable, modern machines stocked with everyone's favorite snacks and beverages
              </p>
            </div>
            <div className="bg-white rounded-md shadow-sm p-4 hover:scale-105 transition-smooth duration-300">
              <h3 className="font-semibold text-gray-900 mb-1">Micro-Markets</h3>
              <p className="text-sm text-gray-600">
                Fresh, open-shelf markets like an on-site convenience store
              </p>
            </div>
            <div className="bg-white rounded-md shadow-sm p-4 hover:scale-105 transition-smooth duration-300">
              <h3 className="font-semibold text-gray-900 mb-1">Healthy Options</h3>
              <p className="text-sm text-gray-600">
                Nutritious, satisfying selections to keep your team fueled
              </p>
            </div>
          </div>
        </div>
      </section>


  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
  {/* Custom Vending Layouts Section */}
  <div className="bg-gray-150 rounded-lg overflow-hidden shadow-sm">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[250px]">
      {/* Left side - Content */}
      <div className="p-6 lg:p-10 flex flex-col justify-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          Featuring Vending Monitoring Technology
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          All our vending machines come equipped with remote monitoring technology,
          allowing us to track inventory levels, machine status, and sales data in real-time.
          This ensures your machines are always stocked and functioning optimally.
          Plus, our cashless payment options make transactions quick and easy for your employees.
        </p>
      </div>

      {/* Right side - Image container */}
      <div className=" flex items-center justify-center min-h-[200px]">
          <img
            src="/vending.jpg"
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
