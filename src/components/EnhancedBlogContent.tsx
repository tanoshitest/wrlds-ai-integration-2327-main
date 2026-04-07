
import React, { useState, useEffect } from 'react';
import { ContentSection } from '@/data/blogPosts';
import { DollarSign, Users, TrendingUp, Shield, Zap, Settings, Database, ChevronDown, ChevronUp, AlertCircle, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

interface EnhancedBlogContentProps {
  content: ContentSection[];
}

const iconMap = {
  DollarSign,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Settings,
  Database
};

const EnhancedBlogContent: React.FC<EnhancedBlogContentProps> = ({ content }) => {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  // Auto-expand the first feature-grid on mount as requested
  useEffect(() => {
    const firstFeatureGridIndex = content.findIndex(section => section.type === 'feature-grid');
    if (firstFeatureGridIndex !== -1) {
      setExpandedIndices(new Set([firstFeatureGridIndex]));
    }
  }, [content]);

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const renderContent = (section: ContentSection, index: number) => {
    switch (section.type) {
      case 'heading':
        return (
          <h2 key={index} className="text-3xl font-bold mb-6 text-black border-b-2 border-black pb-2">
            {section.content}
          </h2>
        );
      
      case 'subheading':
        return (
          <h3 key={index} className="text-2xl font-semibold mb-4 text-black">
            {section.content}
          </h3>
        );
      
      case 'paragraph':
        return (
          <p key={index} className="text-gray-800 mb-6 leading-relaxed text-lg">
            {section.content}
          </p>
        );
      
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside mb-6 space-y-2">
            {section.items?.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-800 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        );
      
      case 'icon-list':
        return (
          <div key={index} className="grid gap-4 mb-8">
            {section.items?.map((item, itemIndex) => {
              const icons = [Shield, Zap, Settings, Database];
              const IconComponent = icons[itemIndex % icons.length];
              return (
                <Card key={itemIndex} className="border-2 border-black">
                  <CardContent className="p-4 flex items-start space-x-4">
                    <div className="bg-black p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-800 leading-relaxed flex-1">{item}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        );

      case 'bibliography':
        return (
          <div key={index} className="mb-8">
            <ol className="list-none space-y-3">
              {section.items?.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-800 leading-relaxed text-sm bg-gray-50 p-3 rounded border-l-4 border-black">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        );

      case 'split-image-list':
        if (!section.items) return null;
        const middleIndex = Math.ceil(section.items.length / 2);
        const leftItems = section.items.slice(0, middleIndex);
        const rightItems = section.items.slice(middleIndex);
        const splitIcons = [Shield, Zap, DollarSign, Users, Database, TrendingUp];

        return (
          <div key={index} className="my-12">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              {/* Left Column */}
              <div className="flex-1 w-full space-y-4">
                {leftItems.map((item, i) => {
                  const Icon = splitIcons[i % splitIcons.length];
                  return (
                    <Card key={`left-${i}`} className="border-2 border-black h-full shadow-sm hover:translate-x-1 transition-transform group">
                      <CardContent className="p-4 md:p-5 flex items-center space-x-4 h-full">
                        <div className="bg-black p-3 md:p-4 rounded-xl shrink-0 text-white group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6" />
                        </div>
                        <p className="text-gray-800 font-medium text-sm md:text-base leading-relaxed">{item}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Middle Image */}
              {section.image && (
                <div className="shrink-0 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center p-4">
                  <img src={section.image} alt="Nỗi đau trung tâm" className="max-w-full max-h-full object-contain" />
                </div>
              )}

              {/* Right Column */}
              <div className="flex-1 w-full space-y-4">
                {rightItems.map((item, i) => {
                  const Icon = splitIcons[(i + middleIndex) % splitIcons.length];
                  return (
                    <Card key={`right-${i}`} className="border-2 border-black h-full shadow-sm hover:-translate-x-1 transition-transform group">
                      <CardContent className="p-4 md:p-5 flex items-center space-x-4 h-full">
                        <div className="bg-black p-3 md:p-4 rounded-xl shrink-0 text-white group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6" />
                        </div>
                        <p className="text-gray-800 font-medium text-sm md:text-base leading-relaxed">{item}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        );
      
      case 'stats':
        return (
          <div key={index} className="grid md:grid-cols-3 gap-6 mb-8">
            {section.statsData?.map((stat, statIndex) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap] || TrendingUp;
              return (
                <Card key={statIndex} className="border-2 border-black text-center">
                  <CardContent className="p-6">
                    <div className="bg-black p-3 rounded-full inline-block mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        );
      
      case 'chart':
        if (!section.chartData) return null;
        
        const colors = ['#000000', '#666666', '#999999', '#CCCCCC'];
        
        return (
          <Card key={index} className="border-2 border-black mb-8">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-4 text-black text-center">
                {section.chartData.title}
              </h4>
              <div className="h-64 w-full">
                {section.chartData.title.includes('Market Growth') ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={section.chartData.data}>
                      <XAxis dataKey="name" stroke="#000" />
                      <YAxis stroke="#000" />
                      <Bar dataKey="value" fill="#000000" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={section.chartData.data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={(entry) => `${entry.name}: ${entry.value}%`}
                      >
                        {section.chartData.data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
            </CardContent>
          </Card>
        );
      
      case 'table':
        if (!section.tableData) return null;
        return (
          <Card key={index} className="border-2 border-black mb-8 overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-black text-white">
                  <tr>
                    {section.tableData.headers.map((header, headerIndex) => (
                      <th key={headerIndex} className="p-4 text-left font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.tableData.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-4 border-b border-gray-200">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        );
      
      case 'quote':
        return (
          <Card key={index} className="border-2 border-black bg-black text-white mb-8">
            <CardContent className="p-8 text-center">
              <blockquote className="text-xl italic font-medium">
                "{section.content}"
              </blockquote>
            </CardContent>
          </Card>
        );
      
      case 'feature-grid':
        if (!section.featureGridData) return null;
        const isExpanded = expandedIndices.has(index);
        return (
          <div key={index} className="mb-8">
            <button 
              onClick={() => toggleExpand(index)}
              className={`w-full text-left flex items-center justify-between group p-6 border-2 border-black transition-all hover:bg-gray-50 rounded-xl ${isExpanded ? 'bg-gray-50 mb-0' : 'mb-4'}`}
            >
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-black group-hover:translate-x-1 transition-transform">{section.featureGridData.title}</h3>
                {section.featureGridData.subtitle && (
                  <p className="text-gray-600 font-medium text-sm md:text-base mt-1">{section.featureGridData.subtitle}</p>
                )}
              </div>
              <div className={`p-2 rounded-full transition-all duration-300 ${isExpanded ? 'bg-black text-white' : 'bg-gray-100 text-black group-hover:bg-black group-hover:text-white'}`}>
                {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </div>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-8 border-2 border-t-0 border-black rounded-b-xl bg-white mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {section.featureGridData.groups.map((group, groupIndex) => (
                      <Card 
                        key={groupIndex} 
                        className={`border-2 ${group.highlight ? 'border-black bg-gray-50' : 'border-gray-100'} h-full transition-all hover:border-black shadow-sm group/card`}
                      >
                        <CardContent className="p-5 h-full flex flex-col">
                          <div className="mb-4">
                            <h4 className={`text-lg font-bold ${group.highlight ? 'text-black' : 'text-gray-700'}`}>
                              {group.title}
                            </h4>
                          </div>
                          <ul className="space-y-3 flex-grow">
                            {group.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start text-sm md:text-base">
                                <span className="mr-3 text-black mt-1 font-bold">→</span>
                                <span className="text-gray-600 leading-snug group-hover/card:text-black transition-colors">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="prose prose-lg max-w-none">
      {content.map((section, index) => renderContent(section, index))}
    </div>
  );
};

export default EnhancedBlogContent;
