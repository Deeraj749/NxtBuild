/**
 * NxtBuild Starter Templates & Compilation Utility
 */

// 1. Blank Canvas Schema
export const BLANK_TEMPLATE = {
  id: 'blank',
  name: 'Blank Canvas',
  description: 'Start from scratch with a completely blank canvas.',
  icon: '📄',
  schema: {
    type: 'Page',
    props: {
      title: 'Blank Canvas',
      theme: 'light',
      bgColor: '#ffffff',
      textColor: '#1f2937'
    },
    children: [
      {
        type: 'Hero',
        props: {
          title: 'Blank Canvas',
          subtitle: 'Welcome to your new blank project. Type instructions in the chat box on the left to start building your application with AI!',
          align: 'center',
          ctaText: 'Get Started',
          ctaLink: '#'
        }
      }
    ]
  }
};

// 2. Personal Portfolio Schema
export const PORTFOLIO_TEMPLATE = {
  id: 'portfolio',
  name: 'Personal Portfolio',
  description: 'A stylish, dark-themed portfolio website for creators and engineers.',
  icon: '🎨',
  schema: {
    type: 'Page',
    props: {
      title: 'Alex Dev | Portfolio',
      theme: 'dark',
      bgColor: '#0f172a',
      textColor: '#f8fafc'
    },
    children: [
      {
        type: 'Navbar',
        props: {
          brand: 'AlexDev',
          links: [
            { label: 'About', url: '#about' },
            { label: 'Projects', url: '#projects' },
            { label: 'Skills', url: '#skills' },
            { label: 'Contact', url: '#contact' }
          ]
        }
      },
      {
        type: 'Hero',
        props: {
          title: 'Hi, I am Alex',
          subtitle: 'Building sleek digital products and robust full-stack applications with beautiful designs and clean code.',
          ctaText: 'View Projects',
          ctaLink: '#projects',
          secondaryText: 'Resume',
          secondaryLink: '#',
          showAvatar: true,
          avatarGradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
        }
      },
      {
        type: 'ProjectsGrid',
        props: {
          title: 'My Featured Work',
          categories: ['All', 'Web', 'Mobile'],
          items: [
            {
              id: 'p1',
              title: 'SaaS Analytics Dashboard',
              category: 'Web',
              description: 'A real-time metrics platform visualizing sales, traffic, and user retention analytics.',
              tags: ['React', 'NodeJS', 'D3.js'],
              badge: 'Featured'
            },
            {
              id: 'p2',
              title: 'Task Management Mobile App',
              category: 'Mobile',
              description: 'A cross-platform iOS/Android utility for agile teams with task lists, chat, and reports.',
              tags: ['React Native', 'Firebase'],
              badge: 'New'
            },
            {
              id: 'p3',
              title: 'AI Smart Generator',
              category: 'Web',
              description: 'An AI-powered generator automating newsletter digests, copywriting, and SEO headers.',
              tags: ['Next.js', 'OpenAI API'],
              badge: 'Trending'
            }
          ]
        }
      },
      {
        type: 'SkillsGrid',
        props: {
          title: 'Core Technologies',
          skills: [
            { name: 'JavaScript (ES6+)', level: 'Expert' },
            { name: 'React & Next.js', level: 'Expert' },
            { name: 'Node.js & Express', level: 'Advanced' },
            { name: 'MongoDB / PostgreSQL', level: 'Advanced' },
            { name: 'CSS Grid & Flexbox', level: 'Expert' },
            { name: 'Git & CI/CD', level: 'Intermediate' }
          ]
        }
      },
      {
        type: 'ContactForm',
        props: {
          title: 'Get In Touch',
          subtitle: 'Let us build something together. Fill out the form below or drop me a line!'
        }
      },
      {
        type: 'Footer',
        props: {
          copyright: '© 2026 Alex Dev. All rights reserved.',
          links: [
            { label: 'GitHub', url: '#' },
            { label: 'LinkedIn', url: '#' },
            { label: 'Twitter', url: '#' }
          ]
        }
      }
    ]
  }
};

// 3. Product Landing Page Schema
export const LANDING_PAGE_TEMPLATE = {
  id: 'landing_page',
  name: 'Product Landing Page',
  description: 'A beautiful landing page with HSL violet styling, feature cards, and FAQ accordions.',
  icon: '🚀',
  schema: {
    type: 'Page',
    props: {
      title: 'NxtSaaS - Grow Smarter',
      theme: 'light',
      bgColor: '#ffffff',
      textColor: '#1f2937'
    },
    children: [
      {
        type: 'Navbar',
        props: {
          brand: 'NxtSaaS',
          links: [
            { label: 'Features', url: '#features' },
            { label: 'FAQ', url: '#faq' },
            { label: 'Newsletter', url: '#newsletter' }
          ],
          cta: { label: 'Start Free Trial', url: '#trial' }
        }
      },
      {
        type: 'Hero',
        props: {
          title: 'Scale your product without the complexity.',
          subtitle: 'Deploy workflows, monitor operations, and scale from prototype to enterprise with our seamless development toolkit.',
          ctaText: 'Start Free Trial',
          ctaLink: '#trial',
          secondaryText: 'Book a Demo',
          secondaryLink: '#demo',
          imageStyle: 'browser',
          primaryGradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
        }
      },
      {
        type: 'Grid',
        props: {
          id: 'features',
          title: 'Engineered for Performance',
          subtitle: 'Everything you need to deliver high-quality web applications rapidly.',
          columns: 3,
          items: [
            {
              title: 'Lightning Fast Speeds',
              description: 'Global content delivery network (CDN) ensures your website assets load under 100ms.',
              icon: '⚡'
            },
            {
              title: 'Secure by Default',
              description: 'Automatic SSL, enterprise security policies, and encrypted databases shield your data.',
              icon: '🛡️'
            },
            {
              title: 'Collaborative Editor',
              description: 'Co-author scripts and review build configurations live with your development team.',
              icon: '👥'
            }
          ]
        }
      },
      {
        type: 'FAQAccordion',
        props: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          items: [
            {
              question: 'How long is the free trial?',
              answer: 'Our free trial is 14 days, with full access to all standard developer features, hosted databases, and support pipelines.'
            },
            {
              question: 'Can I cancel my subscription anytime?',
              answer: 'Yes, you can cancel directly inside your dashboard settings menu with a single click. No cancellation fees.'
            },
            {
              question: 'Do you offer custom enterprise pricing?',
              answer: 'We provide specialized discounts and custom configurations for businesses with larger clusters. Contact sales.'
            }
          ]
        }
      },
      {
        type: 'Newsletter',
        props: {
          id: 'newsletter',
          title: 'Stay ahead of the curve',
          subtitle: 'Sign up for our tech bulletin to receive architectural tips, release notes, and industry benchmarks.'
        }
      },
      {
        type: 'Footer',
        props: {
          copyright: '© 2026 NxtSaaS Inc. Accelerating development globally.',
          links: [
            { label: 'Privacy Policy', url: '#' },
            { label: 'Terms of Service', url: '#' }
          ]
        }
      }
    ]
  }
};

// 4. Minimalist Blog Schema
export const BLOG_TEMPLATE = {
  id: 'blog',
  name: 'Minimalist Blog',
  description: 'A clean, typography-focused blog template with post overlays.',
  icon: '✍️',
  schema: {
    type: 'Page',
    props: {
      title: 'The Minimalist | Blog',
      theme: 'light',
      bgColor: '#fafafa',
      textColor: '#171717'
    },
    children: [
      {
        type: 'Navbar',
        props: {
          brand: 'The Minimalist',
          links: [
            { label: 'Journal', url: '#posts' },
            { label: 'Newsletter', url: '#newsletter' },
            { label: 'About', url: '#about' }
          ]
        }
      },
      {
        type: 'FeaturedPost',
        props: {
          tag: 'FEATURED JOURNAL',
          title: 'Designing interfaces that stand the test of time',
          excerpt: 'Why flat trends age faster than typographic systems. Discover the core values of building interfaces that look premium for decades.',
          date: 'July 18, 2026',
          author: 'Marc Nielsen',
          imageColor: '#e0f2fe'
        }
      },
      {
        type: 'BlogFeed',
        props: {
          title: 'Recent Entries',
          posts: [
            {
              id: 'b1',
              title: 'Mastering CSS Grid and Subgrid',
              category: 'Development',
              excerpt: 'A comprehensive visual guide into using subgrid for aligning card structures and nested listings.',
              date: 'July 10, 2026',
              content: 'CSS Subgrid allows nested grids to align their tracks to the parent grid! This solves long-standing issues where cards in a row had misaligned headers and footers because their text contents varied. To use it, simply set grid-template-rows: subgrid on the card containers.'
            },
            {
              id: 'b2',
              title: 'The Future of Server-Side Rendering',
              category: 'Architecture',
              excerpt: 'Comparing hybrid hydration models with static caching strategies for maximum scalability.',
              date: 'June 29, 2026',
              content: 'The next generation of SSR goes beyond simple hydration. Partial hydration, server components, and islands architecture allow us to render complex applications with almost zero client-side JavaScript overhead. This yields excellent Core Web Vitals.'
            },
            {
              id: 'b3',
              title: 'Choosing the Right Font Palette',
              category: 'Typography',
              excerpt: 'A review of geometric sans-serif typefaces vs classic serifs for technical documentation.',
              date: 'May 14, 2026',
              content: 'Fonts dictate the voice of your interface. Technical documentations thrive on high-legibility monospace fonts combined with neutral sans-serif headers (like Inter or Roboto). Meanwhile, branding benefits from distinct serif typography (like Bree Serif or Playfair Display).'
            }
          ]
        }
      },
      {
        type: 'AuthorCard',
        props: {
          name: 'Marc Nielsen',
          role: 'Founding Designer & Developer',
          bio: 'Writing on minimal UI design, web architecture, and typographic grids. Based in Copenhagen.'
        }
      },
      {
        type: 'Footer',
        props: {
          copyright: '© 2026 The Minimalist. Built for speed.',
          links: [
            { label: 'Feed RSS', url: '#' },
            { label: 'Github', url: '#' }
          ]
        }
      }
    ]
  }
};

// 5. E-Commerce Storefront Schema
export const ECOMMERCE_TEMPLATE = {
  id: 'ecommerce',
  name: 'E-Commerce Storefront',
  description: 'A high-converting online shop with a promo bar, banner, and featured product grid.',
  icon: '🛒',
  schema: {
    type: 'Page',
    props: {
      title: 'NxtWear - Modern Apparel',
      theme: 'light',
      bgColor: '#ffffff',
      textColor: '#111827'
    },
    children: [
      {
        type: 'PromoBar',
        props: {
          text: 'Free shipping on orders over $50! Use code FIRST10 for 10% off.'
        }
      },
      {
        type: 'Navbar',
        props: {
          brand: 'NxtWear',
          links: [
            { label: 'Shop All', url: '#shop' },
            { label: 'New Arrivals', url: '#new' },
            { label: 'Sale', url: '#sale' }
          ],
          showCart: true
        }
      },
      {
        type: 'Hero',
        props: {
          title: 'Sleek Essentials for the Modern Wardrobe',
          subtitle: 'Carefully curated minimalist apparel designed for premium comfort, utility, and timeless style.',
          ctaText: 'Shop the Collection',
          ctaLink: '#shop',
          secondaryText: 'Our Story',
          secondaryLink: '#story',
          imageStyle: 'fashion',
          primaryGradient: 'linear-gradient(135deg, #111827, #374151)'
        }
      },
      {
        type: 'FeaturedProducts',
        props: {
          id: 'shop',
          title: 'Featured Collection',
          items: [
            {
              id: 'p_shop1',
              title: 'Premium Heavyweight Tee',
              price: '$35.00',
              originalPrice: '$45.00',
              badge: 'Sale',
              category: 'Apparel',
              imageColor: '#f3f4f6'
            },
            {
              id: 'p_shop2',
              title: 'Minimalist Zip Hoodie',
              price: '$78.00',
              badge: 'Best Seller',
              category: 'Outerwear',
              imageColor: '#e5e7eb'
            },
            {
              id: 'p_shop3',
              title: 'Tech Travel Pack',
              price: '$110.00',
              badge: 'New',
              category: 'Accessories',
              imageColor: '#d1d5db'
            },
            {
              id: 'p_shop4',
              title: 'Organic Cotton Socks',
              price: '$12.00',
              category: 'Apparel',
              imageColor: '#f9fafb'
            }
          ]
        }
      },
      {
        type: 'Newsletter',
        props: {
          title: 'Join the Club',
          subtitle: 'Receive exclusive early access to product launches, seasonal collections, and subscriber offers.'
        }
      },
      {
        type: 'Footer',
        props: {
          copyright: '© 2026 NxtWear Apparel. Handcrafted quality.',
          links: [
            { label: 'FAQ', url: '#' },
            { label: 'Support', url: '#' }
          ]
        }
      }
    ]
  }
};

// 6. Local Business Schema
export const LOCAL_BUSINESS_TEMPLATE = {
  id: 'local_business',
  name: 'Local Business / Service',
  description: 'Perfect for professional service providers, featuring hours, pricing, and reviews.',
  icon: '💈',
  schema: {
    type: 'Page',
    props: {
      title: 'The Cut - Premium Barber Studio',
      theme: 'light',
      bgColor: '#fafaf9',
      textColor: '#1c1917'
    },
    children: [
      {
        type: 'Navbar',
        props: {
          brand: 'The Cut Studio',
          links: [
            { label: 'Services', url: '#services' },
            { label: 'Hours', url: '#hours' },
            { label: 'Testimonials', url: '#reviews' }
          ],
          cta: { label: 'Book Now', url: '#book' }
        }
      },
      {
        type: 'SplitSection',
        props: {
          title: 'Premium Grooming for the Modern Gentleman',
          subtitle: 'Combining classic barbering techniques with modern precision cuts. Enjoy a premium, relaxed environment with cold drinks, hot towels, and detailed treatments.',
          ctaText: 'Book an Appointment',
          ctaLink: '#book',
          imageColor: '#e7e5e4',
          badgeText: 'ESTABLISHED 2020'
        }
      },
      {
        type: 'ServicesGrid',
        props: {
          id: 'services',
          title: 'Services & Pricing',
          items: [
            { title: 'Classic Haircut', desc: 'Precision styling, hot towel finish, and clean neck shave.', price: '$40' },
            { title: 'Beard Trim & Clean Up', desc: 'Beard shaping, line trim, hot oil massage, and razor touch-up.', price: '$30' },
            { title: 'The Royal Treatment', desc: 'Combined Haircut, full beard styling, charcoal face mask, and wash.', price: '$65' },
            { title: 'Hot Towel Head Shave', desc: 'Relaxing traditional straight-razor clean shave with steam treatment.', price: '$35' }
          ]
        }
      },
      {
        type: 'HoursList',
        props: {
          id: 'hours',
          title: 'Studio Hours',
          hours: [
            { days: 'Monday - Friday', times: '9:00 AM - 7:00 PM', status: 'Open' },
            { days: 'Saturday', times: '8:00 AM - 5:00 PM', status: 'Open' },
            { days: 'Sunday', times: 'Closed', status: 'Closed' }
          ]
        }
      },
      {
        type: 'ReviewsSlider',
        props: {
          id: 'reviews',
          title: 'What Our Clients Say',
          reviews: [
            { name: 'John Doe', rating: '5/5 Stars', comment: 'Best haircut I have had in years. The steam towel finish is incredible. Highly recommend the Royal Treatment!' },
            { name: 'Michael Smith', rating: '5/5 Stars', comment: 'Super professional crew, clean shop, great music, and a top-tier beard trim. Will absolutely be back.' },
            { name: 'Robert Johnson', rating: '5/5 Stars', comment: 'Very detailed attention. They take their time to ensure everything is perfect. A true premium experience!' }
          ]
        }
      },
      {
        type: 'Footer',
        props: {
          copyright: '© 2026 The Cut Studio. 123 Main Street, Suite A.',
          links: [
            { label: 'Instagram', url: '#' },
            { label: 'Map Directions', url: '#' }
          ]
        }
      }
    ]
  }
};

// 7. Link-In-Bio Mobile Hub Schema
export const LINK_IN_BIO_TEMPLATE = {
  id: 'link_in_bio',
  name: 'Link-In-Bio Mobile Hub',
  description: 'A mobile-first collection of custom pill buttons and social icon links.',
  icon: '📱',
  schema: {
    type: 'Page',
    props: {
      title: 'DevLinks | Sophia',
      theme: 'gradient',
      bgColor: 'linear-gradient(180deg, #1e1b4b 0%, #311042 100%)',
      textColor: '#ffffff'
    },
    children: [
      {
        type: 'BioHub',
        props: {
          name: 'Sophia Carter',
          title: 'Creative UI Designer & Educator',
          avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
          avatarGradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
          bio: 'Building design systems, teaching UI/UX, and posting weekly web design tutorials.',
          pills: [
            { label: '🎨 View My Portfolio', url: '#', trackingName: 'portfolio' },
            { label: '🎥 Weekly Design Tutorials (YouTube)', url: '#', trackingName: 'youtube' },
            { label: '📦 Free Design Assets Pack', url: '#', trackingName: 'assets' },
            { label: '✉️ Join My Substack Newsletter', url: '#', trackingName: 'newsletter' },
            { label: '💬 Booking Consultations', url: '#', trackingName: 'booking' }
          ],
          socials: [
            { platform: 'Twitter', url: '#', icon: '🐦' },
            { platform: 'GitHub', url: '#', icon: '🐙' },
            { platform: 'Instagram', url: '#', icon: '📸' },
            { platform: 'LinkedIn', url: '#', icon: '🔗' }
          ]
        }
      }
    ]
  }
};

export const TEMPLATES_LIST = [
  BLANK_TEMPLATE,
  PORTFOLIO_TEMPLATE,
  LANDING_PAGE_TEMPLATE,
  BLOG_TEMPLATE,
  ECOMMERCE_TEMPLATE,
  LOCAL_BUSINESS_TEMPLATE,
  LINK_IN_BIO_TEMPLATE
];

// 2. Compilation Utility
export function compileTemplateToHTML(template) {
  const schema = template.schema;
  const rootProps = schema.props || {};
  const isDark = rootProps.theme === 'dark';
  const isGradient = rootProps.theme === 'gradient';
  
  // Custom theme settings
  let bgStyle = `background: ${rootProps.bgColor || '#ffffff'};`;
  if (isGradient) {
    bgStyle = `background: ${rootProps.bgColor || 'linear-gradient(180deg, #1e1b4b 0%, #311042 100%)'}; background-attachment: fixed;`;
  }
  const textColor = rootProps.textColor || (isDark ? '#f8fafc' : '#1f2937');
  
  // Base Style rules
  let cssRules = `
    :root {
      --primary: #6366f1;
      --primary-hover: #4f46e5;
      --bg: ${rootProps.bgColor || '#ffffff'};
      --text: ${textColor};
      --text-muted: ${isDark ? '#94a3b8' : '#6b7280'};
      --border: ${isDark ? '#334155' : '#e5e7eb'};
      --card-bg: ${isDark ? '#1e293b' : '#ffffff'};
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      ${bgStyle}
      color: var(--text);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      padding-bottom: 40px;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }
    
    button {
      font-family: inherit;
      cursor: pointer;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    
    /* Utility buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      font-weight: 500;
      border-radius: 8px;
      transition: all 0.2s ease;
      font-size: 14px;
      border: none;
    }
    
    .btn-primary {
      background: var(--primary);
      color: white;
    }
    
    .btn-primary:hover {
      background: var(--primary-hover);
      transform: translateY(-1px);
    }
    
    .btn-secondary {
      background: ${isDark ? '#334155' : '#f3f4f6'};
      color: var(--text);
    }
    
    .btn-secondary:hover {
      background: ${isDark ? '#475569' : '#e5e7eb'};
    }
    
    /* Navbar Styles */
    .nav-header {
      border-bottom: 1px solid var(--border);
      background: ${isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
      backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }
    
    .nav-brand {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.025em;
    }
    
    .nav-links {
      display: flex;
      gap: 32px;
      list-style: none;
      align-items: center;
    }
    
    .nav-link {
      font-size: 14px;
      font-weight: 500;
      color: var(--text-muted);
      transition: color 0.15s;
    }
    
    .nav-link:hover {
      color: var(--text);
    }
    
    /* Hero Styles */
    .hero-section {
      padding: 80px 0;
      text-align: center;
    }
    
    .hero-container {
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
    
    .hero-title {
      font-size: 48px;
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.04em;
    }
    
    .hero-subtitle {
      font-size: 18px;
      color: var(--text-muted);
      max-width: 600px;
    }
    
    .hero-actions {
      display: flex;
      gap: 16px;
    }
    
    .hero-avatar {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      padding: 4px;
      background: var(--primary);
      margin-bottom: 12px;
    }
    
    .hero-avatar-inner {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #475569;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      overflow: hidden;
      color: white;
    }

    .hero-device-mockup {
      width: 100%;
      max-width: 700px;
      margin-top: 48px;
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      background: var(--card-bg);
      aspect-ratio: 16/9;
      display: flex;
      flex-direction: column;
    }

    .mockup-header {
      height: 30px;
      background: ${isDark ? '#1e293b' : '#f3f4f6'};
      display: flex;
      align-items: center;
      padding: 0 16px;
      gap: 6px;
      border-bottom: 1px solid var(--border);
    }

    .mockup-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${isDark ? '#475569' : '#d1d5db'};
    }

    .mockup-body {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      font-size: 14px;
    }
    
    /* Grid / Cards Styles */
    .grid-section {
      padding: 60px 0;
    }
    
    .section-header {
      margin-bottom: 40px;
      text-align: center;
    }
    
    .section-title {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 12px;
      letter-spacing: -0.03em;
    }
    
    .section-subtitle {
      color: var(--text-muted);
      font-size: 16px;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .grid-container {
      display: grid;
      gap: 24px;
    }
    
    .grid-3 {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    
    .grid-4 {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
    
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
      transition: all 0.2s;
    }
    
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 20px rgba(0,0,0,0.05);
      border-color: var(--primary);
    }
    
    .card-icon {
      font-size: 32px;
      margin-bottom: 16px;
      display: inline-block;
    }
    
    .card-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .card-desc {
      font-size: 14px;
      color: var(--text-muted);
    }
    
    /* Project Filter styles */
    .filter-buttons {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 32px;
    }
    
    .filter-btn {
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      background: ${isDark ? '#1e293b' : '#f3f4f6'};
      color: var(--text);
      border: 1px solid var(--border);
      transition: all 0.2s;
    }
    
    .filter-btn.active, .filter-btn:hover {
      background: var(--primary);
      color: white;
      border-color: var(--primary);
    }
    
    .project-card {
      padding: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    
    .project-img-placeholder {
      height: 160px;
      background: ${isDark ? '#334155' : '#e2e8f0'};
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      font-size: 14px;
    }
    
    .project-info {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
    }
    
    .project-badge {
      display: inline-block;
      align-self: flex-start;
      padding: 2px 8px;
      font-size: 11px;
      font-weight: 600;
      border-radius: 12px;
      background: rgba(99, 102, 241, 0.15);
      color: var(--primary);
    }
    
    .project-tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 8px;
    }
    
    .project-tag {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 4px;
      background: ${isDark ? '#334155' : '#f3f4f6'};
      color: var(--text-muted);
    }
    
    /* Skills Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
    
    .skill-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .skill-name {
      font-size: 14px;
      font-weight: 600;
    }
    
    .skill-level {
      font-size: 11px;
      font-weight: 500;
      padding: 2px 6px;
      border-radius: 10px;
      background: ${isDark ? '#1e293b' : '#f3f4f6'};
      color: var(--text-muted);
    }
    
    /* Contact Form */
    .contact-section {
      padding: 80px 0;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .contact-form {
      background: var(--card-bg);
      border: 1px solid var(--border);
      padding: 32px;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    
    .form-label {
      font-size: 13px;
      font-weight: 500;
    }
    
    .form-input {
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: ${isDark ? '#0f172a' : '#ffffff'};
      color: var(--text);
      font-family: inherit;
      outline: none;
    }
    
    .form-input:focus {
      border-color: var(--primary);
    }
    
    /* FAQ Accordion Styles */
    .faq-container {
      max-width: 700px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .faq-item {
      border: 1px solid var(--border);
      border-radius: 10px;
      background: var(--card-bg);
      overflow: hidden;
    }
    
    .faq-question {
      padding: 18px 24px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-size: 16px;
      user-select: none;
    }
    
    .faq-answer {
      max-height: 0;
      overflow: hidden;
      padding: 0 24px;
      color: var(--text-muted);
      font-size: 14px;
      transition: all 0.25s ease-out;
    }
    
    .faq-item.active .faq-answer {
      padding-bottom: 18px;
      max-height: 200px;
    }
    
    .faq-chevron {
      font-size: 14px;
      transition: transform 0.2s;
    }
    
    .faq-item.active .faq-chevron {
      transform: rotate(90deg);
    }
    
    /* Newsletter */
    .newsletter-section {
      background: ${isDark ? '#1e293b' : '#6366f1'};
      color: white;
      padding: 60px 0;
      text-align: center;
      border-radius: 16px;
      margin-top: 40px;
    }
    
    .newsletter-section .section-subtitle {
      color: ${isDark ? '#94a3b8' : '#e0e7ff'};
    }
    
    .newsletter-form {
      display: flex;
      max-width: 480px;
      margin: 24px auto 0;
      gap: 10px;
    }
    
    .newsletter-input {
      flex: 1;
      padding: 12px 16px;
      border-radius: 8px;
      border: none;
      outline: none;
    }
    
    .newsletter-btn {
      padding: 12px 24px;
      background: ${isDark ? '#6366f1' : '#111827'};
      color: white;
      font-weight: 600;
      border-radius: 8px;
      border: none;
    }
    
    .newsletter-btn:hover {
      background: ${isDark ? '#4f46e5' : '#1f2937'};
    }
    
    /* Featured Post */
    .featured-post-section {
      padding: 60px 0;
    }
    
    .featured-post-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      border: 1px solid var(--border);
      border-radius: 16px;
      background: var(--card-bg);
      overflow: hidden;
      cursor: pointer;
    }
    
    .featured-post-img {
      height: 100%;
      min-height: 320px;
      background: #e0f2fe;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0284c7;
      font-size: 14px;
    }
    
    .featured-post-info {
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
    }
    
    .featured-tag {
      font-size: 11px;
      font-weight: 700;
      color: var(--primary);
      letter-spacing: 0.1em;
    }
    
    .featured-title {
      font-size: 28px;
      font-weight: 800;
      line-height: 1.2;
    }
    
    .featured-excerpt {
      color: var(--text-muted);
      font-size: 15px;
    }
    
    .featured-meta {
      font-size: 12px;
      color: var(--text-muted);
    }
    
    /* Blog Feed */
    .blog-feed-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 32px;
    }
    
    .blog-card {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 24px;
      border: 1px solid var(--border);
      background: var(--card-bg);
      border-radius: 12px;
      transition: all 0.2s;
    }

    .blog-card:hover {
      border-color: var(--primary);
      transform: translateY(-2px);
    }
    
    .blog-meta-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11px;
      color: var(--text-muted);
    }
    
    .blog-category {
      color: var(--primary);
      font-weight: 600;
      text-transform: uppercase;
    }
    
    .blog-card-title {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.25;
    }
    
    .blog-card-excerpt {
      font-size: 14px;
      color: var(--text-muted);
    }
    
    /* Author Card */
    .author-card {
      background: ${isDark ? '#1e293b' : '#f3f4f6'};
      border-radius: 16px;
      padding: 32px;
      margin: 60px auto 0;
      max-width: 600px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    
    .author-name {
      font-size: 18px;
      font-weight: 700;
    }
    
    .author-role {
      font-size: 13px;
      color: var(--primary);
      font-weight: 600;
    }
    
    .author-bio {
      font-size: 14px;
      color: var(--text-muted);
    }
    
    /* Modal Article Preview */
    .blog-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    
    .blog-modal-content {
      background: var(--card-bg);
      border-radius: 16px;
      padding: 40px;
      max-width: 600px;
      width: 100%;
      border: 1px solid var(--border);
      position: relative;
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .blog-modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 24px;
      cursor: pointer;
      color: var(--text-muted);
      border: none;
      background: none;
    }
    
    /* Footer styles */
    .site-footer {
      border-top: 1px solid var(--border);
      padding: 40px 0;
      margin-top: 80px;
      font-size: 13px;
      color: var(--text-muted);
    }
    
    .footer-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .footer-links {
      display: flex;
      gap: 24px;
    }
    
    /* Promo Bar */
    .promo-bar {
      background: #6366f1;
      color: white;
      padding: 8px 24px;
      text-align: center;
      font-size: 13px;
      font-weight: 500;
      position: relative;
      z-index: 101;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .promo-close {
      position: absolute;
      right: 16px;
      cursor: pointer;
      background: none;
      border: none;
      color: white;
      font-size: 16px;
      font-weight: 700;
    }
    
    /* Cart Badge Navbar */
    .cart-btn {
      position: relative;
      background: none;
      border: none;
      font-size: 18px;
      color: var(--text);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .cart-badge {
      background: #ef4444;
      color: white;
      font-size: 10px;
      font-weight: 700;
      border-radius: 10px;
      padding: 2px 6px;
      min-width: 18px;
      text-align: center;
    }
    
    /* ECommerce Product Grid */
    .prod-card {
      padding: 0;
      overflow: hidden;
      position: relative;
    }
    
    .prod-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: #6366f1;
      color: white;
      font-size: 10px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 20px;
    }
    
    .prod-img {
      height: 200px;
      background: #f3f4f6;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: var(--text-muted);
    }
    
    .prod-info {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    
    .prod-cat {
      font-size: 11px;
      color: var(--text-muted);
      text-transform: uppercase;
      font-weight: 600;
    }
    
    .prod-price-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }
    
    .prod-price {
      font-weight: 700;
      font-size: 16px;
    }
    
    .prod-old-price {
      text-decoration: line-through;
      color: var(--text-muted);
      font-size: 13px;
    }
    
    .prod-btn {
      width: 100%;
      margin-top: 12px;
    }
    
    /* Local Business Split Section */
    .split-section {
      padding: 80px 0;
    }
    
    .split-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: center;
    }
    
    .split-content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .split-badge {
      align-self: flex-start;
      font-size: 11px;
      font-weight: 700;
      color: var(--primary);
      letter-spacing: 0.1em;
    }
    
    .split-img-placeholder {
      height: 380px;
      background: #e7e5e4;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
    }
    
    /* Services Pricing list */
    .service-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid var(--border);
      padding: 16px 0;
    }
    
    .service-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .service-title {
      font-weight: 700;
      font-size: 16px;
    }
    
    .service-desc {
      font-size: 13px;
      color: var(--text-muted);
    }
    
    .service-price-block {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
    }
    
    .service-price {
      font-weight: 800;
      font-size: 18px;
      color: var(--primary);
    }
    
    /* Hours of Operation */
    .hours-card {
      max-width: 500px;
      margin: 40px auto 0;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
    }
    
    .hours-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px dashed var(--border);
    }
    
    .hours-row:last-child {
      border: none;
    }
    
    .hours-days {
      font-weight: 600;
    }
    
    .hours-status {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      background: #dcfce7;
      color: #166534;
      font-weight: 700;
    }
    
    .hours-status.closed {
      background: #fee2e2;
      color: #991b1b;
    }
    
    /* Testimonial slider */
    .reviews-slider {
      max-width: 600px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      text-align: center;
      padding: 40px 20px;
    }
    
    .review-track {
      display: flex;
      transition: transform 0.4s ease-in-out;
    }
    
    .review-slide {
      min-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    
    .review-rating {
      color: #eab308;
      font-weight: 700;
      font-size: 14px;
    }
    
    .review-comment {
      font-size: 16px;
      font-style: italic;
      color: var(--text);
    }
    
    .review-author {
      font-weight: 700;
      font-size: 14px;
      color: var(--text-muted);
    }
    
    .review-controls {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-top: 24px;
    }
    
    .review-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--border);
      border: none;
    }
    
    .review-dot.active {
      background: var(--primary);
    }
    
    /* Link-in-bio mobile hub */
    .bio-hub-wrapper {
      max-width: 480px;
      margin: 40px auto;
      padding: 40px 24px;
      border-radius: 24px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 28px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }
    
    .bio-avatar {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      padding: 3px;
      background: linear-gradient(135deg, #a855f7, #ec4899);
      box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
    }
    
    .bio-avatar-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #1e1b4b;
    }
    
    .bio-identity {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    
    .bio-name {
      font-size: 22px;
      font-weight: 800;
      color: white;
    }
    
    .bio-role {
      font-size: 13px;
      color: #a855f7;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .bio-desc {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      max-width: 320px;
    }
    
    .bio-pills-stack {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .bio-pill {
      width: 100%;
      padding: 16px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 15px;
      font-weight: 600;
      border-radius: 50px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: block;
    }
    
    .bio-pill:hover {
      background: white;
      color: #1e1b4b;
      transform: scale(1.03);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      border-color: white;
    }
    
    .bio-socials {
      display: flex;
      gap: 20px;
      margin-top: 12px;
    }
    
    .bio-social-icon {
      font-size: 24px;
      opacity: 0.8;
      transition: all 0.2s;
    }
    
    .bio-social-icon:hover {
      opacity: 1;
      transform: translateY(-2px);
    }
    
    /* Responsive breakpoints */
    @media (max-width: 768px) {
      .split-container {
        grid-template-columns: 1fr;
        gap: 32px;
      }
      .featured-post-card {
        grid-template-columns: 1fr;
      }
      .hero-title {
        font-size: 32px;
      }
    }
  `;
  
  // Custom compiler to generate HTML components
  function compileNode(node) {
    if (!node) return '';
    const { type, props = {}, children = [] } = node;
    const childHTML = children.map(compileNode).join('');
    
    switch (type) {
      case 'PromoBar':
        return `
          <div class="promo-bar" id="promoBar">
            <span>${props.text || ''}</span>
            <button class="promo-close" onclick="document.getElementById('promoBar').style.display='none'">×</button>
          </div>
        `;
        
      case 'Navbar':
        return `
          <header class="nav-header">
            <div class="container nav-container">
              <a href="#" class="nav-brand">${props.brand || 'Brand'}</a>
              <ul class="nav-links">
                ${(props.links || []).map(link => `<li><a href="${link.url}" class="nav-link">${link.label}</a></li>`).join('')}
                ${props.showCart ? `
                  <li>
                    <button class="cart-btn" onclick="alert('Shopping Cart items: ' + cartCount)">
                      🛒 <span class="cart-badge" id="cartBadge">0</span>
                    </button>
                  </li>
                ` : ''}
                ${props.cta ? `<li><a href="${props.cta.url}" class="btn btn-primary">${props.cta.label}</a></li>` : ''}
              </ul>
            </div>
          </header>
        `;
        
      case 'Hero':
        return `
          <section class="hero-section">
            <div class="container hero-container">
              ${props.showAvatar ? `
                <div class="hero-avatar" style="background: ${props.avatarGradient || 'var(--primary)'}">
                  <div class="hero-avatar-inner">👨‍💻</div>
                </div>
              ` : ''}
              <h1 class="hero-title" style="${props.primaryGradient ? `background: ${props.primaryGradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent;` : ''}">
                ${props.title || ''}
              </h1>
              <p class="hero-subtitle">${props.subtitle || ''}</p>
              <div class="hero-actions">
                ${props.ctaText ? `<a href="${props.ctaLink || '#'}" class="btn btn-primary">${props.ctaText}</a>` : ''}
                ${props.secondaryText ? `<a href="${props.secondaryLink || '#'}" class="btn btn-secondary">${props.secondaryText}</a>` : ''}
              </div>
              ${props.imageStyle === 'browser' ? `
                <div class="hero-device-mockup">
                  <div class="mockup-header">
                    <div class="mockup-dot"></div>
                    <div class="mockup-dot"></div>
                    <div class="mockup-dot"></div>
                  </div>
                  <div class="mockup-body">
                    Interactive Application Preview Placeholder
                  </div>
                </div>
              ` : ''}
            </div>
          </section>
        `;
        
      case 'Grid':
        return `
          <section class="grid-section" id="${props.id || ''}">
            <div class="container">
              <div class="section-header">
                <h2 class="section-title">${props.title || ''}</h2>
                ${props.subtitle ? `<p class="section-subtitle">${props.subtitle}</p>` : ''}
              </div>
              <div class="grid-container grid-${props.columns || 3}">
                ${(props.items || []).map(item => `
                  <div class="card">
                    ${item.icon ? `<span class="card-icon">${item.icon}</span>` : ''}
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-desc">${item.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
        `;
        
      case 'ProjectsGrid':
        return `
          <section class="grid-section" id="projects">
            <div class="container">
              <div class="section-header">
                <h2 class="section-title">${props.title || 'Projects'}</h2>
              </div>
              <div class="filter-buttons">
                ${(props.categories || []).map((cat, idx) => `
                  <button class="filter-btn ${idx === 0 ? 'active' : ''}" onclick="filterProjects('${cat}', this)">${cat}</button>
                `).join('')}
              </div>
              <div class="grid-container grid-3">
                ${(props.items || []).map(item => `
                  <div class="card project-card" data-category="${item.category}">
                    <div class="project-img-placeholder">
                      ${item.title} Preview
                    </div>
                    <div class="project-info">
                      ${item.badge ? `<span class="project-badge">${item.badge}</span>` : ''}
                      <h3 class="card-title" style="margin-top: 4px;">${item.title}</h3>
                      <p class="card-desc">${item.description}</p>
                      <div class="project-tags">
                        ${(item.tags || []).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
        `;
        
      case 'SkillsGrid':
        return `
          <section class="grid-section" id="skills">
            <div class="container">
              <div class="section-header">
                <h2 class="section-title">${props.title || 'Skills'}</h2>
              </div>
              <div class="skills-grid">
                ${(props.skills || []).map(skill => `
                  <div class="skill-card">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-level">${skill.level}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
        `;
        
      case 'ContactForm':
        return `
          <section class="contact-section" id="contact">
            <div class="container">
              <div class="section-header">
                <h2 class="section-title">${props.title || 'Contact Me'}</h2>
                ${props.subtitle ? `<p class="section-subtitle">${props.subtitle}</p>` : ''}
              </div>
              <form class="contact-form" onsubmit="event.preventDefault(); alert('Message sent successfully!'); this.reset();">
                <div class="form-group">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-input" required placeholder="Your Name">
                </div>
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-input" required placeholder="your.email@example.com">
                </div>
                <div class="form-group">
                  <label class="form-label">Message</label>
                  <textarea class="form-input" rows="4" required placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
              </form>
            </div>
          </section>
        `;
        
      case 'FAQAccordion':
        return `
          <section class="grid-section" id="${props.id || ''}">
            <div class="container">
              <div class="section-header">
                <h2 class="section-title">${props.title || 'Frequently Asked Questions'}</h2>
              </div>
              <div class="faq-container">
                ${(props.items || []).map((item, idx) => `
                  <div class="faq-item" id="faq-${idx}">
                    <div class="faq-question" onclick="toggleAccordion('faq-${idx}')">
                      <span>${item.question}</span>
                      <span class="faq-chevron">▶</span>
                    </div>
                    <div class="faq-answer">
                      <p>${item.answer}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
        `;
        
      case 'Newsletter':
        return `
          <section class="newsletter-section" id="${props.id || ''}">
            <div class="container">
              <h2 class="section-title">${props.title || 'Subscribe'}</h2>
              <p class="section-subtitle">${props.subtitle || ''}</p>
              <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing!'); this.reset();">
                <input type="email" class="newsletter-input" placeholder="Enter your email address" required>
                <button type="submit" class="newsletter-btn">Subscribe</button>
              </form>
            </div>
          </section>
        `;
        
      case 'FeaturedPost':
        return `
          <section class="featured-post-section">
            <div class="container">
              <div class="featured-post-card" onclick="openBlogModal('${props.title.replace(/'/g, "\\'")}', '${props.excerpt.replace(/'/g, "\\'")}', 'In this article, Marc Nielsen dives deep into the fundamentals of UI design, examining why structural typography and grids create timeless web interfaces while temporary fashion trends fade away. We cover grid sizing, reading dynamics, line heights, and layout pacing.')">
                <div class="featured-post-img" style="background: ${props.imageColor || '#e0f2fe'}">
                  Featured Graphic
                </div>
                <div class="featured-post-info">
                  <span class="featured-tag">${props.tag || 'FEATURED'}</span>
                  <h2 class="featured-title">${props.title || ''}</h2>
                  <p class="featured-excerpt">${props.excerpt || ''}</p>
                  <div class="featured-meta">
                    By ${props.author || 'Author'} • ${props.date || ''}
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;
        
      case 'BlogFeed':
        return `
          <section class="grid-section" id="posts">
            <div class="container">
              <div class="section-header">
                <h2 class="section-title">${props.title || 'Recent Entries'}</h2>
              </div>
              <div class="blog-feed-container">
                ${(props.posts || []).map(post => `
                  <div class="blog-card" onclick="openBlogModal('${post.title.replace(/'/g, "\\'")}', '${post.excerpt.replace(/'/g, "\\'")}', '${(post.content || '').replace(/'/g, "\\'")}')">
                    <div class="blog-meta-row">
                      <span class="blog-category">${post.category}</span>
                      <span>${post.date}</span>
                    </div>
                    <h3 class="blog-card-title">${post.title}</h3>
                    <p class="blog-card-excerpt">${post.excerpt}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
        `;
        
      case 'AuthorCard':
        return `
          <div class="author-card" id="about">
            <div class="author-name">${props.name || ''}</div>
            <div class="author-role">${props.role || ''}</div>
            <p class="author-bio">${props.bio || ''}</p>
          </div>
        `;
        
      case 'FeaturedProducts':
        return `
          <section class="grid-section" id="${props.id || 'shop'}">
            <div class="container">
              <div class="section-header">
                <h2 class="section-title">${props.title || 'Featured Collection'}</h2>
              </div>
              <div class="grid-container grid-4">
                ${(props.items || []).map(item => `
                  <div class="card prod-card">
                    ${item.badge ? `<span class="prod-badge">${item.badge}</span>` : ''}
                    <div class="prod-img" style="background-color: ${item.imageColor || '#f3f4f6'}">
                      🛍️ ${item.title}
                    </div>
                    <div class="prod-info">
                      <span class="prod-cat">${item.category || ''}</span>
                      <h3 class="card-title" style="font-size: 15px; margin: 2px 0;">${item.title}</h3>
                      <div class="prod-price-row">
                        <span class="prod-price">${item.price}</span>
                        ${item.originalPrice ? `<span class="prod-old-price">${item.originalPrice}</span>` : ''}
                      </div>
                      <button class="btn btn-primary prod-btn" onclick="addToCart()">Add to Cart</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
        `;
        
      case 'SplitSection':
        return `
          <section class="split-section">
            <div class="container split-container">
              <div class="split-content">
                ${props.badgeText ? `<span class="split-badge">${props.badgeText}</span>` : ''}
                <h1 class="hero-title">${props.title || ''}</h1>
                <p class="hero-subtitle">${props.subtitle || ''}</p>
                <div>
                  <a href="${props.ctaLink || '#'}" class="btn btn-primary">${props.ctaText || 'Get Started'}</a>
                </div>
              </div>
              <div class="split-img-placeholder" style="background-color: ${props.imageColor || '#e2e8f0'}">
                Visual Mockup
              </div>
            </div>
          </section>
        `;
        
      case 'ServicesGrid':
        return `
          <section class="grid-section" id="${props.id || 'services'}">
            <div class="container">
              <div class="section-header">
                <h2 class="section-title">${props.title || 'Services & Pricing'}</h2>
              </div>
              <div class="grid-container grid-3">
                ${(props.items || []).map(item => `
                  <div class="card service-item" style="display: flex; flex-direction: column; justify-content: space-between;">
                    <div class="service-info">
                      <h3 class="service-title">${item.title}</h3>
                      <p class="service-desc">${item.desc}</p>
                    </div>
                    <div class="service-price-block" style="margin-top: 16px;">
                      <span class="service-price">${item.price}</span>
                      <button class="btn btn-secondary btn-sm" style="padding: 6px 12px; font-size: 12px;" onclick="alert('Selected service: ${item.title}')">Select</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
        `;
        
      case 'HoursList':
        return `
          <div class="hours-card" id="${props.id || 'hours'}">
            <h3 class="card-title" style="text-align: center; margin-bottom: 20px;">${props.title || 'Business Hours'}</h3>
            ${(props.hours || []).map(row => `
              <div class="hours-row">
                <span class="hours-days">${row.days}</span>
                <span class="hours-times">${row.times}</span>
                <span class="hours-status ${row.status.toLowerCase() === 'closed' ? 'closed' : ''}">${row.status}</span>
              </div>
            `).join('')}
          </div>
        `;
        
      case 'ReviewsSlider':
        return `
          <section class="grid-section" id="${props.id || 'reviews'}" style="background-color: ${isDark ? '#1e293b' : '#f3f4f6'}; margin-top: 60px;">
            <div class="container">
              <div class="section-header" style="margin-bottom: 20px;">
                <h2 class="section-title">${props.title || 'Client Testimonials'}</h2>
              </div>
              <div class="reviews-slider">
                <div class="review-track" id="reviewTrack">
                  ${(props.reviews || []).map(rev => `
                    <div class="review-slide">
                      <span class="review-rating">${rev.rating}</span>
                      <blockquote class="review-comment">"${rev.comment}"</blockquote>
                      <cite class="review-author">— ${rev.name}</cite>
                    </div>
                  `).join('')}
                </div>
                <div class="review-controls">
                  ${(props.reviews || []).map((_, idx) => `
                    <button class="review-dot ${idx === 0 ? 'active' : ''}" onclick="slideReview(${idx}, this)"></button>
                  `).join('')}
                </div>
              </div>
            </div>
          </section>
        `;
        
      case 'BioHub':
        return `
          <div class="bio-hub-wrapper">
            <div class="bio-avatar">
              ${props.avatarUrl ? `
                <img src="${props.avatarUrl}" class="bio-avatar-img" alt="${props.name}">
              ` : `
                <div class="bio-avatar-img" style="background: ${props.avatarGradient || 'var(--primary)'}; display: flex; align-items: center; justify-content: center; font-size: 32px; color: white;">👋</div>
              `}
            </div>
            <div class="bio-identity">
              <h1 class="bio-name">${props.name || 'Your Name'}</h1>
              ${props.title ? `<span class="bio-role">${props.title}</span>` : ''}
              ${props.bio ? `<p class="bio-desc">${props.bio}</p>` : ''}
            </div>
            <div class="bio-pills-stack">
              ${(props.pills || []).map(pill => `
                <a href="${pill.url}" class="bio-pill" onclick="alert('Navigating to: ' + '${pill.label}')">${pill.label}</a>
              `).join('')}
            </div>
            <div class="bio-socials">
              ${(props.socials || []).map(soc => `
                <a href="${soc.url}" class="bio-social-icon" title="${soc.platform}">${soc.icon}</a>
              `).join('')}
            </div>
          </div>
        `;
        
      case 'Footer':
        return `
          <footer class="site-footer">
            <div class="container footer-container">
              <div>${props.copyright || ''}</div>
              <div class="footer-links">
                ${(props.links || []).map(link => `<a href="${link.url}">${link.label}</a>`).join('')}
              </div>
            </div>
          </footer>
        `;
        
      default:
        return childHTML;
    }
  }

  // Generate content body
  const bodyContent = compileNode(schema);
  
  // Custom javascript for interactivity
  const scriptContent = `
    let cartCount = 0;
    
    function filterProjects(category, btn) {
      // Filter buttons update
      const buttons = document.querySelectorAll('.filter-btn');
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Projects grid update
      const cards = document.querySelectorAll('.project-card');
      cards.forEach(card => {
        if (category === 'All' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
    
    function toggleAccordion(itemId) {
      const item = document.getElementById(itemId);
      const isActive = item.classList.contains('active');
      
      // Collapse other accordions
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
      });
      
      if (!isActive) {
        item.classList.add('active');
      }
    }
    
    function openBlogModal(title, excerpt, content) {
      const modal = document.getElementById('blogModal');
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalExcerpt').innerText = excerpt;
      document.getElementById('modalBody').innerText = content;
      modal.style.display = 'flex';
    }
    
    function closeBlogModal() {
      document.getElementById('blogModal').style.display = 'none';
    }
    
    function addToCart() {
      cartCount++;
      const badge = document.getElementById('cartBadge');
      if (badge) {
        badge.innerText = cartCount;
      }
      alert('Product added to shopping cart! Total items: ' + cartCount);
    }
    
    function slideReview(index, dot) {
      const track = document.getElementById('reviewTrack');
      if (track) {
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
      }
      
      const dots = document.querySelectorAll('.review-dot');
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    }
    
    // Close modal on click outside
    window.onclick = function(event) {
      const modal = document.getElementById('blogModal');
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  `;

  // Construct complete single file HTML
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${rootProps.title || 'NxtBuild Site'}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    ${cssRules}
  </style>
</head>
<body>
  ${bodyContent}
  
  <!-- Shared Blog Modal Overlay (renders statically and is triggered by click handlers) -->
  <div class="blog-modal" id="blogModal">
    <div class="blog-modal-content">
      <button class="blog-modal-close" onclick="closeBlogModal()">×</button>
      <h2 id="modalTitle" style="font-size: 24px; font-weight: 800;">Post Title</h2>
      <p id="modalExcerpt" style="font-size: 14px; font-style: italic; color: var(--text-muted);">Excerpt</p>
      <hr style="border: 0; border-top: 1px solid var(--border);" />
      <div id="modalBody" style="font-size: 15px; line-height: 1.6;">Article contents...</div>
    </div>
  </div>

  <script>
    ${scriptContent}
  </script>
</body>
</html>`;
}
