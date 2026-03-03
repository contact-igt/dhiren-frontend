import {
    Eye, Activity, BoxSelect, Syringe, ScanLine, Expand,
    Glasses, Plus, ShieldAlert, HeartPulse, Sparkles,
    ZoomIn, ActivitySquare, UserCheck, Stethoscope, FileSearch
} from 'lucide-react';

export const servicesData = [
    {
        id: 'cataract-surgery',
        title: "Cataract Surgery",
        shortDescription: "Safe and advanced cataract removal with premium IOLs for clear vision.",
        icon: Eye,
        image: "/assets/About/cataract.jpg",
        content: {
            introduction: "Cataract is one of the most common age-related eye conditions, where the natural lens becomes cloudy and causes blurred or dim vision. At Dr. Vishal Maniar’s Eye Clinic, we offer advanced, safe, and painless cataract removal surgery with premium intraocular lens (IOL) implants to help you regain crystal-clear vision and improve your quality of life.",
            expertise: "With over 17 years of expertise in ophthalmology, Dr. Vishal Maniar ensures that every cataract surgery is performed with precision, using state-of-the-art technology for faster recovery and long-term results.",
            symptoms: [
                "Blurry or cloudy vision",
                "Difficulty seeing at night or in low light",
                "Sensitivity to bright lights and glare",
                "Halos around lights, especially while driving",
                "Faded, yellowed, or dull colors",
                "Double vision in one eye",
                "Frequent changes in eyeglass prescription",
                "Trouble reading small print even with glasses"
            ],
            causes: [
                "Aging – most common cause",
                "Diabetes and chronic health conditions",
                "Excessive UV exposure",
                "Smoking and alcohol consumption",
                "Long-term steroid medication use",
                "Eye injuries or trauma",
                "Family history and genetics",
                "Radiation exposure or treatments",
                "Nutritional deficiencies (low antioxidants, vitamins C & E)"
            ],
            treatmentOptions: [
                {
                    name: "Phacoemulsification (Phaco Surgery)",
                    description: "Small incision, ultrasound-based removal."
                },
                {
                    name: "Laser-Assisted Cataract Surgery",
                    description: "Bladeless procedure with precision."
                },
                {
                    name: "Extracapsular Cataract Surgery",
                    description: "For advanced or dense cataracts."
                },
                {
                    name: "Premium IOL Implants",
                    description: "Multifocal, toric, or trifocal lenses for glasses-free vision."
                },
                {
                    name: "Monofocal Lenses",
                    description: "Clear vision at one distance (usually far)."
                },
                {
                    name: "Toric Lenses",
                    description: "Correct cataracts with astigmatism."
                }
            ],
            recovery: [
                "Using prescribed eye drops",
                "Avoiding rubbing or pressing the eyes",
                "Wearing sunglasses outdoors",
                "Avoiding heavy lifting and strenuous activity",
                "Sleeping on the non-operated side",
                "Attending all follow-up appointments",
                "Maintaining a healthy lifestyle"
            ],
            prevention: [
                "Regular eye checkups after age 40",
                "Wearing UV-protective sunglasses outdoors",
                "Maintaining blood sugar control for diabetics",
                "Eating antioxidant-rich foods (A, C, E, lutein, omega-3s)",
                "Avoiding smoking and alcohol",
                "Using protective eyewear",
                "Managing hypertension and other conditions"
            ],
            types: [
                { name: "Nuclear", description: "Center of lens, common with aging" },
                { name: "Cortical", description: "Starts at lens edges" },
                { name: "Posterior", description: "Back of lens, affects reading" },
                { name: "Congenital", description: "From birth" },
                { name: "Secondary", description: "After surgery/disease" },
                { name: "Traumatic", description: "Caused by injury" }
            ],
            diagnosis: [
                "Visual Acuity: Clarity at distances",
                "Slit-Lamp: Examines lens & cornea",
                "Retinal Exam: Retina check post dilation",
                "Tonometry: Eye pressure test"
            ],
            candidates: [
                "Blurred or dim vision",
                "Struggle with night driving",
                "Daily activities impacted",
                "Glasses no longer help",
                "Progression seen in exams"
            ],
            benefits: [
                "Clear & sharp vision",
                "Improved colors",
                "Better night vision",
                "Independence in daily tasks",
                "Reduced need for glasses"
            ],
            risks: "Cataract surgery is very safe, but risks may include infection, swelling, secondary cataract, lens dislocation, or (rarely) retinal detachment. Most are treatable with prompt care."
        }
    },
    {
        id: 'glaucoma-surgery',
        title: "Glaucoma Surgery",
        shortDescription: "Advanced surgical & laser treatments to control eye pressure and prevent vision loss.",
        icon: Activity,
        image: "/assets/About/glaucoma.webp",
    },
    {
        id: 'cornea-surgery',
        title: "Cornea Surgery",
        shortDescription: "Expert care for corneal diseases and injuries with advanced surgical techniques.",
        icon: BoxSelect,
        image: "/assets/About/cornea.jpg",
    },
    {
        id: 'lasik-surgery',
        title: "LASIK Surgery",
        shortDescription: "Blade-free LASIK for freedom from glasses and improved vision quality.",
        icon: Sparkles,
        image: "/assets/About/lasik.webp",
    },
    {
        id: 'retina-surgery',
        title: "Retina Surgery",
        shortDescription: "Expert treatment for retinal disorders including diabetic retinopathy & detachment.",
        icon: ScanLine,
        image: "/assets/About/retina.jpg",
    },
    {
        id: 'squint-surgery',
        title: "Squint Surgery",
        shortDescription: "Corrective surgery for squint (strabismus) to restore eye alignment and vision.",
        icon: Expand,
        image: "/assets/About/squint.jpg",
    },
    {
        id: 'oculoplasty-surgery',
        title: "Oculoplasty Surgery",
        shortDescription: "Cosmetic and reconstructive eye procedures for eyelids, orbit, and tear ducts.",
        icon: Glasses,
        image: "/assets/About/oculoplasty.webp",
    },
    {
        id: 'pterygium-surgery',
        title: "Pterygium Surgery",
        shortDescription: "Safe and effective removal of pterygium growth to restore comfort and vision.",
        icon: ShieldAlert,
        image: "/assets/About/pterygium.jpg",
    },
    {
        id: 'icl-surgery',
        title: "ICL Surgery",
        shortDescription: "Implantable Collamer Lens for high power correction without removing cornea tissue.",
        icon: UserCheck,
        image: "/assets/About/icl.jpg",
    },
    {
        id: 'senior-citizen-eye-care',
        title: "Senior Citizen Eye Care",
        shortDescription: "Comprehensive eye care plans tailored to the needs of elderly patients.",
        icon: HeartPulse,
        image: "/assets/About/senior.jpg",
    },
    {
        id: 'low-vision-management',
        title: "Low Vision Management",
        shortDescription: "Specialized aids and therapies to enhance quality of life for low vision patients.",
        icon: ZoomIn,
        image: "/assets/About/low-vision.jpg",
    },
    {
        id: 'pediatric-eye-care',
        title: "Pediatric Eye Care",
        shortDescription: "Dedicated children's eye treatments including squint correction & lazy eye therapy.",
        icon: Plus,
        image: "/assets/About/pediatric.webp",
    },
    {
        id: 'diabetic-eye-care',
        title: "Diabetic Eye Care",
        shortDescription: "Comprehensive management of diabetes-related eye problems to prevent blindness.",
        icon: ActivitySquare,
        image: "/assets/About/diabetic.jpg",
    },
    {
        id: 'optical-services',
        title: "Optical Services",
        shortDescription: "High-quality eyeglasses, frames, and contact lenses with expert guidance.",
        icon: FileSearch,
        image: "/assets/About/optical.jpg",
    },
    {
        id: 'oct-scan-yag-laser',
        title: "OCT Scan & YAG Laser",
        shortDescription: "Advanced diagnostic scanning and laser procedures for precise eye care.",
        icon: Syringe,
        image: "/assets/About/oct.png",
    },
    {
        id: 'perimetry-test',
        title: "Perimetry Test",
        shortDescription: "Visual field testing to detect early signs of glaucoma and other eye conditions.",
        icon: Stethoscope,
        image: "/assets/About/perimetry.jpg",
    }
];
