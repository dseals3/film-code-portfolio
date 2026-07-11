export default function FilterSidebar() {
  return (
    <aside>
        <h2 className="text-lg font-semibold mb-4">
            Filters
        </h2>

        <div>
            <h3>Work Type</h3>

            <label>
            <input type="checkbox"/>
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
        </div>
        <div>
            <h3>Role</h3>

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
            <h3>Tools Used</h3>

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