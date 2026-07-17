import React from 'react';
import { Badge } from "@/components/ui/badge";

export type HeroBadgeProps = {
    badge: string;
    title: string;
}

export function HeroBadge({badge, title}: HeroBadgeProps) {
    return (
        <div className="relative z-10 flex flex-col items-start gap-4">
            <Badge className="bg-white px-5 py-5 text-[15px] font-medium text-[#252641] shadow-sm">{badge}</Badge>
            <h1 className="text-[58px] font-bold leading-tight text-white">{title}</h1>
        </div>
    )
}