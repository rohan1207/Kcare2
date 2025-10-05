import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import blogs from '../data/blogsData.json';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogsPage = () => {
  return (
    <div className="bg-gray-50/70 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-sky-800 to-teal-700 py-24 sm:py-32 text-white"
      >
        <div className="absolute inset-0 bg-[url('/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-display tracking-tight"
          >
            K-Care Health Insights
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-sky-100/90"
          >
            Expert articles on surgical advancements, patient care, and wellness from Dr. Pramod Kadam.
          </motion.p>
        </div>
      </motion.div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group flex flex-col"
            >
              <div className="relative">
                <img src={blog.images[0]} alt={blog.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-4 text-white text-sm">
                    <div className="flex items-center space-x-1.5">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-sky-900 font-display mb-3 flex-grow">{blog.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{blog.summary}</p>
                <Link 
                  to={`/blogs/${blog.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-teal-600 font-semibold group-hover:text-sky-800 transition-colors duration-300"
                >
                  Read More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
