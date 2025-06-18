
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <main className="flex flex-col items-center text-center py-20 px-4 space-y-8">
        <h1 className="text-4xl font-bold text-brown">About Bite Rush</h1>

        <div className="max-w-2xl space-y-4 text-gray-700">
          <p>
            At Bite Rush, we’re passionate about bringing you the juiciest
            burgers and crispiest fries, all crafted from the freshest
            ingredients.
          </p>
          <p>
            Founded in 2023 by a group of food lovers, our mission is simple:
            deliver mouthwatering meals quickly, so you can spend more time
            enjoying life and less time waiting.
          </p>
          <p>
            Whether you’re dining alone or feeding a crowd, our menu has
            something for everyone—classic favorites, bold new creations, and
            sweet treats to top it all off.
          </p>
        </div>

        <Link href="/">
          <button className="mt-4 bg-yellow px-6 py-3 rounded-full text-white font-semibold hover:bg-yellow-600 transition">
            Back to Home
          </button>
        </Link>
      </main>
    </>
  );
};

export default About;
