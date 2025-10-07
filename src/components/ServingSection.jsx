import { motion } from "framer-motion";

export default function ServingSection() {
  return (
    <section className="w-full flex justify-center py-12">
      <div className="w-full max-w-6xl bg-gray-100 rounded-md shadow-sm p-8">
        {/* Top Grid: Text + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Proudly Serving Connecticut
            </h2>
            <p className="text-gray-600 mb-6">
              Bees Vending is your local, family-owned company with over 50 years of combined experience.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
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
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/Bees_Food.png"
              alt="Bees Vending machines"
              className="w-full md:w-4/5 rounded-md hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Vending Machines",
              desc: "Reliable, modern machines stocked with everyone's favorite snacks and beverages",
            },
            {
              title: "Micro-Markets",
              desc: "Fresh, open-shelf markets like an on-site convenience store",
            },
            {
              title: "Healthy Options",
              desc: "Nutritious, satisfying selections to keep your team fueled",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-md shadow-sm p-4 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
