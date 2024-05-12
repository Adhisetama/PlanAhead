import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
    return (
      <div>
        <Navbar/>
        <main className="flex flex-col items-center justify-center h-screen">
          <div>
            <Image
              alt="Mountains"
              fill={true}
              src="/landing-page-header.png"
              objectFit="contain"
              style={{
                zIndex: -1
              }}
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Plan Your Everyday Doings</h1>
          <p className="text-white text-lg mb-8">Here to help you manage your plans!</p>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Schedule</button>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }