import { Header } from "@/components/Header";
import { Records } from "@/components/Records";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-[1200px] mx-auto">
        <Records />
      </div>
    </main>
  );
}
