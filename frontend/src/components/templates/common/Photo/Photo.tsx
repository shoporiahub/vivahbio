type PhotoProps = {
    src?: string | null;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
};

export default function Photo({
    src,
    alt = "Profile Photo",
    width = 180,
    height = 220,
    className = "",
}: PhotoProps) {
    return (
        <div
            className={`overflow-hidden bg-gray-100 ${className}`}
            style={{
                width,
                height,
            }}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover"
                />
            ) : (
                <div className="flex h-full items-center justify-center text-sm text-gray-500">
                    No Photo
                </div>
            )}
        </div>
    );
}