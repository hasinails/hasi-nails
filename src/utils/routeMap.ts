import { selectedLocate } from "./i18n";

const ROUTE_MAP = {
    index: "",
    pricing: {
        index: "pricing",
    },
    about: {
        index: "about",
    },
    "gallery": {
        index: "gallery",
    },
    contact: {
        index: "contact",
    },
    impressum: {
        index: "impressum"
    },
    datenschutz: {
        index: "datenschutz"

    }
} as const;

type RouteMap = typeof ROUTE_MAP;

const toPath = (parentPath: string, path: string) => {
    if (parentPath === "" || parentPath === "/") {
        return `/${path}`;
    }
    if (path === "" || path === "/") {
        return parentPath;
    }
    return `${parentPath}/${path}`;
};

export function generateRouteMap(map: RouteMap = ROUTE_MAP, parentPath = "") {
    const result: any = {};
    const locateStorage = selectedLocate().locate || "en-US";


    for (const key in map) {
        // @ts-ignore
        const path = map[key];

        if (typeof path === "string") {
            const fullPath = toPath(parentPath, path);
            result[key] = "/" + locateStorage + fullPath;
        } else {
            result[key] = generateRouteMap(path, toPath(parentPath, map["index"]));
        }
    }

    return result as RouteMap;
}

/**
 * routeMap.thankyou.index === "/thankyou"
 */
export const routeMap = Object.freeze(generateRouteMap());
