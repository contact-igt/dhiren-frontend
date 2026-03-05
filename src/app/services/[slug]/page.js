"use client";
import React, { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import { servicesData } from '@/data/servicesData';

// Extracted Detail Components
import DetailHero from '@/components/services/detail/DetailHero';
import DetailOverview from '@/components/services/detail/DetailOverview';
import DetailSymptoms from '@/components/services/detail/DetailSymptoms';
import DetailCauses from '@/components/services/detail/DetailCauses';
import DetailTypes from '@/components/services/detail/DetailTypes';
import DetailDiagnosis from '@/components/services/detail/DetailDiagnosis';
import DetailCandidates from '@/components/services/detail/DetailCandidates';
import DetailTreatment from '@/components/services/detail/DetailTreatment';
import DetailRecovery from '@/components/services/detail/DetailRecovery';
import DetailBenefits from '@/components/services/detail/DetailBenefits';
import DetailSafety from '@/components/services/detail/DetailSafety';
import DetailPrevention from '@/components/services/detail/DetailPrevention';
import DetailCTA from '@/components/services/detail/DetailCTA';

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = servicesData.find(s => s.id === slug);
    const [activeSection, setActiveSection] = useState('overview');

    if (!service) {
        return notFound();
    }

    const { content, title, image, shortDescription } = service;

    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'symptoms', label: 'Symptoms' },
        { id: 'causes', label: 'Causes' },
        { id: 'treatment', label: 'Treatment Options' },
        { id: 'recovery', label: 'Recovery & Aftercare' },
        { id: 'prevention', label: 'Prevention Tips' },
        { id: 'types', label: 'Types' },
        { id: 'diagnosis', label: 'Diagnosis' },
        { id: 'candidates', label: 'Candidates' },
        { id: 'benefits', label: 'Benefits' },
        { id: 'risks', label: 'Safety' },
    ].filter(s => {
        if (s.id === 'overview') return true;
        if (s.id === 'symptoms') return content?.symptoms;
        if (s.id === 'causes') return content?.causes;
        if (s.id === 'types') return content?.types;
        if (s.id === 'diagnosis') return content?.diagnosis;
        if (s.id === 'candidates') return content?.candidates;
        if (s.id === 'treatment') return content?.treatmentOptions;
        if (s.id === 'recovery') return content?.recovery;
        if (s.id === 'benefits') return content?.benefits;
        if (s.id === 'risks') return content?.risks;
        if (s.id === 'prevention') return content?.prevention;
        return false;
    });

    // Asset Mapping for Cataract
    const getClinicalAsset = (sectionId) => {
        if (slug !== 'cataract-surgery') return null;
        const mapping = {
            'overview': '/assets/services/cataract/c7.png',
            'symptoms': '/assets/services/cataract/c2.png',
            'causes': '/assets/services/cataract/c3.png',
            'types': '/assets/services/cataract/c8.png',
            'diagnosis': '/assets/services/cataract/c9.png',
            'candidates': '/assets/services/cataract/c4.png',
            'treatment': '/assets/services/cataract/c5.png',
            'recovery': '/assets/services/cataract/c6.png',
            'benefits': '/assets/services/cataract/c11.png',
            'risks': '/assets/services/cataract/c12.png',
            'prevention': '/assets/services/cataract/c10.png',
        };
        return mapping[sectionId];
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 180;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 165,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-[#c23c77]/10 selection:text-[#c23c77]">
            <DetailHero
                title={title}
                image={image}
                shortDescription={shortDescription}
                scrollToSection={scrollToSection}
            />

            {/* Sticky Editorial Navigation */}
            <nav className="sticky top-[101px] z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 hidden lg:block transition-all duration-300 shadow-sm">
                <div className="container-custom flex justify-center py-4">
                    <div className="flex gap-8">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`text-[10px] font-black tracking-[0.2em] uppercase transition-all pb-2 border-b-2 ${activeSection === section.id
                                    ? 'text-[#c23c77] border-[#c23c77]'
                                    : 'text-gray-400 border-transparent hover:text-black'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            <div className="container-custom py-15 space-y-48">
                <DetailOverview content={content} image={image} getClinicalAsset={getClinicalAsset} />
                <DetailSymptoms content={content} />
                <DetailCauses content={content} />
                <DetailTreatment content={content} />
                <DetailRecovery content={content} />
                <DetailPrevention content={content} />

                {/* Secondary Sections */}
                <DetailTypes content={content} />
                <DetailDiagnosis content={content} image={image} getClinicalAsset={getClinicalAsset} />
                <DetailCandidates content={content} image={image} getClinicalAsset={getClinicalAsset} />
                <DetailBenefits content={content} image={image} getClinicalAsset={getClinicalAsset} />
                <DetailSafety content={content} />

                <DetailCTA />
            </div>
        </div>
    );
}
