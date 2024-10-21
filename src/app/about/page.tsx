export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="max-w-3xl p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-center text-3xl font-bold text-blue-900 mb-6">About Us</h1>

                {/* Teacher and Student Images */}
                <div className="flex justify-around mb-8">
                    <div className="text-center">
                        <img src="images/teacher.jfif" alt="Teacher" className="w-32 h-32 object-cover rounded-full mx-auto mb-2" />
                        <p className="text-lg text-gray-700">Teacher</p>
                    </div>
                    <div className="text-center">
                        <img src="/images/student.jfif" alt="Student" className="w-32 h-32 object-cover rounded-full mx-auto mb-2" />
                        <p className="text-lg text-gray-700">Student</p>
                    </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    This website has been created for educational purposes as part of an assignment for the GIAIC Wednesday class led by Sir Mubashir.
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://www.linkedin.com/in/mehdinathani/" target="_blank" className="text-blue-700 font-bold underline hover:text-blue-500">
                        LinkedIn
                    </a>
                    <a href="https://github.com/mehdinathani" target="_blank" className="text-blue-700 font-bold underline hover:text-gray-600">
                        GitHub
                    </a>
                    <a href="https://twitter.com/mehdinathani" target="_blank" className="text-blue-700 font-bold underline hover:text-blue-300">
                        Twitter
                    </a>
                </div>

                {/* Clickable Flutter Projects Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">My Flutter Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <a href="https://mehdinathani.github.io/projects/deathofdevil/" target="_blank" className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                            <img src="/images/deathofdevil.png" alt="Death of Devil" className="w-full h-32 object-cover mb-2 rounded" />
                            <h3 className="text-lg font-bold text-blue-900">Green Groove Challenge</h3>
                        </a>

                        {/* Project 2 */}
                        <a href="https://mehdinathani.github.io/projects/tasbeehcounter/" target="_blank" className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                            <img src="/images/tasbeeh_counter.PNG" alt="Tasbih Counter" className="w-full h-32 object-cover mb-2 rounded" />
                            <h3 className="text-lg font-bold text-blue-900">Tasbih Counter</h3>
                        </a>

                        {/* Project 3 */}
                        <a href="https://mehdinathani.github.io/projects/virtuchat/" target="_blank" className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                            <img src="/images/virtuchat.png" alt="Virtue Chat" className="w-full h-32 object-cover mb-2 rounded" />
                            <h3 className="text-lg font-bold text-blue-900">Virtue Chat</h3>
                        </a>
                        {/* Project 3 */}
                        <a href="https://mehdinathani.github.io/projects/bankwise/" target="_blank" className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                            <img src="/images/bankwiselogo.png" alt="Bank Wise" className="w-full h-32 object-cover mb-2 rounded" />
                            <h3 className="text-lg font-bold text-blue-900">Virtue Chat</h3>
                        </a>
                    </div>
                </div>

                {/* Fiverr Link */}
                <div className="text-center">
                    <a href="https://www.fiverr.com/mehdinathani" target="_blank" className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600">
                        Hire Me on Fiverr
                    </a>
                </div>
            </div>
        </div>
    );
}
