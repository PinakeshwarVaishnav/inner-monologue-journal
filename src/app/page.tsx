export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex min-h-screen w-screen text-gray-100">
      <textarea
        className="bg-transparent h-[calc(100vh -16px)] w-full resize-none outline-none p-4 m-4 text-white text-xl font-mono"
        placeholder="Start typing your thoughts..."
      />
    </div>
  );
}
