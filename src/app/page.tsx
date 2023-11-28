import { Button, Text } from '@mantine/core';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=" bg-opacity-75 h-screen bg-black">
      <div className="container mx-auto px-6 py-32 relative">
        <Image
          src="/images/face.jpg"
          height={100}
          width={100}
          alt="A real nice face"
          quality={100}
        />
        <Text component="h1" className="text-4xl font-bold text-white mb-2">
          Next.js + Tailwindcss + Mantine
        </Text>
        <Text component="h2" className="text-2xl font-bold text-white mb-8">
          A match made in heaven
        </Text>
        <Button variant="white" color="black" radius={'xl'} size="lg">
          Get Started
        </Button>
      </div>
    </main>
  );
}
