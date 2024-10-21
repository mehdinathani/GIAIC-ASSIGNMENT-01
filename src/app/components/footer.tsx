export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    Created by <span className="font-bold">Mehdi Abbas Nathani</span>
                </p>
                <p className="text-xs mt-2">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}
