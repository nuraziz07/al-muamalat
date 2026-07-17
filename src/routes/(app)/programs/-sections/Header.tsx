
interface HeaderProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeader({title, subtitle}: HeaderProps) {
    return (
        <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 text-[40px] font-[600] text-[#000000]">
                {title}
            </h2>
            {subtitle && <p className="text-lg leading-relaxed text-gray-500">{subtitle}</p>}
        </div>
    );
}