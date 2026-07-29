type DividerProps = {
    className?: string;
};

export default function Divider({
    className = "",
}: DividerProps) {
    return (
        <hr
            className={`
                w-full
                border-0
                border-t
                border-current
                ${className}
            `}
        />
    );
}