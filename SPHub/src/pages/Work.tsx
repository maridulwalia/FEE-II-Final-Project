import { useState } from 'react'
import {FaArrowRight  as ArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const categories = ['All', 'Travel', 'Hospitality', 'Food & Beverage', 'Lifestyle'];

const projects = [
  {
    title: 'Luxury Resort Launch',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    description: 'Successful launch campaign for a 5-star luxury resort',
    link: '/contact?project=luxury-resort',
  },
  {
    title: 'Food Festival PR',
    category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80',
    description: 'National PR campaign for an international food festival',
    link: '/contact?project=food-festival',
  },
  {
    title: 'Travel App Marketing',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80',
    description: 'Digital marketing strategy for a travel booking platform',
    link: '/contact?project=travel-app',
  },
  {
    title: 'Fashion Brand Launch',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80',
    description: 'Brand launch campaign for a sustainable fashion line',
    link: '/contact?project=fashion-brand',
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Work
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our portfolio of successful campaigns and projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => navigate(project.link)}
                      className="bg-white text-gray-900 px-6 py-3 rounded-md flex items-center transform -translate-y-4 group-hover:translate-y-0 transition-transform"
                    >
                      View Project <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-indigo-600 dark:text-indigo-400">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}