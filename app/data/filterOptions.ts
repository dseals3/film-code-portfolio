export const workTypes = [
    "Narrative",
    "Commercial",
    "Music Video",
    "Youtube",
    "Vertical",
    "Software",
];
export const roles = [
    "Director",
    "Director of Photography",
    "1st Assistant Camera",
    "Gaffer",
    "Grip",
    "Editor",
    "Colorist",
    "Production Assistant"
];
export const tools = [
    "Sony Camera",
    "Blackmagic Camera",
    "Drone",
    "Custom Rig",
    "Davinci Resolve"
]
export const toolFilters: Record<string, string[]> = {
    "Sony Camera": [
    "Sony a7iv",
    "Sony ZV-E1",
    "Sony FX30",
    "Sony FX6"
    ],
    "Blackmagic Camera": [
    "Blackmagic Pocket 6k Pro",
    ],
    "Drone": [
    "DJI Mini 3 Pro"
    ],
    "Custom Rig": [
    "Custom Drop Rig",
    "Plexiglass Platform"
    ],
    "Davinci Resolve": [
    "Davinci Resolve"
    ]
};