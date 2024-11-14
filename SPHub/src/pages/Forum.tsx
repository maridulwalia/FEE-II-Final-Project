import { FaThumbsUp  as ThumbsUp, FaShare  as Share2 } from 'react-icons/fa';
import { FiMessageSquare as MessageSquare } from 'react-icons/fi';

const discussions = [
  {
    title: 'The Future of Travel PR in a Post-Pandemic World',
    author: 'Maridul Walia',
    date: '2024-03-15',
    category: 'Travel',
    comments: 24,
    likes: 156,
    excerpt: 'Exploring how travel PR strategies are evolving to meet new challenges and opportunities...',
  },
  {
    title: 'Sustainable Practices in Hospitality Communications',
    author: 'Mehak Walia',
    date: '2024-03-14',
    category: 'Hospitality',
    comments: 18,
    likes: 142,
    excerpt: 'Discussing the importance of incorporating sustainability messaging in hospitality PR...',
  },
  {
    title: 'Digital Innovation in F&B Marketing',
    author: 'Ramya Padala',
    date: '2024-03-13',
    category: 'Food & Beverage',
    comments: 31,
    likes: 198,
    excerpt: 'How digital technologies are transforming food and beverage marketing strategies...',
  },
  {
    title: 'Influencer Collaboration Best Practices',
    author: 'Naman Mittal',
    date: '2024-03-12',
    category: 'Lifestyle',
    comments: 27,
    likes: 173,
    excerpt: 'Key considerations for successful influencer partnerships in lifestyle PR...',
  },
];

export default function Forum() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industry Forum
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join the conversation about the latest trends and insights in PR and communications
            </p>
          </div>

          <div className="grid gap-8">
            {discussions.map((discussion, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
                    {discussion.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {discussion.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {discussion.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {discussion.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <MessageSquare size={20} />
                      <span>{discussion.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <ThumbsUp size={20} />
                      <span>{discussion.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <Share2 size={20} />
                      <span>Share</span>
                    </button>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    By {discussion.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}