
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';

const TABS = [
  { id: 'lms', label: 'LMS' },
  { id: 'automation', label: 'AUTOMATION' },
  { id: 'logistics', label: 'LOGISTICS' },
  { id: 'warehouse', label: 'WAREHOUSE' },
  { id: 'supporter', label: 'SUPPORTER' }
];

const getPostTabs = (slug: string): string[] => {
  switch (slug) {
    case 'steps-english-center-digital-transformation':
    case 'nzedu-smart-education-ecosystem':
      // hiển thị ở cả lms và automation
      return ['lms', 'automation'];
    case 'ikigai-jltc-manager-digital-transformation':
    case 'tanthanh-edu-digital-transformation':
    case 'tieng-nhat-vui-ve-lms-solution':
    case 'menglish-digital-transformation-case-study':
      // dự án ikigai , tanthanh, steps, tiengnhat vui ve, kieu lien vào LMS
      return ['lms'];
    case 'ikigai-ship-track-digital-transformation':
      // dự án ikigai logictics vào LOGITICS
      return ['logistics'];
    case 'chuyen-doi-so-ban-si-laptop-tanoshi':
    case 'sess-warehouse-management-digital-transformation':
    case 'giadungnhanh-odoo-digital-transformation':
      // dự án ECO bán sĩ laptop, sess, gia dụng nhanh vào WAREHOUSE
      return ['warehouse'];
    case 'from-idea-to-launch-development-process':
    case 'boost-your-education-center-growth':
    case 'tanoshi-sme-startup-all-in-one-solution':
    default:
      // còn các dự án còn lại vào SUPPORER
      return ['supporter'];
  }
};

const Blog = () => {
  const [activeTab, setActiveTab] = useState('lms');
  
  // Filter posts dynamically based on selected tab
  const filteredPosts = blogPosts.filter(post => {
    const tabs = getPostTabs(post.slug);
    return tabs.includes(activeTab);
  });
  
  return (
    <PageLayout>
      <SEO 
        title="Tanoshi Vietnam - News and insights about smart textile technology" 
        description="Stay updated with the latest news and insights about sensor-integrated textiles and smart technology from Tanoshi Vietnam Technologies."
        imageUrl={blogPosts[0]?.imageUrl || "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"}
        keywords={['smart textiles', 'textile technology', 'industry news', 'sensor innovation', 'wearable tech', 'smart fabrics']}
        type="website"
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tanoshi Vietnam News &amp; Insights</h1>
            <p className="text-xl text-gray-300 mb-6">
              The latest trends and news in sensor-integrated textiles and smart technology
            </p>
          </div>
        </div>
      </div>

      {/* Modern Premium Category Filter Tabs */}
      <div className="w-full bg-slate-950/20 py-8 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-1.5 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-wrap justify-center items-center gap-1 md:gap-2">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 relative overflow-hidden
                    ${isActive 
                      ? 'text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-[0_0_20px_rgba(79,70,229,0.4)] scale-105 border border-indigo-500/30' 
                      : 'text-slate-400 hover:text-white bg-transparent hover:bg-white/5 border border-transparent'
                    }
                  `}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {isActive && (
                    <span className="absolute inset-0 bg-white/10 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogPostCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl || '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'}
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))}
          
          {/* If there are no published posts in this category, display a placeholder */}
          {filteredPosts.length === 0 && (
            <div className="col-span-full py-16 text-center text-gray-400">
              <p className="text-lg">No projects listed under this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;

