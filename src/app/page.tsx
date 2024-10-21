import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to GIAIC Assignment 01</h1>
      <p className="text-lg text-gray-700 text-center max-w-xl mb-8">
        This website is created as part of the GIAIC Wednesday class led by Sir Mubashir.
        Here, you will find various resources, including my Flutter projects and job opportunities.
      </p>
      {/* Add an Image here if needed */}
      <div className="relative w-64 h-64 mb-8">
        <Image
          src="/images/student.jfif" // Update the image path as necessary
          alt="Sample"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>
      <p className="text-lg text-gray-700">
        Explore the navigation bar to learn more about me, my projects, and the available job opportunities!
      </p>
    </div>
  );
}
