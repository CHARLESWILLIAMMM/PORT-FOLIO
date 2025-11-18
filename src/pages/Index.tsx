import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";
import { Code2, Palette, Sparkles, Megaphone, Lightbulb, Smartphone } from "lucide-react";

const portfolioData: PortfolioPageProps = {
  logo: {
    initials: 'CW',
    name: 'Charles william',
  },
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ],
  resume: {
    label: 'Resume',
    onClick: () => alert('Resume download coming soon!'),
  },
  hero: {
    titleLine1: 'Creative Developer &',
    titleLine2Gradient: 'Digital Designer',
    subtitle: 'I craft beautiful digital experiences through code and design. Specializing in modern web development, UI/UX design, and bringing innovative ideas to life.',
  },
  ctaButtons: {
    primary: {
      label: 'View My Work',
      onClick: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    secondary: {
      label: 'Get In Touch',
      onClick: () => {
        window.location.href = 'mailto:charleswilliamjoseph78@gmail.com';
      },
    },
  },
  projects: [
    {
      title: 'FinTech Mobile App',
      description: 'React Native app with AI-powered financial insights and real-time analytics.',
      tags: ['React Native', 'Node.js', 'AI'],
      imageContent: <Code2 className="w-12 h-12 text-primary/60" />,
    },
    {
      title: 'Data Visualization Platform',
      description: 'Interactive dashboard for complex data analysis with beautiful charts.',
      tags: ['D3.js', 'Python', 'PostgreSQL'],
      imageContent: <Sparkles className="w-12 h-12 text-accent/60" />,
    },
    {
      title: '3D Portfolio Site',
      description: 'Immersive WebGL experience with stunning 3D elements and animations.',
      tags: ['Three.js', 'WebGL', 'GLSL'],
      imageContent: <Palette className="w-12 h-12 text-primary/60" />,
    },
    {
      title: 'Digital Marketing Campaign',
      description: 'Full-scale digital marketing strategy with SEO optimization and social media integration.',
      tags: ['SEO', 'Social Media', 'Analytics'],
      imageContent: <Megaphone className="w-12 h-12 text-primary/60" />,
    },
    {
      title: 'Innovative Brand Identity',
      description: 'Complete brand redesign with modern aesthetics and comprehensive style guide.',
      tags: ['Branding', 'Design System', 'UI/UX'],
      imageContent: <Lightbulb className="w-12 h-12 text-accent/60" />,
    },
    {
      title: 'Custom Web & App Development',
      description: 'End-to-end development of responsive web applications and mobile apps.',
      tags: ['React', 'TypeScript', 'Mobile'],
      imageContent: <Smartphone className="w-12 h-12 text-primary/60" />,
    },
  ],
  stats: [
    { value: '50+', label: 'Projects Completed' },
    { value: '5+', label: 'Years Experience' },
    { value: '15+', label: 'Happy Clients' },
  ],
  showAnimatedBackground: true,
};

const Index = () => {
  return <PortfolioPage {...portfolioData} />;
};

export default Index;
