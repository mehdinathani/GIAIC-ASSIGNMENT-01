import Link from "next/link";

export default function NavBar() {
    return <div>

        <div>
            <Link href="/" className="text-blue-900" >Home</Link>
        </div>
        <div>
            <Link href="/about" className="text-blue-900">About Us </Link>
            <Link href="/jobs/human_resource" className="text-blue-900">Human Resource</Link>
        </div>
    </div >

}