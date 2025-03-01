"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleButtonClick = (value: string) => {
    setActiveButton(value);
    console.log("value of active button is", activeButton);
  };

  const handleSetTime = (minutes: string) => {
    setTimeLeft(Number(minutes) * 60);
    setIsRunning(false);
  };

  const handleTyping = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 0) {
      setIsTyping(true);
      setIsRunning(true);
    } else {
      setIsTyping(false);
      setIsRunning(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col min-h-screen w-screen text-gray-100">
      <header className="p-4 flex justify-center items-center space-x-4">
        <Button
          variant="outline"
          className={`bg-gray-700 border-none ${activeButton === "5" ? "bg-gray-100 text-black" : "hover:bg-gray-500"}`}
          onClick={() => handleButtonClick("5")}
        >
          5 min
        </Button>
        <Button
          variant="outline"
          className={`bg-gray-700 border-none ${activeButton === "10" ? "bg-gray-100 text-black" : "hover:bg-gray-500"}`}
          onClick={() => handleButtonClick("10")}
        >
          10 min
        </Button>
        <Button
          variant="outline"
          className={`bg-gray-700 border-none ${activeButton === "15" ? "bg-gray-100 text-black" : "hover:bg-gray-500"}`}
          onClick={() => handleButtonClick("15")}
        >
          15 min
        </Button>
      </header>
      <main>
        <textarea
          className="bg-transparent h-full  w-80 resize-none outline-none p-4 m-4 text-white text-xl"
          placeholder="Start typing your thoughts..."
          onChange={handleTyping}
        />
      </main>
    </div>
  );
}
