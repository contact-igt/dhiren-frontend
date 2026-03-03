import FounderProfile from '@/components/about/FounderProfile';
import TopRatedBanner from '@/components/about/TopRatedBanner';
import CommittedEyeCare from '@/components/about/CommittedEyeCare';
import HowItWorks from '@/components/about/HowItWorks';
import OurServices from '@/components/about/OurServices';
import AboutHero from '@/components/about/AboutHero';

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <FounderProfile />
            <TopRatedBanner />
            <CommittedEyeCare />
            <HowItWorks />
            <OurServices />
        </>
    );
}