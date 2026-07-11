type FilterCheckboxProps = {
    label: string;
};

export default function FilterCheckbox({
    label,
}: FilterCheckboxProps) {
    return (
        <label
            className="
                flex items-center gap-3
                py-1
                text-md
                text-gray-300
                cursor-pointer
            ">
            <input
                type="checkbox"
                className="peer sr-only"
            />

            <div
                className="
                h-4 w-4
                rounded
                border border-white/20
                bg-white/[0.02]

                peer-checked:bg-white
                peer-checked:border-white

                border border-white/20
                    hover:border-white/40

                transition
                "
            />
            {label}
        </label>
    );
}