"use client";

import { useState } from "react";
import Image from "next/image";

export default function AdobePodcastLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "podcast-basics",
  });

  return (
    <div className="">
      {/* Hero Section */}
      <section className="min-h-screen px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            AI-powered audio tools that elevate your voice
          </h1>
          <p className="text-lg mb-6">
            Create high-quality podcasts and voiceovers that sound professional
            with Adobe Podcast.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative h-[300px] w-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7675] rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#6c5ce7] rounded-full opacity-20"></div>
            <div className="absolute top-20 left-20 w-32 h-32 bg-[#fdcb6e] rounded-full opacity-20"></div>
            <div className="relative z-10 h-full flex items-center justify-center"></div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#6c5ce7] text-white p-8 rounded-2xl flex flex-col items-start">
            <div className="bg-white p-3 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6c5ce7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Enhance Speech</h3>
            <p className="mb-4">Noise reduction and clarity enhancement</p>
            <button className="bg-white text-[#6c5ce7] px-4 py-2 rounded-full text-sm font-medium">
              Get started
            </button>
          </div>
          <div className="bg-[#ff7675] text-white p-8 rounded-2xl flex flex-col items-start">
            <div className="bg-white p-3 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff7675"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Record a podcast</h3>
            <p className="mb-4">Studio-quality recording in your browser</p>
            <button className="bg-white text-[#ff7675] px-4 py-2 rounded-full text-sm font-medium">
              Get started
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-200">
            <div className="bg-[#6c5ce7] p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Transcribe audio</h4>
              <p className="text-sm text-gray-600">Automatic speech-to-text</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-200">
            <div className="bg-[#6c5ce7] p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15V6"></path>
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                <path d="M12 12H3"></path>
                <path d="M16 6H3"></path>
                <path d="M12 18H3"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Edit audio</h4>
              <p className="text-sm text-gray-600">
                AI tools to enhance your story
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-200">
            <div className="bg-[#6c5ce7] p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Quick analysis</h4>
              <p className="text-sm text-gray-600">
                Insights from AI recording
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jump into a project */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Jump into a project
        </h2>
        <p className="text-center mb-12">
          Try Adobe Podcast Studio with a true crime podcast, class lecture, or
          audio newsletter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  1
                </div>
                <span className="text-sm font-medium">True crime podcast</span>
              </div>
              <div className="bg-[#ff7675] p-4 rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="True crime podcast"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  2
                </div>
                <span className="text-sm font-medium">Class lecture</span>
              </div>
              <div className="bg-[#74b9ff] p-4 rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Class lecture"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  3
                </div>
                <span className="text-sm font-medium">Fashion podcast</span>
              </div>
              <div className="bg-[#fdcb6e] p-4 rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Fashion podcast"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhance spoken audio */}
      <section className="px-6 py-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Enhance spoken audio with just one click
          </h2>
          <p className="mb-4">
            Focus on your story, not your sound. Adobe Podcast AI makes noisy
            recordings sound as if they were recorded in a studio.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="bg-[#ff7675] rounded-xl p-8 h-[250px] flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Audio enhancement"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Analyze your recording */}
      <section className="px-6 py-12 max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Analyze your recording setup with AI
          </h2>
          <p className="mb-4">
            Adobe Podcast AI helps you get professional sound without expensive
            equipment. Get personalized advice to clear issues from your
            microphone and recording environment.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="bg-[#6c5ce7] rounded-xl p-8 h-[250px] flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Recording analysis"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Edit audio like a doc */}
      <section className="px-6 py-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Edit audio like a doc</h2>
          <p className="mb-4">
            Delete words, fix mistakes, and rearrange by editing the same
            transcript. Adobe Podcast transcription is highly accurate, so you
            can cut, copy, and paste your audio just like a text document,
            editing audio has never been easier.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="bg-[#fdcb6e] rounded-xl p-8 h-[250px] flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Audio editing"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Professional-grade recording */}
      <section className="px-6 py-12 max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Professional-grade recording
          </h2>
          <p className="mb-4">
            Record high-quality audio by yourself or with remote guests. Adobe
            Podcast records everyone's audio as individual tracks so for later
            edits, even if someone's internet connection isn't perfect.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="bg-[#6c5ce7] rounded-xl p-8 h-[250px] flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Professional recording"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Pre-edited royalty free music */}
      <section className="px-6 py-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Pre-edited royalty free music
          </h2>
          <p className="mb-4">
            Your podcast needs good music. Choose from podcast-ready background
            music with intros, outros, transitions, and background music.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="bg-[#ff7675] rounded-xl p-8 h-[250px] flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Royalty free music"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
