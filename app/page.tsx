import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-4 bg-red-100">
      <div className="w-full max-w-5xl items-center justify-center flex flex-col">
        <div className="flex flex-col items-center justify-center gap-4 pb-8 pt-4 md:pointer-events-auto md:p-4">
          <p className="text-3xl font-bold items-center justify-center flex text-center">
            Kalaya Grimshaw
          </p>
          <p className="text-sm text-gray-500 flex items-center">
            Welcome to my portfolio website. The home of all my passion projects
            and resume details.
          </p>
        </div>
      </div>

      <div className="">
        <p className="text-8xl font-bold">Portfolio 2024</p>
      </div>

      <div className="flex flex-row item-center justify-between gap-5 bg-gray-900 w-full max-w-5xl p-10 text-white">
        <p className="flex font-mono">Copyright © 2024 Kalaya Grimshaw</p>
        <p className="flex font-thin text-gray-500">
          Developed by Kalaya Grimshaw
        </p>
      </div>
    </main>
  );
}
