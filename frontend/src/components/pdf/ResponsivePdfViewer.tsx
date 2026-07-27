import {
    type ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";

type Props = {
    children: ReactNode;
};

const A4_WIDTH = 794;   // px
const A4_HEIGHT = 1123; // px

function ResponsivePdfViewer({ children }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    const [scale, setScale] = useState(1);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const calculateScale = () => {
            const availableWidth = container.clientWidth - 24;

            const newScale = Math.min(
                1,
                availableWidth / A4_WIDTH
            );

            setScale(newScale);
        };

        calculateScale();

        const observer = new ResizeObserver(calculateScale);

        observer.observe(container);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-slate-200 py-4 sm:py-6 lg:py-10">
            <div
                ref={containerRef}
                className="mx-auto flex max-w-7xl justify-center px-3 sm:px-6 lg:px-8"
            >
                <div
                    style={{
                        width: A4_WIDTH * scale,
                        height: A4_HEIGHT * scale,
                    }}
                >
                    <div
                        style={{
                            width: A4_WIDTH,
                            transform: `scale(${scale})`,
                            transformOrigin: "top left",
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResponsivePdfViewer;