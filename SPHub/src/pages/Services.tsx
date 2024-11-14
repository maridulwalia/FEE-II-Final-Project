import { FaPlane  as Plane,FaBuilding  as Building2,FaUtensils  as Utensils,FaBriefcase  as Briefcase,FaArrowRight  as ArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Plane,
    title: 'Travel PR',
    description: 'Strategic communications for airlines, tour operators, and travel tech companies.',
    features: ['Media Relations', 'Crisis Management', 'Brand Positioning', 'Digital Strategy'],
    link: '/contact?service=travel',
  },
  {
    icon: Building2,
    title: 'Hospitality',
    description: 'Comprehensive PR solutions for hotels, resorts, and hospitality groups.',
    features: ['Property Launches', 'Reputation Management', 'Event Planning', 'Media Tours'],
    link: '/contact?service=hospitality',
  },
  {
    icon: Utensils,
    title: 'Food & Beverage',
    description: 'Creative campaigns for restaurants, food brands, and culinary events.',
    features: ['Restaurant Openings', 'Menu Launches', 'Chef Promotions', 'F&B Marketing'],
    link: '/contact?service=food',
  },
  {
    icon: Briefcase,
    title: 'Lifestyle Brands',
    description: 'Innovative PR strategies for fashion, beauty, and lifestyle products.',
    features: ['Brand Storytelling', 'Influencer Relations', 'Product Launches', 'Social Media'],
    link: '/contact?service=lifestyle',
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive PR and communications solutions tailored to your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <service.icon className="w-12 h-12 text-indigo-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                        <ArrowRight className="w-4 h-4 text-indigo-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => navigate(service.link)}
                    className="btn btn-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}