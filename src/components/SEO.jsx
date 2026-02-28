import Head from 'next/head';

export default function SEO({ title, description, keywords, schema }) {
    const siteTitle = "Dhiren Eye Care - Professional Eye Hospital in Chennai";
    const fullTitle = title ? `${title} | Dhiren Eye Care` : siteTitle;
    const defaultDesc = "Advanced Eye Care with Compassion and Precision. Best eye hospital in Chennai for Cataract, LASIK, Retina, and Glaucoma treatments.";

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDesc} />
            <meta name="keywords" content={keywords || "best eye hospital in Chennai, cataract surgery Chennai, LASIK surgery Chennai, eye specialist Chennai"} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />

            {/* Schema Markup */}
            {schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            )}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDesc} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://dhireneyecare.com" />
        </Head>
    );
}
