import React from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoMdSend } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Chatbot() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-4 bg-white rounded-full shadow-lg text-blue-500 hover:bg-blue-100 focus:outline-none transition-all transform hover:scale-110 active:scale-95">
            <GiWeightLiftingUp size={24} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="bg-white shadow-lg rounded-lg p-6 w-80 h-96 flex flex-col"
          sideOffset={5}
        >
          <div className="bg-blue-500 text-white px-4 py-2 rounded-t-md text-center">
            <p className="font-bold">Send oss en melding</p>
          </div>

          <div className="flex-grow p-4 overflow-y-auto">
            <p className="text-gray-600 text-sm mb-4">
              Vi hjelper deg med det meste som handler om trening!
            </p>
          </div>

          <div className="p-4 border-t relative">
            <input
              type="text"
              placeholder="Skriv en melding..."
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-12 pr-12"
            />
            <button className="text-blue-500 hover:text-blue-600 absolute right-6 top-1/2 transform -translate-y-1/2">
              <IoMdSend size={20} />
            </button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
