import SEO from "@/components/layout/SEO";

export default function PrivacyPage() {
    return (
        <>
            <SEO title="Privacy Policy" />
            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
                    <div className="prose max-w-none text-text-muted space-y-6">
                        <p>Last updated: February 28, 2026</p>
                        <p>Dhiren Eye Care Hospital ("us", "we", or "our") operates the website dhireneyecare.com. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.</p>

                        <h2 className="text-2xl font-bold text-primary mt-12">Information Collection and Use</h2>
                        <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

                        <h3 className="text-xl font-bold text-primary mt-8">Types of Data Collected</h3>
                        <p>Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City, Cookies and Usage Data.</p>

                        <h2 className="text-2xl font-bold text-primary mt-12">Medical Records</h2>
                        <p>Your medical records are handled with the highest level of confidentiality and are only accessible to authorized clinical personnel involved in your treatment and care.</p>

                        <h2 className="text-2xl font-bold text-primary mt-12">Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at info@dhireneyecare.com.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
