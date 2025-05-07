export default function Card({ title }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl text-gray-900 font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">
                High-quality execution using premium materials and skilled workmanship.
            </p>
        </div>
    );
};