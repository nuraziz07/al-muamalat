import {useSyncExternalStore} from "react";

function subscrive(callback: () => void) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    }
}

function getSnapshot() {
    return navigator.onLine
}

export const useOnlineStatus = () => {
    return useSyncExternalStore(subscrive, getSnapshot)
}