import { FaArrowRight  as ArrowRight, FaAward  as Award, FaUsers  as Users, FaBriefcase  as Briefcase } from 'react-icons/fa';
import { FiTrendingUp as TrendingUp} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Office workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Elevate Your Brand's Story
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Strategic communications for travel, hospitality, and lifestyle brands that demand excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
              >
                Our Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-md transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We combine industry expertise with innovative strategies to deliver exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Industry Expertise',
                description: 'Deep knowledge of travel, hospitality, and lifestyle sectors',
                link: '/services',
              },
              {
                icon: Users,
                title: 'Dedicated Team',
                description: 'Experienced professionals committed to your success',
                link: '/leadership',
              },
              {
                icon: Briefcase,
                title: 'Proven Results',
                description: 'Track record of successful campaigns and satisfied clients',
                link: '/work',
              },
              {
                icon: TrendingUp,
                title: 'Strategic Growth',
                description: 'Data-driven approaches to achieve measurable outcomes',
                link: '/services',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(feature.link)}
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}