import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#0b0f19", panel: "#111827", violet: "#7c3aed" } } }, plugins: [] } satisfies Config;
