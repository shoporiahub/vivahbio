type DividerProps = {
    className?: string;
};

export default function Divider({
    className = "",
}: DividerProps) {
    return (
        <div
            className={`
                w-full
                h-px
                bg-gray-300
                my-4
                ${className}
            `}
        />
    );
}