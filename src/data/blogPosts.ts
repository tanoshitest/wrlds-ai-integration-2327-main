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
    id: '13',
    title: 'STEPS English Center: Nâng tầm Quản lý Đào tạo bằng Công nghệ LMS Hiện đại',
    slug: 'steps-english-center-digital-transformation',
    excerpt: 'Hành trình số hóa toàn diện cho Trung tâm Anh ngữ STEPS, từ quản lý học viên, học phí đến hệ thống học tập trực tuyến thông minh.',
    date: 'May 16, 2026',
    author: 'Tanoshi Vietnam EdTech Team',
    category: 'EdTech Solutions',
    imageUrl: '/lovable-uploads/edtech_lms_growth_blog.png',
    keywords: [
      'STEPS English Center',
      'LMS EdTech',
      'Quản lý trung tâm ngoại ngữ',
      'Tanoshi Vietnam'
    ],
    metaDescription: 'Chi tiết dự án triển khai hệ thống quản trị và học tập trực tuyến cho STEPS English Center. Giải pháp EdTech tối ưu cho sự tăng trưởng bền vững.',
    content: [
      {
        type: 'paragraph',
        content: 'Trung tâm Anh ngữ STEPS đã hợp tác cùng Tanoshi Vietnam để xây dựng hệ thống quản lý đào tạo (LMS) tùy biến, giúp tự động hóa 90% các tác vụ thủ công và tăng cường trải nghiệm học tập cho học viên.'
      },
      {
        type: 'heading',
        content: 'Các phân hệ then chốt'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Hệ thống Quản trị STEPS LMS',
          groups: [
            {
              title: 'Quản lý Học viên',
              items: ['Hồ sơ điện tử', 'Theo dõi tiến độ', 'Điểm danh tự động']
            },
            {
              title: 'Tài chính & Học phí',
              items: ['Nhắc nợ tự động', 'Thanh toán QR', 'Báo cáo doanh thu']
            },
            {
              title: 'Học tập Trực tuyến',
              items: ['Video bài giảng', 'Làm bài tập online', 'Thi thử định kỳ']
            }
          ]
        }
      }
    ]
  },
  {
    id: '14',
    title: 'SESS: Số hóa hệ thống Quản lý Kho hàng và Phân phối Toàn quốc',
    slug: 'sess-warehouse-management-digital-transformation',
    excerpt: 'Khám phá giải pháp quản trị kho thông minh dành riêng cho SESS, giúp kiểm soát hàng tồn kho thời gian thực và tối ưu hóa quy trình vận chuyển.',
    date: 'May 16, 2026',
    author: 'Tanoshi Vietnam Business Team',
    category: 'Business Solutions',
    imageUrl: '/lovable-uploads/laptop_wholesale_dx_dashboard_1778067348103.png',
    keywords: [
      'SESS Warehouse',
      'Quản lý kho SESS',
      'ERP Business Solutions',
      'Tanoshi Vietnam'
    ],
    metaDescription: 'Case study về việc xây dựng hệ thống quản lý kho và phân phối cho thương hiệu SESS. Tăng 150% hiệu suất vận hành kho.',
    content: [
      {
        type: 'paragraph',
        content: 'SESS đã lựa chọn Tanoshi Vietnam làm đối tác chiến lược để xây dựng hệ thống quản trị kho hàng (WMS) tích hợp ERP, giúp doanh nghiệp nắm bắt chính xác dữ liệu hàng hóa trên toàn hệ thống.'
      },
      {
        type: 'heading',
        content: 'Hiệu quả đạt được'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '100%',
            label: 'Chính xác tồn kho',
            icon: 'CheckCircle'
          },
          {
            value: '50%',
            label: 'Giảm thời gian xuất kho',
            icon: 'Clock'
          },
          {
            value: '24/7',
            label: 'Báo cáo realtime',
            icon: 'BarChart3'
          }
        ]
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Hệ thống Quản lý Kho SESS',
          groups: [
            {
              title: 'Nhập/Xuất kho',
              items: ['Quét mã vạch', 'In tem nhãn', 'Đối soát tự động']
            },
            {
              title: 'Phân phối',
              items: ['Quản lý đội xe', 'Theo dõi vận đơn', 'Tối ưu lộ trình']
            }
          ]
        }
      }
    ]
  },
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
    title: 'NZEDU: Hệ sinh thái Giáo dục Thông minh — Cách mạng hóa Quản lý Hệ thống Trung tâm Đào tạo',
    slug: 'nzedu-smart-education-ecosystem',
    excerpt: 'NZEDU đã hợp tác cùng Tanoshi Vietnam xây dựng hệ sinh thái quản lý giáo dục thông minh, kết nối khép kín mọi luồng dữ liệu từ Tuyển sinh, Học thuật đến Tài chính và tương tác Phụ huynh.',
    date: 'April 15, 2026',
    author: 'Tanoshi Vietnam EdTech Team',
    category: 'EdTech Solutions',
    imageUrl: '/lovable-uploads/edtech_lms_growth_blog.png',
    keywords: [
      'NZEDU Case Study',
      'Hệ sinh thái giáo dục',
      'LMS Việt Nam',
      'Quản trị trung tâm đào tạo',
      'Tanoshi Vietnam'
    ],
    metaDescription: 'Khám phá cách NZEDU tối ưu vận hành thông qua hệ sinh thái giáo dục thông minh. Giải pháp EdTech tùy biến cho các tổ chức giáo dục quy mô lớn.',
    content: [
      {
        type: 'paragraph',
        content: 'Với các hệ thống đào tạo quy mô lớn, đa chi nhánh và đa dạng chương trình học như NZEDU, việc sở hữu một "trung tâm chỉ huy số" thống nhất là bài toán sống còn để tối ưu hóa nguồn lực. Dự án NZEDU tập trung thiết lập một hệ sinh thái khép kín kết nối chặt chẽ dữ liệu của 3 phân hệ cốt lõi: CRM Tuyển sinh, LMS Học vụ và Finance Tài chính.'
      },
      {
        type: 'heading',
        content: 'Thách thức vận hành tại hệ thống lớn như NZEDU'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Quản lý phân mảnh: Các công cụ truyền thống không đáp ứng được nghiệp vụ đa chi nhánh và quản lý hàng chục khung chương trình học khác nhau.',
          'Dòng tiền chậm trễ: Học phí thu qua nhiều cổng, chuyển khoản thủ công gây chậm trễ trong việc cập nhật dòng tiền và báo cáo doanh thu.',
          'Học thuật chưa số hóa: Quy trình giao bài tập, chấm điểm và trả bài của giáo viên tốn nhiều thời gian và khó kiểm soát chất lượng.',
          'Rò rỉ tài liệu học tập: Thiếu cơ chế bảo mật khiến các học liệu, video bài giảng độc quyền dễ bị tải xuống và chia sẻ trái phép.',
          'Giao tiếp ngắt quãng: Kênh tương tác giữa nhà trường và phụ huynh chưa đồng bộ, thông báo tình hình học tập thường bị chậm trễ.',
          'Thiếu dữ liệu quản trị: Ban lãnh đạo không có dashboard phân tích dữ liệu tổng quan thời gian thực để đưa ra các quyết định kinh doanh kịp thời.'
        ]
      },
      {
        type: 'heading',
        content: 'Giải pháp Hệ sinh thái Giáo dục Thông minh'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Hệ sinh thái NZEDU — Kết nối không giới hạn',
          subtitle: 'Nền tảng quản lý tập trung chuyên biệt cho các hệ thống giáo dục lớn',
          status: 'Development',
          groups: [
            {
              title: 'CRM Đa chi nhánh',
              items: ['Quản lý nguồn Lead theo chi nhánh', 'Tự động hóa chia Lead cho Telesale', 'Theo dõi tỷ lệ chuyển đổi phễu tư vấn']
            },
            {
              title: 'LMS Học thuật chuyên sâu',
              items: ['Lộ trình học tập cá nhân hóa', 'Ngân hàng câu hỏi & Đề thi thông minh', 'Hệ thống học trực tuyến tích hợp']
            },
            {
              title: 'Finance tự động 100%',
              items: ['Thu phí đa kênh (QR động, thẻ)', 'Tự động hóa ghi nhận công nợ học phí', 'Báo cáo dòng tiền, doanh thu thời gian thực']
            },
            {
              title: 'Bảo mật Bản quyền',
              items: ['Công nghệ chống tải video trái phép', 'Phân quyền truy cập tài liệu chặt chẽ', 'Ghi nhật ký lịch sử tương tác học liệu']
            },
            {
              title: 'Cổng thông tin Phụ huynh',
              items: ['Theo dõi chuyên cần & kết quả học tập', 'Kênh chat trực tiếp Phụ huynh - Giáo viên', 'Xin nghỉ học trực tuyến trên app']
            },
            {
              title: 'Trí tuệ Quản trị (BI)',
              items: ['Dashboard phân tích năng lực học sinh', 'Biểu đồ tăng trưởng doanh số chi nhánh', 'Thống kê hiệu suất làm việc của giáo viên']
            }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Quy trình triển khai giải pháp tại NZEDU'
      },
      {
        type: 'process-steps',
        processData: {
          steps: [
            {
              id: 1,
              title: 'Phân tích & Chuẩn hóa Nghiệp vụ',
              description: 'Khảo sát kỹ lưỡng mô hình vận hành của từng chi nhánh để thiết kế luồng dữ liệu chuẩn hóa, tránh xung đột thông tin.',
              activities: [
                'Họp thống nhất quy trình cùng ban lãnh đạo NZEDU',
                'Xác định cấu trúc dữ liệu liên chi nhánh'
              ]
            },
            {
              id: 2,
              title: 'Xây dựng Core Học thuật & Bảo mật',
              description: 'Số hóa và đóng gói toàn bộ học liệu, slide bài giảng cùng các cơ chế bảo mật bản quyền video trên nền tảng LMS.',
              activities: [
                'Thiết kế giao diện LMS tùy biến thân thiện',
                'Tích hợp công nghệ mã hóa luồng phát video'
              ]
            },
            {
              id: 3,
              title: 'Tự động hóa Tài chính & QR Động',
              description: 'Tích hợp API ngân hàng để tự động tạo mã QR động thanh toán, đối soát dòng tiền tức thời mà không cần nhân viên kế toán can thiệp thủ công.',
              activities: [
                'Kết nối cổng API thanh toán trực tuyến',
                'Thiết lập hệ thống báo cáo tài chính thời gian thực'
              ]
            },
            {
              id: 4,
              title: 'Kiểm thử & Bàn giao Hệ thống',
              description: 'Run pilot testing on one branch before rolling out system-wide.',
              activities: [
                'Đào tạo sử dụng cho đội ngũ nhân sự & giáo viên',
                'Chính thức phát hành Cổng thông tin Phụ huynh'
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: '11',
    title: 'TanThanh Edu: Giải pháp Quản lý Lớp học kèm Thông minh cho Trung tâm Tư nhân',
    slug: 'tanthanh-edu-digital-transformation',
    excerpt: 'Giải quyết bài toán quản lý lớp học nhóm nhỏ, tối ưu lịch dạy và cá nhân hóa tiến độ học tập cho học sinh thông qua hệ thống Web App chuyên biệt.',
    date: 'May 6, 2026',
    author: 'Tanoshi Vietnam EdTech Team',
    category: 'EdTech Solutions',
    imageUrl: '/lovable-uploads/tanthanh_edu_tutoring_app_1778068807898.png',
    keywords: [
      'Quản lý dạy kèm',
      'Phần mềm trung tâm tư nhân',
      'Lịch dạy thông minh',
      'TanThanh Edu',
      'Tanoshi Vietnam'
    ],
    metaDescription: 'Khám phá cách TanThanh Edu số hóa quy trình quản lý lớp học kèm, từ sắp xếp lịch dạy đến theo dõi tiến độ học tập và đối soát học phí tự động.',
    content: [
      {
        type: 'paragraph',
        content: 'Khác với các trung tâm lớn, các lớp học kèm tư nhân thường đối mặt với bài toán quản trị "siêu linh hoạt": lịch học thay đổi liên tục, nhóm học nhỏ lẻ và yêu cầu cá nhân hóa cao cho từng học sinh. TanThanh Edu đã hợp tác cùng Tanoshi để xây dựng hệ thống quản lý chuyên biệt, giúp giải phóng sức lao động cho đội ngũ giáo viên và nâng cao trải nghiệm cho phụ huynh.'
      },
      {
        type: 'heading',
        content: 'Painpoints: Những "nỗi đau" khi quản lý thủ công'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Lịch dạy chồng chéo: Rất khó sắp xếp phòng học và giáo viên khi có nhiều nhóm học nhỏ cùng lúc.',
          'Thất thoát học phí: Việc tính toán học phí theo số buổi thực học của từng học sinh dễ gây sai sót và tranh cãi.',
          'Thông tin phân mảnh: Dữ liệu học sinh, điểm số và nhận xét nằm rải rác trên Zalo, sổ tay và Excel.',
          'Thiếu sự kết nối: Phụ huynh khó lòng nắm bắt được tiến độ học tập thực tế của con em mình hàng ngày.',
          'Áp lực hành chính: Chủ trung tâm tốn quá nhiều thời gian cho việc chấm công, tính lương và thu tiền.'
        ]
      },
      {
        type: 'heading',
        content: 'Chuyển đổi số cùng Tanoshi: Từ Thủ công đến Tự động hóa'
      },
      {
        type: 'paragraph',
        content: 'Hệ thống Web App dành cho TanThanh Edu không chỉ là nơi lưu trữ dữ liệu, mà là một cỗ máy vận hành thông minh với các tính năng then chốt:'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Hệ sinh thái TanThanh Edu',
       features: []
        }
      }
    ]
  },
  {
    id: '12',
    title: 'Tiếng Nhật Vui Vẻ: Số hóa Đào tạo Tiếng Nhật cho học viên Xuất khẩu lao động',
    slug: 'tieng-nhat-vui-ve-lms-solution',
    excerpt: 'Khám phá cách Tiếng Nhật Vui Vẻ đồng bộ hóa giáo trình, đóng gói khóa học online và ứng dụng Game hóa vào giảng dạy để tối ưu hóa hiệu quả học tập.',
    date: 'May 6, 2026',
    author: 'Tanoshi Vietnam EdTech Team',
    category: 'EdTech Solutions',
    imageUrl: '/lovable-uploads/thuan_phat_japanese_online_lms_1778070033525.png',
    keywords: [
      'Tiếng Nhật Vui Vẻ',
      'LMS tiếng Nhật',
      'Đào tạo XKLĐ',
      'Quiz tiếng Nhật online',
      'Gamification giáo dục'
    ],
    metaDescription: 'Giải pháp số hóa toàn diện cho Tiếng Nhật Vui Vẻ: Đóng gói khóa học, đồng bộ slide bài giảng và tích hợp hệ thống Game & Quiz Online chuyên nghiệp.',
    content: [
      {
        type: 'paragraph',
        content: 'Đào tạo tiếng Nhật cho học viên xuất khẩu lao động (XKLĐ) đòi hỏi sự tập trung cao độ vào tính ứng dụng và khả năng ghi nhớ nhanh. Tuy nhiên, việc duy trì chất lượng giảng dạy đồng đều trên nền tảng online thường gặp nhiều trở ngại về công cụ và tài liệu. Tiếng Nhật Vui Vẻ đã cùng Tanoshi giải quyết triệt để vấn đề này thông qua hệ thống LMS 4.0.'
      },
      {
        type: 'heading',
        content: 'Painpoints: Những thách thức trong đào tạo tiếng Nhật XKLĐ'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Không đóng gói được khóa học: Tài liệu giảng dạy rời rạc, khó tái sử dụng và quản lý lộ trình học tập của từng học viên.',
          'Slide bài giảng không đồng bộ: Mỗi giáo viên sử dụng một định dạng khác nhau, thiếu sự chuyên nghiệp và nhất quán của trung tâm.',
          'Nội dung chưa tương thích: Kiến thức giảng dạy đôi khi quá nặng về học thuật, chưa sát với nhu cầu thực tế của tệp học viên XKLĐ.',
          'Thiếu tương tác online: Việc học qua Zoom/Meet thuần túy dễ gây nhàm chán, học viên khó tiếp thu các bảng chữ cái và ngữ pháp phức tạp.'
        ]
      },
      {
        type: 'heading',
        content: 'Giải pháp đột phá từ Tanoshi: LMS chuyên biệt'
      },
      {
        type: 'paragraph',
        content: 'Chúng tôi đã xây dựng cho Tiếng Nhật Vui Vẻ một hệ thống học tập trực tuyến tích hợp đầy đủ các công cụ hỗ trợ giảng dạy hiện đại:'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Hệ thống LMS Vui Vẻ Online',
          subtitle: 'Học tập tương tác - Đào tạo chuẩn hóa',
          status: 'Go-live',
          groups: [
            {
              title: 'Đóng gói Khóa học',
              items: ['Quản lý lộ trình theo từng bài', 'Kho video bài giảng tập trung', 'Hệ thống tài liệu PDF/Audio']
            },
            {
              title: 'Đồng bộ Slide',
              items: ['Trình xem slide tích hợp', 'Chuẩn hóa định dạng trung tâm', 'Dễ dàng cập nhật nội dung']
            },
            {
              title: 'Quiz & Game Online',
              items: ['Trắc nghiệm Kanji hình ảnh', 'Game ghép từ vựng', 'Bảng xếp hạng thi đua']
            },
            {
              title: 'Nội dung XKLĐ',
              items: ['Học từ vựng theo ngành nghề', 'Hội thoại tình huống tại Nhật', 'Luyện thi chứng chỉ chuyên biệt']
            }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Phân tích GAP: Sự cải tiến sau khi Digital Transformation (DX)'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Hạng mục', 'Trước khi có hệ thống (GAP)', 'Sau khi số hóa cùng Tanoshi'],
          icons: ['Package', 'Layout', 'Zap', 'Users'],
          rows: [
            ['Quản lý khóa học', 'Tài liệu gửi rời rạc qua Zalo/Drive', 'Đóng gói 100% trên LMS, học viên tự học mọi lúc'],
            ['Tính đồng bộ', 'Slide mỗi người một kiểu, khó kiểm soát', 'Hệ thống slide chuẩn hóa, cập nhật đồng loạt'],
            ['Tương tác học viên', 'Nghe giảng thụ động, dễ bỏ cuộc', 'Học qua Game & Quiz, tăng 70% hứng thú'],
            ['Độ tương thích nội dung', 'Kiến thức chung chung, không sát thực tế', 'Giáo trình cá nhân hóa cho tệp XKLĐ']
          ]
        }
      },
      {
        type: 'paragraph',
        content: 'Với hệ thống mới, Tiếng Nhật Vui Vẻ không chỉ nâng cao được hiệu quả đào tạo mà còn khẳng định được uy tín và sự chuyên nghiệp trong mắt học viên và các đối tác Nhật Bản. Công nghệ đã thực sự trở thành đòn bẩy để tri thức được truyền tải một cách sinh động và hiệu quả nhất.'
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
  },
  {
    id: '10',
    title: 'Chuyển đổi số Trung tâm Bán sỉ Laptop: Từ Đấu giá thủ công đến Hệ thống Quản trị Tự động 4.0',
    slug: 'chuyen-doi-so-ban-si-laptop-tanoshi',
    excerpt: 'Khám phá hành trình số hóa toàn diện cho doanh nghiệp bán sỉ Laptop. Giải quyết triệt để "nỗi đau" đấu giá thủ công, sai sót tồn kho và đối soát tài chính phức tạp.',
    date: 'May 6, 2026',
    author: 'Tanoshi Vietnam Tech Team',
    category: 'Business Solutions',
    imageUrl: '/lovable-uploads/laptop_wholesale_dx_dashboard_1778067348103.png',
    keywords: [
      'Chuyển đổi số bán sỉ laptop',
      'Phần mềm quản lý kho laptop',
      'Tự động hóa đấu giá laptop',
      'Quản lý bán sỉ laptop 4.0',
      'Tanoshi Vietnam Solutions',
      'Hệ thống ERP laptop'
    ],
    metaDescription: 'Giải pháp chuyển đổi số toàn diện cho trung tâm bán sỉ laptop. Tự động hóa nghiệp vụ đấu giá, quản lý kho, đối soát hóa đơn và báo cáo quản trị realtime.',
    content: [
      {
        type: 'paragraph',
        content: 'Trong thị trường bán sỉ laptop đầy biến động, tốc độ và độ chính xác là hai yếu tố sống còn. Tuy nhiên, nhiều doanh nghiệp vẫn đang loay hoay với các quy trình thủ công, đặc biệt là trong khâu đấu giá và tính toán lợi nhuận. "Sai một li, đi một dặm" - chỉ cần một sai sót nhỏ trong lúc bid giá hoặc tính toán tỷ giá cũng có thể khiến doanh nghiệp chịu lỗ hàng trăm triệu đồng.'
      },
      {
        type: 'heading',
        content: 'Nỗi đau lớn nhất: Đấu giá và Tính toán thủ công'
      },
      {
        type: 'paragraph',
        content: 'Nghiệp vụ chào giá và đấu giá (Bidding) là "trái tim" của các trung tâm bán sỉ laptop. Trước khi có sự can thiệp của công nghệ, các nhân viên phải:'
      },
      {
        type: 'list',
        items: [
          'Theo dõi giá đấu trực tiếp trên nhiều màn hình, ghi chép bằng tay.',
          'Tính toán giá bid dựa trên bảng giá Excel cũ, dễ dẫn đến sai lệch biên lợi nhuận.',
          'Áp lực thời gian cực lớn: Phải quyết định giá bid trong vài giây trong khi vẫn phải tính toán chi phí vận chuyển, thuế và tỉ giá.',
          'Không có lịch sử đấu giá tập trung để phân tích hành vi đối thủ và tối ưu hóa chiến lược.'
        ]
      },
      {
        type: 'quote',
        content: '"Phải bid và tính toán bằng tay từng con số là nỗi đau lớn nhất, tốn quá nhiều sức người mà rủi ro sai sót lại quá cao."'
      },
      {
        type: 'heading',
        content: 'Hệ sinh thái quản trị Laptop chuyên biệt từ Tanoshi'
      },
      {
        type: 'paragraph',
        content: 'Tanoshi Vietnam đã xây dựng một hệ thống chuyên biệt, số hóa 100% các nghiệp vụ đặc thù của ngành bán sỉ laptop, dựa trên khối lượng công việc thực tế của doanh nghiệp:'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Laptop Wholesale ERP — 7 Trụ cột quản trị',
          subtitle: 'Giải pháp khép kín từ Đấu giá đến Báo cáo quản trị',
          status: 'Go-live',
          groups: [
            {
              title: '1. Nghiệp vụ Chào giá (Bidding)',
              items: ['Tự động hóa công cụ Bid giá', 'Tính toán biên lợi nhuận thời gian thực', 'Lịch sử chào giá thông minh']
            },
            {
              title: '2. Xuất kho Bán sỉ',
              items: ['Hành trình sản phẩm chi tiết', 'Quản lý đơn vị vận chuyển', 'Logistics tracking']
            },
            {
              title: '3. Xuất kho Bán lẻ',
              items: ['Quy trình Test máy chuẩn hóa', 'Listing ASIN thương mại điện tử', 'Quản lý Key Office']
            },
            {
              title: '4. Quản lý Kho',
              items: ['Xuất - Nhập - Tồn realtime', 'Luân chuyển kho nội bộ', 'Cảnh báo hàng tồn lâu']
            },
            {
              title: '5. Hóa đơn & Đối soát',
              items: ['Tự động tính chênh lệch tỷ giá', 'Đối soát đơn vị vận chuyển', 'Thu/Chi tự động']
            },
            {
              title: '6. Nhân sự & Lương',
              items: ['Chấm công tự động', 'Bảng lương theo hiệu suất', 'Quản lý KPI']
            },
            {
              title: '7. Dashboard Quản trị',
              items: ['Biểu đồ tăng trưởng doanh thu', 'Phân tích tỉ lệ lợi nhuận/đơn hàng', 'Báo cáo tồn kho giá trị cao']
            }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Phân tích GAP: Sự khác biệt trước và sau khi Digital Transformation (DX)'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Nghiệp vụ', 'Khi chưa có phần mềm (GAP cũ)', 'Sau khi DX với Tanoshi'],
          icons: ['Zap', 'Package', 'DollarSign', 'BarChart3'],
          rows: [
            ['Đấu giá & Chào giá', 'Tính tay, áp lực, sai số cao (>5%)', 'Engine tự động tính giá bid, chính xác 100%'],
            ['Quản lý Kho', 'Kiểm kê thủ công, dễ thất thoát, không biết chính xác vị trí máy', 'Quản lý theo Serial/ASIN, cập nhật từng giây'],
            ['Tài chính & Đối soát', 'Mất 2-3 ngày để đối soát tỷ giá và phí vận chuyển', 'Đối soát tự động trong 1 click, xử lý tỷ giá tức thời'],
            ['Báo cáo & Ra quyết định', 'Dựa trên cảm tính và số liệu Excel cũ', 'Dashboard trực quan, dữ liệu thực tế giúp ra quyết định nhanh']
          ]
        }
      },
      {
        type: 'heading',
        content: 'Hiệu quả mang lại'
      },
      {
        type: 'chart',
        chartData: {
          title: 'Cải tiến hiệu suất vận hành sau 6 tháng DX (%)',
          data: [
            { name: 'Tốc độ Đấu giá', value: 95 },
            { name: 'Độ chính xác Kho', value: 99 },
            { name: 'Tối ưu nhân lực', value: 40 },
            { name: 'Tốc độ Đối soát', value: 85 },
            { name: 'Tăng trưởng Doanh thu', value: 30 }
          ]
        }
      },
      {
        type: 'paragraph',
        content: 'Chuyển đổi số không chỉ là thay thế giấy bút bằng máy tính, mà là tái cấu trúc quy trình để doanh nghiệp vận hành thông minh hơn. Với hệ thống từ Tanoshi, các chủ trung tâm laptop có thể hoàn toàn yên tâm về sự minh bạch của dòng tiền, độ chính xác của kho bãi và quan trọng nhất là "giải phóng" bản thân khỏi những con số tính toán thủ công mệt mỏi.'
      },
      {
        type: 'quote',
        content: 'Hãy để công nghệ làm những việc lặp đi lặp lại, để con người tập trung vào việc phát triển thị trường và chăm sóc khách hàng.'
      },
      {
        type: 'paragraph',
        content: 'Bạn đã sẵn sàng để nâng tầm trung tâm laptop của mình? Liên hệ với Tanoshi ngay hôm nay để nhận blueprint giải pháp tối ưu nhất.'
      }
    ]
  },
  {
    id: '15',
    title: 'Gia Dụng Nhanh: Số hóa Chuỗi vận hành và Quản lý Kho hàng Thông minh WMS trên nền tảng Odoo ERP',
    slug: 'giadungnhanh-odoo-digital-transformation',
    excerpt: 'Khám phá hành trình chuyển đổi số đột phá tại Gia Dụng Nhanh - nhà phân phối đồ gia dụng và tiện ích thông minh hàng đầu. Từ việc quản lý thủ công hàng nghìn mã SKU đến hệ thống Odoo WMS tích hợp Barcode quét mã, tự động hóa luồng Wave/Batch Picking, đồng bộ đa sàn và đối soát tài chính tức thời.',
    date: 'May 22, 2026',
    author: 'Tanoshi Vietnam Business Team',
    category: 'Business Solutions',
    imageUrl: '/lovable-uploads/laptop_wholesale_dx_dashboard_1778067348103.png',
    keywords: [
      'Gia Dụng Nhanh',
      'Odoo ERP',
      'Odoo WMS',
      'Quản lý kho hàng gia dụng',
      'Đồng bộ thương mại điện tử',
      'Barcode WMS',
      'Tanoshi Vietnam'
    ],
    metaDescription: 'Case study chuyển đổi số toàn diện cho Gia Dụng Nhanh bằng Odoo ERP & WMS. Tối ưu hóa vận hành kho hàng bằng mã vạch, tự động hóa xử lý đơn hàng đa kênh và đối soát tài chính tức thời.',
    content: [
      {
        type: 'paragraph',
        content: 'Gia Dụng Nhanh là thương hiệu phân phối đồ gia dụng và tiện ích thông minh hàng đầu tại Việt Nam, phục vụ hàng chục nghìn đơn hàng mỗi ngày từ các kênh bán lẻ, đại lý cho đến các sàn thương mại điện tử (Shopee, Lazada, Tiktok Shop, Website). Với tốc độ tăng trưởng vượt bậc, mô hình vận hành dựa trên Excel và ghi nhớ thủ công trước đây nhanh chóng bộc lộ những lỗ hổng nghiêm trọng.'
      },
      {
        type: 'heading',
        content: 'Thách thức & Nỗi đau Vận hành Kho hàng Gia dụng'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'QUẢN LÝ SKU KHỔNG LỒ: Hàng nghìn mã hàng gia dụng với nhiều kích cỡ, màu sắc, lô sản xuất khác nhau, quản lý bằng Excel dẫn đến tình trạng sai lệch tồn kho liên tục.',
          'TẮC NGHẼN PICK & PACK: Nhân viên kho phải đi tìm hàng theo trí nhớ, mất nhiều thời gian tìm kiếm sản phẩm, tỷ lệ nhầm lẫn mẫu mã khi đóng gói cao.',
          'TRỄ ĐỒNG BỘ ĐA KÊNH: Tồn kho trên Shopee, Lazada, Tiktok Shop không được cập nhật thời gian thực, dẫn đến tình trạng cháy hàng ảo hoặc bỏ lỡ cơ hội bán lẻ.',
          'ĐỐI SOÁT COD GIAN NAN: Việc đối soát dòng tiền từ các đơn vị vận chuyển (GHTK, GHN, Viettel Post...) và dòng tiền thu hộ từ các sàn tốn hàng tuần liền, dễ thất thoát doanh thu.'
        ]
      },
      {
        type: 'quote',
        content: '"Khi quy mô đạt 3.000 đơn/ngày, việc quản lý kho bằng Excel hoàn toàn sụp đổ. Chúng tôi liên tục bị sàn phạt vì giao trễ và tỷ lệ hoàn hàng do đóng nhầm sản phẩm tăng vọt." - Đại diện vận hành Gia Dụng Nhanh chia sẻ.'
      },
      {
        type: 'heading',
        content: 'Hệ thống Odoo ERP & WMS Chuyên biệt từ Tanoshi Vietnam'
      },
      {
        type: 'paragraph',
        content: 'Để giải quyết triệt để các bài toán trên, Tanoshi Vietnam đã tư vấn và triển khai giải pháp ERP & WMS tùy biến trên nền tảng Odoo, giúp tự động hóa và tối ưu hóa 100% quy trình từ lúc khách đặt hàng cho đến khi đóng gói xuất kho.'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Hệ thống Quản trị Gia Dụng Nhanh Odoo ERP',
          subtitle: 'Đồng bộ toàn diện - Vận hành kho thông minh',
          status: 'Go-live',
          groups: [
            {
              title: '1. Smart WMS & Barcode',
              items: ['Quản lý kho theo vị trí (Bin-location)', 'Quét Barcode/QR bằng máy cầm tay chuyên dụng', 'Quy trình nhập kho, kiểm kê di động thông minh']
            },
            {
              title: '2. Tự động hóa Picking',
              items: ['Áp dụng thuật toán Wave Picking (nhặt hàng theo làn)', 'Batch Picking (nhặt gom nhiều đơn cùng loại)', 'Tự động tối ưu hóa lộ trình di chuyển của nhân viên kho']
            },
            {
              title: '3. Đồng bộ Đa kênh (Omnichannel)',
              items: ['Kết nối API trực tiếp Shopee, Lazada, Tiktok Shop', 'Tự động kéo đơn hàng về Odoo xử lý', 'Cập nhật tồn kho tức thời lên các sàn khi có biến động']
            },
            {
              title: '4. Đối soát Tài chính tự động',
              items: ['Tự động đối soát COD từ hãng vận chuyển', 'Reconciliation doanh thu từ sàn TMĐT', 'Báo cáo lãi lỗ chi tiết theo từng đơn hàng']
            }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Phân tích GAP: Vận hành trước và sau khi số hóa'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Nghiệp vụ', 'Quy trình thủ công cũ (Excel)', 'Hệ thống Odoo ERP (Tanoshi)'],
          icons: ['Zap', 'Package', 'ArrowRightLeft', 'TrendingUp'],
          rows: [
            ['Lấy hàng (Picking)', 'Tìm hàng bằng trí nhớ, mất 5-7 phút/đơn, tỷ lệ sai mẫu 4%', 'Hệ thống dẫn đường qua app Barcode, chỉ mất 1.5 phút/đơn, chính xác 99.9%'],
            ['Đồng bộ tồn kho', 'Cập nhật tay cuối ngày trên từng sàn, dễ bị phạt vì âm kho', 'Tự động đồng bộ realtime trong 2 giây sau mỗi giao dịch'],
            ['Đối soát COD', 'Kế toán đối chiếu file Excel thủ công mất 3-5 ngày', 'Hệ thống tự động so khớp đối soát COD chỉ trong 5 phút'],
            ['Báo cáo quản trị', 'Chờ số liệu cuối tháng, độ trễ và sai lệch cao', 'Dashboard hiển thị realtime doanh thu, chi phí, biên lợi nhuận']
          ]
        }
      },
      {
        type: 'heading',
        content: 'Hiệu quả đột phá sau khi triển khai'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '180%',
            label: 'Tăng tốc độ pick-pack hàng',
            icon: 'Zap'
          },
          {
            value: '99.9%',
            label: 'Độ chính xác tồn kho và đóng gói',
            icon: 'CheckCircle'
          },
          {
            value: '85%',
            label: 'Giảm thời gian đối soát tài chính',
            icon: 'Clock'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Biểu đồ Tăng trưởng & Tối ưu Vận hành'
      },
      {
        type: 'chart',
        chartData: {
          title: 'Chỉ số cải tiến vận hành sau 3 tháng Go-live (%)',
          data: [
            { name: 'Tốc độ Pick-Pack', value: 95 },
            { name: 'Chính xác Đơn hàng', value: 99.9 },
            { name: 'Tự động hóa Đồng bộ', value: 98 },
            { name: 'Tốc độ Đối soát', value: 90 },
            { name: 'Giảm Chi phí Vận hành', value: 35 }
          ]
        }
      },
      {
        type: 'paragraph',
        content: 'Dự án chuyển đổi số tại Gia Dụng Nhanh là một minh chứng rõ nét cho thấy: Khi công nghệ WMS thông minh kết hợp cùng hệ thống ERP mạnh mẽ như Odoo, doanh nghiệp bán lẻ và phân phối có thể bứt phá giới hạn vận hành, tối ưu hóa chi phí nhân sự và mang lại trải nghiệm mua sắm hoàn hảo nhất cho khách hàng.'
      }
    ]
  }
];
