import { FaBuilding  as Building2, FaGlobe  as Globe2, FaUtensils  as Utensils, FaPlane  as Plane } from 'react-icons/fa';

const clients = [
  {
    name: 'Luxury Hotels Group',
    logo: Building2,
    description: 'Leading luxury hotel chain with properties worldwide',
    category: 'Hospitality',
  },
  {
    name: 'Global Adventures',
    logo: Plane,
    description: 'Premium travel experiences and destinations',
    category: 'Travel',
  },
  {
    name: 'Fine Dining Collection',
    logo: Utensils,
    description: 'Michelin-starred restaurant group',
    category: 'Food & Beverage',
  },
  {
    name: 'Lifestyle Brands Co.',
    logo: Globe2,
    description: 'Contemporary lifestyle and fashion brands',
    category: 'Lifestyle',
  },
];

export default function Clients() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Clients
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're proud to work with leading brands across travel, hospitality, and lifestyle sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
              >
                <client.logo className="w-12 h-12 text-indigo-600 mb-6 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {client.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {client.description}
                </p>
                <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}