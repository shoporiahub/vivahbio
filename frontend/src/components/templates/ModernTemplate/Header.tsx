import Divider from "./Divider";
import { modernTheme } from "./theme";

type Props = {
    name: string;
};

export default function Header({ name }: Props) {
    return (
        <header>
            <div
                className="rounded-t-md px-8 py-5 text-center"
                style={{
                    backgroundColor: modernTheme.primary,
                }}
            >
                <h1 className="text-[34px] font-bold tracking-wide text-white">
                    {name || "YOUR NAME"}
                </h1>

                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/90">
                    Seeking A Perfect Life Partner
                </p>
            </div>

            <Divider className="my-5" />
        </header>
    );
}