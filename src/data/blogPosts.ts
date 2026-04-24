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
    excerpt: 'Khám phá hành trình số hóa và tối ưu vận hành cho 7 trung tâm giáo dục tiêu biểu. Từ quản lý thủ công rời rạc đến hệ thống LMS/Web App chuyên nghiệp tích hợp AI Agent.',
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
      'Quỳnh BOKI Learn',
      'JLTC Manager',
      'Echo English Lab',
      'NZEDU'
    ],
    metaDescription: 'Tư vấn giải pháp EdTech toàn diện cho chủ trung tâm giáo dục. Chuyển đổi từ quản lý thủ công sang hệ thống Web App/LMS hiện đại với AI chấm điểm tự động.',
    content: [
      {
        type: 'paragraph',
        content: 'Bạn đang đau đầu vì quản lý hàng trăm học viên qua Excel? Bạn mệt mỏi vì lịch dạy chồng chéo và thu học phí sai sót? Tại Tanoshi Vietnam, chúng tôi hiểu rằng "nỗi đau" lớn nhất của các chủ trung tâm không phải là thiếu học viên, mà là sự kiệt sức vì bộ máy vận hành thủ công cồng kềnh.'
      },
      {
        type: 'heading',
        content: 'Nỗi Đau Chung Của 100% Trung Tâm Vận Hành Thủ Công'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Quản lý học viên bằng Excel rời rạc, dễ mất dữ liệu và khó tra cứu lịch sử.',
          'Xếp lịch dạy và điểm danh thủ công dẫn đến sai sót, nhầm lẫn phòng học.',
          'Thu học phí không rõ ràng, khó đối soát dòng tiền và lịch sử thanh toán.',
          'Thiếu kênh báo cáo tiến độ học tập chuyên nghiệp cho phụ huynh.',
          'Tài liệu bài giảng và đề thi phân tán trên Drive, USB, khó kiểm soát bản quyền.',
          'CRM yếu kém khiến việc theo dõi khách hàng tiềm năng bị đứt quãng.'
        ]
      },
      {
        type: 'heading',
        content: 'Chứng minh qua con số'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '8+',
            label: 'Dự án LMS thực chiến đã hoàn thành',
            icon: 'Layout'
          },
          {
            value: '4+',
            label: 'Lĩnh vực: Nhật, Anh, Kế toán, Văn-Toán',
            icon: 'BookOpen'
          },
          {
            value: '60+',
            label: 'Tính năng chuyên sâu đã triển khai',
            icon: 'Zap'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Portfolio: 8 Case Study "Xương Máu" Từ Tanoshi Vietnam'
      },
      {
        type: 'paragraph',
        content: 'Chúng tôi không chỉ viết code, chúng tôi xây dựng giải pháp dựa trên quy trình thực tế của từng khách hàng. Dưới đây là 8 minh chứng cho năng lực thực thi của chúng tôi:'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '1. Quỳnh BOKI Learn — LMS kế toán Nhật Bản',
          subtitle: 'Nền tảng bán khoá học video + thi online cho chứng chỉ Nissho Boki',
          status: 'Prototype',
          groups: [
            {
              title: 'Học viên',
              items: ['Xem video bài giảng', 'Làm bài thi online', 'Thanh toán QR code']
            },
            {
              title: 'Admin (giáo viên)',
              items: ['Quản lý khoá học', 'Tạo đề thi (5 dạng)', 'Xem đơn hàng']
            },
            {
              title: 'Nội dung',
              items: ['8+ khoá: Boki, thuế', 'Ebook, Zoom live', 'Blog, cộng đồng']
            },
            {
              title: 'Hệ thống thi tự chấm',
              items: ['Bút toán, sổ cái', 'Trắc nghiệm, tự luận']
            },
            {
              title: 'Thanh toán & đăng ký',
              items: ['QR Vietcombank', 'Xác nhận tự động']
            },
            {
              title: 'Tính năng đặc biệt',
              highlight: true,
              items: ['5 loại câu hỏi kế toán chuyên biệt: Journal entry, Posting, P&L, Balance Sheet, Trắc nghiệm, Tự luận']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '2. JLTC Manager — quản lý trung tâm tiếng Nhật',
          subtitle: '3 role: Admin, Giáo viên, Học viên | CRM lead + thi JLPT mô phỏng',
          status: 'Go-live',
          groups: [
            {
              title: 'Admin',
              items: ['Dashboard tổng quan', 'CRM quản lý lead', 'Điểm danh tổng hợp', 'Lịch học + Gantt task']
            },
            {
              title: 'Giáo viên',
              items: ['Quản lý lớp học', 'Tạo đề JLPT', 'Đánh giá học viên', 'Task board cá nhân']
            },
            {
              title: 'Học viên',
              items: ['Thi JLPT mô phỏng', 'Xem kết quả chi tiết', 'Lịch sử làm bài', 'Đặt mục tiêu học']
            },
            {
              title: 'CRM tuyển sinh',
              items: ['Pipeline: Mới -> Tư vấn -> Đặt cọc -> Nhập học']
            },
            {
              title: 'Thi JLPT mô phỏng',
              items: ['Từ vựng, ngữ pháp, đọc hiểu, nghe']
            },
            {
              title: 'Báo cáo & thống kê',
              items: ['Phỏng vấn, tuyển sinh, tỷ lệ pass']
            },
            {
              title: 'Đặc biệt',
              highlight: true,
              items: ['6 loại lead: Du học, thực tập, kỹ sư, tokutei, tiếng Nhật, XKLĐ']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '3. Kiều Liên (Menglish) — trung tâm tiếng Anh trẻ em',
          subtitle: 'Hệ sinh thái đầy đủ nhất: CRM + tài chính + kho + phát âm + phụ huynh',
          status: 'Development',
          groups: [
            {
              title: 'CRM',
              items: ['Lead pipeline', 'Tư vấn tuyển sinh']
            },
            {
              title: 'Lớp học',
              items: ['Lịch, giáo viên', 'Điểm danh']
            },
            {
              title: 'Tài chính',
              items: ['Thu chi, học phí', 'Nợ, quá hạn']
            },
            {
              title: 'Kho & sách',
              items: ['Nhập/xuất kho', 'Cảnh báo hết']
            },
            {
              title: 'Quản lý phát âm',
              items: ['Ra đề -> Nộp audio -> chấm điểm']
            },
            {
              title: 'Portal phụ huynh',
              items: ['Tiến độ, học phí, nhắn tin']
            },
            {
              title: 'Ticket & task',
              items: ['Xử lý yêu cầu']
            },
            {
              title: 'Đặc biệt',
              highlight: true,
              items: ['Phân quyền chi tiết theo từng chức năng (5 role: Admin, GV, kế toán, PH, HV)']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '4. Nihongo Chiyou Lab — nền tảng tự học tiếng Nhật',
          subtitle: 'Học liệu khổng lồ: 50 bài Minna + Kanji + JLPT N5-N4 + ngữ pháp tổng hợp',
          status: 'Development',
          groups: [
            {
              title: 'Minna no Nihongo',
              items: ['50 bài, 12 bài test', 'Từ vựng + ngữ pháp']
            },
            {
              title: 'Kanji + bộ thủ',
              items: ['398K+ data Kanji', '168K radical data']
            },
            {
              title: 'Thi JLPT N5-N4',
              items: ['Đề thật mô phỏng', 'Chấm tự động']
            },
            {
              title: 'Ngữ pháp',
              items: ['Trợ từ, Thể động từ, Phó từ, Số đếm + thời gian']
            },
            {
              title: 'Tính năng',
              items: ['Furigana tự động', 'KanjiHover tooltip', 'Xuất PDF bài học']
            },
            {
              title: 'Đặc biệt',
              highlight: true,
              items: ['Học liệu khổng lồ được tối ưu hóa tải nhanh, không phụ thuộc máy chủ']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '5. Tấn Thành — trung tâm luyện thi Văn-Toán',
          subtitle: '3 portal riêng biệt: Admin, Giáo viên, Phụ huynh | Đánh giá 6 tiêu chí',
          status: 'Prototype',
          groups: [
            {
              title: 'Admin portal',
              items: ['GV chính + trợ giảng', '12 lớp, 5 loại lớp', 'Thu học phí + log', 'Thư viện tài liệu']
            },
            {
              title: 'Giáo viên portal',
              items: ['Quản lý buổi học', 'Đánh giá 6 tiêu chí', 'Điểm danh + lịch', 'Cộng đồng chia sẻ']
            },
            {
              title: 'Phụ huynh portal',
              items: ['Radar chart năng lực', 'Xin nghỉ phép online', 'Thanh toán QR code', 'Nhắn tin trung tâm']
            },
            {
              title: 'Đánh giá 6 tiêu chí',
              items: ['Tiếp thu, tập trung, thi, tự học, chăm chỉ, tương tác']
            },
            {
              title: '5 loại lớp',
              items: ['Chuyên, đại trà, luyện thi, kèm, online']
            },
            {
              title: 'Đặc biệt',
              highlight: true,
              items: ['Landing page công khai + hệ thống đánh giá Radar chart (Phụ huynh xem trực quan năng lực con)']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '6. Thảo Lê Japan — bán khoá học tiếng Nhật online',
          subtitle: 'Hệ thống học tập và bán hàng tích hợp | Bank simulator xác nhận thanh toán',
          status: 'Prototype',
          groups: [
            {
              title: 'Trang công khai',
              items: ['Landing page SEO', 'Blog, cộng đồng', 'Shop ebook/khoá học']
            },
            {
              title: 'Admin dashboard',
              items: ['Quản lý khoá học', 'Quản lý bài tập/quiz', 'Blog + ebook + đơn hàng']
            },
            {
              title: 'Học viên',
              items: ['Xem video bài giảng', 'Làm bài tập/quiz', 'Cộng đồng trao đổi']
            },
            {
              title: 'Bank simulator',
              items: ['Mô phỏng xác nhận chuyển khoản tự động']
            },
            {
              title: 'Đặc biệt',
              highlight: true,
              items: ['Theo dõi tiến độ đăng ký, quản lý đơn hàng, nộp bài tập - tất cả đều theo thời gian thực']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '7. Echo English Lab — AI English platform',
          subtitle: 'Trí tuệ nhân tạo chấm phát âm tự động + Anti-cheat chống gian lận',
          status: 'Go-live',
          groups: [
            {
              title: 'Học viên',
              items: ['Ghi âm phát âm', 'Nhận feedback AI', 'Xem lịch sử + điểm']
            },
            {
              title: 'AI Agent engine',
              items: ['Nhận diện giọng nói', 'Phân tích âm tiết', 'Chấm điểm chuẩn xác']
            },
            {
              title: 'Anti-cheat',
              items: ['Phát hiện gian lận', 'Xác minh giọng nói', 'Đảm bảo công bằng']
            },
            {
              title: 'Phân tích chi tiết',
              items: ['Từng âm tiết: đúng/sai/gần đúng + gợi ý sửa']
            },
            {
              title: 'Dashboard giáo viên',
              items: ['Thống kê lỗi phổ biến + tiến bộ học viên']
            },
            {
              title: 'Đặc biệt',
              highlight: true,
              items: ['AI thay thế giáo viên trong khâu chấm phát âm (Phản hồi tức thì, chi tiết từng âm tiết)']
            }
          ]
        }
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: '8. NZEDU — hệ thống quản lý giáo dục thông minh',
          subtitle: 'Hệ sinh thái đầy đủ nhất: CRM + tài chính + kho + phát âm + phụ huynh',
          status: 'Development',
          groups: [
            {
              title: 'CRM',
              items: ['Lead pipeline', 'Tư vấn tuyển sinh']
            },
            {
              title: 'Lớp học',
              items: ['Lịch, giáo viên', 'Điểm danh']
            },
            {
              title: 'Tài chính',
              items: ['Thu chi, học phí', 'Nợ, quá hạn']
            },
            {
              title: 'Kho & sách',
              items: ['Nhập/xuất kho', 'Cảnh báo hết']
            },
            {
              title: 'Quản lý phát âm',
              items: ['Ra đề -> Nộp audio -> chấm điểm']
            },
            {
              title: 'Portal phụ huynh',
              items: ['Tiến độ, học phí, nhắn tin']
            },
            {
              title: 'Ticket & task',
              items: ['Xử lý yêu cầu']
            },
            {
              title: 'Đặc biệt',
              highlight: true,
              items: ['Phân quyền chi tiết theo từng chức năng (5 role: Admin, GV, kế toán, PH, HV)']
            }
          ]
        }
      },
      {
        type: 'chart',
        chartData: {
          title: 'Hiệu quả vận hành sau khi triển khai LMS (Tăng trưởng %)',
          data: [
            { name: 'Năng suất quản lý', value: 85 },
            { name: 'Độ chính xác tài chính', value: 98 },
            { name: 'Sự hài lòng của PH', value: 92 },
            { name: 'Tiết kiệm thời gian', value: 70 },
            { name: 'Tương tác học viên', value: 65 }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Sự Lột Xác: Thủ Công vs. Hệ Thống Toàn Diện'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Tính năng', 'Quản lý bằng Excel/Zalo', 'Hệ thống Web App/LMS Tanoshi'],
          icons: ['Users', 'ClipboardCheck', 'Bell', 'ShieldAlert', 'BarChart3'],
          rows: [
            ['Dữ liệu học viên', 'Phân tán, dễ sai sót', 'Tập trung, đồng bộ 100%'],
            ['Chấm điểm & Đánh giá', 'Thủ công, mất nhiều giờ', 'AI Agent chấm tự động theo giây'],
            ['Thông báo phụ huynh', 'Nhắn tin Zalo thủ công', 'Portal riêng & Email tự động'],
            ['Kiểm tra gian lận', 'Dựa vào cảm tính giáo viên', 'Hệ thống Anti-cheat thông minh'],
            ['Báo cáo tài chính', 'Mất cả ngày đối soát', 'Xuất báo cáo trong 1 click']
          ]
        }
      },
      {
        type: 'heading',
        content: 'Tanoshi Vietnam - May Đo Giải Pháp Theo Yêu Cầu'
      },
      {
        type: 'paragraph',
        content: 'Chúng tôi hiểu rằng mỗi trung tâm là một bản thể duy nhất với quy trình riêng biệt. Tanoshi Vietnam không bán "template" có sẵn. Chúng tôi tư vấn và xây dựng hệ thống đúng theo cách bạn vận hành, giúp bạn giải phóng sức lao động để tập trung vào giá trị cốt lõi: GIẢNG DẠY.'
      },
      {
        type: 'quote',
        content: 'Đừng để bộ máy quản lý trì trệ kìm hãm sự tăng trưởng của bạn. Hãy để công nghệ trở thành đòn bẩy mạnh mẽ nhất.'
      },
      {
        type: 'paragraph',
        content: 'Liên hệ tư vấn miễn phí ngay hôm nay để nhận blueprint giải pháp cho trung tâm của bạn!'
      },
      {
        type: 'heading',
        content: 'Quy trình làm việc của Tanoshi'
      },
      {
        type: 'process-steps',
        processData: {
          steps: [
            {
              id: 1,
              title: 'Trao đổi nắm scope',
              description: 'Chúng tôi sẽ lắng nghe và tìm hiểu sâu về vấn đề của bạn để xác định phạm vi dự án.',
              activities: [
                'Gặp gỡ, trao đổi và khảo sát',
                'Đánh giá hiện trạng bộ máy vận hành',
                'Thống nhất yêu cầu và phạm vi công việc'
              ]
            },
            {
              id: 2,
              title: 'Xây dựng prototype hoàn chỉnh',
              description: 'Sau khi hiểu rõ yêu cầu, các chuyên gia thiết kế sẽ tạo nguyên mẫu trực quan để khách hàng dễ hình dung.',
              activities: [
                'Thiết kế giao diện UI/UX',
                'Xây dựng luồng người dùng (User Flow)',
                'Review và chốt nguyên mẫu (Prototype)'
              ]
            },
            {
              id: 3,
              title: 'Phát triển backend',
              description: 'Đội ngũ kỹ sư tiến hành lập trình và xây dựng các tính năng nền tảng vững chắc.',
              activities: [
                'Thiết kế kiến trúc cơ sở dữ liệu',
                'Phát triển API và logic cốt lõi',
                'Tích hợp công nghệ AI Agent tự động'
              ]
            },
            {
              id: 4,
              title: 'Testing',
              description: 'Kiểm thử toàn diện để đảm bảo hệ thống hoạt động ổn định, mượt mà và không có lỗi.',
              activities: [
                'Kiểm thử chức năng nội bộ',
                'Đánh giá hiệu suất và độ bảo mật',
                'Kiểm thử nghiệm thu (UAT) với khách hàng'
              ]
            },
            {
              id: 5,
              title: 'Release',
              description: 'Bàn giao sản phẩm hoàn thiện, đưa vào hoạt động thực tế và đồng hành cùng khách hàng.',
              activities: [
                'Triển khai hệ thống lên server (Go-live)',
                'Đào tạo và hướng dẫn nhân sự sử dụng',
                'Bảo hành, bảo trì và hỗ trợ vận hành'
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: '8',
    title: 'Số Hóa Ngành Vận Chuyển Việt - Nhật: Hành Trình Chuyển Đổi Số Thành Công Của IKIGAI Ship Track',
    slug: 'ikigai-ship-track-digital-transformation',
    excerpt: 'Khám phá cách Tanoshi Vietnam cùng IKIGAI giải quyết bài toán vận hành logistics phức tạp. Từ quản lý thủ công rời rạc đến hệ thống Ship Track hiện đại tích hợp API các nhà vận chuyển lớn.',
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
    metaDescription: 'Case study về việc xây dựng hệ thống quản lý vận chuyển chuyên sâu cho IKIGAI. Tự động hóa tính phí, tích hợp API nhà vận chuyển và tối ưu quy trình vận hành.',
    content: [
      {
        type: 'paragraph',
        content: 'Trong bối cảnh thương mại điện tử Việt - Nhật bùng nổ, việc quản lý hàng ngàn kiện hàng mỗi ngày bằng các phương thức thủ công đang trở thành rào cản lớn nhất cho sự tăng trưởng. IKIGAI - một đơn vị vận chuyển uy tín - đã cùng Tanoshi Vietnam bắt tay xây dựng hệ thống "Ikigai Ship Track" nhằm số hóa toàn diện quy trình vận hành, mang lại sự minh bạch và tốc độ vượt trội.'
      },
      {
        type: 'heading',
        content: 'Nỗi Đau "Cố Hữu" Của Ngành Vận Chuyển Quốc Tế'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Thông tin khách hàng (Lead) phân mảnh từ nhiều kênh: Facebook, Zalo, TikTok, gây khó khăn cho việc chăm sóc và chốt đơn.',
          'Sai sót trong tính phí vận chuyển do tính toán thủ công giữa cân nặng thực tế và cân nặng quy đổi (L*W*H/6000).',
          'Mất dấu hàng hóa: Không có cái nhìn tổng quan về trạng thái kiện hàng khi hàng rời kho hoặc đang trên máy bay.',
          'Quá tải nhập liệu: Nhân viên phải copy-paste dữ liệu lên các trang web của hãng vận chuyển (EMS, DHL, Sagawa) một cách thủ công.',
          'Khách hàng liên tục hỏi về trạng thái đơn hàng do thiếu cổng tra cứu tự động.',
          'Khó khăn đối soát công nợ: Các khoản phí ship, phụ phí và COD phân tán khiến việc tổng hợp lợi nhuận thực tế trở nên chậm chạp và dễ nhầm lẫn.'
        ]
      },
      {
        type: 'heading',
        content: 'Hiệu Quả Sau Chuyển Đổi Số'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '100%',
            label: 'Đơn hàng được tính phí tự động, chính xác tuyệt đối',
            icon: 'Calculator'
          },
          {
            value: '70%',
            label: 'Giảm thời gian xử lý thủ công nhờ tích hợp API',
            icon: 'Zap'
          },
          {
            value: '24/7',
            label: 'Khách hàng tự tra cứu trạng thái đơn hàng',
            icon: 'Search'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Giải Pháp Đột Phá: Hệ Thống Ikigai Ship Track'
      },
      {
        type: 'paragraph',
        content: 'Tanoshi Vietnam không chỉ xây dựng một phần mềm, chúng tôi kiến tạo một bộ máy vận hành thông minh dựa trên nhu cầu thực tế của IKIGAI.'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Ikigai Ship Track — Giải pháp Logistics Toàn Diện',
          subtitle: 'Quy trình khép kín từ Lead đến Delivery',
          status: 'Go-live',
          groups: [
            {
              title: 'Quản lý Lead (Round 1)',
              items: ['Tập trung Lead từ FB/Zalo/TikTok', 'Theo dõi trạng thái tư vấn', 'Ghi chú nhu cầu khách hàng']
            },
            {
              title: 'Vận hành Kho (Round 2)',
              items: ['Quản lý kiện hàng theo chuyến bay', 'Cập nhật trạng thái nội bộ', 'Xử lý sự cố vận chuyển']
            },
            {
              title: 'Engine Tính Phí Tự Động',
              items: ['Quy đổi trọng lượng thể tích', 'Áp giá theo bảng giá bậc thang', 'Tự động cộng phụ phí/phí đóng thùng']
            },
            {
              title: 'Kết nối API Carrier',
              items: ['Đẩy đơn lên EMS, DHL, Sagawa', 'Lấy mã tracking tự động', 'Đồng bộ trạng thái từ hãng']
            },
            {
              title: 'Portal Tra Cứu Khách Hàng',
              items: ['Tra cứu theo mã vận đơn', 'Xem lịch sử hành trình chi tiết', 'Dữ liệu chuẩn xác 100% từ API']
            },
            {
              title: 'Tính năng đặc biệt',
              highlight: true,
              items: ['Hệ thống Kanban 2 vòng chuyên sâu giúp tách biệt rõ ràng khâu Kinh doanh và khâu Vận hành, tối ưu hóa sự phối hợp giữa các phòng ban.']
            }
          ]
        }
      },
      {
        type: 'chart',
        chartData: {
          title: 'Cải Thiện Năng Suất Vận Hành (So với trước khi có hệ thống)',
          data: [
            { name: 'Tốc độ xử lý đơn', value: 90 },
            { name: 'Độ chính xác tài chính', value: 99 },
            { name: 'Khả năng tra cứu hàng', value: 100 },
            { name: 'Tiết kiệm nhân sự', value: 60 },
            { name: 'Mức độ hài lòng khách', value: 95 }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Bảng So Sánh Hiệu Quả: Trước vs Sau'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Hạng mục', 'Vận hành thủ công (Zalo/Excel)', 'Hệ thống Ikigai Ship Track'],
          icons: ['Users', 'Calculator', 'Share2', 'Globe', 'Clock'],
          rows: [
            ['Quản lý Lead', 'Rời rạc, dễ bỏ sót khách hàng', 'Tập trung trên Kanban Board chuyên nghiệp'],
            ['Tính phí vận chuyển', 'Dễ sai sót, mất nhiều thời gian', 'Tự động 100% theo Engine chuẩn xác'],
            ['Kết nối nhà vận chuyển', 'Nhập liệu thủ công từng đơn', 'Đồng bộ API tự động trong tích tắc'],
            ['Tra cứu đơn hàng', 'Khách phải nhắn tin hỏi liên tục', 'Khách tự tra cứu 24/7 trên Website'],
            ['Dữ liệu & Báo cáo', 'Khó tổng hợp, không theo thời gian thực', 'Báo cáo Dashboard cập nhật tức thì']
          ]
        }
      }
    ]
  },
  {
    id: '6',
    title: 'JLTC Manager: Số Hóa Quy Trình Quản Lý Trung Tâm Tiếng Nhật IKIGAI',
    slug: 'ikigai-jltc-manager-digital-transformation',
    excerpt: 'Khám phá cách IKIGAI tối ưu vận hành từ khâu tuyển sinh Lead đến quản lý thi JLPT mô phỏng và hồ sơ du học thông qua hệ thống quản trị chuyên sâu JLTC Manager.',
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
    metaDescription: 'Case study về chuyển đổi số toàn diện cho trung tâm tiếng Nhật IKIGAI. Tối ưu quản lý Lead, thi JLPT và hồ sơ du học Nhật Bản.',
    content: [
      {
        type: 'paragraph',
        content: 'IKIGAI là một trong những trung tâm tiếng Nhật hàng đầu trong việc đào tạo du học sinh và kỹ sư đi Nhật. Để duy trì vị thế và nâng cao chất lượng đào tạo, IKIGAI đã phối hợp cùng Tanoshi Vietnam phát triển hệ thống JLTC Manager — một giải pháp quản trị chuyên sâu giải quyết triệt để các bài toán vận hành đặc thù của ngành giáo dục tiếng Nhật.'
      },
      {
        type: 'heading',
        content: 'Nỗi Đau Trong Vận Hành Trung Tâm Tiếng Nhật'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Quản lý Lead tuyển sinh đa kênh (Du học, Kỹ sư, Tokutei) bị phân mảnh và khó theo dõi tiến độ tư vấn.',
          'Việc tổ chức thi thử JLPT định kỳ (ra đề, chấm điểm, xếp hạng) diễn ra hoàn toàn thủ công và chậm chạp.',
          'Dữ liệu điểm danh và chuyên cần học viên giữa các cơ sở không được đồng bộ hóa theo thời gian thực.',
          'Sắp xếp lịch dạy và quản lý phòng học thường xuyên xảy ra tình trạng chồng chéo hoặc trống lớp lãng phí.',
          'Xử lý khối lượng lớn hồ sơ phỏng vấn và báo cáo thống kê cho các nghiệp đoàn Nhật Bản phức tạp, dễ sai sót.',
          'Việc giao việc và theo dõi tiến độ (Task) giữa bộ phận Admin và Giáo viên thiếu công cụ tập trung.'
        ]
      },
      {
        type: 'heading',
        content: 'Giải Pháp Đột Phá: Hệ Thống JLTC Manager'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '500+',
            label: 'Học viên được quản lý tập trung',
            icon: 'Users'
          },
          {
            value: '1000+',
            label: 'Đề thi JLPT được khởi tạo tự động',
            icon: 'ClipboardCheck'
          },
          {
            value: '60%',
            label: 'Tăng tốc quy trình xử lý hồ sơ du học',
            icon: 'Zap'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Các Phân Hệ Cốt Lõi'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'JLTC Manager — Trung Tâm Điều Hành Số',
          subtitle: 'Giải pháp quản trị 360 độ cho IKIGAI',
          status: 'Go-live',
          groups: [
            {
              title: 'CRM Lead Management',
              items: ['Phân loại: Du học, Kỹ sư, Tokutei', 'Theo dõi Pipeline tư vấn', 'Nhắc lịch phỏng vấn']
            },
            {
              title: 'Hệ thống thi JLPT',
              items: ['Ngân hàng câu hỏi thông minh', 'Chấm điểm & xếp hạng tự động', 'Phân tích điểm mạnh/yếu']
            },
            {
              title: 'Lịch học & Điểm danh',
              items: ['Gantt Chart lịch dạy', 'Điểm danh QR code', 'Thông báo nghỉ học tự động']
            },
            {
              title: 'Báo cáo & Hồ sơ',
              items: ['Xuất hồ sơ phỏng vấn chuẩn', 'Thống kê tỷ lệ đỗ visa', 'Báo cáo doanh thu chi tiết']
            },
            {
              title: 'Task Management',
              items: ['Giao việc theo bộ phận', 'Theo dõi deadline giáo viên', 'Hệ thống Ticket nội bộ']
            },
            {
              title: 'Cổng thông tin',
              items: ['Portal riêng cho GV/HV/PH', 'Tra cứu kết quả học tập', 'Kho học liệu nội bộ']
            }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Hiệu Quả Chuyển Đổi Số'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Nghiệp vụ', 'Quy trình cũ (Excel/Giấy)', 'Với JLTC Manager'],
          icons: ['ClipboardCheck', 'Users', 'Calendar', 'BarChart3'],
          rows: [
            ['Tổ chức thi JLPT', 'Mất 3-5 ngày chuẩn bị & chấm bài', 'Tự động hóa 100% trong 1 click'],
            ['Quản lý Lead', 'Rơi rạc, tỷ lệ chuyển đổi thấp', 'Tập trung, tăng 30% tỷ lệ nhập học'],
            ['Sắp xếp lịch học', 'Dễ nhầm lẫn, mất thời gian', 'Tối ưu hóa 99% công suất phòng'],
            ['Hồ sơ du học', 'Thủ công, áp lực mùa cao điểm', 'Chuẩn hóa quy trình, giảm 60% áp lực']
          ]
        }
      }
    ]
  },
  {
    id: '5',
    title: 'Số Hóa Trung Tâm Tiếng Anh Trẻ Em: Hành Trình Chuyển Đổi Số Của MEnglish (Kiều Liên)',
    slug: 'menglish-digital-transformation-case-study',
    excerpt: 'Khám phá cách MEnglish tối ưu vận hành toàn diện từ CRM, tài chính đến hệ thống chấm điểm phát âm AI, giúp kết nối phụ huynh và nhà trường hiệu quả.',
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
    metaDescription: 'Case study về việc xây dựng hệ sinh thái quản lý toàn diện cho trung tâm tiếng Anh MEnglish. Tối ưu quy trình tuyển sinh, tài chính và đào tạo tích hợp AI.',
    content: [
      {
        type: 'paragraph',
        content: 'Với quy mô ngày càng mở rộng của các trung tâm tiếng Anh trẻ em, việc quản lý thủ công qua Zalo và Excel không còn đáp ứng được nhu cầu tăng trưởng. MEnglish đã cùng Tanoshi Vietnam xây dựng một hệ thống quản trị chuyên sâu, giúp tự động hóa từ khâu tìm kiếm khách hàng đến việc theo dõi tiến độ học tập của từng học viên.'
      },
      {
        type: 'heading',
        content: 'Thách Thức Trong Quản Lý Trung Tâm Tiếng Anh Trẻ Em'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Quản lý Lead tuyển sinh rời rạc, không theo dõi được tỷ lệ chuyển đổi từ tư vấn đến nhập học.',
          'Sai sót trong quản lý học phí và các khoản thu chi do tính toán thủ công.',
          'Khó khăn trong việc kiểm soát kho sách và giáo trình cho hàng trăm học viên.',
          'Chấm điểm phát âm thủ công mất nhiều thời gian và không đưa ra được phản hồi tức thì.',
          'Phụ huynh thiếu kênh thông tin chính thống để theo dõi lịch học và nhận xét của giáo viên.',
          'Dữ liệu học viên không được bảo mật và phân quyền rõ ràng giữa các bộ phận.'
        ]
      },
      {
        type: 'heading',
        content: 'Kết Quả Đột Phá Sau Triển Khai'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '95%',
            label: 'Phụ huynh hài lòng với Portal theo dõi tiến độ',
            icon: 'Users'
          },
          {
            value: '80%',
            label: 'Giảm thời gian quản lý tài chính và đối soát',
            icon: 'Zap'
          },
          {
            value: '24/7',
            label: 'AI chấm điểm phát âm phản hồi tức thì',
            icon: 'Zap'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Hệ Sinh Thái Quản Trị MEnglish'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Hệ thống MEnglish — Quản lý 360 Độ',
          subtitle: 'Giải pháp toàn diện cho trung tâm ngoại ngữ hiện đại',
          status: 'Go-live',
          groups: [
            {
              title: 'CRM & Tuyển sinh',
              items: ['Pipeline quản lý Lead chuyên sâu', 'Theo dõi nguồn khách hàng', 'Nhắc lịch tư vấn tự động']
            },
            {
              title: 'Quản lý Đào tạo',
              items: ['Xếp lịch học & phòng học', 'Điểm danh điện tử', 'Hệ thống bài tập online']
            },
            {
              title: 'Tài chính & Kho',
              items: ['Quản lý học phí & nợ', 'Báo cáo thu chi tự động', 'Kiểm kê kho giáo trình']
            },
            {
              title: 'AI English Lab',
              items: ['Chấm phát âm chuẩn quốc tế', 'Gợi ý sửa lỗi âm tiết', 'Thống kê lỗi phổ biến']
            },
            {
              title: 'Portal Phụ huynh',
              items: ['Xem nhận xét sau buổi học', 'Theo dõi chuyên cần', 'Thanh toán học phí online']
            },
            {
              title: 'Tính năng đặc biệt',
              highlight: true,
              items: ['Phân quyền chi tiết 5 role (Admin, GV, Kế toán, PH, HV) giúp quy trình vận hành minh bạch và bảo mật dữ liệu tuyệt đối.']
            }
          ]
        }
      },
      {
        type: 'table',
        tableData: {
          headers: ['Quy trình', 'Trước khi số hóa', 'Với hệ thống MEnglish'],
          icons: ['ClipboardCheck', 'DollarSign', 'Bell', 'Database'],
          rows: [
            ['Quản lý tuyển sinh', 'Ghi chép sổ tay, dễ mất thông tin', 'Lead pipeline tự động, không bỏ sót'],
            ['Tài chính học phí', 'Đối soát thủ công, dễ sai sót', 'Tự động báo nợ và gạch nợ QR'],
            ['Tương tác phụ huynh', 'Nhắn tin Zalo thủ công', 'Portal cập nhật thông tin Real-time'],
            ['Lưu trữ dữ liệu', 'Phân tán trên nhiều file Excel', 'Cơ sở dữ liệu tập trung, bảo mật']
          ]
        }
      }
    ]
  },
  {
    id: '4',
    title: 'NZEDU: Hệ Sinh Thái Giáo Dục Thông Minh — Cách Mạng Hóa Quản Lý Trung Tâm Ngoại Ngữ',
    slug: 'nzedu-smart-education-ecosystem',
    excerpt: 'NZEDU đã cùng Tanoshi Vietnam xây dựng hệ sinh thái quản lý giáo dục hiện đại, tích hợp từ tuyển sinh đến đào tạo và tương tác phụ huynh trên một nền tảng duy nhất.',
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
    metaDescription: 'Khám phá cách NZEDU tối ưu bộ máy vận hành thông qua hệ sinh thái giáo dục thông minh. Giải pháp EdTech tùy biến cho quy mô lớn.',
    content: [
      {
        type: 'paragraph',
        content: 'Đối với những đơn vị có quy mô đào tạo lớn và đa dạng như NZEDU, việc sở hữu một "trung tâm điều hành số" là yếu tố sống còn. Dự án NZEDU tập trung vào việc tạo ra một hệ sinh thái khép kín, nơi mọi dữ liệu từ tuyển sinh, học thuật đến tài chính đều được kết nối chặt chẽ.'
      },
      {
        type: 'heading',
        content: 'Bài Toán Vận Hành Tại NZEDU'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'Hệ thống cũ không đáp ứng được việc quản lý đa chi nhánh và đa chương trình đào tạo.',
          'Dòng tiền học phí không được cập nhật Real-time dẫn đến khó khăn trong báo cáo tài chính.',
          'Quy trình nộp bài và chấm bài của giáo viên chưa được hệ thống hóa chuyên nghiệp.',
          'Thiếu tính năng bảo mật nội dung bài giảng, dễ bị sao chép trái phép.',
          'Việc truyền đạt thông báo từ trung tâm đến phụ huynh thường xuyên bị trễ và thất lạc.',
          'Không có dashboard thống kê hiệu quả kinh doanh của từng cơ sở.'
        ]
      },
      {
        type: 'heading',
        content: 'Giải Pháp Hệ Sinh Thái Thông Minh'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Ecosystem NZEDU — Kết Nối Vô Hạn',
          subtitle: 'Nền tảng quản trị tập trung cho hệ thống giáo dục',
          status: 'Development',
          groups: [
            {
              title: 'Multi-Branch CRM',
              items: ['Quản lý Lead theo chi nhánh', 'Báo cáo doanh số tập trung', 'Tự động phân bổ Lead']
            },
            {
              title: 'Academic Core',
              items: ['Lộ trình học cá nhân hóa', 'Ngân hàng đề thi thông minh', 'Hệ thống LMS nội bộ']
            },
            {
              title: 'Finance Engine',
              items: ['Thu phí đa hình thức', 'Tự động hóa báo cáo thuế', 'Đối soát dòng tiền tự động']
            },
            {
              title: 'Security & Rights',
              items: ['Chống tải video trái phép', 'Phân quyền truy cập tài liệu', 'Log lịch sử truy cập']
            },
            {
              title: 'Smart Communication',
              items: ['Push notification tự động', 'Kênh chat nội bộ PH-GV', 'Thông báo nghỉ học online']
            },
            {
              title: 'Business Intelligence',
              items: ['Dashboard năng lực học viên', 'Biểu đồ tăng trưởng doanh thu', 'Thống kê hiệu quả GV']
            }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Quy Trình Triển Khai Tại NZEDU'
      },
      {
        type: 'process-steps',
        processData: {
          steps: [
            {
              id: 1,
              title: 'Phân tích đa chi nhánh',
              description: 'Khảo sát đặc thù vận hành của từng cơ sở để xây dựng cấu trúc database phù hợp.',
              activities: [
                'Gặp gỡ ban quản trị NZEDU',
                'Xác định luồng dữ liệu liên chi nhánh'
              ]
            },
            {
              id: 2,
              title: 'Xây dựng Academic Core',
              description: 'Số hóa toàn bộ học liệu và quy trình đào tạo đặc thù của trung tâm.',
              activities: [
                'Thiết kế LMS tùy biến',
                'Tích hợp bảo mật nội dung'
              ]
            },
            {
              id: 3,
              title: 'Tự động hóa Tài chính',
              description: 'Triển khai Engine tính toán học phí và tích hợp cổng thanh toán.',
              activities: [
                'Kết nối API Ngân hàng',
                'Thiết lập báo cáo tài chính Real-time'
              ]
            },
            {
              id: 4,
              title: 'Kiểm thử & Bàn giao',
              description: 'Chạy thử nghiệm trên quy mô 1 chi nhánh trước khi Roll-out toàn hệ thống.',
              activities: [
                'Đào tạo đội ngũ Admin & GV',
                'Phát hành Portal Phụ huynh'
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: '9',
    title: 'Tanoshi Vietnam: Bệ Phóng Công Nghệ & Marketing Toàn Diện Cho SME & Startup',
    slug: 'tanoshi-sme-startup-all-in-one-solution',
    excerpt: 'Giải pháp "All-in-One" từ Thiết kế Web, Graphic 2D, Marketing đến Hệ thống nội bộ, giúp SME và Startup giải quyết bài toán thiếu vốn và khan hiếm nguồn lực.',
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
    metaDescription: 'Tanoshi Vietnam đồng hành cùng doanh nghiệp SME & Startup giải quyết các bài toán về công nghệ và truyền thông. Cung cấp dịch vụ Thiết kế, Marketing và CRM trọn gói.',
    content: [
      {
        type: 'paragraph',
        content: 'Khởi nghiệp hay điều hành một doanh nghiệp vừa và nhỏ (SME) luôn là một bài toán khó về tối ưu nguồn lực. Việc phải gánh vác cùng lúc nhiều mảng từ hình ảnh thương hiệu, nền tảng công nghệ, đến chiến lược marketing khiến các nhà sáng lập thường xuyên rơi vào tình trạng quá tải. Tanoshi Vietnam ra đời với sứ mệnh trở thành "phòng ban công nghệ & marketing thuê ngoài" toàn diện, sát cánh cùng các Startup trên chặng đường bứt phá.'
      },
      {
        type: 'heading',
        content: 'Nỗi Đau "Cốt Lõi" Của Doanh Nghiệp SME & Startup'
      },
      {
        type: 'split-image-list',
        image: '/lovable-uploads/pain_icon.png',
        items: [
          'ÍT VỐN: Ngân sách eo hẹp, không đủ chi phí để duy trì một đội ngũ In-house toàn diện bao gồm Dev, Designer, Marketer.',
          'NGUỒN LỰC HẠN CHẾ: Nhân sự phải kiêm nhiệm quá nhiều việc dẫn đến chất lượng giảm sút, dễ bị "burnout" (kiệt sức).',
          'DÀN TRẢI: Thuê nhiều Freelancer hoặc Agency nhỏ lẻ làm đứt gãy mạch thông tin, thương hiệu thiếu tính nhất quán.',
          'CHẬM SỐ HÓA: Mù công nghệ, vẫn phải quản lý dữ liệu, khách hàng và nhân sự qua Excel hoặc Zalo vô cùng rủi ro.',
          'MARKETING LÃNG PHÍ: Chạy Ads không có chiến lược, SEO mãi không lên Top, "đốt tiền" mà không mang lại tỷ lệ chuyển đổi (ROI) thực tế.',
          'HÌNH ẢNH YẾU KÉM: Website lỗi thời, ấn phẩm thiết kế (2D) thiếu chuyên nghiệp, làm giảm sức cạnh tranh trước đối thủ.'
        ]
      },
      {
        type: 'heading',
        content: 'Hệ Sinh Thái Dịch Vụ All-in-One Tại Tanoshi'
      },
      {
        type: 'paragraph',
        content: 'Không cần làm việc với 4 đối tác khác nhau. Tanoshi Vietnam cung cấp hệ sinh thái khép kín để doanh nghiệp của bạn có thể "plug and play" ngay lập tức.'
      },
      {
        type: 'feature-grid',
        featureGridData: {
          title: 'Tanoshi Ecosystem',
          subtitle: 'Giải pháp 4 Trụ Cột cho sự phát triển bền vững',
          status: 'Available',
          groups: [
            {
              title: 'Thiết Kế Website',
              items: ['Thiết kế UI/UX chuẩn mực', 'Tốc độ load trang siêu tốc', 'Tương thích mọi thiết bị (Responsive)']
            },
            {
              title: 'Graphic Design 2D',
              items: ['Bộ nhận diện thương hiệu', 'Ấn phẩm truyền thông MKT', 'Thiết kế Bao bì, Profile công ty']
            },
            {
              title: 'Marketing & SEO',
              items: ['Chiến lược chạy Ads chuyển đổi', 'SEO tổng thể Website', 'Content Marketing & Quản trị Fanpage']
            },
            {
              title: 'Hệ Thống Quản Lý',
              items: ['Phát triển CRM tùy chỉnh', 'Hệ thống LMS cho giáo dục', 'Phần mềm ERP, HRM nội bộ']
            }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Sự Chuyển Đổi Khi Đồng Hành Cùng Tanoshi'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '50%',
            label: 'Tiết kiệm chi phí vận hành so với nuôi team In-house',
            icon: 'DollarSign'
          },
          {
            value: '1',
            label: 'Đầu mối liên lạc duy nhất cho toàn bộ dự án',
            icon: 'Users'
          },
          {
            value: '3x',
            label: 'Tăng tốc độ triển khai và Go-to-market',
            icon: 'Zap'
          }
        ]
      },
      {
        type: 'table',
        tableData: {
          headers: ['Hạng Mục', 'Doanh Nghiệp Tự Làm / Thuê Lẻ', 'Giải Pháp Từ Tanoshi Vietnam'],
          icons: ['ClipboardCheck', 'Share2', 'Globe', 'Zap'],
          rows: [
            ['Quản lý chi phí', 'Tốn kém, phí phát sinh khó kiểm soát', 'Trọn gói, tối ưu ngân sách theo giai đoạn'],
            ['Tính đồng bộ', 'Giao diện web một kiểu, Fanpage một kiểu', 'Nhất quán thương hiệu từ A-Z'],
            ['Chất lượng nhân sự', 'Khó tuyển, dễ nghỉ việc, rủi ro cao', 'Đội ngũ chuyên gia (Expert) sẵn sàng phục vụ'],
            ['Bảo trì & Hỗ trợ', 'Freelancer làm xong là mất tích', 'Đồng hành dài hạn, bảo trì hệ thống trọn đời']
          ]
        }
      },
      {
        type: 'heading',
        content: 'Bắt Đầu Chặng Đường Bứt Phá Ngay Hôm Nay'
      },
      {
        type: 'paragraph',
        content: 'Dù bạn là một Startup vừa mới gọi vốn thành công, hay một doanh nghiệp SME đang loay hoay tìm cách chuyển đổi số, Tanoshi Vietnam đều có giải pháp may đo phù hợp nhất. Đừng để rào cản công nghệ và nhân sự kìm hãm sự phát triển của bạn.'
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
  }
];
