import { dev } from "$app/environment";

import { inject } from "@vercel/analytics";

export function load({ url }) {
    return {
        url: url.pathname,
    };
}

inject({ mode: dev ? "development" : "production" });
