import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center text-sm p-4">
      <p className="font-bold">Belajar AI dengan Ferdi</p>
      <div className="flex justify-center gap-3">
        <Link href="https://youtu.be/4YiYV_cT5Ak">Youtube</Link>
        <Link href="https://github.com/Belajar-AI-dengan-Ferdi/free-ai-puter">Github</Link>
      </div>
    </footer>
  );
}
