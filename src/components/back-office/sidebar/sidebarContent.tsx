


export default function SideBarContent({ children }: { children: React.ReactNode }) {


    return (
        <div className="p-5 h-fit pt-0 flex flex-col justify-start overflow-y-auto w-full border-r border-r-gray-200">
            {children}
        </div>
    )
}
