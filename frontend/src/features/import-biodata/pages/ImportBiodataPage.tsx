import Layout from "../../../components/layout/Layout";
import UploadZone from "../components/UploadZone";

function ImportBiodataPage() {
    return (
        <Layout>

            <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

                {/* Background Blur */}

                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

                <div className="relative py-20">

                    <div className="mx-auto max-w-6xl px-6">

                        {/* Hero */}

                        <div className="mx-auto max-w-3xl text-center">

                            <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-semibold text-blue-200">
                                AI Powered Import
                            </span>

                            <h1 className="mt-8 text-5xl font-extrabold text-white md:text-6xl">
                                Import Your Existing
                                <span className="text-blue-300">
                                    {" "}Marriage Biodata
                                </span>
                            </h1>

                            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                                Upload your existing marriage biodata and let
                                VivahCraft AI automatically extract all your
                                details into a beautiful editable biodata.
                            </p>

                        </div>

                        {/* Upload */}

                        <div className="mx-auto mt-20 max-w-3xl rounded-[2rem] border border-white/10 bg-white/95 p-8 shadow-2xl backdrop-blur-sm">

                            <UploadZone />

                        </div>

                    </div>

                </div>

            </div>

        </Layout>
    );
}

export default ImportBiodataPage;