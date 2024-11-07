export default function CardContainer({ titulo, children }) {
    return (
        <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">{titulo}</h1>
            <div className="flex overflow-x-auto space-x-4 p-4">
                {children}
            </div>
        </div>
    );
}
