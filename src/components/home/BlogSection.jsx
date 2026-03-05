"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, User, Calendar } from 'lucide-react';

const posts = [
    {
        id: 1,
        category: 'Cataract',
        title: 'Understanding Cataracts: Symptoms & Modern Treatments',
        description: 'Cataracts are one of the most common causes of vision loss. Learn how early detection and advanced surgical techniques can restore clear sight.',
        image: '/assets/Home/blog1.png',
        date: '10 Aug, 2025',
        author: 'Dr. Vishal Maniar',
        slug: '/blog/understanding-cataracts',
    },
    {
        id: 2,
        category: 'Paediatric Eye Care',
        title: 'Why Regular Eye Checkups for Children Are Important',
        description: 'From vision screening to squint management, children need specialized eye care. Discover how early treatment ensures lifelong healthy eyesight.',
        image: '/assets/Home/blog2.png',
        date: '22 Jul, 2025',
        author: 'Dr. Vishal Maniar',
        slug: '/blog/eye-checkups-children',
    },
    {
        id: 3,
        category: 'Glaucoma',
        title: 'Glaucoma: The Silent Thief of Vision',
        description: 'Glaucoma often develops without noticeable symptoms. Learn about risk factors, early signs, and how timely treatment can prevent vision loss.',
        image: '/assets/Home/blog3.png',
        date: '05 Jul, 2025',
        author: 'Dr. Vishal Maniar',
        slug: '/blog/glaucoma-silent-thief',
    },
];

export default function BlogSection() {
    return (
        <section className="section-padding bg-[#f5f6fa] overflow-hidden">
            <div className="container-custom">

                {/* ── Header ── */}
                <div className="flex flex-col md:flex-row md:items-end gap-12 mb-20 relative group">
                    <div className="mt-5 md:mt-0 absolute -top-16 md:-left-10 pointer-events-none z-0">
                        <span className="text-[12vw] md:text-[180px] font-black whitespace-nowrap select-none leading-none tracking-tighter text-[#c23c77]/20 uppercase">
                            OUR BLOG
                        </span>
                    </div>
                    <div className="relative z-10 flex gap-8 items-start pl-4 border-l-4 border-[#c23c77]">
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#c23c77]/20 text-[#c23c77] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                HEALTH TIPS & INSIGHTS
                            </span>
                            <h2 className="text-5xl md:text-[72px] font-[900] tracking-tighter text-black leading-[1.0] transition-transform duration-500 group-hover:translate-x-2 uppercase">
                                BLOG & <br /> ARTICLES
                            </h2>
                        </div>
                    </div>
                </div>

                {/* ── Cards Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                        >
                            {/* ── Top: Title + Meta ── */}
                            <div className="px-6 pt-6 pb-4">
                                <h3 className="text-[17px] font-extrabold !text-text-main leading-snug group-hover:text-primary transition-colors duration-200 mb-3">
                                    {post.title}
                                </h3>
                                {/* Author + Date row */}
                                <div className="flex items-center gap-4 text-[12px] text-text-muted font-semibold">
                                    <span className="flex items-center gap-1.5">
                                        <User size={12} className="text-primary" />
                                        {post.author}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={12} className="text-primary" />
                                        {post.date}
                                    </span>
                                </div>
                            </div>

                            {/* ── Middle: Image ── */}
                            <div className="relative h-[200px] w-85 mx-auto rounded-2xl overflow-hidden mx-0">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* ── Bottom: Description + CTA ── */}
                            <div className="px-6 pt-5 pb-6 flex flex-col gap-4 flex-1">
                                <p className="text-[13.5px] text-text-muted leading-relaxed line-clamp-3 flex-1">
                                    {post.description}
                                </p>

                                <Link
                                    href={post.slug}
                                    className="inline-flex items-center gap-3 text-[#0f172a] text-[13.5px] font-black hover:text-primary transition-colors duration-200 group/link w-fit"
                                >
                                    More Details
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white group-hover/link:bg-[#0f172a] group-hover/link:rotate-45 transition-all duration-300 shadow-sm shadow-primary/30">
                                        <ArrowRight size={14} strokeWidth={4} />
                                    </div>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom-right — View All Posts */}
                <div className="mt-10 flex justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-3 bg-[#0f172a] text-white font-black px-6 py-3.5 rounded-full shadow-lg hover:bg-primary transition-all duration-300 hover:scale-105 text-sm group"
                        >
                            View All Posts
                            <div className="w-7 h-7 bg-white text-[#0f172a] rounded-full flex items-center justify-center group-hover:text-primary group-hover:rotate-45 transition-all duration-500">
                                <ArrowRight size={16} strokeWidth={3} />
                            </div>
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
