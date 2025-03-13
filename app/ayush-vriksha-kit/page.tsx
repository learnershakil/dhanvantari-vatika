import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function AyushVrikshaKitPage() {
  const kits = [
    {
      id: 1,
      name: "Beginner's Herbal Garden Kit",
      price: "₹1,499",
      description:
        "Perfect for beginners, this kit includes 5 essential Ayurvedic plants, organic soil, biodegradable pots, and a detailed care guide.",
      image: "/placeholder.svg?height=400&width=400",
      features: [
        "5 medicinal plant seedlings/seeds",
        "Biodegradable growing pots",
        "Organic soil mix with natural fertilizers",
        "Illustrated plant care guide",
        "Access to online gardening tutorials",
      ],
    },
    {
      id: 2,
      name: "Ayurvedic Kitchen Garden Kit",
      price: "₹1,999",
      description:
        "Grow your own culinary and medicinal herbs right in your kitchen with this compact kit designed for indoor spaces.",
      image: "/placeholder.svg?height=400&width=400",
      features: [
        "8 culinary-medicinal plant varieties",
        "Self-watering container system",
        "Nutrient-rich soil mix",
        "Plant markers and identification cards",
        "Recipe book with Ayurvedic preparations",
      ],
    },
    {
      id: 3,
      name: "Dosha-Balancing Collection",
      price: "₹2,499",
      description:
        "A specialized kit with plants selected to balance specific doshas (Vata, Pitta, or Kapha) based on Ayurvedic principles.",
      image: "/placeholder.svg?height=400&width=400",
      features: [
        "7 dosha-specific medicinal plants",
        "Ceramic planters with drainage",
        "Premium soil mix with ayurvedic minerals",
        "Dosha identification guide",
        "Personalized plant care calendar",
      ],
    },
    {
      id: 4,
      name: "Professional Ayurvedic Garden Kit",
      price: "₹3,999",
      description:
        "A comprehensive kit for practitioners and serious enthusiasts, featuring rare and powerful medicinal plants.",
      image: "/placeholder.svg?height=400&width=400",
      features: [
        "12 rare medicinal plant varieties",
        "Terracotta planters with traditional designs",
        "Specialized soil mixes for each plant type",
        "Detailed medicinal properties handbook",
        "Harvesting and preparation tools",
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Ayush Vriksha Kit</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Bring the healing power of Ayurvedic plants into your home with our specially curated gardening kits. Each
            kit contains everything you need to grow and use medicinal plants.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Grow Your Own Ayurvedic Garden</h2>
              <p className="text-gray-600 mb-4">
                The Ayush Vriksha Kit is designed to help you create your own medicinal plant garden at home, connecting
                you with the ancient tradition of growing and using healing plants.
              </p>
              <p className="text-gray-600 mb-4">
                Each kit contains carefully selected plant varieties based on traditional Ayurvedic texts, along with
                everything you need to grow them successfully - even if you're a beginner with no gardening experience.
              </p>
              <p className="text-gray-600 mb-6">
                By growing these plants yourself, you'll develop a deeper connection with nature's healing power and
                have fresh, organic medicinal plants available whenever you need them.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Organic & Sustainable</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Beginner-Friendly</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Detailed Instructions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Online Support</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Ayush Vriksha Kit"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kit Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Kits</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose the perfect kit based on your space, experience level, and wellness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kits.map((kit) => (
              <Card key={kit.id} className="border-none shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-square relative">
                    <Image src={kit.image || "/placeholder.svg"} alt={kit.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{kit.name}</h3>
                    <p className="text-secondary font-bold mb-3">{kit.price}</p>
                    <p className="text-gray-600 text-sm mb-4">{kit.description}</p>
                    <div className="space-y-2 mb-6">
                      {kit.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Benefits of Growing Your Own Medicinal Plants</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover why cultivating your own Ayurvedic garden is beneficial for your health, environment, and
              connection to traditional healing practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
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
                <h3 className="text-xl font-semibold mb-3">Fresh & Potent</h3>
                <p className="text-gray-600">
                  Freshly harvested herbs and plants contain higher levels of active compounds, making them more potent
                  and effective for medicinal use than dried or processed alternatives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Deeper Connection</h3>
                <p className="text-gray-600">
                  Growing medicinal plants creates a meaningful connection with nature and traditional healing
                  practices, enhancing the holistic benefits of Ayurvedic remedies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Practice</h3>
                <p className="text-gray-600">
                  Home cultivation reduces the environmental impact of harvesting wild medicinal plants and helps
                  preserve biodiversity and traditional plant knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from people who have transformed their homes and health with our Ayush Vriksha Kits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="User Avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Meera Patel</h4>
                    <p className="text-sm text-gray-500">Mumbai, India</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "I've always wanted to grow medicinal plants but didn't know where to start. The Beginner's Kit made
                  it so easy! The plants are thriving and I've already used them for simple remedies."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="User Avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Rajiv Sharma</h4>
                    <p className="text-sm text-gray-500">Bengaluru, India</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The Dosha-Balancing Collection has transformed my daily routine. Growing these plants has become a
                  meditative practice, and using them has helped balance my Pitta dosha significantly."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="User Avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ananya Gupta</h4>
                    <p className="text-sm text-gray-500">Delhi, India</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As an Ayurvedic practitioner, the Professional Kit has been invaluable. The rare plants are thriving,
                  and my patients love that I use fresh, home-grown ingredients in my preparations."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our Ayush Vriksha Kits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Do I need gardening experience?</h3>
                <p className="text-gray-600">
                  No, our kits are designed for all experience levels. The Beginner's Kit is especially suitable for
                  those new to gardening, with detailed instructions and easy-to-grow plants.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">How much space do I need?</h3>
                <p className="text-gray-600">
                  Our Kitchen Garden Kit is designed for small spaces and can thrive on a windowsill. Other kits may
                  require more space, but all plants can be grown in containers if you don't have a garden.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Are the plants safe to use medicinally?</h3>
                <p className="text-gray-600">
                  Yes, all plants are safe when used as directed. Each kit includes detailed information on harvesting,
                  preparation, and usage. However, always consult with a healthcare provider before using any plant
                  medicinally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries. However, please note that some countries have restrictions on
                  importing live plants. Check our shipping page for details specific to your location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Ayurvedic Garden Today</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Connect with the ancient tradition of growing medicinal plants and experience the benefits of fresh,
            home-grown Ayurvedic remedies.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="#" className="inline-flex items-center">
              Browse All Kits <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

