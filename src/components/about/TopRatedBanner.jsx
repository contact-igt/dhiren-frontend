const TopRatedBanner = () => {
    return (
        <section className="py-20 bg-white relative">
            {/* Subtle top/bottom borders for a clean editorial look */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="container-custom max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">

                    {/* Left: Heading and Stars */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-[13px] md:text-xl font-bold text-gray-400 tracking-[0.2em] uppercase mb-2">
                            Top Rated Eye Hospital
                        </h2>

                        <div className="flex items-center gap-3">
                            <div className="flex gap-1 text-[#FFD700]">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-xl font-bold text-gray-900">5.0</span>
                        </div>
                        <p className="text-[18px] text-gray-500 mt-1 font-medium">Based on over 1,000+ patient reviews</p>
                    </div>

                    {/* Right/Bottom: Minimalist Logos */}
                    <div className="flex items-center justify-center gap-8 md:gap-12 opacity-80 mix-blend-multiply  transition-all duration-300">
                        <img src="/assets/About/add1.png" alt="Practo" className="h-8 md:h-12 object-contain" />
                        <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
                        <img src="/assets/About/add2.png" alt="Justdial" className="h-10 md:h-14 object-contain" />
                        <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
                        <img src="/assets/About/add3.png" alt="Google" className="h-8 md:h-12 object-contain" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TopRatedBanner;
