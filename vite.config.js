import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    // Ensure trailing slash for correct asset resolution on GitHub Pages
    base: process.env.NODE_ENV === "production" ? "/Inspire-Resources/" : "/"
})