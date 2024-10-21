import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="bg-blue-50 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* <div className="text-2xl font-bold text-blue-900">Mehdi s Website</div> */}
                <div className="space-x-6">
                    <Link href="/" className="text-blue-900 font-bold hover:text-blue-700">Home</Link>
                    <Link href="/about" className="text-blue-900  font-bold hover:text-blue-700">About Us</Link>
                    <Link href="/jobs/human_resource" className="text-blue-900  font-bold hover:text-blue-700">Human Resource</Link>
                    <Link href="/contact" className="text-blue-900 hover:text-blue-700  font-bold">Contact</Link>
                    <Link href="/jobs" className="text-blue-900 hover:text-blue-700  font-bold">Jobs</Link>
                    <Link href="/jobs/administration" className="text-blue-900 hover:text-blue-700  font-bold">Administration</Link>
                    <Link href="/jobs/faculties" className="text-blue-900 hover:text-blue-700  font-bold">Faculties</Link>
                    <Link href="/jobs/finance" className="text-blue-900 hover:text-blue-700  font-bold">Finance</Link>
                    <Link href="/jobs/programming" className="text-blue-900 hover:text-blue-700  font-bold">Programming</Link>
                </div>
            </div>
        </nav>
    );
}
