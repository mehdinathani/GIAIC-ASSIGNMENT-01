import Link from "next/link";

export default function AdministrativeJobs() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <div className="max-w-3xl p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-blue-900 mb-6">Administrative Jobs</h1>
                <p className="text-lg text-gray-700 mb-4">We offer a wide range of administrative job opportunities:</p>

                <div className="space-y-4">
                    {/* Job Listing 1 */}
                    <div className="p-4 border border-gray-300 rounded-lg hover:shadow-lg transition">
                        <h2 className="text-xl font-bold text-blue-800">Administrative Assistant</h2>
                        <p className="text-gray-600">Location: New York, NY</p>
                        <p className="text-gray-600">Experience: 2 years</p>
                        <Link href="#" className="text-blue-600 font-bold hover:underline">
                            View Details
                        </Link>
                    </div>

                    {/* Job Listing 2 */}
                    <div className="p-4 border border-gray-300 rounded-lg hover:shadow-lg transition">
                        <h2 className="text-xl font-bold text-blue-800">Office Manager</h2>
                        <p className="text-gray-600">Location: Los Angeles, CA</p>
                        <p className="text-gray-600">Experience: 5 years</p>
                        <Link href="#" className="text-blue-600 font-bold hover:underline">
                            View Details
                        </Link>
                    </div>

                    {/* Job Listing 3 */}
                    <div className="p-4 border border-gray-300 rounded-lg hover:shadow-lg transition">
                        <h2 className="text-xl font-bold text-blue-800">Receptionist</h2>
                        <p className="text-gray-600">Location: Chicago, IL</p>
                        <p className="text-gray-600">Experience: 1 year</p>
                        <Link href="#" className="text-blue-600 font-bold hover:underline">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
