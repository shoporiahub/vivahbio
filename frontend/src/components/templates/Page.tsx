type PageProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Page({
    children,
    className = "",
}: PageProps) {
    return (
        <div className="flex justify-center bg-gray-100 py-8 print:bg-white print:py-0">
            <div
                className={`
                    page
                    relative
                    w-[794px]
                    h-[1123px]
                    bg-white
                    shadow-xl
                    overflow-hidden
                    print:shadow-none
                    ${className}
                `}
            >
                {children}
            </div>
        </div>
    );
}