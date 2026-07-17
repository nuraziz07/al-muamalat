import { createRoot } from 'react-dom/client'
import './index.css'

import {routeTree} from "./routeTree.gen.ts";
import {createRouter} from "@tanstack/react-router";
import App from "@/App";

const router = createRouter({
    routeTree
})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

createRoot(document.getElementById('root')!).render(<App />)
window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('web-preloader')
    if(preloader) {
        preloader.style.opacity = '0'
        setTimeout(() => preloader.remove(), 300)
    }
})