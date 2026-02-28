"use client";
import SEO from "@/components/SEO";
import { motion } from 'framer-motion';
import { Eye, Zap, Activity, ShieldCheck, Baby, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: 'cataract',
        title: 'Cataract Surgery',
        icon: <Eye size={32} />,
        description: 'A cataract is a clouding of the eye\'s natural lens, which lies behind the iris and the pupil. Cataracts are the most common cause of vision loss in people over age 40 and are the principal cause of blindness in the world.',
        symptoms: ['Blurry or foggy vision', 'Difficulty seeing at night', 'Sensitivity to light and glare', 'Changing eyeglass prescriptions frequently'],
        process: 'We perform micro-incision sutureless cataract surgery (MICS) with advanced phacoemulsification technology. The cloudy lens is replaced with a premium intraocular lens (IOL).',
        benefits: ['Painless procedure', 'Quick recovery', 'No stitches/bandages', 'Reduced dependency on glasses'],
        cta: 'Book Cataract Screening'
    },
    {
        id: 'lasik',
        title: 'LASIK & Refractive Surgery',
        icon: <Zap size={32} />,
        description: 'LASIK (Laser-Assisted In Situ Keratomileusis) is a popular surgery used to correct vision in people who are nearsighted, farsighted, or have astigmatism.',
        symptoms: ['Dependence on glasses or contact lenses', 'Difficulty with sports/outdoor activities', 'Eye strain from contact lens use'],
        process: 'A thin flap is created on the cornea using a femtosecond laser, and the underlying corneal tissue is reshaped with an excimer laser to correct refractive errors.',
        benefits: ['Immediate results', 'Permanent correction', 'No more glasses/contacts', 'Enhanced quality of life'],
        cta: 'Check LASIK Eligibility'
    },
    {
        id: 'retina',
        title: 'Retina Treatment',
        icon: <Activity size={32} />,
        description: 'The retina is the light-sensitive layer of tissue at the back of the eyeball. Diseases of the retina can range from common issues like diabetic retinopathy to serious conditions like retinal detachment.',
        symptoms: ['Sudden appearance of floaters', 'Flashing lights', 'Shadow or curtain in field of vision', 'Distorted central vision'],
        process: 'We offer advanced laser treatments (Green Laser), intravitreal injections (Anti-VEGF), and complex vitreoretinal surgeries using high-end imaging systems.',
        benefits: ['Prevents permanent vision loss', 'Expert management of diabetic eye issues', 'Comprehensive diagnostic imaging'],
        cta: 'Schedule Retina Exam'
    },
    {
        id: 'glaucoma',
        title: 'Glaucoma Care',
        icon: <ShieldCheck size={32} />,
        description: 'Glaucoma is a group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in your eye. It is one of the leading causes of blindness for people over the age of 60.',
        symptoms: ['Loss of peripheral vision', 'Seeing halos around lights', 'Severe eye pain (in acute cases)'],
        process: 'Comprehensive screenings including OCT and visual field analysis. Treatment options include medicated eye drops, laser trabeculoplasty, and surgical shunts.',
        benefits: ['Prevents further optic nerve damage', 'Early detection saves sight', 'Personalized monitoring plan'],
        cta: 'Get Your Pressure Checked'
    },
    {
        id: 'pediatric',
        title: 'Pediatric eye care',
        icon: <Baby size={32} />,
        description: 'Children\'s eye problems can be quite different from those of adults. Early detection and treatment of eye problems in children are essential to ensure healthy visual development.',
        symptoms: ['Squinting (eyes not aligned)', 'Frequent eye rubbing', 'Sitting too close to the TV', 'Difficulty in school'],
        process: 'Child-friendly environment for comprehensive checkups, squint correction surgery, and specialized management of childhood myopia.',
        benefits: ['Ensures healthy vision for life', 'Specialized child-centric approach', 'Correction of squints and lazy eyes'],
        cta: 'Book Pediatric Checkup'
    }
];

export default function ServicesPage() {
    return (
        <>
            <SEO title="Our Services" description="Comprehensive eye care services in Chennai including Cataract surgery, LASIK, Retina treatment, Glaucoma care, and Pediatric ophthalmology." />

            {/* Header */}
            <section className="bg-accent/50 py-16">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Our Specialties</h1>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        World-class treatment options for every stage of your vision journey.
                    </p>
                </div>
            </section>

            {/* Service Blocks */}
            <section className="bg-white">
                {services.map((service, index) => (
                    <div key={service.id} id={service.id} className={`section-padding ${index % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <div className="container-custom">
                            <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                                <div className="lg:w-1/2">
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold text-primary mb-6">{service.title}</h2>
                                    <p className="text-text-muted mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                        <div>
                                            <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                                                <Activity size={18} className="text-secondary" /> Symptoms
                                            </h4>
                                            <ul className="space-y-2">
                                                {service.symptoms.map(s => (
                                                    <li key={s} className="text-sm text-text-muted flex gap-2">
                                                        <ChevronRight size={14} className="mt-1 flex-shrink-0 text-primary" /> {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                                                <CheckCircle2 size={18} className="text-secondary" /> Benefits
                                            </h4>
                                            <ul className="space-y-2">
                                                {service.benefits.map(b => (
                                                    <li key={b} className="text-sm text-text-muted flex gap-2">
                                                        <ChevronRight size={14} className="mt-1 flex-shrink-0 text-primary" /> {b}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <Link href="/appointment" className="btn-primary flex items-center justify-center gap-2 lg:w-fit px-8">
                                        {service.cta}
                                    </Link>
                                </div>

                                <div className="lg:w-1/2">
                                    <div className="aspect-[4/3] bg-white rounded-3xl shadow-2xl border-4 border-white overflow-hidden relative p-8 flex flex-col justify-center text-center">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
                                        <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">The Procedure</h3>
                                        <p className="text-text-muted relative z-10">{service.process}</p>

                                        <div className="mt-8 relative z-10 flex justify-center gap-4">
                                            <div className="px-4 py-2 bg-white rounded-lg shadow-sm text-xs font-bold text-primary border border-gray-100">Safe</div>
                                            <div className="px-4 py-2 bg-white rounded-lg shadow-sm text-xs font-bold text-primary border border-gray-100">Modern</div>
                                            <div className="px-4 py-2 bg-white rounded-lg shadow-sm text-xs font-bold text-primary border border-gray-100">Effective</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-primary text-white text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-6">Unsure which treatment is right for you?</h2>
                    <p className="mb-10 opacity-90 max-w-2xl mx-auto">
                        Schedule a comprehensive eye exam today. Our specialists will help you understand your eye health and recommend the best plan for your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/appointment" className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-accent transition-colors">
                            Book Appointment
                        </Link>
                        <a href="tel:+911234567890" className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                            Talk to an Expert
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
