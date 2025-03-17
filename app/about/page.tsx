import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Shakil from "@/public/shakil.jpg"
import Akash from "@/public/Akash.jpg"
import Prakhar from "@/public/Prakhar.jpg"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Shakil Ahmad",
      role: "Team Lead",
      bio: "Do research and Build Web App and Backend & Integrating Hardware.",
      image: Shakil,
    },
    {
      name: "Kumar Akash",
      role: "App Developer",
      bio: "Do research and Build Android & IOS  App.",
      image: Akash,
    },
    {
      name: "Kuwar Prakhar",
      role: "3D model Designer",
      bio: "Do research and Build 3D model of plants.",
      image: Prakhar,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#256670]/10 to-[#256670]/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#256670]">About Dhanvantari Vatika</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Discover our mission to preserve and promote Ayurvedic knowledge through innovative technology and
            interactive learning experiences.
          </p>
          <div className="w-24 h-1 bg-[#D9A566] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#256670] relative">
                Our Story
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#D9A566]"></span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dhanvantari Vatika was founded in 2020 with a vision to make Ayurvedic knowledge accessible to everyone
                through technology. Named after Lord Dhanvantari, the Hindu god of medicine and an avatar of Lord
                Vishnu, our platform honors the ancient tradition while embracing modern innovation.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                What began as a small digital catalog of medicinal plants has grown into a comprehensive virtual herbal
                garden and learning platform, serving students, practitioners, and enthusiasts worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team of Ayurvedic doctors, botanists, educators, and technologists work together to create an
                authentic, scientifically accurate, and engaging learning experience that bridges traditional wisdom
                with contemporary wellness needs.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-[#D9A566]/20 rounded-lg -z-10"></div>
              <Image
                src={Shakil}
                alt="Dhanvantari Vatika Story"
                width={600}
                height={600}
                className="rounded-lg shadow-xl border-2 border-[#256670]/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-[#256670]/5 to-[#256670]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#256670]">Our Mission & Vision</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Guided by principles of authenticity, accessibility, and innovation, we're committed to preserving and
              sharing Ayurvedic wisdom.
            </p>
            <div className="w-24 h-1 bg-[#D9A566] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="border-none shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="h-2 bg-[#256670]"></div>
              <CardContent className="pt-8 px-8 pb-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#256670]">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  To preserve and promote the ancient wisdom of Ayurveda through interactive digital experiences, making
                  traditional plant knowledge accessible to a global audience.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#D9A566] mr-3 text-xl">•</span>
                    <span>Document and digitize information about medicinal plants and their Ayurvedic applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9A566] mr-3 text-xl">•</span>
                    <span>Create engaging, scientifically accurate learning resources for all levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9A566] mr-3 text-xl">•</span>
                    <span>Support sustainable cultivation of medicinal plants through education and resources</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="h-2 bg-[#D9A566]"></div>
              <CardContent className="pt-8 px-8 pb-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#D9A566]">Our Vision</h3>
                <p className="text-gray-700 mb-6">
                  To become the world's leading digital platform for Ayurvedic plant knowledge, where ancient wisdom
                  meets modern technology to improve global wellness.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#256670] mr-3 text-xl">•</span>
                    <span>A world where Ayurvedic knowledge is preserved, respected, and integrated into daily wellness practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#256670] mr-3 text-xl">•</span>
                    <span>Communities empowered with the knowledge to grow and use medicinal plants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#256670] mr-3 text-xl">•</span>
                    <span>Bridging traditional wisdom with scientific research for holistic health solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#256670]">Meet Our Team</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Our diverse team of experts combines traditional Ayurvedic knowledge with modern expertise in botany,
          education, and technology.
        </p>
        <div className="w-24 h-1 bg-[#D9A566] mx-auto mt-6"></div>
          </div>

          <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden group transition-all duration-300 hover:-translate-y-1 mx-auto w-full max-w-xs">
          <div className="aspect-square relative">
            <div className="absolute inset-0 bg-[#256670] mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity z-10"></div>
            <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
          </div>
          <CardContent className="pt-6 px-6 pb-6">
            <h3 className="text-xl font-semibold mb-1 text-[#256670]">{member.name}</h3>
            <p className="text-[#D9A566] font-medium mb-4">{member.role}</p>
            <p className="text-gray-700 text-sm">{member.bio}</p>
          </CardContent>
            </Card>
          ))}
        </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-tl from-[#256670]/5 to-[#D9A566]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#256670]">Our Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              These core principles guide everything we do at Dhanvantari Vatika.
            </p>
            <div className="w-24 h-1 bg-[#D9A566] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="border-none shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8 pb-8 px-8 text-center">
                <div className="rounded-full bg-gradient-to-br from-[#256670] to-[#256670]/80 p-5 w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#256670]">Authenticity</h3>
                <p className="text-gray-700">
                  We are committed to presenting accurate, authentic Ayurvedic knowledge that honors the traditional
                  texts while incorporating modern scientific understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8 pb-8 px-8 text-center">
                <div className="rounded-full bg-gradient-to-br from-[#D9A566] to-[#D9A566]/80 p-5 w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#D9A566]">Accessibility</h3>
                <p className="text-gray-700">
                  We believe Ayurvedic knowledge should be accessible to everyone, regardless of background or prior
                  knowledge, through clear, engaging, and inclusive content.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8 pb-8 px-8 text-center">
                <div className="rounded-full bg-gradient-to-br from-[#256670] to-[#D9A566]/80 p-5 w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#256670]">Innovation</h3>
                <p className="text-gray-700">
                  We embrace technology as a tool to preserve and share traditional knowledge, constantly seeking new
                  ways to make learning interactive and engaging.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

