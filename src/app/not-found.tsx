export default function PageNotFound() {
    return (
        <div className=" bg-center min-h-screen flex flex-col items-center justify-center bg-grey-50">

            <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-6">Oops! Page Not Found.</p>
            <a href="/" className="text-blue-700 font-bold underline hover:text-blue-500">Go back to Home</a>
        </div>

    );
}