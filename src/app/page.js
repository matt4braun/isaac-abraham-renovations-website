import Image from "next/image";
// import Button from '../components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-5">
        <h1 className="text-2xl font-bold mb-5">Abraham Renovations</h1>
        <p>Run by Isaac Abraham</p>
        <p>Based in Ottawa, Ontario</p>
        <hr className="divider mb-5" />

        <div className="grid grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-center items-center">
            <div className="mb-3">
              
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Drywalling</p>
              <p className="text-sm"></p>
              <Image src = "/wall.png" width = "400" height = "100"></Image>

        
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-center items-center">
            <div className="mb-3">
              
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Basement Finishing</p>
              <p className="text-sm"></p>
              <Image src = "/finished.jpg" width = "400" height = "200"></Image>
              
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-center items-center">
            <div className="mb-3">
              
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Hardwood Floors</p>
              <p className="text-sm">.</p>
              <Image src = "/hardfloor.jpg" width = "200" height = "100"></Image>
              
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-center items-center">
            <div className="mb-3">
              
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Hardwood Stairs</p>
              <p className="text-sm">.</p>
              <Image src = "/hardstairs.jpg" width = "200" height = "100"></Image>
              
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-center items-center">
            <div className="mb-3">
              
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Decks</p>
              <p className="text-sm">.</p>
              <Image src = "/deck.png" width = "300" height = "100"></Image>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-center items-center">
            <div className="mb-3">
              
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Contact Information</p>
              <p className="text-me">Unfortunately, Abraham Renovations is currently flooded with jobs and is unable to take on anymore.</p> 
              <p>If this changes Contact Information will be uploaded here</p>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
