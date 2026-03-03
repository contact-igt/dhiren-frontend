"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Slider from "react-slick";

const items = [
    { id: 1, label: 'Cataract Surgery', sub: 'Advanced Treatment', image: '/assets/services/cataract.png' },
    { id: 2, label: 'LASIK & Refractive', sub: 'Vision Correction', image: '/assets/services/lasik.png' },
    { id: 3, label: 'Paediatric Eye Care', sub: "Children's Specialist", image: '/assets/services/pediatric.png' },
    { id: 4, label: 'Retina Care', sub: 'Retinal Disorders', image: '/assets/services/retina.png' },
    { id: 5, label: 'Glaucoma', sub: 'Silent Eye Disease', image: '/assets/services/glaucoma.png' },
    { id: 6, label: 'Cornea Treatment', sub: 'Corneal Disorders', image: '/assets/services/cornea.png' },
    { id: 7, label: 'Diabetic Eye Care', sub: 'Diabetes Management', image: '/assets/services/retina.png' },
    { id: 8, label: 'Dry Eye Treatment', sub: 'Comfort & Relief', image: '/assets/services/cornea.png' },
    { id: 9, label: 'Squint Treatment', sub: 'Strabismus Care', image: '/assets/services/pediatric.png' },
];

function GalleryCard({ item }) {
    return (
        <div className="px-2 h-full">
            <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer shadow-lg border border-gray-100/50 bg-gray-50">
                {/* Base Image */}
                <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#f97316]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] z-10">
                    <div className="relative h-full w-full p-8 flex flex-col items-start justify-between">
                        {/* Plus icon - Center area with scale animation */}
                        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-700 ease-out group-hover:delay-100">
                            <Plus size={180} className="text-white/60" strokeWidth={0.3} />
                        </div>

                        {/* Text - Bottom area with slide-up animation */}
                        <div className="mt-auto mb-4 w-full translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:delay-200">
                            <h3 className="!text-white font-extrabold text-2xl leading-tight mb-2 max-w-[90%]">
                                {item.label}
                            </h3>
                            <p className="text-white/90 text-sm font-semibold tracking-wider uppercase">
                                {item.sub}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function GallerySection() {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        swipe: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 480, // Added for better coverage on smaller mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px', // Slightly reduced padding for very small screens
                }
            }
        ]
    };

    if (!isMounted) return null;

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="w-full px-4 md:px-12">

                {/* ── Slick Carousel ── */}
                <div className="gallery-slider">
                    <Slider {...settings}>
                        {items.map((item) => (
                            <GalleryCard key={item.id} item={item} />
                        ))}
                    </Slider>
                </div>
            </div>

            <style jsx global>{`
                .gallery-slider .slick-list {
                    margin: 0 -8px;
                }
                .gallery-slider .slick-slide > div {
                    padding: 0 8px;
                }
            `}</style>
        </section >
    );
}
