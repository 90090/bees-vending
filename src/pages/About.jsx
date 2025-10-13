import SideBannerSection from "../components/SideBanner";


export default function About() {
  return (
    <div className="bg-white text-gray-900">
      <head>
       <title> About | Bee's Vending | Expert Vending Machines & Micro-Markets</title>
       <meta name="description" content="Learn about Bee's Vending, our story, and our commitment to quality vending machines and micro-markets. Proudly serving local businesses and organizations." />
      </head>
      {/* About Us Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        

        {/* Images + Text */}
        <div className=" gap-8 items-center">
          {/* Text Content */}
          <div className="text-left md:text-center">
            <p className="text-lg mb-4">
              Bees Vending is a family-owned business specializing in vending machines and micro-markets. Customer service is our priority, we work with you to customize your workplace refreshment solution to fit your needs including technology, enhanced service, and 24/7 customer help line complete the package to produce unbeatable workplace refreshment services.
            </p>
            <p className="text-lg font-semibold">
              Our mission: deliver customized snack and refreshment solutions
              that make workplaces more productive, collaborative, and enjoyable.
            </p>
          </div>
        </div>
      </section>

      <SideBannerSection />
    </div>
  );
}
