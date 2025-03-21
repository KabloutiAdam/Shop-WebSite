export default function ProductList({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-5 h-fit">
            {children}
        </div>
    );
}
