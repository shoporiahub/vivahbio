import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Home/HomePage";
import TemplatesPage from "../pages/Templates/TemplatesPage";
import TemplateDetailsPage from "../pages/TemplateDetails/TemplateDetailsPage";
import BiodataFormPage from "../features/biodata/pages/BiodataFormPage";
import BiodataPreviewPage from "../pages/BiodataPreviewPage";
import PricingPage from "../pages/Pricing/PricingPage";
import HowItWorksPage from "../pages/HowItWorks/HowItWorksPage";
import FAQPage from "../pages/FAQ/FAQPage";
import ContactPage from "../pages/Contact/ContactPage";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import PaymentPageWrapper from "../pages/paymentPageWrapper";
import RootLayout from "../components/RootLayout";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/templates",
                element: <TemplatesPage />,
            },
            {
                path: "/templates/:slug",
                element: <TemplateDetailsPage />,
            },
            {
                path: "/biodata",
                element: (
                    <ProtectedRoute>
                        <BiodataFormPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/preview",
                element: (
                    <ProtectedRoute>
                        <BiodataPreviewPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/pricing",
                element: <PricingPage />,
            },
            {
                path: "/how-it-works",
                element: <HowItWorksPage />,
            },
            {
                path: "/faq",
                element: <FAQPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/dashboard",
                element: (
                    <ProtectedRoute>
                        <DashboardPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/payment",
                element: (
                    <ProtectedRoute>
                        <PaymentPageWrapper />
                    </ProtectedRoute>
                ),
            },
        ]
    }

]);

export default router;