
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  // All blog posts are now displayed in the grid section
  const allPosts = blogPosts;
  
  return (
    <PageLayout>
      <SEO 
        title="Tanoshi Vietnam - News and insights about smart textile technology" 
        description="Stay updated with the latest news and insights about sensor-integrated textiles and smart technology from Tanoshi Vietnam Technologies."
        imageUrl={allPosts[0]?.imageUrl || "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"}
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
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post, index) => (
            <BlogPostCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl || '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'}
              date={post.date}
              slug={post.slug}
              category={post.category}
              className={index === 0 ? "md:col-span-2 lg:col-span-3" : ""}
              featured={index === 0}
            />
          ))}
          
          {/* If there are fewer than 3 published posts, add placeholders */}
          {allPosts.length < 3 && Array.from({ length: Math.max(0, 3 - allPosts.length) }).map((_, index) => (
            <BlogPostCard 
              key={`placeholder-${index}`}
              title="Upcoming article"
              excerpt="Stay tuned for more exciting articles about smart textiles and sensor technology."
              imageUrl={index % 2 === 0 ? "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png" : "/lovable-uploads/700e27d7-0513-4bfa-8ac4-f7fd6087594c.png"}
              date="Coming soon"
              slug="#"
              category="Upcoming"
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
