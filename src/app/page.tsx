import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-12 items-center justify-center">
      <h1 className="text-3xl tracking-tight font-semibold">Megnetic Button</h1>
      <MagneticButton />
    </div>
  );
}
