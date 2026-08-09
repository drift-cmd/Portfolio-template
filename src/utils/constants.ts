export const CONTACT_INFO = {
  name: 'Your Name',
  email: 'hello@example.com',
  phone: '+1 555 555 0123',
  location: 'Your City, Country',
  title: 'Example Role • Example Focus',
  description: 'Replace this copy with your own story and style',
};

export const SOCIAL_LINKS = {
  github: 'https://example.com',
  youtube: 'https://example.com',
  linktree: 'https://example.com',
};

export const SKILLS = [
  { name: 'HTML/CSS', level: 85, category: 'frontend' },
  { name: 'Web Dveloper', level: 75, category: 'frontend' },
  // { name: 'React', level: 70, category: 'frontend' },
  // { name: 'TypeScript', level: 65, category: 'frontend' },
  // { name: 'Tailwind CSS', level: 80, category: 'frontend' },
  // { name: 'Logo Design', level: 90, category: 'design' },
  // { name: 'UI/UX Design', level: 75, category: 'design' },
  { name: 'Content Creation', level: 80, category: 'content' },
  { name: 'Video Editing', level: 70, category: 'content' },
];

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  }
};