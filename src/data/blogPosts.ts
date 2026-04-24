export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: ContentSection[];
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  keywords?: string[];
  metaDescription?: string;
}

export interface ContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote' | 'table' | 'stats' | 'chart' | 'icon-list' | 'bibliography' | 'feature-grid' | 'split-image-list' | 'process-steps';
  content?: string;
  image?: string;
  items?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
    icons?: string[];
  };
  statsData?: {
    value: string;
    label: string;
    icon?: string;
  }[];
  chartData?: {
    title: string;
    data: { name: string; value: number; }[];
  };
  featureGridData?: {
    title: string;
    subtitle?: string;
    prototypeLink?: string;
    status?: string;
    groups: {
      title: string;
      items: string[];
      highlight?: boolean;
    }[];
    layout?: 'grid' | 'mindmap';
  };
  processData?: {
    steps: {
      id: number;
      title: string;
      description?: string;
      activities?: string[];
    }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '3',
    title: 'Your Idea, Our Process — From Concept to Launch with Tanoshi Vietnam',
    slug: 'from-idea-to-launch-development-process',
    excerpt: 'Take a behind-the-scenes look at how Tanoshi Vietnam transforms ideas into market-ready smart products through our proven 5-step development process.',
    date: 'May 15, 2025',
    author: 'Tanoshi Vietnam Technologies',
    category: 'Process',
    imageUrl: '/lovable-uploads/5262afdb-dd24-4d5e-be66-7c6717adbca9.png',
    keywords: [
      'product development',
      'smart product design',
      'development process',
      'prototyping',
      'manufacturing',
      'product launch',
      'innovation process',
      'textile development',
      'smart textiles'
    ],
    metaDescription: 'Learn about Tanoshi Vietnam proven 5-step process for developing smart products from initial concept to market launch. Discover how we turn ideas into reality.',
    content: [
      {
        type: 'paragraph',
        content: 'At Tanoshi Vietnam, we simplify the journey from a business idea to a fully working digital product. Whether you\'re starting from scratch or already have a concept ready to build, we\'re here to support you exactly where you need us.'
      },
      {
        type: 'paragraph',
        content: 'Let\'s walk through our process with an example: Imagine you come to us with the idea of an online platform where businesses can manage their orders, track deliveries in real time, and automatically send invoices to customers — all in one place.'
      },
      {
        type: 'heading',
        content: 'Step 1: Design & UI/UX'
      },
      {
        type: 'paragraph',
        content: 'It all starts with a clear conversation. When you bring us your idea, we meet to fully understand your vision, your users, and your business goals. We\'ll discuss key questions: What problem does this solve? Who will use it daily? What does success look like in 6 months?'
      },
      {
        type: 'paragraph',
        content: 'From there, we translate everything into wireframes and interactive prototypes — so you can see and feel the product before a single line of code is written. Every screen is reviewed and signed off together with you, ensuring the design fits your brand and your users before we move forward.'
      },
      {
        type: 'paragraph',
        content: 'If you already have a design or brand guidelines, we\'ll build on top of what you have and make it better.'
      },
      {
        type: 'heading',
        content: 'Step 2: Development & Code'
      },
      {
        type: 'paragraph',
        content: 'Once the design is approved, our engineering team moves quickly to bring it to life. For your order management platform, we design the system architecture, build the frontend interface your team will use every day, and develop the backend that handles all the logic — orders, statuses, notifications, user roles.'
      },
      {
        type: 'paragraph',
        content: 'Every feature goes through code review and testing before it reaches you. We write clean, well-structured code so that when your business grows and needs new features, adding them is straightforward — not a headache.'
      },
      {
        type: 'heading',
        content: 'Step 3: Server & Infrastructure'
      },
      {
        type: 'paragraph',
        content: 'A great product needs a reliable home. We set up and configure cloud infrastructure that keeps your platform fast, secure, and always online. For your platform, this means automated deployments so updates go live without downtime, regular backups so your data is never at risk, and real-time monitoring so we catch issues before your users do.'
      },
      {
        type: 'paragraph',
        content: 'We aim for 99.9% uptime — because your business doesn\'t stop on weekends, and neither do we.'
      },
      {
        type: 'heading',
        content: 'Step 4: Automation & Workflow'
      },
      {
        type: 'paragraph',
        content: 'This is where we save your team real hours every week. We look at the repetitive tasks inside your business and automate them. For your platform, that means automatic invoice generation when an order is completed, alert emails when a delivery is delayed, and a dashboard that updates in real time without anyone having to pull reports manually.'
      },
      {
        type: 'paragraph',
        content: 'We also connect your new platform to the tools you already use — CRM systems, accounting software, communication tools — so everything works together seamlessly.'
      },
      {
        type: 'heading',
        content: 'Step 5: SEO & Growth'
      },
      {
        type: 'paragraph',
        content: 'Launching is just the beginning. After your platform goes live, we optimize it so it loads fast, ranks well on search engines, and converts visitors into users. We set up analytics tracking so you always know where your traffic comes from, which features your users engage with most, and where people drop off.'
      },
      {
        type: 'paragraph',
        content: 'From there, we work with you continuously — improving, refining, and adding features as your business evolves. You\'re not left on your own after launch. We grow with you.'
      },
      {
        type: 'heading',
        content: 'Why Choose Tanoshi Vietnam?'
      },
      {
        type: 'paragraph',
        content: 'Developing smart products can be complex, but we make it simple. Clients choose us because:'
      },
      {
        type: 'list',
        items: [
          'Clear Process: Simple steps, clear timelines, and reduced risks.',
          'Speed & Flexibility: Rapid prototyping and agile iterations get your product to market faster.',
          'Comprehensive Expertise: Hardware, software, and design experts under one roof.',
          'Practical Results: Real-world testing ensures your final product meets user needs.'
        ]
      },
      {
        type: 'paragraph',
        content: 'Have an idea or ready to scale an existing product? We\'d love to hear from you and help bring your vision to life. Reach out and let\'s get started!'
      }
    ]
  },
  {
    id: '7',
    title: 'Boost Your Education Center\'s Growth with Us: From Manual Management to AI-Powered LMS',
    slug: 'boost-your-education-center-growth',
    excerpt: 'Explore the journey of digitalization and operational optimization for 7 typical education centers. From fragmented manual management to professional LMS/Web App systems integrated with AI Agents.',
    date: 'April 7, 2026',
    author: 'Tanoshi Vietnam EdTech Team',
    category: 'EdTech Solutions',
    imageUrl: '/lovable-uploads/edtech_lms_growth_blog.png',
    keywords: [
      'EdTech Vietnam',
      'LMS Development',
      'AI in Education',
      'Education Management System',
      'Tanoshi Vietnam',
      'Case Study LMS',
      'AI Agent Education',
      'Quynh BOKI Learn',
      'JLTC Manager',
      'Echo English Lab',
      'NZEDU'
    ],
    metaDescription: 'Comprehensive EdTech solutions for education center owners. Transition from manual management to modern Web App/LMS systems with automated AI grading.',
    content: [
      {
        type: 'paragraph',
        content: 'Are you struggling with managing hundreds of students via Excel? Tired of overlapping teaching schedules and tuition fee errors? At Tanoshi Vietnam, we understand that the biggest "pain" for center owners isn\'t a lack of students, but exhaustion from a bulky manual operating system.'
      },
      {
        type: 'heading',
        content: 'Common Pain Points of 100% Manually Operated Centers'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Managing students with fragmented Excel files, prone to data loss and difficult to track history.',
          'Manual scheduling and attendance leading to errors and classroom mix-ups.',
          'Unclear tuition fee collection, difficult to reconcile cash flow and payment history.',
          'Lack of professional learning progress reporting channels for parents.',
          'Lecture materials and exam papers scattered on Drive, USB, making copyright control difficult.',
          'Weak CRM causing interruptions in following up with potential customers.'
        ]
      },
      {
        type: 'heading',
        content: 'Proven by Numbers'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '8+',
            label: 'Real-world LMS projects completed',
            icon: 'Layout'
          },
          {
            value: '4+',
            label: 'Fields: Japanese, English, Accounting, Literature-Math',
            icon: 'BookOpen'
          },
          {
            value: '60+',
            label: 'Advanced features deployed',
            icon: 'Zap'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Portfolio: 8 "Essential" Case Studies From Tanoshi Vietnam'
      },
      {
        type: 'paragraph',
        content: 'We don\'t just write code; we build solutions based on the actual processes of each customer. Here are 8 proofs of our execution capability:'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '1. Quynh BOKI Learn — Japanese Accounting LMS',
          subtitle: 'Platform for selling video courses + online exams for Nissho Boki certification',
          status: 'Prototype',
          groups: [
            {
              title: 'Students',
              items: ['Watch video lectures', 'Take online exams', 'QR code payment']
            },
            {
              title: 'Admin (Teachers)',
              items: ['Manage courses', 'Create exams (5 types)', 'View orders']
            },
            {
              title: 'Content',
              items: ['8+ courses: Boki, Tax', 'Ebook, Zoom live', 'Blog, community']
            },
            {
              title: 'Auto-grading exam system',
              items: ['Journal entries, General ledgers', 'Multiple choice, Essay']
            },
            {
              title: 'Payment & Registration',
              items: ['QR Vietcombank', 'Automatic confirmation']
            },
            {
              title: 'Special feature',
              highlight: true,
              items: ['5 specialized accounting question types: Journal entry, Posting, P&L, Balance Sheet, Multiple choice, Essay']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '2. JLTC Manager — Japanese Center Management',
          subtitle: '3 roles: Admin, Teacher, Student | CRM lead + JLPT mock exams',
          status: 'Go-live',
          groups: [
            {
              title: 'Admin',
              items: ['Overview Dashboard', 'CRM lead management', 'Consolidated attendance', 'Class schedule + Gantt tasks']
            },
            {
              title: 'Teachers',
              items: ['Classroom management', 'Create JLPT exams', 'Student assessment', 'Personal task board']
            },
            {
              title: 'Students',
              items: ['Mock JLPT exams', 'View detailed results', 'Exam history', 'Set learning goals']
            },
            {
              title: 'Admission CRM',
              items: ['Pipeline: New -> Consultation -> Deposit -> Enrollment']
            },
            {
              title: 'Mock JLPT Exam',
              items: ['Vocabulary, grammar, reading comprehension, listening']
            },
            {
              title: 'Reports & Statistics',
              items: ['Interview, enrollment, pass rate']
            },
            {
              title: 'Special',
              highlight: true,
              items: ['6 lead types: Study abroad, internship, engineer, tokutei, Japanese, labor export']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '3. Kieu Lien (Menglish) — Children\'s English Center',
          subtitle: 'Most complete ecosystem: CRM + finance + inventory + pronunciation + parents',
          status: 'Development',
          groups: [
            {
              title: 'CRM',
              items: ['Lead pipeline', 'Admission consultation']
            },
            {
              title: 'Classes',
              items: ['Schedule, teachers', 'Attendance']
            },
            {
              title: 'Finance',
              items: ['Revenue/expenditure, tuition', 'Debt, overdue']
            },
            {
              title: 'Inventory & Books',
              items: ['Inventory in/out', 'Low stock alerts']
            },
            {
              title: 'Pronunciation management',
              items: ['Assign tasks -> Submit audio -> grading']
            },
            {
              title: 'Parent Portal',
              items: ['Progress, tuition, messaging']
            },
            {
              title: 'Ticket & task',
              items: ['Request processing']
            },
            {
              title: 'Special',
              highlight: true,
              items: ['Detailed permissions by function (5 roles: Admin, Teacher, Accountant, Parent, Student)']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '4. Nihongo Chiyou Lab — Japanese Self-Study Platform',
          subtitle: 'Huge learning materials: 50 Minna lessons + Kanji + JLPT N5-N4 + comprehensive grammar',
          status: 'Development',
          groups: [
            {
              title: 'Minna no Nihongo',
              items: ['50 lessons, 12 tests', 'Vocabulary + grammar']
            },
            {
              title: 'Kanji + Radicals',
              items: ['398K+ Kanji data', '168K radical data']
            },
            {
              title: 'Thi JLPT N5-N4',
              items: ['Simulated real exams', 'Auto-grading']
            },
            {
              title: 'Grammar',
              items: ['Particles, Verb forms, Adverbs, Counting + time']
            },
            {
              title: 'Features',
              items: ['Automatic Furigana', 'KanjiHover tooltip', 'Export lesson PDF']
            },
            {
              title: 'Special',
              highlight: true,
              items: ['Huge learning materials optimized for fast loading, independent of server']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '5. Tan Thanh — Literature & Math Exam Prep Center',
          subtitle: '3 separate portals: Admin, Teacher, Parent | 6-criteria assessment',
          status: 'Prototype',
          groups: [
            {
              title: 'Admin portal',
              items: ['Head teacher + teaching assistants', '12 classes, 5 types', 'Tuition collection + logs', 'Document library']
            },
            {
              title: 'Teacher portal',
              items: ['Session management', '6-criteria assessment', 'Attendance + schedule', 'Sharing community']
            },
            {
              title: 'Parent portal',
              items: ['Capability Radar chart', 'Online leave request', 'QR code payment', 'Message center']
            },
            {
              title: '6-criteria assessment',
              items: ['Comprehension, focus, testing, self-study, diligence, interaction']
            },
            {
              title: '5 class types',
              items: ['Specialized, mass, exam prep, tutoring, online']
            },
            {
              title: 'Special',
              highlight: true,
              items: ['Public landing page + Radar chart assessment system (Parents visually see child\'s capability)']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '6. Thao Le Japan — Online Japanese Course Sales',
          subtitle: 'Integrated learning and sales system | Bank simulator payment confirmation',
          status: 'Prototype',
          groups: [
            {
              title: 'Public page',
              items: ['SEO Landing page', 'Blog, community', 'Ebook/course shop']
            },
            {
              title: 'Admin dashboard',
              items: ['Course management', 'Assignment/quiz management', 'Blog + ebook + orders']
            },
            {
              title: 'Students',
              items: ['Watch video lectures', 'Do assignments/quizzes', 'Discussion community']
            },
            {
              title: 'Bank simulator',
              items: ['Simulate automatic bank transfer confirmation']
            },
            {
              title: 'Special',
              highlight: true,
              items: ['Track registration progress, manage orders, submit assignments - all in real-time']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '7. Echo English Lab — AI English platform',
          subtitle: 'AI automatic pronunciation scoring + Anti-cheat',
          status: 'Go-live',
          groups: [
            {
              title: 'Students',
              items: ['Record pronunciation', 'Receive AI feedback', 'View history + scores']
            },
            {
              title: 'AI Agent engine',
              items: ['Voice recognition', 'Syllable analysis', 'Accurate scoring']
            },
            {
              title: 'Anti-cheat',
              items: ['Fraud detection', 'Voice verification', 'Ensure fairness']
            },
            {
              title: 'Detailed analysis',
              items: ['Each syllable: correct/wrong/near-correct + correction suggestions']
            },
            {
              title: 'Teacher Dashboard',
              items: ['Common error statistics + student progress']
            },
            {
              title: 'Special',
              highlight: true,
              items: ['AI replaces teachers in pronunciation grading (Instant feedback, detailed by syllable)']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '8. NZEDU — Smart Education Management System',
          subtitle: 'Most complete ecosystem: CRM + finance + inventory + pronunciation + parents',
          status: 'Development',
          groups: [
            {
              title: 'CRM',
              items: ['Lead pipeline', 'Admission consultation']
            },
            {
              title: 'Classes',
              items: ['Schedule, teachers', 'Attendance']
            },
            {
              title: 'Finance',
              items: ['Revenue/expenditure, tuition', 'Debt, overdue']
            },
            {
              title: 'Inventory & Books',
              items: ['Inventory in/out', 'Low stock alerts']
            },
            {
              title: 'Pronunciation management',
              items: ['Assign tasks -> Submit audio -> grading']
            },
            {
              title: 'Parent Portal',
              items: ['Progress, tuition, messaging']
            },
            {
              title: 'Ticket & task',
              items: ['Request processing']
            },
            {
              title: 'Special',
              highlight: true,
              items: ['Detailed permissions by function (5 roles: Admin, Teacher, Accountant, Parent, Student)']
            }
          ]
        }
      },
      {
        type: 'chart',
        chartData: {
          title: 'Operational Efficiency After LMS Implementation (% Growth)',
          data: [
            { name: 'Management Productivity', value: 85 },
            { name: 'Financial Accuracy', value: 98 },
            { name: 'Parent Satisfaction', value: 92 },
            { name: 'Time Savings', value: 70 },
            { name: 'Student Interaction', value: 65 }
          ]
        }
      },
      {
        type: 'heading',
        content: 'The Transformation: Manual vs. Comprehensive System'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Features', 'Management via Excel/Zalo', 'Tanoshi Web App/LMS System'],
          icons: ['Users', 'ClipboardCheck', 'Bell', 'ShieldAlert', 'BarChart3'],
          rows: [
            ['Student Data', 'Scattered, error-prone', 'Centralized, 100% synced'],
            ['Grading & Assessment', 'Manual, takes hours', 'AI Agent auto-grades in seconds'],
            ['Parent Notifications', 'Manual Zalo messaging', 'Dedicated Portal & Auto-email'],
            ['Cheat Detection', 'Based on teacher intuition', 'Smart Anti-cheat system'],
            ['Financial Reports', 'Full day of reconciliation', 'One-click report export']
          ]
        }
      },
      {
        type: 'heading',
        content: 'Tanoshi Vietnam - Custom Solutions Tailored to Requirements'
      },
      {
        type: 'paragraph',
        content: 'We understand that each center is a unique entity with distinct processes. Tanoshi Vietnam doesn\'t sell off-the-shelf "templates." We consult and build systems exactly according to how you operate, helping you free up labor to focus on the core value: TEACHING.'
      },
      {
        type: 'quote',
        content: 'Don\'t let a stagnant management machine hold back your growth. Let technology become the most powerful lever.'
      },
      {
        type: 'paragraph',
        content: 'Contact us for a free consultation today to receive a solution blueprint for your center!'
      },
      {
        type: 'heading',
        content: 'Tanoshi Working Process'
      },
      {
        type: 'process-steps',
        processData: {
          steps: [
            {
              id: 1,
              title: 'Requirement & Scope Discussion',
              description: 'We will listen and deeply understand your problems to determine the project scope.',
              activities: [
                'Meeting, discussion, and survey',
                'Assessment of current operating system',
                'Agreement on requirements and scope of work'
              ]
            },
            {
              id: 2,
              title: 'Building a Complete Prototype',
              description: 'After understanding the requirements, design experts will create visual prototypes for the customer to easily visualize.',
              activities: [
                'UI/UX interface design',
                'Building user flows',
                'Review and finalizing prototype'
              ]
            },
            {
              id: 3,
              title: 'Backend Development',
              description: 'The engineering team proceeds with programming and building solid core features.',
              activities: [
                'Database architecture design',
                'API and core logic development',
                'Automated AI Agent integration'
              ]
            },
            {
              id: 4,
              title: 'Testing',
              description: 'Comprehensive testing to ensure the system operates stably, smoothly, and error-free.',
              activities: [
                'Internal functional testing',
                'Performance and security assessment',
                'User Acceptance Testing (UAT) with customers'
              ]
            },
            {
              id: 5,
              title: 'Release',
              description: 'Handing over the finished product, putting it into actual operation, and accompanying the customer.',
              activities: [
                'System deployment to server (Go-live)',
                'Personnel training and usage guidance',
                'Warranty, maintenance, and operational support'
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: '8',
    title: 'Digitalizing Vietnam - Japan Logistics: Successful Digital Transformation Journey of IKIGAI Ship Track',
    slug: 'ikigai-ship-track-digital-transformation',
    excerpt: 'Discover how Tanoshi Vietnam and IKIGAI solved complex logistics operations. From fragmented manual management to a modern Ship Track system integrated with major carrier APIs.',
    date: 'April 24, 2026',
    author: 'Tanoshi Vietnam Logistics Team',
    category: 'Logistics Solutions',
    imageUrl: '/lovable-uploads/ikigai_ship_track_showcase.png',
    keywords: [
      'Logistics Digital Transformation',
      'Shipping Management System',
      'Vietnam Japan Shipping',
      'IKIGAI Ship Track',
      'Tanoshi Vietnam',
      'API Integration Logistics',
      'Sagawa API',
      'EMS Integration',
      'DHL Logistics'
    ],
    metaDescription: 'Case study on building a specialized shipping management system for IKIGAI. Automating fee calculations, integrating carrier APIs, and optimizing operations.',
    content: [
      {
        type: 'paragraph',
        content: 'In the booming context of Vietnam-Japan e-commerce, managing thousands of packages daily using manual methods became a major growth barrier. IKIGAI - a reputable shipping unit - partnered with Tanoshi Vietnam to build the "Ikigai Ship Track" system to digitally transform the entire operation, providing transparency and outstanding speed.'
      },
      {
        type: 'heading',
        content: 'Inherent Pain Points of International Shipping'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Fragmented customer information (Leads) across channels: Facebook, Zalo, TikTok, making tracking and closing sales difficult.',
          'Shipping fee miscalculations due to manual volumetric weight conversions (L*W*H/6000).',
          'Lost packages: No overview of package status once they leave the warehouse or are in transit.',
          'Data entry overload: Staff manually copy-pasting data to carrier websites (EMS, DHL, Sagawa).',
          'Customers constantly asking about order status due to a lack of an automated tracking portal.',
          'Difficult debt reconciliation: Scattered shipping fees, surcharges, and COD make profit calculation slow and error-prone.'
        ]
      },
      {
        type: 'heading',
        content: 'Efficiency After Digital Transformation'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '100%',
            label: 'Orders are billed automatically with absolute accuracy',
            icon: 'Calculator'
          },
          {
            value: '70%',
            label: 'Reduction in manual processing time thanks to API integration',
            icon: 'Zap'
          },
          {
            value: '24/7',
            label: 'Customers can track their own order status',
            icon: 'Search'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Breakthrough Solution: Ikigai Ship Track System'
      },
      {
        type: 'paragraph',
        content: 'Tanoshi Vietnam didn\'t just build software, we created a smart operating engine based on IKIGAI\'s real-world needs.'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Ikigai Ship Track — Comprehensive Logistics Solution',
          subtitle: 'Closed-loop process from Lead to Delivery',
          status: 'Go-live',
          groups: [
            {
              title: 'Lead Management (Round 1)',
              items: ['Centralized leads from FB/Zalo/TikTok', 'Track consultation status', 'Note customer requirements']
            },
            {
              title: 'Warehouse Operations (Round 2)',
              items: ['Manage packages by flight', 'Update internal statuses', 'Handle shipping issues']
            },
            {
              title: 'Automated Pricing Engine',
              items: ['Volumetric weight conversion', 'Apply tiered pricing tables', 'Auto-add surcharges/packaging fees']
            },
            {
              title: 'Carrier API Integration',
              items: ['Push orders to EMS, DHL, Sagawa', 'Auto-fetch tracking codes', 'Sync status from carriers']
            },
            {
              title: 'Customer Tracking Portal',
              items: ['Track by waybill code', 'View detailed journey history', '100% accurate data from API']
            },
            {
              title: 'Special Feature',
              highlight: true,
              items: ['A specialized 2-round Kanban system clearly separates Sales and Operations, optimizing cross-departmental coordination.']
            }
          ]
        }
      },
      {
        type: 'chart',
        chartData: {
          title: 'Operational Productivity Improvement (Compared to before system)',
          data: [
            { name: 'Order processing speed', value: 90 },
            { name: 'Financial accuracy', value: 99 },
            { name: 'Tracking capability', value: 100 },
            { name: 'Personnel savings', value: 60 },
            { name: 'Customer satisfaction', value: 95 }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Efficiency Comparison: Before vs After'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Category', 'Manual Operation (Zalo/Excel)', 'Ikigai Ship Track System'],
          icons: ['Users', 'Calculator', 'Share2', 'Globe', 'Clock'],
          rows: [
            ['Lead Management', 'Fragmented, easy to miss customers', 'Centralized on a professional Kanban Board'],
            ['Shipping fee calculation', 'Error-prone, time-consuming', '100% Automated by an accurate Pricing Engine'],
            ['Carrier integration', 'Manual data entry per order', 'Instant automatic API synchronization'],
            ['Order tracking', 'Customers message constantly', 'Customers self-track 24/7 on Website'],
            ['Data & Reports', 'Hard to compile, not real-time', 'Instant Dashboard reports']
          ]
        }
      }
    ]
  },
  {
    id: '6',
    title: 'JLTC Manager: Digitalizing IKIGAI Japanese Language Center Operations',
    slug: 'ikigai-jltc-manager-digital-transformation',
    excerpt: 'Discover how IKIGAI optimizes operations from Lead admission to mock JLPT exams and study abroad profile management via the intensive JLTC Manager system.',
    date: 'April 22, 2026',
    author: 'Tanoshi Vietnam EdTech Team',
    category: 'EdTech Solutions',
    imageUrl: '/lovable-uploads/edtech_lms_growth_blog.png',
    keywords: [
      'IKIGAI Japanese Center',
      'JLTC Manager',
      'Japanese Education Management',
      'JLPT Exam System',
      'CRM Japanese School',
      'Tanoshi Vietnam'
    ],
    metaDescription: 'Case study on the comprehensive digital transformation for IKIGAI Japanese center. Optimizing Lead management, JLPT exams, and study abroad profiles.',
    content: [
      {
        type: 'paragraph',
        content: 'IKIGAI is a leading Japanese language center in training international students and engineers heading to Japan. To maintain its position and enhance training quality, IKIGAI partnered with Tanoshi Vietnam to develop the JLTC Manager system — a specialized management solution that thoroughly solves operational challenges specific to Japanese language education.'
      },
      {
        type: 'heading',
        content: 'Pain Points in Operating a Japanese Language Center'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Multi-channel admission Lead management (Study Abroad, Engineers, Tokutei) is fragmented and hard to track.',
          'Organizing periodic JLPT mock exams (creating tests, grading, ranking) is entirely manual and slow.',
          'Attendance and student diligence data across facilities are not synced in real-time.',
          'Scheduling classes and managing rooms frequently leads to overlaps or wasted empty classes.',
          'Processing large volumes of interview profiles and statistical reports for Japanese syndicates is complex and error-prone.',
          'Assigning and tracking tasks between Admins and Teachers lacks a centralized tool.'
        ]
      },
      {
        type: 'heading',
        content: 'Breakthrough Solution: JLTC Manager System'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '500+',
            label: 'Students managed centrally',
            icon: 'Users'
          },
          {
            value: '1000+',
            label: 'JLPT exams automatically generated',
            icon: 'ClipboardCheck'
          },
          {
            value: '60%',
            label: 'Acceleration in study abroad profile processing',
            icon: 'Zap'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Core Modules'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'JLTC Manager — Digital Command Center',
          subtitle: '360-degree management solution for IKIGAI',
          status: 'Go-live',
          groups: [
            {
              title: 'CRM Lead Management',
              items: ['Categorize: Study Abroad, Engineers, Tokutei', 'Track consultation pipeline', 'Interview schedule reminders']
            },
            {
              title: 'JLPT Exam System',
              items: ['Smart question bank', 'Auto-grading & ranking', 'Strengths/Weaknesses analysis']
            },
            {
              title: 'Schedule & Attendance',
              items: ['Teaching schedule Gantt Chart', 'QR code attendance', 'Automated absence notifications']
            },
            {
              title: 'Reports & Profiles',
              items: ['Export standard interview profiles', 'Visa pass rate statistics', 'Detailed revenue reports']
            },
            {
              title: 'Task Management',
              items: ['Assign tasks by department', 'Track teacher deadlines', 'Internal Ticket system']
            },
            {
              title: 'Information Portal',
              items: ['Separate portal for Teachers/Students/Parents', 'Track academic results', 'Internal learning resources']
            }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Digital Transformation Efficiency'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Operation', 'Old Process (Excel/Paper)', 'With JLTC Manager'],
          icons: ['ClipboardCheck', 'Users', 'Calendar', 'BarChart3'],
          rows: [
            ['JLPT Exam Organization', 'Takes 3-5 days to prepare & grade', '100% Automated in 1 click'],
            ['Lead Management', 'Fragmented, low conversion rate', 'Centralized, increased enrollment by 30%'],
            ['Class Scheduling', 'Prone to errors, time-consuming', '99% optimization of room capacity'],
            ['Study Abroad Profiles', 'Manual, pressure during peak season', 'Standardized process, 60% pressure reduction']
          ]
        }
      }
    ]
  },
  {
    id: '5',
    title: 'Digitalizing Children\'s English Centers: MEnglish (Kieu Lien) Digital Transformation Journey',
    slug: 'menglish-digital-transformation-case-study',
    excerpt: 'Discover how MEnglish optimizes end-to-end operations from CRM, finance to AI pronunciation scoring, effectively connecting parents and the school.',
    date: 'April 20, 2026',
    author: 'Tanoshi Vietnam EdTech Team',
    category: 'EdTech Solutions',
    imageUrl: '/lovable-uploads/edtech_lms_growth_blog.png',
    keywords: [
      'MEnglish Case Study',
      'English Center Management',
      'AI Pronunciation Scoring',
      'Parent Portal EdTech',
      'Digital Transformation Education',
      'Tanoshi Vietnam'
    ],
    metaDescription: 'Case study on building a comprehensive management ecosystem for MEnglish English center. Optimizing enrollment, finance, and AI-integrated training processes.',
    content: [
      {
        type: 'paragraph',
        content: 'As children\'s English centers continue to scale, manual management through Zalo and Excel can no longer meet growth demands. MEnglish partnered with Tanoshi Vietnam to build a specialized management system that automates everything from customer acquisition to tracking each student\'s learning progress.'
      },
      {
        type: 'heading',
        content: 'Challenges in Managing a Children\'s English Center'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Fragmented enrollment Lead management with no way to track conversion rates from consultation to enrollment.',
          'Tuition fee errors and revenue/expense miscalculations due to manual processing.',
          'Difficulty controlling textbook inventory and curriculum materials for hundreds of students.',
          'Manual pronunciation grading is time-consuming and cannot provide instant feedback.',
          'Parents lack an official channel to track class schedules and teacher feedback.',
          'Student data is not secured with clear role-based access control across departments.'
        ]
      },
      {
        type: 'heading',
        content: 'Breakthrough Results After Implementation'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '95%',
            label: 'Parents satisfied with the progress tracking Portal',
            icon: 'Users'
          },
          {
            value: '80%',
            label: 'Reduction in financial management and reconciliation time',
            icon: 'Zap'
          },
          {
            value: '24/7',
            label: 'AI pronunciation scoring with instant feedback',
            icon: 'Zap'
          }
        ]
      },
      {
        type: 'heading',
        content: 'MEnglish Management Ecosystem'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'MEnglish System — 360-Degree Management',
          subtitle: 'Comprehensive solution for modern language centers',
          status: 'Go-live',
          groups: [
            {
              title: 'CRM & Enrollment',
              items: ['Advanced Lead management pipeline', 'Track customer sources', 'Automated consultation reminders']
            },
            {
              title: 'Training Management',
              items: ['Class & room scheduling', 'Digital attendance', 'Online homework system']
            },
            {
              title: 'Finance & Inventory',
              items: ['Tuition fee & debt management', 'Automated revenue/expense reports', 'Textbook inventory tracking']
            },
            {
              title: 'AI English Lab',
              items: ['International-standard pronunciation grading', 'Syllable-level error correction suggestions', 'Common error statistics']
            },
            {
              title: 'Parent Portal',
              items: ['View post-session feedback', 'Track attendance records', 'Online tuition payment']
            },
            {
              title: 'Special Feature',
              highlight: true,
              items: ['Granular 5-role permissions (Admin, Teacher, Accountant, Parent, Student) ensuring transparent operations and absolute data security.']
            }
          ]
        }
      },
      {
        type: 'table',
        tableData: {
          headers: ['Process', 'Before Digitalization', 'With MEnglish System'],
          icons: ['ClipboardCheck', 'DollarSign', 'Bell', 'Database'],
          rows: [
            ['Enrollment Management', 'Notebook records, easy to lose information', 'Automated Lead pipeline, no leads missed'],
            ['Tuition Finance', 'Manual reconciliation, error-prone', 'Automated debt alerts and QR payment clearing'],
            ['Parent Communication', 'Manual Zalo messaging', 'Real-time Portal information updates'],
            ['Data Storage', 'Scattered across multiple Excel files', 'Centralized and secured database']
          ]
        }
      }
    ]
  },
  {
    id: '4',
    title: 'NZEDU: Smart Education Ecosystem — Revolutionizing Language Center Management',
    slug: 'nzedu-smart-education-ecosystem',
    excerpt: 'NZEDU partnered with Tanoshi Vietnam to build a modern education management ecosystem, integrating everything from enrollment to training and parent interaction on a single platform.',
    date: 'April 15, 2026',
    author: 'Tanoshi Vietnam EdTech Team',
    category: 'EdTech Solutions',
    imageUrl: '/lovable-uploads/edtech_lms_growth_blog.png',
    keywords: [
      'NZEDU Case Study',
      'Education Management Ecosystem',
      'LMS Vietnam',
      'Smart Education',
      'Tanoshi Vietnam Solutions'
    ],
    metaDescription: 'Discover how NZEDU optimizes its operations through a smart education ecosystem. Custom EdTech solutions for large-scale organizations.',
    content: [
      {
        type: 'paragraph',
        content: 'For large-scale, diversified training organizations like NZEDU, having a "digital command center" is a matter of survival. The NZEDU project focuses on creating a closed-loop ecosystem where all data — from enrollment, academics, to finance — is tightly connected.'
      },
      {
        type: 'heading',
        content: 'Operational Challenges at NZEDU'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Legacy systems cannot handle multi-branch and multi-curriculum management.',
          'Tuition cash flow is not updated in real-time, causing difficulties in financial reporting.',
          'Assignment submission and grading processes for teachers are not professionally systematized.',
          'Lack of lecture content security features, making unauthorized copying easy.',
          'Communications from the center to parents are frequently delayed or lost.',
          'No dashboard to track business performance metrics for each branch.'
        ]
      },
      {
        type: 'heading',
        content: 'Smart Ecosystem Solution'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'NZEDU Ecosystem — Unlimited Connectivity',
          subtitle: 'Centralized management platform for education systems',
          status: 'Development',
          groups: [
            {
              title: 'Multi-Branch CRM',
              items: ['Branch-based Lead management', 'Centralized revenue reports', 'Automated Lead allocation']
            },
            {
              title: 'Academic Core',
              items: ['Personalized learning paths', 'Smart exam question bank', 'Internal LMS system']
            },
            {
              title: 'Finance Engine',
              items: ['Multi-method fee collection', 'Automated tax reporting', 'Automated cash flow reconciliation']
            },
            {
              title: 'Security & Rights',
              items: ['Unauthorized video download prevention', 'Document access permissions', 'Access history logging']
            },
            {
              title: 'Smart Communication',
              items: ['Automated push notifications', 'Internal Parent-Teacher chat', 'Online absence notifications']
            },
            {
              title: 'Business Intelligence',
              items: ['Student capability dashboard', 'Revenue growth charts', 'Teacher effectiveness statistics']
            }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Implementation Process at NZEDU'
      },
      {
        type: 'process-steps',
        processData: {
          steps: [
            {
              id: 1,
              title: 'Multi-Branch Analysis',
              description: 'Survey the unique operational characteristics of each branch to build a suitable database structure.',
              activities: [
                'Meeting with NZEDU management team',
                'Identifying cross-branch data flows'
              ]
            },
            {
              id: 2,
              title: 'Building Academic Core',
              description: 'Digitalize all learning materials and specialized training processes of the center.',
              activities: [
                'Custom LMS design',
                'Content security integration'
              ]
            },
            {
              id: 3,
              title: 'Finance Automation',
              description: 'Deploy tuition calculation engine and payment gateway integration.',
              activities: [
                'Bank API integration',
                'Real-time financial reporting setup'
              ]
            },
            {
              id: 4,
              title: 'Testing & Handover',
              description: 'Run pilot testing on one branch before rolling out system-wide.',
              activities: [
                'Admin & Teacher team training',
                'Parent Portal launch'
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: '9',
    title: 'Tanoshi Vietnam: The All-in-One Technology & Marketing Launchpad for SMEs & Startups',
    slug: 'tanoshi-sme-startup-all-in-one-solution',
    excerpt: 'An "All-in-One" solution covering Web Design, 2D Graphics, Marketing, and Internal Systems — helping SMEs and Startups overcome limited budgets and scarce resources.',
    date: 'April 24, 2026',
    author: 'Tanoshi Vietnam Team',
    category: 'Business Solutions',
    imageUrl: '/lovable-uploads/edtech_lms_growth_blog.png',
    keywords: [
      'Startup Support Vietnam',
      'SME Solutions',
      'Web Design Startup',
      'Graphic Design 2D',
      'Digital Marketing SEO',
      'Internal Management Systems',
      'Tanoshi Vietnam'
    ],
    metaDescription: 'Tanoshi Vietnam partners with SMEs & Startups to solve technology and marketing challenges. Providing full-service Web Design, Marketing, and CRM solutions.',
    content: [
      {
        type: 'paragraph',
        content: 'Starting a business or running an SME is always a tough puzzle of resource optimization. Having to juggle brand image, technology platforms, and marketing strategy simultaneously often leaves founders overwhelmed. Tanoshi Vietnam was created with the mission of becoming a comprehensive "outsourced technology & marketing department," standing side by side with Startups on their breakthrough journey.'
      },
      {
        type: 'heading',
        content: 'Core Pain Points of SMEs & Startups'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'LIMITED CAPITAL: Tight budgets, insufficient to maintain a full In-house team of Developers, Designers, and Marketers.',
          'SCARCE RESOURCES: Employees forced to multitask, leading to quality decline and easy burnout.',
          'SPREAD TOO THIN: Hiring multiple Freelancers or small agencies causes information gaps and inconsistent branding.',
          'SLOW DIGITALIZATION: Technology-illiterate, still managing data, customers, and employees via Excel or Zalo — extremely risky.',
          'WASTED MARKETING: Running Ads without strategy, SEO never ranking, "burning money" without actual conversion (ROI).',
          'WEAK IMAGE: Outdated website, unprofessional graphic designs (2D), reducing competitiveness against rivals.'
        ]
      },
      {
        type: 'heading',
        content: 'All-in-One Service Ecosystem at Tanoshi'
      },
      {
        type: 'paragraph',
        content: 'No need to work with 4 different vendors. Tanoshi Vietnam provides a closed-loop ecosystem so your business can "plug and play" immediately.'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Tanoshi Ecosystem',
          subtitle: '4-Pillar Solution for Sustainable Growth',
          status: 'Available',
          groups: [
            {
              title: 'Website Design',
              items: ['Professional UI/UX design', 'Lightning-fast page load speed', 'Fully responsive across all devices']
            },
            {
              title: 'Graphic Design 2D',
              items: ['Brand identity kit', 'Marketing communication materials', 'Packaging & company profile design']
            },
            {
              title: 'Marketing & SEO',
              items: ['Conversion-focused Ads strategy', 'Comprehensive website SEO', 'Content Marketing & Fanpage management']
            },
            {
              title: 'Management Systems',
              items: ['Custom CRM development', 'LMS for education', 'Internal ERP & HRM software']
            }
          ]
        }
      },
      {
        type: 'heading',
        content: 'The Transformation with Tanoshi Partnership'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '50%',
            label: 'Operational cost savings compared to maintaining an In-house team',
            icon: 'DollarSign'
          },
          {
            value: '1',
            label: 'Single point of contact for all projects',
            icon: 'Users'
          },
          {
            value: '3x',
            label: 'Accelerated deployment and Go-to-market speed',
            icon: 'Zap'
          }
        ]
      },
      {
        type: 'table',
        tableData: {
          headers: ['Category', 'DIY / Hiring Freelancers', 'Tanoshi Vietnam Solution'],
          icons: ['ClipboardCheck', 'Share2', 'Globe', 'Zap'],
          rows: [
            ['Cost Management', 'Expensive, unpredictable extra fees', 'All-inclusive, budget-optimized by phase'],
            ['Brand Consistency', 'Website looks one way, Fanpage another', 'Unified branding from A to Z'],
            ['Talent Quality', 'Hard to recruit, high turnover, risky', 'Expert team ready to serve'],
            ['Maintenance & Support', 'Freelancers vanish after delivery', 'Long-term partnership, lifetime system maintenance']
          ]
        }
      },
      {
        type: 'heading',
        content: 'Start Your Breakthrough Journey Today'
      },
      {
        type: 'paragraph',
        content: 'Whether you are a newly funded Startup or an SME struggling with digital transformation, Tanoshi Vietnam has the best-fit tailored solution. Don\'t let technology and talent barriers hold back your growth.'
      }
    ]
  }
];
