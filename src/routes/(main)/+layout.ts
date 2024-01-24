import { dev } from "$app/environment";

import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

export function load({ url }) {
    return {
        url: url.pathname,
    };
}

inject({ mode: dev ? "development" : "production" });
injectSpeedInsights();
