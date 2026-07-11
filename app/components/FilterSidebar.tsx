export default function FilterSidebar() {
  return (
    <aside
        className="
            sticky top-24
            h-fit
            rounded-xl
            border border-white/10
            bg-white/[0.02]
            p-6
    ">
        <h2 className="text-lg font-semibold mb-4">
            Filters
        </h2>

        <div className="space-y-2">
            <h3 className="
                text-xs
                uppercase
                tracking-widest
                text-gray-500
                mb-3"
            >
                Work Type
            </h3>
            <div className="border-t border-white/10 my-6" />

            <label
                className="
                    flex items-center gap-3
                    py-2
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
                Narrative
            </label>
            <label>
                <input type="checkbox"/>
                Commercial
            </label>
            <label>
                <input type="checkbox"/>
                Youtube
            </label>
            <label>
                <input type="checkbox"/>
                Vertical
            </label>
            <label>
                <input type="checkbox"/>
                Software
            </label>
        </div>
        <div>
            <h3 className="
                text-xs
                uppercase
                tracking-widest
                text-gray-500
                mb-3"
            >
                Role
            </h3>

            <label>
                <input type="checkbox"/>
                Director
            </label>
            <label>
                <input type="checkbox"/>
                Director of Photography
            </label>
            <label>
                <input type="checkbox"/>
                1st Assistant Camera
            </label>
            <label>
                <input type="checkbox"/>
                Gaffer
            </label>
            <label>
                <input type="checkbox"/>
                Grip
            </label>
            <label>
                <input type="checkbox"/>
                Editor
            </label>
            <label>
                <input type="checkbox"/>
                Colorist
            </label>
      </div>
      <div>
            <h3 className="
                text-xs
                uppercase
                tracking-widest
                text-gray-500
                mb-3"
            >
                Tools Used
            </h3>

            <label>
                <input type="checkbox"/>
                Sony a7iv
            </label>
            <label>
                <input type="checkbox"/>
                Blackmagic Pocket 6k Pro
            </label>
            <label>
                <input type="checkbox"/>
                Drone
            </label>
            <label>
                <input type="checkbox"/>
                Custom Rigs
            </label>
            <label>
                <input type="checkbox"/>
                Davinci Resolve
            </label>
      </div>
        
    </aside>
  );
}