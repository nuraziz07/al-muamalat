import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: "class",
	content: ["./index.ts.html", "./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
				"2xl": "100.98rem",
			},
		},
		extend: {
			colors: {
				primary: "var(--color-primary)",
				danger: "var(--color-danger)",
				success: "var(--color-success)",

				base: "var(--color-text-base)",
				secondary: "var(--color-text-secondary)",
				tertiary: "var(--color-text-tertiary)",
				dark: "var(--color-text-dark)",
				soft: "var(--color-text-light)",
				dim: "var(--color-text-muted)",
				medium: "var(--color-text-neutral)",

				"surface-light": "var(--color-surface-light)",
				"surface-subtle": "var(--color-surface-subtle)",
				"surface-neutral": "var(--color-surface-neutral)",
				"surface-elevated": "var(--color-surface-elevated)",
				"surface-muted": "var(--color-surface-muted)",
				"surface-accent": "var(--color-surface-accent)",
				"surface-pure": "var(--color-surface-pure)",
				"surface-warm": "var(--color-surface-warm)",
				"surface-primary-light": "var(--color-surface-primary-light)",
				"accent-light": "var(--color-accent-light)",
				"accent-success-light": "rgb(var(--color-accent-success-light))",

				default: "var(--color-border-default)",
				subtle: "var(--color-border-subtle)",
				minimal: "var(--color-border-minimal)",
				pure: "var(--color-border-pure)",
				light: "var(--color-border-light)",
				muted: "var(--color-border-muted)",
				neutral: "var(--color-border-neutral)",

				"accent-primary": "var(--color-accent-primary)",
				"accent-primary-medium": "var(--color-accent-primary-medium)",
				"accent-primary-soft": "var(--color-accent-primary-soft)",
				"accent-primary-dark": "var(--color-accent-primary-dark)",
				"accent-primary-light": "var(--color-accent-primary-light)",
				"accent-info": "var(--color-accent-info)",
				"accent-warning": "var(--color-accent-warning)",
				"accent-danger-variant": "var(--color-accent-danger-variant)",

				"shadow-base": "var(--color-shadow-base)",
				"shadow-dark": "var(--color-shadow-dark)",
				"shadow-neutral": "var(--color-shadow-neutral)",
				"shadow-subtle": "var(--color-shadow-subtle)",
				"shadow-muted": "var(--color-shadow-muted)",

				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
			},
			borderRadius: {
				card: "var(--radius-card)",
				panel: "var(--radius-panel)",
				badge: "var(--radius-badge)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"soft-ping": {
					"0%": { transform: "scale(1)", opacity: "0.6" },
					"70%": { transform: "scale(1.4)", opacity: "0" },
					"100%": { transform: "scale(1.4)", opacity: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"soft-ping": "soft-ping 5s cubic-bezier(0, 0, 0.2, 1) infinite",
			},
			fontSize: {
				h6: ["12px", "var(--default-line-height)"],
				h5: ["14px", "var(--default-line-height)"],
				h4: ["18px", "var(--default-line-height)"],
				h3: ["22px", "var(--default-line-height)"],
				h2: ["32px", "var(--default-line-height)"],
				h1: ["42px", "var(--default-line-height)"],
			},
			fontFamily: {
				ptsans: ["var(--font-ptsans)", ...fontFamily.sans],
			},
			zIndex: {
				1: "1",
				2: "2",
			},
			gridTemplateColumns: {
				16: "repeat(16, minmax(0, 1fr))",
				18: "repeat(18, minmax(0, 1fr))",
				26: "repeat(26, minmax(0, 1fr))",
				28: "repeat(28, minmax(0, 1fr))",
				30: "repeat(30, minmax(0, 1fr))",
			},
			gridColumn: {
				"span-14": "span 14 / span 14",
				"span-16": "span 16 / span 16",
				"span-28": "span 28 / span 28",
			},
			boxShadow: {
				general: "var(--shadow-general)",
				mini: "var(--shadow-mini)",
			},
		},
	},
	plugins: [tailwindcssAnimate],
};