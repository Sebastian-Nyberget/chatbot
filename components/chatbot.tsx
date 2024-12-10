"use client";

import React from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoMdSend } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bot, Send, User2 } from "lucide-react";
import { useChat } from "ai/react";
import Markdown from "@/components/Markdown";
import { Separator } from "./ui/separator";



export default function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/genai",
    });

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {renderForm()}
    </main>
  );

  function renderForm() {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-4 bg-white rounded-full shadow-lg text-blue-500 hover:bg-blue-100 focus:outline-none transition-all transform hover:scale-110 active:scale-95">
              <GiWeightLiftingUp size={24} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-white shadow-lg rounded-lg p-6 w-96 max-h-96 overflow-y-auto"
            sideOffset={5}
            align="end"
          >
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(event, {
                  data: {
                    prompt: input,
                  },
                });
              }}
            >
          <div className="bg-blue-500 text-white px-4 py-2 rounded-t-md text-center">
            <p className="font-bold">Trening Chatbot</p>
          </div>
            <div className="flex p-4">
              <p className="text-gray-600 text-sm mb-4">
                Vi hjelper deg med det meste som handler om trening!
              </p>
            </div>

            <Separator className="m-2" />

              {renderMessages()}

            <div className="flex bottom-0">
              <input
                type="text"
                placeholder="Skriv inn..."
                value={input}
                onChange={handleInputChange}
                className="border-b border-dashed outline-none w-full px-4 py-2 text-[#0842A0ff] text-right focus:placeholder-transparent"
              />
              <button
                type="submit"
                className="rounded-full shadow-md border flex flex-row"
              >
                <Send className="p-3 h-10 w-10 stroke-stone-500 " />
              </button>
              </div>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  function renderMessages() {
    return (
      <div
        id="chatbox"
        className="flex flex-col w-full text-left mt-4 mb-8 gap-4 whitespace-pre-wrap"
      >
        {messages.map((m, index) => {
          return (
            <div
              key={index}
              className={`p-4 shadow-md rounded-md ml-10 relative ${
                m.role === "user" ? "bg-stone-300" : ""
              }`}
            >
              {m.role === "assistant" && (
                <Bot
                  className={`absolute top-2 -left-10 border rounded-full p-1 shadow-lg stroke-[#0842A0] ${
                    isLoading && index === messages.length - 1
                      ? "animate-bounce"
                      : ""
                  }`}
                />
              )}
              <Markdown text={m.content} />
              {m.role === "user" && (
                <User2 className="absolute bottom-2 -left-10 border rounded-full p-1 shadow-lg" />
              )}
            </div>
          );
        })}

      </div>
    );
  }
}