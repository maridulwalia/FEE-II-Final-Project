import { FaLinkedin as Linkedin,FaTwitter  as Twitter } from 'react-icons/fa';
import {FiMail as Mail} from 'react-icons/fi' ;
import maridulImage from '../images/Maridul.jpg';
import mehakImage from '../images/Mehak.jpg';
import namanImage from '../images/Naman Mittal.jpg';
import ramyaImage from '../images/Ramya.jpg';

const team = [
  {
    name: 'Maridul Walia',
    role: 'CEO & Founder',
    image: maridulImage,
    bio: 'With over 2 years of experience in PR and communications, Sarah leads our agency with vision and expertise.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'maridul1897.be23chitkara.edu.in',
    },
  },
  {
    name: 'Mehak Walia',
    role: 'Creative Director',
    image: mehakImage,
    bio: 'Mehak brings creative excellence to our campaigns, ensuring each project stands out in the market.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mehak1901.be23@chitkara.edu.in',
    },
  },
  {
    name: 'Ramya Padala',
    role: 'Head of Strategy',
    image: ramyaImage,
    bio: 'Ramya develops innovative strategies that drive results for our clients across all sectors.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'ramya2587.be23@chitkara.edu.in',
    },
  },
  {
    name: 'Naman Mittal',
    role: 'Client Relations Director',
    image: namanImage,
    bio: 'Naman ensures exceptional service delivery and maintains strong client relationships.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'naman2588.be23@chitkara.edu.in',
    },
  },
];

export default function Leadership() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Leadership Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet the experts driving innovation and excellence in communications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-gray-900" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Twitter className="w-5 h-5 text-gray-900" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-gray-900" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.bio}
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