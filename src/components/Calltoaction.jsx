export default function Calltoaction() {
  return (
    <div className="w-full mt-16 flex flex-col items-center">
      {/* Attention-grabber headline */}
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
        Don't see anything you like?
      </h2>
      <p className="text-black text-center max-w-xl mb-6">
        No problem! Customize your vending machine selection to perfectly match
        your business needs. Schedule a free consultation and we'll work with
        you to design the ideal setup.
      </p>

      {/* Call to Action Box */}
      <div className="w-full bg-gray-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between shadow-md hover:scale-105 transition-smooth duration-300">
        <p className="text-black font-semibold text-center md:text-left mb-4 md:mb-0">
          Ready to build your perfect vending experience?
        </p>
        <a
          href="/contact"
          className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-md shadow transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
