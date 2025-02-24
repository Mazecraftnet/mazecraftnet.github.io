import React, { useEffect, useState } from "react";
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";

const images = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
  "/slide4.jpg",
  "/slide5.jpg",
];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <header className="flex justify-between p-4 bg-gray-900">
        <img src="/logo.png" alt="Mazecraft Network" className="w-64 h-16" />
        <nav className="flex gap-6">
          <a href="/docs" className="text-orange-400">Docs</a>
          <button className="text-red-400">Shop (Coming Soon)</button>
        </nav>
      </header>

      {/* Slideshow */}
      <div className="h-[400px] w-full relative overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Slideshow"
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${currentImage === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      {/* About Section */}
      <section className="p-8 text-center bg-gray-800">
        <h2 className="text-3xl text-purple-400">About Mazecraft</h2>
        <p className="mt-4 text-lg">Founded in 2024, Mazecraft Network provides the best Minecraft experience.</p>
      </section>

      {/* Gamemodes */}
      <section className="p-8 bg-gray-900 text-center">
        <h2 className="text-3xl text-orange-400">Our Gamemodes</h2>
        <div className="flex justify-center gap-8 mt-6">
          <div className="bg-gray-800 p-4 rounded-lg w-72">
            <img src="/survival.jpg" alt="Survival" className="w-full h-40 rounded-lg" />
            <h3 className="text-xl mt-2">Survival</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg w-72">
            <img src="/skyblock.jpg" alt="Skyblock" className="w-full h-40 rounded-lg" />
            <h3 className="text-xl mt-2">Skyblock</h3>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="p-8 bg-gray-800 text-center">
        <h2 className="text-3xl text-red-400">Our Staff</h2>
        <div className="flex justify-center gap-6 mt-6">
          <div className="text-center">
            <img src="/staff1.jpg" alt="Staff 1" className="w-20 h-20 rounded-full mx-auto" />
            <p className="mt-2">Admin - Steve</p>
          </div>
          <div className="text-center">
            <img src="/staff2.jpg" alt="Staff 2" className="w-20 h-20 rounded-full mx-auto" />
            <p className="mt-2">Mod - Alex</p>
          </div>
        </div>
      </section>

      {/* Socials */}
      <section className="p-8 bg-gray-900 text-center">
        <h2 className="text-3xl text-purple-400">Follow Us</h2>
        <div className="flex justify-center gap-6 mt-4">
          <FaTwitter className="text-4xl text-blue-400" />
          <FaDiscord className="text-4xl text-purple-500" />
          <FaYoutube className="text-4xl text-red-500" />
        </div>
      </section>

      {/* Discord */}
      <section className="p-8 bg-gray-800 text-center">
        <h2 className="text-3xl text-orange-400">Join Our Discord</h2>
        <iframe
          src="https://discord.com/widget?id=your_discord_id&theme=dark"
          width="350"
          height="500"
          allowTransparency="true"
          frameBorder="0"
          className="mx-auto mt-4"
        ></iframe>
        <button className="block bg-purple-500 px-6 py-2 mt-4 text-lg rounded-lg">Join Us</button>
      </section>

      {/* Sponsor */}
      <section className="p-8 bg-gray-900 text-center">
        <h2 className="text-3xl text-white">Want to Sponsor Us?</h2>
        <p className="mt-4">Contact us at mazecraftnetwork@proton.me</p>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-center">
        <p className="text-gray-400">Made with ❤️ by Mazecraft Team</p>
      </footer>
    </div>
  );
};

export default App;
