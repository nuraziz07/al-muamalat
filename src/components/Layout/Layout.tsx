import {Footer, NavBar, OnlineStatus} from './components';
import {Outlet} from "@tanstack/react-router";
import {Suspense, type PropsWithChildren} from "react";

export const Layout = ({children}: PropsWithChildren) => {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="fixed z-[1000000000000]">
                <OnlineStatus />
            </div>
            <NavBar />
            <main className="flex-1 pt-[60px]">
                <Suspense>
                    {children ?? <Outlet />}
                </Suspense>
            </main>

            <Footer />
        </div>
    );
};
