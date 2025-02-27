import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col min-h-screen w-screen text-gray-100">
      <header className="p-4 flex justify-center items-center space-x-4">
        <Button variant="outline" className="bg-gray-700">
          5 min
        </Button>
        <Button variant="outline" className="bg-gray-700">
          10 min
        </Button>
        <Button variant="outline" className="bg-gray-700">
          15 min
        </Button>
      </header>
      <main>
        <textarea
          className="bg-transparent h-full  w-80 resize-none outline-none p-4 m-4 text-white text-xl"
          placeholder="Start typing your thoughts..."
        />
      </main>
    </div>
  );
}
