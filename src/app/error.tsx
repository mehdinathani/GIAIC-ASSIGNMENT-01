'use client';

export default function ErrorPage() {
    return <div className="min-h-screen flex items-center justify-center bg-red-50">
        <h1 className="text-6xl font-bold text-red-600 mb-4"></h1>
        <p className="text-xl text-gray-700 mb-6">Something went wrong. Please try later</p>
    </div>
}