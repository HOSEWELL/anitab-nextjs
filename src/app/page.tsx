import SectionAtom from "./components/atoms";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl text-pink-700 text-center">Introduction to nextjs</h1>
      <SectionAtom heading="About us">
        <div>
            <p>We are learning NextJs</p>
            <Link href="/about"><button>About us</button></Link>
        </div>
      </SectionAtom>
     
    </main>
  );
}
