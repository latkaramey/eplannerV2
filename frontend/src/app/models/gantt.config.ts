export class GANTT_CONFIG{
    public static ZOOM_CONFIG = {
        levels: [
            [
                 { unit: "day", format: "%d %M", step: 1 },
                 { unit: "hour", format: "%H", step: 1 }
            ],
            [
                 { unit: "day", format: "%d %M", step: 1 },
                 { unit: "hour", format: "%H", step: 3 }
            ],
            [
                 { unit: "day", format: "%d %M", step: 1 },
                 { unit: "hour", format: "%H", step: 6 }
            ],
            
            [
                { unit: "month", format: "%M %Y", step: 1 },
                { unit: "day", format: "%d %M", step: 1 }
            ],
        ]
    };

    public static DURATION_FORMATTER ={
        // default values
        enter: "hour",
        store: "hour",
        format: ["day", "hour"],
        short: true,
        hoursPerDay: 18,
        daysPerYear: 365,
        labels: {
            hour: {
                full: "hour",
                plural: "hours",
                short: "h"
            },
            day: {
                full: "day",
                plural: "days",
                short: "d"
            },
            month: {
                full: "month",
                plural: "months",
                short: "mon"
            },
            year: {
                full: "year",
                plural: "years",
                short: "y"
            }
        }
    }

    public static GANTT_ONLY_LAYOUT = {
        css: "gantt_container",
        rows: [
            {
                cols: [
                    { view: "grid", group: "grids", scrollY: "scrollVer" },
                    { resizer: true, width: 1 },
                    { view: "timeline", scrollX: "scrollHor", scrollY: "scrollVer" },
                    { view: "scrollbar", id: "scrollVer", group: "vertical" }
                ],
                //gravity: 2
            },
            { view: "scrollbar", id: "scrollHor" }
        ]
    };

    public static STD_CALENDAR_CONFIG = {
        worktime: {
            hours: [6, 24],
            days: [1, 1, 1, 1, 1, 1, 1]
        }
    }

    public static QUALITY_CALENDAR_CONFIG = {
        worktime: {
            hours: [8, 16],
            days: [1, 1, 1, 1, 1, 1, 1]
        }
    }

    public static TIMELINE_SCALES = [
        { unit: "day", step: 1, format: "%j %D" },
        { unit: "hour", step: 1, format: "%H" }
    ];

    public static PLUGINS_CONFIG = {
        marker: true,// Add Marker
        grouping: true,// Group by resources: Resource View plugin.
        auto_scheduling: true//Auto schedule: dependency management
    }
}