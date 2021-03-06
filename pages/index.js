import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-body">
      <div className="bg-slate-100 pt-10 h-screen">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image className="rounded-2xl object-cover" src="/Adewole.jpg" alt="Logo" width={200} height={200} />
          </div>
          <h2 className="mb-4 text-3xl font-bold">David Adewole</h2>
          <a target="_blank" href="/David_Adewole_Resume.pdf" rel="noreferrer" className="font-bold mb-4 underline">MY RESUME</a>
          <p className="font-medium text-lg pl-3 pr-3">
            Hi I&apos;m David. I&apos;m a Nigerian developer who loves to solve
            problems through programming and learning new things.
          </p>
        </div>
        <div className="flex mt-16 w-4/5 justify-around ml-12 md:ml-24">
          <div>
            <Image className="object-cover" src="/project.png" alt="Logo" width={50} height={50} />
            <p className="mt-4 text-purple-800 text-lg font-semibold cursor-pointer"><Link href="/projects">Projects</Link></p>
          </div>
          <div>
            <Image className="object-cover" src="/github.png" alt="Logo" width={50} height={50} />
            <p className="mt-4 text-purple-800 text-lg font-semibold cursor-pointer"><a target="_blank" href="https://github.com/adeoluwadavid" rel="noreferrer">Github</a></p>
          </div>
          <div>
            <Image className="object-cover" src="/linkedin.png" alt="Logo" width={50} height={50} />
            <p className="mt-4 text-purple-800 text-lg font-semibold cursor-pointer"><a target="_blank" href="https://www.linkedin.com/in/davidadewole/" rel="noreferrer">LinkedIn</a></p>
          </div>
          <div>
            <Image className="object-cover"  src="/skills.png" alt="Logo" width={50} height={50} />
            <p className="mt-4 text-purple-800 text-lg font-semibold cursor-pointer"><Link href="/skills">Skills</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
