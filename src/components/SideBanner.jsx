import { ArrowRightCircle } from "lucide-react";

export default function SideBannerSection() {
  return (
    <section className="relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* Left Image */}
            <div className="flex justify-center items-center p-4 md:p-6">
            <img
                src="/truck.JPG"
                alt="Bees Vending team at work"
                className="max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-md shadow-md"
            />
            </div>

            {/* Right Content */}
            <div className="flex items-center bg-white/90 p-6 md:p-10">
            <div className="space-y-6 max-w-md mx-auto text-center">
                <h2 className="text-2xl  md:text-3xl font-bold">Why Choose Bees?</h2>
                <p className="text-lg">
                From experience to the latest technology innovations, we strive to
                offer our customers the best level of service.
                </p>

                {/* Icon List */}
                <div className="space-y-3">
                {[
                    "50+ years of combined vending experience",
                    "Local, personalized service",
                    "Fast response with 24/7 customer support",
                    "Technology that keeps machines stocked and reliable",
                ].map((item, idx) => (
                    <div
                    key={idx}
                    className="flex items-start gap-3 bg-white border rounded-md shadow-sm p-4 hover:scale-105 transition duration-300"
                    >
                    <ArrowRightCircle className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                    <p className="text-base font-semibold">{item}</p>
                    </div>
                ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                <a
                    href="/contact"
                    className="inline-block bg-red-700 text-white px-6 py-3 rounded-full uppercase font-semibold shadow hover:bg-red-800 transition"
                >
                    Switch Today!
                </a>
                </div>
            </div>
            </div>
        </div>
    </section>

  );
}
