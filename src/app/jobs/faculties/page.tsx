// pages/jobs/faculties.tsx

export default function Faculties() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="max-w-3xl p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-center text-3xl font-bold text-blue-900 mb-6">Faculties</h1>
                <p className="text-lg text-gray-700 mb-6">
                    We offer a wide range of job opportunities in various faculties.
                </p>

                {/* Dummy Job Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Job 1 */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-bold text-blue-900">Mathematics Teacher</h3>
                        <p className="text-gray-700">Location: City A</p>
                        <p className="text-gray-700">Salary: $4000/month</p>
                    </div>

                    {/* Job 2 */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-bold text-blue-900">Science Teacher</h3>
                        <p className="text-gray-700">Location: City B</p>
                        <p className="text-gray-700">Salary: $4500/month</p>
                    </div>

                    {/* Job 3 */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-bold text-blue-900">English Teacher</h3>
                        <p className="text-gray-700">Location: City C</p>
                        <p className="text-gray-700">Salary: $4200/month</p>
                    </div>

                    {/* Job 4 */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-bold text-blue-900">History Teacher</h3>
                        <p className="text-gray-700">Location: City D</p>
                        <p className="text-gray-700">Salary: $4100/month</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
