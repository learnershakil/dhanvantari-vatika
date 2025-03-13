import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Anjali Desai",
      role: "Founder & Ayurvedic Physician",
      bio: "With over 20 years of experience in Ayurvedic medicine, Dr. Anjali founded Dhanvantari Vatika to bridge traditional knowledge with modern technology.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Vikram Mehta",
      role: "Chief Botanist",
      bio: "Vikram specializes in medicinal plants and has documented over 500 species with their Ayurvedic properties and applications.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Sharma",
      role: "Educational Director",
      bio: "Priya develops our learning curriculum and ensures that complex Ayurvedic concepts are presented in an accessible, engaging manner.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Arjun Patel",
      role: "Technology Lead",
      bio: "Arjun oversees the development of our virtual garden and interactive platforms, making Ayurvedic learning a seamless digital experience.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About Dhanvantari Vatika</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our mission to preserve and promote Ayurvedic knowledge through innovative technology and
            interactive learning experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Dhanvantari Vatika was founded in 2020 with a vision to make Ayurvedic knowledge accessible to everyone
                through technology. Named after Lord Dhanvantari, the Hindu god of medicine and an avatar of Lord
                Vishnu, our platform honors the ancient tradition while embracing modern innovation.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small digital catalog of medicinal plants has grown into a comprehensive virtual herbal
                garden and learning platform, serving students, practitioners, and enthusiasts worldwide.
              </p>
              <p className="text-gray-600">
                Our team of Ayurvedic doctors, botanists, educators, and technologists work together to create an
                authentic, scientifically accurate, and engaging learning experience that bridges traditional wisdom
                with contemporary wellness needs.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Dhanvantari Vatika Story"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Guided by principles of authenticity, accessibility, and innovation, we're committed to preserving and
              sharing Ayurvedic wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  To preserve and promote the ancient wisdom of Ayurveda through interactive digital experiences, making
                  traditional plant knowledge accessible to a global audience.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Document and digitize information about medicinal plants and their Ayurvedic applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Create engaging, scientifically accurate learning resources for all levels
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Support sustainable cultivation of medicinal plants through education and resources
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  To become the world's leading digital platform for Ayurvedic plant knowledge, where ancient wisdom
                  meets modern technology to improve global wellness.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>A world where Ayurvedic knowledge is preserved,
                    respected, and integrated into daily wellness practices
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Communities empowered with the knowledge to grow and use medicinal plants
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Bridging traditional wisdom with scientific research for holistic health solutions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts combines traditional Ayurvedic knowledge with modern expertise in botany,
              education, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Dhanvantari Vatika.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-primary/20 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
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
                <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
                <p className="text-gray-600">
                  We are committed to presenting accurate, authentic Ayurvedic knowledge that honors the traditional
                  texts while incorporating modern scientific understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-primary/20 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
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
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-gray-600">
                  We believe Ayurvedic knowledge should be accessible to everyone, regardless of background or prior
                  knowledge, through clear, engaging, and inclusive content.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-primary/20 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
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

