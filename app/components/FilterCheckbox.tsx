type FilterCheckboxProps = {
    label: string;
    checked: boolean;
    onChange: () => void;
};

export default function FilterCheckbox({
    label, checked, onChange
}: FilterCheckboxProps) {
    return (
        <label
            className="
                group
                flex items-center gap-3
                py-1
                text-md
                text-gray-300
                cursor-pointer
                select-none
                hover:text-white
                transition-colors
            ">
            <input
                type="checkbox"
                checked={checked ?? false}
                onChange={onChange}
                className="peer sr-only"
            />

            <span
                className="
                h-4 w-4
                rounded
                border border-white/20
                bg-white/[0.02]

                peer-checked:bg-white
                peer-checked:border-white

                group-hover:border-white/40

                transition
                flex items-center justify-center
                "
            >
                <svg
                    className="
                        h-3 w-3
                        text-black
                        opacity-0
                        group-has-[:checked]:opacity-100
                        transition-opacity
                    "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </span>
            {label}
        </label>
    );
}