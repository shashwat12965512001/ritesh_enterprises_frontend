import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Card from "@/components/Card";

export default function Home() {
    return (
        <div>
            {/* Header */}
            <Header />

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
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card title="Residential Construction" />
                        <Card title="Commercial Projects" />
                        <Card title="Renovations & Interiors" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}