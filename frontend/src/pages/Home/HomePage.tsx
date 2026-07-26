import Layout from "../../components/layout/Layout";
import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import TemplatePreview from "../../components/home/TemplatePreview";
import FAQ from "../../components/home/FAQ";
import Testimonials from "../../components/home/Testimonials";

function HomePage() {
    return (
        <Layout>
            <Hero />
            <Features />
            <TemplatePreview />
            <Testimonials />
            <FAQ />
        </Layout>
    );
}

export default HomePage;