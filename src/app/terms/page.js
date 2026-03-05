import SEO from "@/components/layout/SEO";

export default function TermsPage() {
    return (
        <>
            <SEO title="Terms of Service" />
            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
                    <div className="prose max-w-none text-text-muted space-y-6">
                        <p>By accessing this website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>

                        <h2 className="text-2xl font-bold text-primary mt-12">Medical Disclaimer</h2>
                        <p>The information provided on this website is for general informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>

                        <h2 className="text-2xl font-bold text-primary mt-12">Use License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Dhiren Eye Care Hospital's website for personal, non-commercial transitory viewing only.</p>

                        <h2 className="text-2xl font-bold text-primary mt-12">Governing Law</h2>
                        <p>These terms and conditions are governed by and construed in accordance with the laws of Tamil Nadu, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
