import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Apple, CreditCard, LayoutDashboard, PackageOpen } from "lucide-react";

const testimonials = [
  {
    name: "We IP Cam",
    role: "",
    text: "Great service and reliable machines! The staff is friendly, deliveries are always on time, and the selection is excellent. Highly recommend for any business needing vending solutions.",
  },
];

export default function MicroMarket() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-swipe testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <head>
       <title> MicroMarket | Bee's Vending | Expert Vending Machines & Micro-Markets</title>
       <meta name="description" content="Discover Bee's Vending Micro-Markets, the innovative solution for your workplace. Learn about our offerings and how we can enhance your break room experience." />
      </head>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6">Micro Markets</h1>
          <p className="text-lg">
            Transform your break room into a 24/7 self-serve mini store. Equipped with all your favorite snacks, beverages including pre-packaged fresh meal options. Our Micro-Markets are branded to your space and secured to create a safe and convenient transaction for all. 
          </p>
        </div>
        <div className="lg:w-1/2 grid grid-cols-1 gap-4">
          <h2 className="text-2xl font-semibold">Benefits</h2>
          <p className="text-gray-700 mb-4">
            Micro-markets improve employee satisfaction, support wellness goals, and make
            your break room a true destination.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white rounded-md shadow-sm p-4 hover:scale-105 transition-smooth duration-300">
              <Apple className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
              <p className="text-md text-black font-semibold">Hundreds of fresh, healthy, and popular items</p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-md shadow-sm p-4 hover:scale-105 transition-smooth duration-300">
              <CreditCard className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
              <p className="text-md text-black font-semibold">Self-checkout kiosk for easy, cashless purchasing</p>
            </div>

            
            <div className="flex items-start gap-3 bg-white rounded-md shadow-sm p-4 hover:scale-105 transition-smooth duration-300">
              <PackageOpen className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
              <p className="text-md text-black font-semibold">Open design with shelves and coolers for more choice</p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-md shadow-sm p-4 hover:scale-105 transition-smooth duration-300">
              <LayoutDashboard className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
              <p className="text-md text-black font-semibold">Customized fixtures and signage to fit your workplace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left (Portrait) */}
          <motion.img
            src="/leftmarket.png"
            alt="Gallery Image 1"
            className="w-full h-[450px] md:h-[600px] object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          />

          {/* Middle (Landscape) */}
          <motion.img
            src="/bees_2.png"
            alt="Gallery Image 2"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-sm md:mt-24 hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />

          {/* Right (Portrait) */}
          <motion.img
            src="/rightmarket.png"
            alt="Gallery Image 3"
            className="w-full h-[450px] md:h-[600px] object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          />
        </div>
      </section>


      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
          <div className="p-6 border rounded shadow-md">
            <p className="italic mb-4">
              "{testimonials[currentTestimonial].text}"
            </p>
            <p className="font-semibold">
              {testimonials[currentTestimonial].name}
            </p>
            <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
