import Chatbot from "@/components/chatbot";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-6xl font-extrabold text-white mb-6 leading-tight tracking-wide drop-shadow-lg">
          Velkommen til Trening Chatbot!
        </h1>
        <p className="text-lg text-gray-200 max-w-xl mx-auto mb-8">
          Få personlig hjelp til trening og kosthold – når som helst, hvor som helst. Vår chatbot er alltid klar til å gi deg ekspertråd for å oppnå dine treningsmål.
        </p>
      </div>

        <Chatbot />

      {/* Footer or Additional Section */}
      <div className="text-center mt-12 text-gray-200">
        <p className="text-lg">Er du klar til å komme i gang? Spør chatboten vår alt om trening og kosthold!</p>
      </div>
    </main>
  );
}
