// src/app/components/Loading.tsx

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 mb-4"></div>
                <p className="text-lg text-gray-700">Loading...</p>
            </div>
        </div>
    );
}
