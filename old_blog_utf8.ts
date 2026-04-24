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
    id: '7',
    title: 'Boost Your Education Center\'s Growth with Us: From Manual Management to AI-Powered LMS',
    slug: 'boost-your-education-center-growth',
    excerpt: 'Kh├ím ph├í h├ánh tr├¼nh sß╗æ h├│a v├á tß╗æi ╞░u vß║¡n h├ánh cho 7 trung t├óm gi├ío dß╗Ñc ti├¬u biß╗âu. Tß╗½ quß║ún l├╜ thß╗º c├┤ng rß╗¥i rß║íc ─æß║┐n hß╗ç thß╗æng LMS/Web App chuy├¬n nghiß╗çp t├¡ch hß╗úp AI Agent.',
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
      'Quß╗│nh BOKI Learn',
      'JLTC Manager',
      'Echo English Lab',
      'NZEDU'
    ],
    metaDescription: 'T╞░ vß║Ñn giß║úi ph├íp EdTech to├án diß╗çn cho chß╗º trung t├óm gi├ío dß╗Ñc. Chuyß╗ân ─æß╗òi tß╗½ quß║ún l├╜ thß╗º c├┤ng sang hß╗ç thß╗æng Web App/LMS hiß╗çn ─æß║íi vß╗¢i AI chß║Ñm ─æiß╗âm tß╗▒ ─æß╗Öng.',
    content: [
      {
        type: 'paragraph',
        content: 'Bß║ín ─æang ─æau ─æß║ºu v├¼ quß║ún l├╜ h├áng tr─âm hß╗ìc vi├¬n qua Excel? Bß║ín mß╗çt mß╗Åi v├¼ lß╗ïch dß║íy chß╗ông ch├⌐o v├á thu hß╗ìc ph├¡ sai s├│t? Tß║íi Tanoshi Vietnam, ch├║ng t├┤i hiß╗âu rß║▒ng "nß╗ùi ─æau" lß╗¢n nhß║Ñt cß╗ºa c├íc chß╗º trung t├óm kh├┤ng phß║úi l├á thiß║┐u hß╗ìc vi├¬n, m├á l├á sß╗▒ kiß╗çt sß╗⌐c v├¼ bß╗Ö m├íy vß║¡n h├ánh thß╗º c├┤ng cß╗ông kß╗ünh.'
      },
      {
        type: 'heading',
        content: 'Nß╗ùi ─Éau Chung Cß╗ºa 100% Trung T├óm Vß║¡n H├ánh Thß╗º C├┤ng'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Quß║ún l├╜ hß╗ìc vi├¬n bß║▒ng Excel rß╗¥i rß║íc, dß╗à mß║Ñt dß╗» liß╗çu v├á kh├│ tra cß╗⌐u lß╗ïch sß╗¡.',
          'Xß║┐p lß╗ïch dß║íy v├á ─æiß╗âm danh thß╗º c├┤ng dß║½n ─æß║┐n sai s├│t, nhß║ºm lß║½n ph├▓ng hß╗ìc.',
          'Thu hß╗ìc ph├¡ kh├┤ng r├╡ r├áng, kh├│ ─æß╗æi so├ít d├▓ng tiß╗ün v├á lß╗ïch sß╗¡ thanh to├ín.',
          'Thiß║┐u k├¬nh b├ío c├ío tiß║┐n ─æß╗Ö hß╗ìc tß║¡p chuy├¬n nghiß╗çp cho phß╗Ñ huynh.',
          'T├ái liß╗çu b├ái giß║úng v├á ─æß╗ü thi ph├ón t├ín tr├¬n Drive, USB, kh├│ kiß╗âm so├ít bß║ún quyß╗ün.',
          'CRM yß║┐u k├⌐m khiß║┐n viß╗çc theo d├╡i kh├ích h├áng tiß╗üm n─âng bß╗ï ─æß╗⌐t qu├úng.'
        ]
      },
      {
        type: 'heading',
        content: 'Chß╗⌐ng minh qua con sß╗æ'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '8+',
            label: 'Dß╗▒ ├ín LMS thß╗▒c chiß║┐n ─æ├ú ho├án th├ánh',
            icon: 'Layout'
          },
          {
            value: '4+',
            label: 'L─⌐nh vß╗▒c: Nhß║¡t, Anh, Kß║┐ to├ín, V─ân-To├ín',
            icon: 'BookOpen'
          },
          {
            value: '60+',
            label: 'T├¡nh n─âng chuy├¬n s├óu ─æ├ú triß╗ân khai',
            icon: 'Zap'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Portfolio: 8 Case Study "X╞░╞íng M├íu" Tß╗½ Tanoshi Vietnam'
      },
      {
        type: 'paragraph',
        content: 'Ch├║ng t├┤i kh├┤ng chß╗ë viß║┐t code, ch├║ng t├┤i x├óy dß╗▒ng giß║úi ph├íp dß╗▒a tr├¬n quy tr├¼nh thß╗▒c tß║┐ cß╗ºa tß╗½ng kh├ích h├áng. D╞░ß╗¢i ─æ├óy l├á 8 minh chß╗⌐ng cho n─âng lß╗▒c thß╗▒c thi cß╗ºa ch├║ng t├┤i:'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '1. Quß╗│nh BOKI Learn ΓÇö LMS kß║┐ to├ín Nhß║¡t Bß║ún',
          subtitle: 'Nß╗ün tß║úng b├ín kho├í hß╗ìc video + thi online cho chß╗⌐ng chß╗ë Nissho Boki',
          status: 'Prototype',
          groups: [
            {
              title: 'Hß╗ìc vi├¬n',
              items: ['Xem video b├ái giß║úng', 'L├ám b├ái thi online', 'Thanh to├ín QR code']
            },
            {
              title: 'Admin (gi├ío vi├¬n)',
              items: ['Quß║ún l├╜ kho├í hß╗ìc', 'Tß║ío ─æß╗ü thi (5 dß║íng)', 'Xem ─æ╞ín h├áng']
            },
            {
              title: 'Nß╗Öi dung',
              items: ['8+ kho├í: Boki, thuß║┐', 'Ebook, Zoom live', 'Blog, cß╗Öng ─æß╗ông']
            },
            {
              title: 'Hß╗ç thß╗æng thi tß╗▒ chß║Ñm',
              items: ['B├║t to├ín, sß╗ò c├íi', 'Trß║»c nghiß╗çm, tß╗▒ luß║¡n']
            },
            {
              title: 'Thanh to├ín & ─æ─âng k├╜',
              items: ['QR Vietcombank', 'X├íc nhß║¡n tß╗▒ ─æß╗Öng']
            },
            {
              title: 'T├¡nh n─âng ─æß║╖c biß╗çt',
              highlight: true,
              items: ['5 loß║íi c├óu hß╗Åi kß║┐ to├ín chuy├¬n biß╗çt: Journal entry, Posting, P&L, Balance Sheet, Trß║»c nghiß╗çm, Tß╗▒ luß║¡n']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '2. JLTC Manager ΓÇö quß║ún l├╜ trung t├óm tiß║┐ng Nhß║¡t',
          subtitle: '3 role: Admin, Gi├ío vi├¬n, Hß╗ìc vi├¬n | CRM lead + thi JLPT m├┤ phß╗Ång',
          status: 'Go-live',
          groups: [
            {
              title: 'Admin',
              items: ['Dashboard tß╗òng quan', 'CRM quß║ún l├╜ lead', '─Éiß╗âm danh tß╗òng hß╗úp', 'Lß╗ïch hß╗ìc + Gantt task']
            },
            {
              title: 'Gi├ío vi├¬n',
              items: ['Quß║ún l├╜ lß╗¢p hß╗ìc', 'Tß║ío ─æß╗ü JLPT', '─É├ính gi├í hß╗ìc vi├¬n', 'Task board c├í nh├ón']
            },
            {
              title: 'Hß╗ìc vi├¬n',
              items: ['Thi JLPT m├┤ phß╗Ång', 'Xem kß║┐t quß║ú chi tiß║┐t', 'Lß╗ïch sß╗¡ l├ám b├ái', '─Éß║╖t mß╗Ñc ti├¬u hß╗ìc']
            },
            {
              title: 'CRM tuyß╗ân sinh',
              items: ['Pipeline: Mß╗¢i -> T╞░ vß║Ñn -> ─Éß║╖t cß╗ìc -> Nhß║¡p hß╗ìc']
            },
            {
              title: 'Thi JLPT m├┤ phß╗Ång',
              items: ['Tß╗½ vß╗▒ng, ngß╗» ph├íp, ─æß╗ìc hiß╗âu, nghe']
            },
            {
              title: 'B├ío c├ío & thß╗æng k├¬',
              items: ['Phß╗Ång vß║Ñn, tuyß╗ân sinh, tß╗╖ lß╗ç pass']
            },
            {
              title: '─Éß║╖c biß╗çt',
              highlight: true,
              items: ['6 loß║íi lead: Du hß╗ìc, thß╗▒c tß║¡p, kß╗╣ s╞░, tokutei, tiß║┐ng Nhß║¡t, XKL─É']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '3. Kiß╗üu Li├¬n (Menglish) ΓÇö trung t├óm tiß║┐ng Anh trß║╗ em',
          subtitle: 'Hß╗ç sinh th├íi ─æß║ºy ─æß╗º nhß║Ñt: CRM + t├ái ch├¡nh + kho + ph├ít ├óm + phß╗Ñ huynh',
          status: 'Development',
          groups: [
            {
              title: 'CRM',
              items: ['Lead pipeline', 'T╞░ vß║Ñn tuyß╗ân sinh']
            },
            {
              title: 'Lß╗¢p hß╗ìc',
              items: ['Lß╗ïch, gi├ío vi├¬n', '─Éiß╗âm danh']
            },
            {
              title: 'T├ái ch├¡nh',
              items: ['Thu chi, hß╗ìc ph├¡', 'Nß╗ú, qu├í hß║ín']
            },
            {
              title: 'Kho & s├ích',
              items: ['Nhß║¡p/xuß║Ñt kho', 'Cß║únh b├ío hß║┐t']
            },
            {
              title: 'Quß║ún l├╜ ph├ít ├óm',
              items: ['Ra ─æß╗ü -> Nß╗Öp audio -> chß║Ñm ─æiß╗âm']
            },
            {
              title: 'Portal phß╗Ñ huynh',
              items: ['Tiß║┐n ─æß╗Ö, hß╗ìc ph├¡, nhß║»n tin']
            },
            {
              title: 'Ticket & task',
              items: ['Xß╗¡ l├╜ y├¬u cß║ºu']
            },
            {
              title: '─Éß║╖c biß╗çt',
              highlight: true,
              items: ['Ph├ón quyß╗ün chi tiß║┐t theo tß╗½ng chß╗⌐c n─âng (5 role: Admin, GV, kß║┐ to├ín, PH, HV)']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '4. Nihongo Chiyou Lab ΓÇö nß╗ün tß║úng tß╗▒ hß╗ìc tiß║┐ng Nhß║¡t',
          subtitle: 'Hß╗ìc liß╗çu khß╗òng lß╗ô: 50 b├ái Minna + Kanji + JLPT N5-N4 + ngß╗» ph├íp tß╗òng hß╗úp',
          status: 'Development',
          groups: [
            {
              title: 'Minna no Nihongo',
              items: ['50 b├ái, 12 b├ái test', 'Tß╗½ vß╗▒ng + ngß╗» ph├íp']
            },
            {
              title: 'Kanji + bß╗Ö thß╗º',
              items: ['398K+ data Kanji', '168K radical data']
            },
            {
              title: 'Thi JLPT N5-N4',
              items: ['─Éß╗ü thß║¡t m├┤ phß╗Ång', 'Chß║Ñm tß╗▒ ─æß╗Öng']
            },
            {
              title: 'Ngß╗» ph├íp',
              items: ['Trß╗ú tß╗½, Thß╗â ─æß╗Öng tß╗½, Ph├│ tß╗½, Sß╗æ ─æß║┐m + thß╗¥i gian']
            },
            {
              title: 'T├¡nh n─âng',
              items: ['Furigana tß╗▒ ─æß╗Öng', 'KanjiHover tooltip', 'Xuß║Ñt PDF b├ái hß╗ìc']
            },
            {
              title: '─Éß║╖c biß╗çt',
              highlight: true,
              items: ['Hß╗ìc liß╗çu khß╗òng lß╗ô ─æ╞░ß╗úc tß╗æi ╞░u h├│a tß║úi nhanh, kh├┤ng phß╗Ñ thuß╗Öc m├íy chß╗º']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '5. Tß║Ñn Th├ánh ΓÇö trung t├óm luyß╗çn thi V─ân-To├ín',
          subtitle: '3 portal ri├¬ng biß╗çt: Admin, Gi├ío vi├¬n, Phß╗Ñ huynh | ─É├ính gi├í 6 ti├¬u ch├¡',
          status: 'Prototype',
          groups: [
            {
              title: 'Admin portal',
              items: ['GV ch├¡nh + trß╗ú giß║úng', '12 lß╗¢p, 5 loß║íi lß╗¢p', 'Thu hß╗ìc ph├¡ + log', 'Th╞░ viß╗çn t├ái liß╗çu']
            },
            {
              title: 'Gi├ío vi├¬n portal',
              items: ['Quß║ún l├╜ buß╗òi hß╗ìc', '─É├ính gi├í 6 ti├¬u ch├¡', '─Éiß╗âm danh + lß╗ïch', 'Cß╗Öng ─æß╗ông chia sß║╗']
            },
            {
              title: 'Phß╗Ñ huynh portal',
              items: ['Radar chart n─âng lß╗▒c', 'Xin nghß╗ë ph├⌐p online', 'Thanh to├ín QR code', 'Nhß║»n tin trung t├óm']
            },
            {
              title: '─É├ính gi├í 6 ti├¬u ch├¡',
              items: ['Tiß║┐p thu, tß║¡p trung, thi, tß╗▒ hß╗ìc, ch─âm chß╗ë, t╞░╞íng t├íc']
            },
            {
              title: '5 loß║íi lß╗¢p',
              items: ['Chuy├¬n, ─æß║íi tr├á, luyß╗çn thi, k├¿m, online']
            },
            {
              title: '─Éß║╖c biß╗çt',
              highlight: true,
              items: ['Landing page c├┤ng khai + hß╗ç thß╗æng ─æ├ính gi├í Radar chart (Phß╗Ñ huynh xem trß╗▒c quan n─âng lß╗▒c con)']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '6. Thß║úo L├¬ Japan ΓÇö b├ín kho├í hß╗ìc tiß║┐ng Nhß║¡t online',
          subtitle: 'Hß╗ç thß╗æng hß╗ìc tß║¡p v├á b├ín h├áng t├¡ch hß╗úp | Bank simulator x├íc nhß║¡n thanh to├ín',
          status: 'Prototype',
          groups: [
            {
              title: 'Trang c├┤ng khai',
              items: ['Landing page SEO', 'Blog, cß╗Öng ─æß╗ông', 'Shop ebook/kho├í hß╗ìc']
            },
            {
              title: 'Admin dashboard',
              items: ['Quß║ún l├╜ kho├í hß╗ìc', 'Quß║ún l├╜ b├ái tß║¡p/quiz', 'Blog + ebook + ─æ╞ín h├áng']
            },
            {
              title: 'Hß╗ìc vi├¬n',
              items: ['Xem video b├ái giß║úng', 'L├ám b├ái tß║¡p/quiz', 'Cß╗Öng ─æß╗ông trao ─æß╗òi']
            },
            {
              title: 'Bank simulator',
              items: ['M├┤ phß╗Ång x├íc nhß║¡n chuyß╗ân khoß║ún tß╗▒ ─æß╗Öng']
            },
            {
              title: '─Éß║╖c biß╗çt',
              highlight: true,
              items: ['Theo d├╡i tiß║┐n ─æß╗Ö ─æ─âng k├╜, quß║ún l├╜ ─æ╞ín h├áng, nß╗Öp b├ái tß║¡p - tß║Ñt cß║ú ─æß╗üu theo thß╗¥i gian thß╗▒c']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '7. Echo English Lab ΓÇö AI English platform',
          subtitle: 'Tr├¡ tuß╗ç nh├ón tß║ío chß║Ñm ph├ít ├óm tß╗▒ ─æß╗Öng + Anti-cheat chß╗æng gian lß║¡n',
          status: 'Go-live',
          groups: [
            {
              title: 'Hß╗ìc vi├¬n',
              items: ['Ghi ├óm ph├ít ├óm', 'Nhß║¡n feedback AI', 'Xem lß╗ïch sß╗¡ + ─æiß╗âm']
            },
            {
              title: 'AI Agent engine',
              items: ['Nhß║¡n diß╗çn giß╗ìng n├│i', 'Ph├ón t├¡ch ├óm tiß║┐t', 'Chß║Ñm ─æiß╗âm chuß║⌐n x├íc']
            },
            {
              title: 'Anti-cheat',
              items: ['Ph├ít hiß╗çn gian lß║¡n', 'X├íc minh giß╗ìng n├│i', '─Éß║úm bß║úo c├┤ng bß║▒ng']
            },
            {
              title: 'Ph├ón t├¡ch chi tiß║┐t',
              items: ['Tß╗½ng ├óm tiß║┐t: ─æ├║ng/sai/gß║ºn ─æ├║ng + gß╗úi ├╜ sß╗¡a']
            },
            {
              title: 'Dashboard gi├ío vi├¬n',
              items: ['Thß╗æng k├¬ lß╗ùi phß╗ò biß║┐n + tiß║┐n bß╗Ö hß╗ìc vi├¬n']
            },
            {
              title: '─Éß║╖c biß╗çt',
              highlight: true,
              items: ['AI thay thß║┐ gi├ío vi├¬n trong kh├óu chß║Ñm ph├ít ├óm (Phß║ún hß╗ôi tß╗⌐c th├¼, chi tiß║┐t tß╗½ng ├óm tiß║┐t)']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '8. NZEDU ΓÇö hß╗ç thß╗æng quß║ún l├╜ gi├ío dß╗Ñc th├┤ng minh',
          subtitle: 'Hß╗ç sinh th├íi ─æß║ºy ─æß╗º nhß║Ñt: CRM + t├ái ch├¡nh + kho + ph├ít ├óm + phß╗Ñ huynh',
          status: 'Development',
          groups: [
            {
              title: 'CRM',
              items: ['Lead pipeline', 'T╞░ vß║Ñn tuyß╗ân sinh']
            },
            {
              title: 'Lß╗¢p hß╗ìc',
              items: ['Lß╗ïch, gi├ío vi├¬n', '─Éiß╗âm danh']
            },
            {
              title: 'T├ái ch├¡nh',
              items: ['Thu chi, hß╗ìc ph├¡', 'Nß╗ú, qu├í hß║ín']
            },
            {
              title: 'Kho & s├ích',
              items: ['Nhß║¡p/xuß║Ñt kho', 'Cß║únh b├ío hß║┐t']
            },
            {
              title: 'Quß║ún l├╜ ph├ít ├óm',
              items: ['Ra ─æß╗ü -> Nß╗Öp audio -> chß║Ñm ─æiß╗âm']
            },
            {
              title: 'Portal phß╗Ñ huynh',
              items: ['Tiß║┐n ─æß╗Ö, hß╗ìc ph├¡, nhß║»n tin']
            },
            {
              title: 'Ticket & task',
              items: ['Xß╗¡ l├╜ y├¬u cß║ºu']
            },
            {
              title: '─Éß║╖c biß╗çt',
              highlight: true,
              items: ['Ph├ón quyß╗ün chi tiß║┐t theo tß╗½ng chß╗⌐c n─âng (5 role: Admin, GV, kß║┐ to├ín, PH, HV)']
            }
          ]
        }
      },
      {
        type: 'chart',
        chartData: {
          title: 'Hiß╗çu quß║ú vß║¡n h├ánh sau khi triß╗ân khai LMS (T─âng tr╞░ß╗ƒng %)',
          data: [
            { name: 'N─âng suß║Ñt quß║ún l├╜', value: 85 },
            { name: '─Éß╗Ö ch├¡nh x├íc t├ái ch├¡nh', value: 98 },
            { name: 'Sß╗▒ h├ái l├▓ng cß╗ºa PH', value: 92 },
            { name: 'Tiß║┐t kiß╗çm thß╗¥i gian', value: 70 },
            { name: 'T╞░╞íng t├íc hß╗ìc vi├¬n', value: 65 }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Sß╗▒ Lß╗Öt X├íc: Thß╗º C├┤ng vs. Hß╗ç Thß╗æng To├án Diß╗çn'
      },
      {
        type: 'table',
        tableData: {
          headers: ['T├¡nh n─âng', 'Quß║ún l├╜ bß║▒ng Excel/Zalo', 'Hß╗ç thß╗æng Web App/LMS Tanoshi'],
          icons: ['Users', 'ClipboardCheck', 'Bell', 'ShieldAlert', 'BarChart3'],
          rows: [
            ['Dß╗» liß╗çu hß╗ìc vi├¬n', 'Ph├ón t├ín, dß╗à sai s├│t', 'Tß║¡p trung, ─æß╗ông bß╗Ö 100%'],
            ['Chß║Ñm ─æiß╗âm & ─É├ính gi├í', 'Thß╗º c├┤ng, mß║Ñt nhiß╗üu giß╗¥', 'AI Agent chß║Ñm tß╗▒ ─æß╗Öng theo gi├óy'],
            ['Th├┤ng b├ío phß╗Ñ huynh', 'Nhß║»n tin Zalo thß╗º c├┤ng', 'Portal ri├¬ng & Email tß╗▒ ─æß╗Öng'],
            ['Kiß╗âm tra gian lß║¡n', 'Dß╗▒a v├áo cß║úm t├¡nh gi├ío vi├¬n', 'Hß╗ç thß╗æng Anti-cheat th├┤ng minh'],
            ['B├ío c├ío t├ái ch├¡nh', 'Mß║Ñt cß║ú ng├áy ─æß╗æi so├ít', 'Xuß║Ñt b├ío c├ío trong 1 click']
          ]
        }
      },
      {
        type: 'heading',
        content: 'Tanoshi Vietnam - May ─Éo Giß║úi Ph├íp Theo Y├¬u Cß║ºu'
      },
      {
        type: 'paragraph',
        content: 'Ch├║ng t├┤i hiß╗âu rß║▒ng mß╗ùi trung t├óm l├á mß╗Öt bß║ún thß╗â duy nhß║Ñt vß╗¢i quy tr├¼nh ri├¬ng biß╗çt. Tanoshi Vietnam kh├┤ng b├ín "template" c├│ sß║╡n. Ch├║ng t├┤i t╞░ vß║Ñn v├á x├óy dß╗▒ng hß╗ç thß╗æng ─æ├║ng theo c├ích bß║ín vß║¡n h├ánh, gi├║p bß║ín giß║úi ph├│ng sß╗⌐c lao ─æß╗Öng ─æß╗â tß║¡p trung v├áo gi├í trß╗ï cß╗æt l├╡i: GIß║óNG Dß║áY.'
      },
      {
        type: 'quote',
        content: '─Éß╗½ng ─æß╗â bß╗Ö m├íy quß║ún l├╜ tr├¼ trß╗ç k├¼m h├úm sß╗▒ t─âng tr╞░ß╗ƒng cß╗ºa bß║ín. H├úy ─æß╗â c├┤ng nghß╗ç trß╗ƒ th├ánh ─æ├▓n bß║⌐y mß║ính mß║╜ nhß║Ñt.'
      },
      {
        type: 'paragraph',
        content: 'Li├¬n hß╗ç t╞░ vß║Ñn miß╗àn ph├¡ ngay h├┤m nay ─æß╗â nhß║¡n blueprint giß║úi ph├íp cho trung t├óm cß╗ºa bß║ín!'
      },
      {
        type: 'heading',
        content: 'Quy tr├¼nh l├ám viß╗çc cß╗ºa Tanoshi'
      },
      {
        type: 'process-steps',
        processData: {
          steps: [
            {
              id: 1,
              title: 'Trao ─æß╗òi nß║»m scope',
              description: 'Ch├║ng t├┤i sß║╜ lß║»ng nghe v├á t├¼m hiß╗âu s├óu vß╗ü vß║Ñn ─æß╗ü cß╗ºa bß║ín ─æß╗â x├íc ─æß╗ïnh phß║ím vi dß╗▒ ├ín.',
              activities: [
                'Gß║╖p gß╗í, trao ─æß╗òi v├á khß║úo s├ít',
                '─É├ính gi├í hiß╗çn trß║íng bß╗Ö m├íy vß║¡n h├ánh',
                'Thß╗æng nhß║Ñt y├¬u cß║ºu v├á phß║ím vi c├┤ng viß╗çc'
              ]
            },
            {
              id: 2,
              title: 'X├óy dß╗▒ng prototype ho├án chß╗ënh',
              description: 'Sau khi hiß╗âu r├╡ y├¬u cß║ºu, c├íc chuy├¬n gia thiß║┐t kß║┐ sß║╜ tß║ío nguy├¬n mß║½u trß╗▒c quan ─æß╗â kh├ích h├áng dß╗à h├¼nh dung.',
              activities: [
                'Thiß║┐t kß║┐ giao diß╗çn UI/UX',
                'X├óy dß╗▒ng luß╗ông ng╞░ß╗¥i d├╣ng (User Flow)',
                'Review v├á chß╗æt nguy├¬n mß║½u (Prototype)'
              ]
            },
            {
              id: 3,
              title: 'Ph├ít triß╗ân backend',
              description: '─Éß╗Öi ng┼⌐ kß╗╣ s╞░ tiß║┐n h├ánh lß║¡p tr├¼nh v├á x├óy dß╗▒ng c├íc t├¡nh n─âng nß╗ün tß║úng vß╗»ng chß║»c.',
              activities: [
                'Thiß║┐t kß║┐ kiß║┐n tr├║c c╞í sß╗ƒ dß╗» liß╗çu',
                'Ph├ít triß╗ân API v├á logic cß╗æt l├╡i',
                'T├¡ch hß╗úp c├┤ng nghß╗ç AI Agent tß╗▒ ─æß╗Öng'
              ]
            },
            {
              id: 4,
              title: 'Testing',
              description: 'Kiß╗âm thß╗¡ to├án diß╗çn ─æß╗â ─æß║úm bß║úo hß╗ç thß╗æng hoß║ít ─æß╗Öng ß╗òn ─æß╗ïnh, m╞░ß╗út m├á v├á kh├┤ng c├│ lß╗ùi.',
              activities: [
                'Kiß╗âm thß╗¡ chß╗⌐c n─âng nß╗Öi bß╗Ö',
                '─É├ính gi├í hiß╗çu suß║Ñt v├á ─æß╗Ö bß║úo mß║¡t',
                'Kiß╗âm thß╗¡ nghiß╗çm thu (UAT) vß╗¢i kh├ích h├áng'
              ]
            },
            {
              id: 5,
              title: 'Release',
              description: 'B├án giao sß║ún phß║⌐m ho├án thiß╗çn, ─æ╞░a v├áo hoß║ít ─æß╗Öng thß╗▒c tß║┐ v├á ─æß╗ông h├ánh c├╣ng kh├ích h├áng.',
              activities: [
                'Triß╗ân khai hß╗ç thß╗æng l├¬n server (Go-live)',
                '─É├áo tß║ío v├á h╞░ß╗¢ng dß║½n nh├ón sß╗▒ sß╗¡ dß╗Ñng',
                'Bß║úo h├ánh, bß║úo tr├¼ v├á hß╗ù trß╗ú vß║¡n h├ánh'
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: '8',
    title: 'Sß╗æ H├│a Ng├ánh Vß║¡n Chuyß╗ân Viß╗çt - Nhß║¡t: H├ánh Tr├¼nh Chuyß╗ân ─Éß╗òi Sß╗æ Th├ánh C├┤ng Cß╗ºa IKIGAI Ship Track',
    slug: 'ikigai-ship-track-digital-transformation',
    excerpt: 'Kh├ím ph├í c├ích Tanoshi Vietnam c├╣ng IKIGAI giß║úi quyß║┐t b├ái to├ín vß║¡n h├ánh logistics phß╗⌐c tß║íp. Tß╗½ quß║ún l├╜ thß╗º c├┤ng rß╗¥i rß║íc ─æß║┐n hß╗ç thß╗æng Ship Track hiß╗çn ─æß║íi t├¡ch hß╗úp API c├íc nh├á vß║¡n chuyß╗ân lß╗¢n.',
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
    metaDescription: 'Case study vß╗ü viß╗çc x├óy dß╗▒ng hß╗ç thß╗æng quß║ún l├╜ vß║¡n chuyß╗ân chuy├¬n s├óu cho IKIGAI. Tß╗▒ ─æß╗Öng h├│a t├¡nh ph├¡, t├¡ch hß╗úp API nh├á vß║¡n chuyß╗ân v├á tß╗æi ╞░u quy tr├¼nh vß║¡n h├ánh.',
    content: [
      {
        type: 'paragraph',
        content: 'Trong bß╗æi cß║únh th╞░╞íng mß║íi ─æiß╗çn tß╗¡ Viß╗çt - Nhß║¡t b├╣ng nß╗ò, viß╗çc quß║ún l├╜ h├áng ng├án kiß╗çn h├áng mß╗ùi ng├áy bß║▒ng c├íc ph╞░╞íng thß╗⌐c thß╗º c├┤ng ─æang trß╗ƒ th├ánh r├áo cß║ún lß╗¢n nhß║Ñt cho sß╗▒ t─âng tr╞░ß╗ƒng. IKIGAI - mß╗Öt ─æ╞ín vß╗ï vß║¡n chuyß╗ân uy t├¡n - ─æ├ú c├╣ng Tanoshi Vietnam bß║»t tay x├óy dß╗▒ng hß╗ç thß╗æng "Ikigai Ship Track" nhß║▒m sß╗æ h├│a to├án diß╗çn quy tr├¼nh vß║¡n h├ánh, mang lß║íi sß╗▒ minh bß║ích v├á tß╗æc ─æß╗Ö v╞░ß╗út trß╗Öi.'
      },
      {
        type: 'heading',
        content: 'Nß╗ùi ─Éau "Cß╗æ Hß╗»u" Cß╗ºa Ng├ánh Vß║¡n Chuyß╗ân Quß╗æc Tß║┐'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Th├┤ng tin kh├ích h├áng (Lead) ph├ón mß║únh tß╗½ nhiß╗üu k├¬nh: Facebook, Zalo, TikTok, g├óy kh├│ kh─ân cho viß╗çc ch─âm s├│c v├á chß╗æt ─æ╞ín.',
          'Sai s├│t trong t├¡nh ph├¡ vß║¡n chuyß╗ân do t├¡nh to├ín thß╗º c├┤ng giß╗»a c├ón nß║╖ng thß╗▒c tß║┐ v├á c├ón nß║╖ng quy ─æß╗òi (L*W*H/6000).',
          'Mß║Ñt dß║Ñu h├áng h├│a: Kh├┤ng c├│ c├íi nh├¼n tß╗òng quan vß╗ü trß║íng th├íi kiß╗çn h├áng khi h├áng rß╗¥i kho hoß║╖c ─æang tr├¬n m├íy bay.',
          'Qu├í tß║úi nhß║¡p liß╗çu: Nh├ón vi├¬n phß║úi copy-paste dß╗» liß╗çu l├¬n c├íc trang web cß╗ºa h├úng vß║¡n chuyß╗ân (EMS, DHL, Sagawa) mß╗Öt c├ích thß╗º c├┤ng.',
          'Kh├ích h├áng li├¬n tß╗Ñc hß╗Åi vß╗ü trß║íng th├íi ─æ╞ín h├áng do thiß║┐u cß╗òng tra cß╗⌐u tß╗▒ ─æß╗Öng.',
          'Kh├│ kh─ân ─æß╗æi so├ít c├┤ng nß╗ú: C├íc khoß║ún ph├¡ ship, phß╗Ñ ph├¡ v├á COD ph├ón t├ín khiß║┐n viß╗çc tß╗òng hß╗úp lß╗úi nhuß║¡n thß╗▒c tß║┐ trß╗ƒ n├¬n chß║¡m chß║íp v├á dß╗à nhß║ºm lß║½n.'
        ]
      },
      {
        type: 'heading',
        content: 'Hiß╗çu Quß║ú Sau Chuyß╗ân ─Éß╗òi Sß╗æ'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '100%',
            label: '─É╞ín h├áng ─æ╞░ß╗úc t├¡nh ph├¡ tß╗▒ ─æß╗Öng, ch├¡nh x├íc tuyß╗çt ─æß╗æi',
            icon: 'Calculator'
          },
          {
            value: '70%',
            label: 'Giß║úm thß╗¥i gian xß╗¡ l├╜ thß╗º c├┤ng nhß╗¥ t├¡ch hß╗úp API',
            icon: 'Zap'
          },
          {
            value: '24/7',
            label: 'Kh├ích h├áng tß╗▒ tra cß╗⌐u trß║íng th├íi ─æ╞ín h├áng',
            icon: 'Search'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Giß║úi Ph├íp ─Éß╗Öt Ph├í: Hß╗ç Thß╗æng Ikigai Ship Track'
      },
      {
        type: 'paragraph',
        content: 'Tanoshi Vietnam kh├┤ng chß╗ë x├óy dß╗▒ng mß╗Öt phß║ºn mß╗üm, ch├║ng t├┤i kiß║┐n tß║ío mß╗Öt bß╗Ö m├íy vß║¡n h├ánh th├┤ng minh dß╗▒a tr├¬n nhu cß║ºu thß╗▒c tß║┐ cß╗ºa IKIGAI.'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Ikigai Ship Track ΓÇö Giß║úi ph├íp Logistics To├án Diß╗çn',
          subtitle: 'Quy tr├¼nh kh├⌐p k├¡n tß╗½ Lead ─æß║┐n Delivery',
          status: 'Go-live',
          groups: [
            {
              title: 'Quß║ún l├╜ Lead (Round 1)',
              items: ['Tß║¡p trung Lead tß╗½ FB/Zalo/TikTok', 'Theo d├╡i trß║íng th├íi t╞░ vß║Ñn', 'Ghi ch├║ nhu cß║ºu kh├ích h├áng']
            },
            {
              title: 'Vß║¡n h├ánh Kho (Round 2)',
              items: ['Quß║ún l├╜ kiß╗çn h├áng theo chuyß║┐n bay', 'Cß║¡p nhß║¡t trß║íng th├íi nß╗Öi bß╗Ö', 'Xß╗¡ l├╜ sß╗▒ cß╗æ vß║¡n chuyß╗ân']
            },
            {
              title: 'Engine T├¡nh Ph├¡ Tß╗▒ ─Éß╗Öng',
              items: ['Quy ─æß╗òi trß╗ìng l╞░ß╗úng thß╗â t├¡ch', '├üp gi├í theo bß║úng gi├í bß║¡c thang', 'Tß╗▒ ─æß╗Öng cß╗Öng phß╗Ñ ph├¡/ph├¡ ─æ├│ng th├╣ng']
            },
            {
              title: 'Kß║┐t nß╗æi API Carrier',
              items: ['─Éß║⌐y ─æ╞ín l├¬n EMS, DHL, Sagawa', 'Lß║Ñy m├ú tracking tß╗▒ ─æß╗Öng', '─Éß╗ông bß╗Ö trß║íng th├íi tß╗½ h├úng']
            },
            {
              title: 'Portal Tra Cß╗⌐u Kh├ích H├áng',
              items: ['Tra cß╗⌐u theo m├ú vß║¡n ─æ╞ín', 'Xem lß╗ïch sß╗¡ h├ánh tr├¼nh chi tiß║┐t', 'Dß╗» liß╗çu chuß║⌐n x├íc 100% tß╗½ API']
            },
            {
              title: 'T├¡nh n─âng ─æß║╖c biß╗çt',
              highlight: true,
              items: ['Hß╗ç thß╗æng Kanban 2 v├▓ng chuy├¬n s├óu gi├║p t├ích biß╗çt r├╡ r├áng kh├óu Kinh doanh v├á kh├óu Vß║¡n h├ánh, tß╗æi ╞░u h├│a sß╗▒ phß╗æi hß╗úp giß╗»a c├íc ph├▓ng ban.']
            }
          ]
        }
      },
      {
        type: 'chart',
        chartData: {
          title: 'Cß║úi Thiß╗çn N─âng Suß║Ñt Vß║¡n H├ánh (So vß╗¢i tr╞░ß╗¢c khi c├│ hß╗ç thß╗æng)',
          data: [
            { name: 'Tß╗æc ─æß╗Ö xß╗¡ l├╜ ─æ╞ín', value: 90 },
            { name: '─Éß╗Ö ch├¡nh x├íc t├ái ch├¡nh', value: 99 },
            { name: 'Khß║ú n─âng tra cß╗⌐u h├áng', value: 100 },
            { name: 'Tiß║┐t kiß╗çm nh├ón sß╗▒', value: 60 },
            { name: 'Mß╗⌐c ─æß╗Ö h├ái l├▓ng kh├ích', value: 95 }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Bß║úng So S├ính Hiß╗çu Quß║ú: Tr╞░ß╗¢c vs Sau'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Hß║íng mß╗Ñc', 'Vß║¡n h├ánh thß╗º c├┤ng (Zalo/Excel)', 'Hß╗ç thß╗æng Ikigai Ship Track'],
          icons: ['Users', 'Calculator', 'Share2', 'Globe', 'Clock'],
          rows: [
            ['Quß║ún l├╜ Lead', 'Rß╗¥i rß║íc, dß╗à bß╗Å s├│t kh├ích h├áng', 'Tß║¡p trung tr├¬n Kanban Board chuy├¬n nghiß╗çp'],
            ['T├¡nh ph├¡ vß║¡n chuyß╗ân', 'Dß╗à sai s├│t, mß║Ñt nhiß╗üu thß╗¥i gian', 'Tß╗▒ ─æß╗Öng 100% theo Engine chuß║⌐n x├íc'],
            ['Kß║┐t nß╗æi nh├á vß║¡n chuyß╗ân', 'Nhß║¡p liß╗çu thß╗º c├┤ng tß╗½ng ─æ╞ín', '─Éß╗ông bß╗Ö API tß╗▒ ─æß╗Öng trong t├¡ch tß║»c'],
            ['Tra cß╗⌐u ─æ╞ín h├áng', 'Kh├ích phß║úi nhß║»n tin hß╗Åi li├¬n tß╗Ñc', 'Kh├ích tß╗▒ tra cß╗⌐u 24/7 tr├¬n Website'],
            ['Dß╗» liß╗çu & B├ío c├ío', 'Kh├│ tß╗òng hß╗úp, kh├┤ng theo thß╗¥i gian thß╗▒c', 'B├ío c├ío Dashboard cß║¡p nhß║¡t tß╗⌐c th├¼']
          ]
        }
      }
    ]
  },
  {
    id: '6',
    title: 'JLTC Manager: Sß╗æ H├│a Quy Tr├¼nh Quß║ún L├╜ Trung T├óm Tiß║┐ng Nhß║¡t IKIGAI',
    slug: 'ikigai-jltc-manager-digital-transformation',
    excerpt: 'Kh├ím ph├í c├ích IKIGAI tß╗æi ╞░u vß║¡n h├ánh tß╗½ kh├óu tuyß╗ân sinh Lead ─æß║┐n quß║ún l├╜ thi JLPT m├┤ phß╗Ång v├á hß╗ô s╞í du hß╗ìc th├┤ng qua hß╗ç thß╗æng quß║ún trß╗ï chuy├¬n s├óu JLTC Manager.',
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
    metaDescription: 'Case study vß╗ü chuyß╗ân ─æß╗òi sß╗æ to├án diß╗çn cho trung t├óm tiß║┐ng Nhß║¡t IKIGAI. Tß╗æi ╞░u quß║ún l├╜ Lead, thi JLPT v├á hß╗ô s╞í du hß╗ìc Nhß║¡t Bß║ún.',
    content: [
      {
        type: 'paragraph',
        content: 'IKIGAI l├á mß╗Öt trong nhß╗»ng trung t├óm tiß║┐ng Nhß║¡t h├áng ─æß║ºu trong viß╗çc ─æ├áo tß║ío du hß╗ìc sinh v├á kß╗╣ s╞░ ─æi Nhß║¡t. ─Éß╗â duy tr├¼ vß╗ï thß║┐ v├á n├óng cao chß║Ñt l╞░ß╗úng ─æ├áo tß║ío, IKIGAI ─æ├ú phß╗æi hß╗úp c├╣ng Tanoshi Vietnam ph├ít triß╗ân hß╗ç thß╗æng JLTC Manager ΓÇö mß╗Öt giß║úi ph├íp quß║ún trß╗ï chuy├¬n s├óu giß║úi quyß║┐t triß╗çt ─æß╗â c├íc b├ái to├ín vß║¡n h├ánh ─æß║╖c th├╣ cß╗ºa ng├ánh gi├ío dß╗Ñc tiß║┐ng Nhß║¡t.'
      },
      {
        type: 'heading',
        content: 'Nß╗ùi ─Éau Trong Vß║¡n H├ánh Trung T├óm Tiß║┐ng Nhß║¡t'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Quß║ún l├╜ Lead tuyß╗ân sinh ─æa k├¬nh (Du hß╗ìc, Kß╗╣ s╞░, Tokutei) bß╗ï ph├ón mß║únh v├á kh├│ theo d├╡i tiß║┐n ─æß╗Ö t╞░ vß║Ñn.',
          'Viß╗çc tß╗ò chß╗⌐c thi thß╗¡ JLPT ─æß╗ïnh kß╗│ (ra ─æß╗ü, chß║Ñm ─æiß╗âm, xß║┐p hß║íng) diß╗àn ra ho├án to├án thß╗º c├┤ng v├á chß║¡m chß║íp.',
          'Dß╗» liß╗çu ─æiß╗âm danh v├á chuy├¬n cß║ºn hß╗ìc vi├¬n giß╗»a c├íc c╞í sß╗ƒ kh├┤ng ─æ╞░ß╗úc ─æß╗ông bß╗Ö h├│a theo thß╗¥i gian thß╗▒c.',
          'Sß║»p xß║┐p lß╗ïch dß║íy v├á quß║ún l├╜ ph├▓ng hß╗ìc th╞░ß╗¥ng xuy├¬n xß║úy ra t├¼nh trß║íng chß╗ông ch├⌐o hoß║╖c trß╗æng lß╗¢p l├úng ph├¡.',
          'Xß╗¡ l├╜ khß╗æi l╞░ß╗úng lß╗¢n hß╗ô s╞í phß╗Ång vß║Ñn v├á b├ío c├ío thß╗æng k├¬ cho c├íc nghiß╗çp ─æo├án Nhß║¡t Bß║ún phß╗⌐c tß║íp, dß╗à sai s├│t.',
          'Viß╗çc giao viß╗çc v├á theo d├╡i tiß║┐n ─æß╗Ö (Task) giß╗»a bß╗Ö phß║¡n Admin v├á Gi├ío vi├¬n thiß║┐u c├┤ng cß╗Ñ tß║¡p trung.'
        ]
      },
      {
        type: 'heading',
        content: 'Giß║úi Ph├íp ─Éß╗Öt Ph├í: Hß╗ç Thß╗æng JLTC Manager'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '500+',
            label: 'Hß╗ìc vi├¬n ─æ╞░ß╗úc quß║ún l├╜ tß║¡p trung',
            icon: 'Users'
          },
          {
            value: '1000+',
            label: '─Éß╗ü thi JLPT ─æ╞░ß╗úc khß╗ƒi tß║ío tß╗▒ ─æß╗Öng',
            icon: 'ClipboardCheck'
          },
          {
            value: '60%',
            label: 'T─âng tß╗æc quy tr├¼nh xß╗¡ l├╜ hß╗ô s╞í du hß╗ìc',
            icon: 'Zap'
          }
        ]
      },
      {
        type: 'heading',
        content: 'C├íc Ph├ón Hß╗ç Cß╗æt L├╡i'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'JLTC Manager ΓÇö Trung T├óm ─Éiß╗üu H├ánh Sß╗æ',
          subtitle: 'Giß║úi ph├íp quß║ún trß╗ï 360 ─æß╗Ö cho IKIGAI',
          status: 'Go-live',
          groups: [
            {
              title: 'CRM Lead Management',
              items: ['Ph├ón loß║íi: Du hß╗ìc, Kß╗╣ s╞░, Tokutei', 'Theo d├╡i Pipeline t╞░ vß║Ñn', 'Nhß║»c lß╗ïch phß╗Ång vß║Ñn']
            },
            {
              title: 'Hß╗ç thß╗æng thi JLPT',
              items: ['Ng├ón h├áng c├óu hß╗Åi th├┤ng minh', 'Chß║Ñm ─æiß╗âm & xß║┐p hß║íng tß╗▒ ─æß╗Öng', 'Ph├ón t├¡ch ─æiß╗âm mß║ính/yß║┐u']
            },
            {
              title: 'Lß╗ïch hß╗ìc & ─Éiß╗âm danh',
              items: ['Gantt Chart lß╗ïch dß║íy', '─Éiß╗âm danh QR code', 'Th├┤ng b├ío nghß╗ë hß╗ìc tß╗▒ ─æß╗Öng']
            },
            {
              title: 'B├ío c├ío & Hß╗ô s╞í',
              items: ['Xuß║Ñt hß╗ô s╞í phß╗Ång vß║Ñn chuß║⌐n', 'Thß╗æng k├¬ tß╗╖ lß╗ç ─æß╗ù visa', 'B├ío c├ío doanh thu chi tiß║┐t']
            },
            {
              title: 'Task Management',
              items: ['Giao viß╗çc theo bß╗Ö phß║¡n', 'Theo d├╡i deadline gi├ío vi├¬n', 'Hß╗ç thß╗æng Ticket nß╗Öi bß╗Ö']
            },
            {
              title: 'Cß╗òng th├┤ng tin',
              items: ['Portal ri├¬ng cho GV/HV/PH', 'Tra cß╗⌐u kß║┐t quß║ú hß╗ìc tß║¡p', 'Kho hß╗ìc liß╗çu nß╗Öi bß╗Ö']
            }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Hiß╗çu Quß║ú Chuyß╗ân ─Éß╗òi Sß╗æ'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Nghiß╗çp vß╗Ñ', 'Quy tr├¼nh c┼⌐ (Excel/Giß║Ñy)', 'Vß╗¢i JLTC Manager'],
          icons: ['ClipboardCheck', 'Users', 'Calendar', 'BarChart3'],
          rows: [
            ['Tß╗ò chß╗⌐c thi JLPT', 'Mß║Ñt 3-5 ng├áy chuß║⌐n bß╗ï & chß║Ñm b├ái', 'Tß╗▒ ─æß╗Öng h├│a 100% trong 1 click'],
            ['Quß║ún l├╜ Lead', 'R╞íi rß║íc, tß╗╖ lß╗ç chuyß╗ân ─æß╗òi thß║Ñp', 'Tß║¡p trung, t─âng 30% tß╗╖ lß╗ç nhß║¡p hß╗ìc'],
            ['Sß║»p xß║┐p lß╗ïch hß╗ìc', 'Dß╗à nhß║ºm lß║½n, mß║Ñt thß╗¥i gian', 'Tß╗æi ╞░u h├│a 99% c├┤ng suß║Ñt ph├▓ng'],
            ['Hß╗ô s╞í du hß╗ìc', 'Thß╗º c├┤ng, ├íp lß╗▒c m├╣a cao ─æiß╗âm', 'Chuß║⌐n h├│a quy tr├¼nh, giß║úm 60% ├íp lß╗▒c']
          ]
        }
      }
    ]
  },
  {
    id: '5',
    title: 'Sß╗æ H├│a Trung T├óm Tiß║┐ng Anh Trß║╗ Em: H├ánh Tr├¼nh Chuyß╗ân ─Éß╗òi Sß╗æ Cß╗ºa MEnglish (Kiß╗üu Li├¬n)',
    slug: 'menglish-digital-transformation-case-study',
    excerpt: 'Kh├ím ph├í c├ích MEnglish tß╗æi ╞░u vß║¡n h├ánh to├án diß╗çn tß╗½ CRM, t├ái ch├¡nh ─æß║┐n hß╗ç thß╗æng chß║Ñm ─æiß╗âm ph├ít ├óm AI, gi├║p kß║┐t nß╗æi phß╗Ñ huynh v├á nh├á tr╞░ß╗¥ng hiß╗çu quß║ú.',
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
    metaDescription: 'Case study vß╗ü viß╗çc x├óy dß╗▒ng hß╗ç sinh th├íi quß║ún l├╜ to├án diß╗çn cho trung t├óm tiß║┐ng Anh MEnglish. Tß╗æi ╞░u quy tr├¼nh tuyß╗ân sinh, t├ái ch├¡nh v├á ─æ├áo tß║ío t├¡ch hß╗úp AI.',
    content: [
      {
        type: 'paragraph',
        content: 'Vß╗¢i quy m├┤ ng├áy c├áng mß╗ƒ rß╗Öng cß╗ºa c├íc trung t├óm tiß║┐ng Anh trß║╗ em, viß╗çc quß║ún l├╜ thß╗º c├┤ng qua Zalo v├á Excel kh├┤ng c├▓n ─æ├íp ß╗⌐ng ─æ╞░ß╗úc nhu cß║ºu t─âng tr╞░ß╗ƒng. MEnglish ─æ├ú c├╣ng Tanoshi Vietnam x├óy dß╗▒ng mß╗Öt hß╗ç thß╗æng quß║ún trß╗ï chuy├¬n s├óu, gi├║p tß╗▒ ─æß╗Öng h├│a tß╗½ kh├óu t├¼m kiß║┐m kh├ích h├áng ─æß║┐n viß╗çc theo d├╡i tiß║┐n ─æß╗Ö hß╗ìc tß║¡p cß╗ºa tß╗½ng hß╗ìc vi├¬n.'
      },
      {
        type: 'heading',
        content: 'Th├ích Thß╗⌐c Trong Quß║ún L├╜ Trung T├óm Tiß║┐ng Anh Trß║╗ Em'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Quß║ún l├╜ Lead tuyß╗ân sinh rß╗¥i rß║íc, kh├┤ng theo d├╡i ─æ╞░ß╗úc tß╗╖ lß╗ç chuyß╗ân ─æß╗òi tß╗½ t╞░ vß║Ñn ─æß║┐n nhß║¡p hß╗ìc.',
          'Sai s├│t trong quß║ún l├╜ hß╗ìc ph├¡ v├á c├íc khoß║ún thu chi do t├¡nh to├ín thß╗º c├┤ng.',
          'Kh├│ kh─ân trong viß╗çc kiß╗âm so├ít kho s├ích v├á gi├ío tr├¼nh cho h├áng tr─âm hß╗ìc vi├¬n.',
          'Chß║Ñm ─æiß╗âm ph├ít ├óm thß╗º c├┤ng mß║Ñt nhiß╗üu thß╗¥i gian v├á kh├┤ng ─æ╞░a ra ─æ╞░ß╗úc phß║ún hß╗ôi tß╗⌐c th├¼.',
          'Phß╗Ñ huynh thiß║┐u k├¬nh th├┤ng tin ch├¡nh thß╗æng ─æß╗â theo d├╡i lß╗ïch hß╗ìc v├á nhß║¡n x├⌐t cß╗ºa gi├ío vi├¬n.',
          'Dß╗» liß╗çu hß╗ìc vi├¬n kh├┤ng ─æ╞░ß╗úc bß║úo mß║¡t v├á ph├ón quyß╗ün r├╡ r├áng giß╗»a c├íc bß╗Ö phß║¡n.'
        ]
      },
      {
        type: 'heading',
        content: 'Kß║┐t Quß║ú ─Éß╗Öt Ph├í Sau Triß╗ân Khai'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '95%',
            label: 'Phß╗Ñ huynh h├ái l├▓ng vß╗¢i Portal theo d├╡i tiß║┐n ─æß╗Ö',
            icon: 'Users'
          },
          {
            value: '80%',
            label: 'Giß║úm thß╗¥i gian quß║ún l├╜ t├ái ch├¡nh v├á ─æß╗æi so├ít',
            icon: 'Zap'
          },
          {
            value: '24/7',
            label: 'AI chß║Ñm ─æiß╗âm ph├ít ├óm phß║ún hß╗ôi tß╗⌐c th├¼',
            icon: 'Zap'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Hß╗ç Sinh Th├íi Quß║ún Trß╗ï MEnglish'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Hß╗ç thß╗æng MEnglish ΓÇö Quß║ún l├╜ 360 ─Éß╗Ö',
          subtitle: 'Giß║úi ph├íp to├án diß╗çn cho trung t├óm ngoß║íi ngß╗» hiß╗çn ─æß║íi',
          status: 'Go-live',
          groups: [
            {
              title: 'CRM & Tuyß╗ân sinh',
              items: ['Pipeline quß║ún l├╜ Lead chuy├¬n s├óu', 'Theo d├╡i nguß╗ôn kh├ích h├áng', 'Nhß║»c lß╗ïch t╞░ vß║Ñn tß╗▒ ─æß╗Öng']
            },
            {
              title: 'Quß║ún l├╜ ─É├áo tß║ío',
              items: ['Xß║┐p lß╗ïch hß╗ìc & ph├▓ng hß╗ìc', '─Éiß╗âm danh ─æiß╗çn tß╗¡', 'Hß╗ç thß╗æng b├ái tß║¡p online']
            },
            {
              title: 'T├ái ch├¡nh & Kho',
              items: ['Quß║ún l├╜ hß╗ìc ph├¡ & nß╗ú', 'B├ío c├ío thu chi tß╗▒ ─æß╗Öng', 'Kiß╗âm k├¬ kho gi├ío tr├¼nh']
            },
            {
              title: 'AI English Lab',
              items: ['Chß║Ñm ph├ít ├óm chuß║⌐n quß╗æc tß║┐', 'Gß╗úi ├╜ sß╗¡a lß╗ùi ├óm tiß║┐t', 'Thß╗æng k├¬ lß╗ùi phß╗ò biß║┐n']
            },
            {
              title: 'Portal Phß╗Ñ huynh',
              items: ['Xem nhß║¡n x├⌐t sau buß╗òi hß╗ìc', 'Theo d├╡i chuy├¬n cß║ºn', 'Thanh to├ín hß╗ìc ph├¡ online']
            },
            {
              title: 'T├¡nh n─âng ─æß║╖c biß╗çt',
              highlight: true,
              items: ['Ph├ón quyß╗ün chi tiß║┐t 5 role (Admin, GV, Kß║┐ to├ín, PH, HV) gi├║p quy tr├¼nh vß║¡n h├ánh minh bß║ích v├á bß║úo mß║¡t dß╗» liß╗çu tuyß╗çt ─æß╗æi.']
            }
          ]
        }
      },
      {
        type: 'table',
        tableData: {
          headers: ['Quy tr├¼nh', 'Tr╞░ß╗¢c khi sß╗æ h├│a', 'Vß╗¢i hß╗ç thß╗æng MEnglish'],
          icons: ['ClipboardCheck', 'DollarSign', 'Bell', 'Database'],
          rows: [
            ['Quß║ún l├╜ tuyß╗ân sinh', 'Ghi ch├⌐p sß╗ò tay, dß╗à mß║Ñt th├┤ng tin', 'Lead pipeline tß╗▒ ─æß╗Öng, kh├┤ng bß╗Å s├│t'],
            ['T├ái ch├¡nh hß╗ìc ph├¡', '─Éß╗æi so├ít thß╗º c├┤ng, dß╗à sai s├│t', 'Tß╗▒ ─æß╗Öng b├ío nß╗ú v├á gß║ích nß╗ú QR'],
            ['T╞░╞íng t├íc phß╗Ñ huynh', 'Nhß║»n tin Zalo thß╗º c├┤ng', 'Portal cß║¡p nhß║¡t th├┤ng tin Real-time'],
            ['L╞░u trß╗» dß╗» liß╗çu', 'Ph├ón t├ín tr├¬n nhiß╗üu file Excel', 'C╞í sß╗ƒ dß╗» liß╗çu tß║¡p trung, bß║úo mß║¡t']
          ]
        }
      }
    ]
  },
  {
    id: '4',
    title: 'NZEDU: Hß╗ç Sinh Th├íi Gi├ío Dß╗Ñc Th├┤ng Minh ΓÇö C├ích Mß║íng H├│a Quß║ún L├╜ Trung T├óm Ngoß║íi Ngß╗»',
    slug: 'nzedu-smart-education-ecosystem',
    excerpt: 'NZEDU ─æ├ú c├╣ng Tanoshi Vietnam x├óy dß╗▒ng hß╗ç sinh th├íi quß║ún l├╜ gi├ío dß╗Ñc hiß╗çn ─æß║íi, t├¡ch hß╗úp tß╗½ tuyß╗ân sinh ─æß║┐n ─æ├áo tß║ío v├á t╞░╞íng t├íc phß╗Ñ huynh tr├¬n mß╗Öt nß╗ün tß║úng duy nhß║Ñt.',
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
    metaDescription: 'Kh├ím ph├í c├ích NZEDU tß╗æi ╞░u bß╗Ö m├íy vß║¡n h├ánh th├┤ng qua hß╗ç sinh th├íi gi├ío dß╗Ñc th├┤ng minh. Giß║úi ph├íp EdTech t├╣y biß║┐n cho quy m├┤ lß╗¢n.',
    content: [
      {
        type: 'paragraph',
        content: '─Éß╗æi vß╗¢i nhß╗»ng ─æ╞ín vß╗ï c├│ quy m├┤ ─æ├áo tß║ío lß╗¢n v├á ─æa dß║íng nh╞░ NZEDU, viß╗çc sß╗ƒ hß╗»u mß╗Öt "trung t├óm ─æiß╗üu h├ánh sß╗æ" l├á yß║┐u tß╗æ sß╗æng c├▓n. Dß╗▒ ├ín NZEDU tß║¡p trung v├áo viß╗çc tß║ío ra mß╗Öt hß╗ç sinh th├íi kh├⌐p k├¡n, n╞íi mß╗ìi dß╗» liß╗çu tß╗½ tuyß╗ân sinh, hß╗ìc thuß║¡t ─æß║┐n t├ái ch├¡nh ─æß╗üu ─æ╞░ß╗úc kß║┐t nß╗æi chß║╖t chß║╜.'
      },
      {
        type: 'heading',
        content: 'B├ái To├ín Vß║¡n H├ánh Tß║íi NZEDU'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Hß╗ç thß╗æng c┼⌐ kh├┤ng ─æ├íp ß╗⌐ng ─æ╞░ß╗úc viß╗çc quß║ún l├╜ ─æa chi nh├ính v├á ─æa ch╞░╞íng tr├¼nh ─æ├áo tß║ío.',
          'D├▓ng tiß╗ün hß╗ìc ph├¡ kh├┤ng ─æ╞░ß╗úc cß║¡p nhß║¡t Real-time dß║½n ─æß║┐n kh├│ kh─ân trong b├ío c├ío t├ái ch├¡nh.',
          'Quy tr├¼nh nß╗Öp b├ái v├á chß║Ñm b├ái cß╗ºa gi├ío vi├¬n ch╞░a ─æ╞░ß╗úc hß╗ç thß╗æng h├│a chuy├¬n nghiß╗çp.',
          'Thiß║┐u t├¡nh n─âng bß║úo mß║¡t nß╗Öi dung b├ái giß║úng, dß╗à bß╗ï sao ch├⌐p tr├íi ph├⌐p.',
          'Viß╗çc truyß╗ün ─æß║ít th├┤ng b├ío tß╗½ trung t├óm ─æß║┐n phß╗Ñ huynh th╞░ß╗¥ng xuy├¬n bß╗ï trß╗à v├á thß║Ñt lß║íc.',
          'Kh├┤ng c├│ dashboard thß╗æng k├¬ hiß╗çu quß║ú kinh doanh cß╗ºa tß╗½ng c╞í sß╗ƒ.'
        ]
      },
      {
        type: 'heading',
        content: 'Giß║úi Ph├íp Hß╗ç Sinh Th├íi Th├┤ng Minh'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Ecosystem NZEDU ΓÇö Kß║┐t Nß╗æi V├┤ Hß║ín',
          subtitle: 'Nß╗ün tß║úng quß║ún trß╗ï tß║¡p trung cho hß╗ç thß╗æng gi├ío dß╗Ñc',
          status: 'Development',
          groups: [
            {
              title: 'Multi-Branch CRM',
              items: ['Quß║ún l├╜ Lead theo chi nh├ính', 'B├ío c├ío doanh sß╗æ tß║¡p trung', 'Tß╗▒ ─æß╗Öng ph├ón bß╗ò Lead']
            },
            {
              title: 'Academic Core',
              items: ['Lß╗Ö tr├¼nh hß╗ìc c├í nh├ón h├│a', 'Ng├ón h├áng ─æß╗ü thi th├┤ng minh', 'Hß╗ç thß╗æng LMS nß╗Öi bß╗Ö']
            },
            {
              title: 'Finance Engine',
              items: ['Thu ph├¡ ─æa h├¼nh thß╗⌐c', 'Tß╗▒ ─æß╗Öng h├│a b├ío c├ío thuß║┐', '─Éß╗æi so├ít d├▓ng tiß╗ün tß╗▒ ─æß╗Öng']
            },
            {
              title: 'Security & Rights',
              items: ['Chß╗æng tß║úi video tr├íi ph├⌐p', 'Ph├ón quyß╗ün truy cß║¡p t├ái liß╗çu', 'Log lß╗ïch sß╗¡ truy cß║¡p']
            },
            {
              title: 'Smart Communication',
              items: ['Push notification tß╗▒ ─æß╗Öng', 'K├¬nh chat nß╗Öi bß╗Ö PH-GV', 'Th├┤ng b├ío nghß╗ë hß╗ìc online']
            },
            {
              title: 'Business Intelligence',
              items: ['Dashboard n─âng lß╗▒c hß╗ìc vi├¬n', 'Biß╗âu ─æß╗ô t─âng tr╞░ß╗ƒng doanh thu', 'Thß╗æng k├¬ hiß╗çu quß║ú GV']
            }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Quy Tr├¼nh Triß╗ân Khai Tß║íi NZEDU'
      },
      {
        type: 'process-steps',
        processData: {
          steps: [
            {
              id: 1,
              title: 'Ph├ón t├¡ch ─æa chi nh├ính',
              description: 'Khß║úo s├ít ─æß║╖c th├╣ vß║¡n h├ánh cß╗ºa tß╗½ng c╞í sß╗ƒ ─æß╗â x├óy dß╗▒ng cß║Ñu tr├║c database ph├╣ hß╗úp.',
              activities: [
                'Gß║╖p gß╗í ban quß║ún trß╗ï NZEDU',
                'X├íc ─æß╗ïnh luß╗ông dß╗» liß╗çu li├¬n chi nh├ính'
              ]
            },
            {
              id: 2,
              title: 'X├óy dß╗▒ng Academic Core',
              description: 'Sß╗æ h├│a to├án bß╗Ö hß╗ìc liß╗çu v├á quy tr├¼nh ─æ├áo tß║ío ─æß║╖c th├╣ cß╗ºa trung t├óm.',
              activities: [
                'Thiß║┐t kß║┐ LMS t├╣y biß║┐n',
                'T├¡ch hß╗úp bß║úo mß║¡t nß╗Öi dung'
              ]
            },
            {
              id: 3,
              title: 'Tß╗▒ ─æß╗Öng h├│a T├ái ch├¡nh',
              description: 'Triß╗ân khai Engine t├¡nh to├ín hß╗ìc ph├¡ v├á t├¡ch hß╗úp cß╗òng thanh to├ín.',
              activities: [
                'Kß║┐t nß╗æi API Ng├ón h├áng',
                'Thiß║┐t lß║¡p b├ío c├ío t├ái ch├¡nh Real-time'
              ]
            },
            {
              id: 4,
              title: 'Kiß╗âm thß╗¡ & B├án giao',
              description: 'Chß║íy thß╗¡ nghiß╗çm tr├¬n quy m├┤ 1 chi nh├ính tr╞░ß╗¢c khi Roll-out to├án hß╗ç thß╗æng.',
              activities: [
                '─É├áo tß║ío ─æß╗Öi ng┼⌐ Admin & GV',
                'Ph├ít h├ánh Portal Phß╗Ñ huynh'
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: '3',
    title: 'Your Idea, Our Process ΓÇö From Concept to Launch with Tanoshi Vietnam',
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
        content: 'Let\'s walk through our process with an example: Imagine you come to us with the idea of an online platform where businesses can manage their orders, track deliveries in real time, and automatically send invoices to customers ΓÇö all in one place.'
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
        content: 'From there, we translate everything into wireframes and interactive prototypes ΓÇö so you can see and feel the product before a single line of code is written. Every screen is reviewed and signed off together with you, ensuring the design fits your brand and your users before we move forward.'
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
        content: 'Once the design is approved, our engineering team moves quickly to bring it to life. For your order management platform, we design the system architecture, build the frontend interface your team will use every day, and develop the backend that handles all the logic ΓÇö orders, statuses, notifications, user roles.'
      },
      {
        type: 'paragraph',
        content: 'Every feature goes through code review and testing before it reaches you. We write clean, well-structured code so that when your business grows and needs new features, adding them is straightforward ΓÇö not a headache.'
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
        content: 'We aim for 99.9% uptime ΓÇö because your business doesn\'t stop on weekends, and neither do we.'
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
        content: 'We also connect your new platform to the tools you already use ΓÇö CRM systems, accounting software, communication tools ΓÇö so everything works together seamlessly.'
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
        content: 'From there, we work with you continuously ΓÇö improving, refining, and adding features as your business evolves. You\'re not left on your own after launch. We grow with you.'
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
  }
];
