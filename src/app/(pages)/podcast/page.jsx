import Image from "next/image";
import Link from "next/link";
import {
  Mic,
  Play,
  AudioWaveformIcon as Waveform,
  Zap,
  Settings,
  Edit,
  FileAudio,
} from "lucide-react";

export default function Podcast() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  AI-powered audio tools that elevate your voice
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Create high-quality podcasts and recordings that sound
                  professional with SoundWave Podcast.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="rounded-md bg-blue-600 px-4 py-2.5 text-base font-medium text-white shadow-sm hover:bg-blue-700">
                    Get Started
                  </button>
                  <button className="rounded-md border border-gray-300 bg-white px-4 py-2.5 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 flex items-center">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </button>
                </div>
              </div>
              <div className="relative lg:ml-10">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Podcast illustration"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-yellow-300 opacity-50 blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-blue-300 opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <div className="overflow-hidden rounded-lg blue_bg text-white shadow-md">
                <div className="p-6 flex items-start gap-4">
                  <div className="rounded-full bg-white/20 p-2">
                    <Mic className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Enhance Speech</h3>
                    <p className="text-blue-100">
                      Remove background noise and enhance voice clarity
                    </p>
                    <button className="mt-2 rounded-md bg-white/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/30">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg yellow-bg text-white shadow-md">
                <div className="p-6 flex items-start gap-4">
                  <div className="rounded-full bg-white/20 p-2">
                    <FileAudio className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Record a podcast</h3>
                    <p className="text-yellow-100">
                      Studio-quality recording in your browser
                    </p>
                    <button className="mt-2 rounded-md bg-white/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/30">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Transcribe audio</h3>
                  <p className="text-sm text-gray-500">
                    Automatic text from your audio
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Edit className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Edit like a doc</h3>
                  <p className="text-sm text-gray-500">
                    Cut and edit your audio easily
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Settings className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Quick export</h3>
                  <p className="text-sm text-gray-500">
                    Share to multiple platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Record, edit, and enhance your voice without downloading any
                software
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl">
                Use SoundWave Podcast right in the browser.
              </p>
            </div>
            <div className="mt-16">
              <div className="rounded-xl border bg-white p-1 shadow-sm">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Podcast editor interface"
                  width={1200}
                  height={600}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Templates */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
              Jump into a project
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <PodcastCard
                title="True Crime Podcast"
                image="/placeholder.svg?height=300&width=300"
                category="Start project"
              />
              <PodcastCard
                title="Class Lecture"
                image="/placeholder.svg?height=300&width=300"
                category="Start project"
              />
              <PodcastCard
                title="Fashion Podcast"
                image="/placeholder.svg?height=300&width=300"
                category="Start project"
              />
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <FeatureSection
          title="Enhance spoken audio with just one click"
          description="Focus on your story and your voice. SoundWave AI makes your recordings sound as if they were recorded in a professional studio."
          image="/placeholder.svg?height=400&width=500"
          color="bg-yellow-500"
          reverse={false}
        />

        <FeatureSection
          title="Analyze your recording setup with AI"
          description="SoundWave Podcast AI helps you get professional sound without expensive equipment. Get personalized recommendations to get better sound from your microphone and recording environment."
          image="/placeholder.svg?height=400&width=500"
          color="bg-blue-500"
          reverse={true}
        />

        <FeatureSection
          title="Edit audio like a doc"
          description="Remove filler words and mistakes by simply highlighting and deleting them. SoundWave Podcast lets you edit your audio just like a text document."
          image="/placeholder.svg?height=400&width=500"
          color="bg-yellow-500"
          reverse={false}
        />

        <FeatureSection
          title="Professional-grade recording"
          description="Record high-quality audio by yourself or with remote guests. SoundWave Podcast can capture everyone's audio as individual tracks so you can edit them separately."
          image="/placeholder.svg?height=400&width=500"
          color="bg-blue-500"
          reverse={true}
        />

        <FeatureSection
          title="Pre-edited royalty free music"
          description="Your podcast needs great music. Choose from podcast-ready background music with intros, outros, and loops for perfect background tracks."
          image="/placeholder.svg?height=400&width=500"
          color="bg-yellow-500"
          reverse={false}
        />
      </main>
    </div>
  );
}

function PodcastCard({ title, image, category }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <Play className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium text-gray-500">{category}</span>
        </div>
        <h3 className="mt-2 font-semibold">{title}</h3>
      </div>
    </div>
  );
}

function FeatureSection({ title, description, image, color, reverse }) {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          <div className={`space-y-4 ${reverse ? "lg:col-start-2" : ""}`}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              {description}
            </p>
            <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              Learn more
            </button>
          </div>
          <div className={`relative ${reverse ? "lg:col-start-1" : ""}`}>
            <div
              className={`absolute inset-0 -z-10 ${color} opacity-10 blur-2xl rounded-full transform -translate-x-1/2 -translate-y-1/2`}
            ></div>
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={500}
              height={400}
              className="rounded-lg object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
