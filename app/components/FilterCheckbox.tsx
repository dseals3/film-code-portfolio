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
                flex items-center gap-3
                py-1
                text-md
                text-gray-300
                cursor-pointer
            ">
            <input
                type="checkbox"
                checked={checked ?? false}
                onChange={onChange}
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