import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogs from '../data/blogsData.json';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen text-center">
        <div>
          <h1 className="text-4xl font-bold text-sky-900">404</h1>
          <p className="text-lg text-gray-600 mt-2">Blog post not found.</p>
          <Link to="/blogs" className="mt-6 inline-block text-teal-600 font-semibold hover:underline">
            &larr; Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = blogs.filter(b => b.id !== blogId).slice(0, 2);

  const renderContent = (contentItem, index) => {
    switch (contentItem.type) {
      case 'heading':
        return <h2 key={index} className="text-2xl md:text-3xl font-bold text-sky-900 mt-10 mb-4 font-display">{contentItem.text}</h2>;
      case 'paragraph':
        return <p key={index} className="mb-6 text-lg leading-relaxed">{contentItem.text}</p>;
      case 'list':
        return (
          <ul key={index} className="space-y-4 list-disc pl-6 mb-6">
            {contentItem.items.map((item, i) => (
              <li key={i} className="text-lg leading-relaxed">{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <motion.img 
          src={blog.images[0]} 
          alt={blog.title} 
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0.8 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Article Content */}
      <div className="relative -mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-t-2xl p-8 md:p-12 shadow-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-sky-900 font-display mb-6">{blog.title}</h1>
            <div className="flex items-center space-x-6 text-gray-500 mb-8 border-b pb-6">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-teal-600" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-teal-600" />
                <span className="font-medium">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-gray-800">
              {blog.content.map(renderContent)}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50/70 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sky-900 mb-8 text-center font-display">Continue Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedBlogs.map(related => (
              <Link to={`/blogs/${related.id}`} key={related.id} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative h-48 w-full">
                  <img src={related.images[0]} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-sky-800 font-display mb-2 group-hover:text-teal-600 transition-colors duration-300">{related.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{related.summary}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-sky-800 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
