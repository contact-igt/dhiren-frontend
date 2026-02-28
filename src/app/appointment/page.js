import AppointmentForm from "@/components/appointment/AppointmentForm";

export const metadata = {
    title: "Book Appointment | Dhiren Eye Care",
    description: "Schedule your eye consultation at Dhiren Eye Care Hospital, Chennai. Fast and easy online booking for Cataract, LASIK, and more.",
};

export default function AppointmentPage() {
    return (
        <>
            <section className="bg-accent/50 py-16">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Book Your Consultation</h1>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Fill out the form below and start your journey towards clearer vision today.
                    </p>
                </div>
            </section>
            <AppointmentForm />
        </>
    );
}
