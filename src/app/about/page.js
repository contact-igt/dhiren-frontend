import FounderProfile from './components/FounderProfile';
import TopRatedBanner from './components/TopRatedBanner';
import CommittedEyeCare from './components/CommittedEyeCare';
import HowItWorks from './components/HowItWorks';
import OurServices from './components/OurServices';
import AboutHero from './components/AboutHero';

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