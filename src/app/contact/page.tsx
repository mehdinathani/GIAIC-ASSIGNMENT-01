export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="max-w-3xl p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-center text-3xl font-bold text-blue-900 mb-6">Contact Us</h1>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    We would love to hear from you! Feel free to reach out through any of the platforms below.
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://www.linkedin.com/in/mehdinathani/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold underline hover:text-blue-500">
                        LinkedIn
                    </a>
                    <a href="https://github.com/mehdinathani" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold underline hover:text-gray-600">
                        GitHub
                    </a>
                    <a href="https://twitter.com/mehdinathani" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold underline hover:text-blue-300">
                        Twitter
                    </a>
                </div>

                {/* Optional: Additional Contact Information */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Get in Touch</h2>
                    {/* <p className="text-lg text-gray-700">Email: mehdinathani@example.com</p> */}
                </div>
            </div>
        </div>
    );
}
