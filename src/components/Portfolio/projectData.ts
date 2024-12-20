import { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&h=900',
    technologies: [
      { name: 'React', color: 'text-blue-400' },
      { name: 'FastAPI', color: 'text-green-400' },
      { name: 'MongoDB', color: 'text-purple-400' }
    ],
    category: 'Web Apps',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management System',
    description: 'A collaborative task management tool with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1600&h=900',
    technologies: [
      { name: 'TypeScript', color: 'text-blue-400' },
      { name: 'Node.js', color: 'text-green-400' },
      { name: 'PostgreSQL', color: 'text-purple-400' }
    ],
    category: 'Web Apps',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: '3',
    title: 'Weather Forecast App',
    description: 'A mobile app providing accurate weather forecasts with interactive maps and notifications.',
    image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&w=1600&h=900',
    technologies: [
      { name: 'React Native', color: 'text-blue-400' },
      { name: 'Redux', color: 'text-purple-400' },
      { name: 'OpenWeather API', color: 'text-yellow-400' }
    ],
    category: 'Mobile Apps',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  }
];