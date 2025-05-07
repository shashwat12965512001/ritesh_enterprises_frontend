export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gray-900 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Ritesh Enterprises
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Building Dreams. Delivering Quality Construction.
                </p>
                <a
                    href="#contact"
                    className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-300"
                >
                    Get in Touch
                </a>
            </section>

            {/* About Section */}
            <section className="py-16 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="text-gray-700 text-lg">
                    At Ritesh Enterprises, we specialize in residential and commercial construction with a commitment to quality, innovation, and customer satisfaction.
                </p>
            </section>

            {/* Services Section */}
            <section className="bg-gray-100 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard title="Residential Construction" />
                        <ServiceCard title="Commercial Projects" />
                        <ServiceCard title="Renovations & Interiors" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white text-center py-6 mt-10">
                &copy; {new Date().getFullYear()} Ritesh Enterprises. All rights reserved.
            </footer>
        </div>
    );
}

function ServiceCard({ title }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">
                High-quality execution using premium materials and skilled workmanship.
            </p>
        </div>
    );
}
