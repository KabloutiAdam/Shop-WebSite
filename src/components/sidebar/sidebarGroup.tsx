


export default function SideBarGroup({ titre, children }: { titre?: string; children: React.ReactNode }) {


    return (
        <div className="mb-10">
            <p className="text-start font-bold">{titre}</p>
            {children}

        </div>
    )
}
