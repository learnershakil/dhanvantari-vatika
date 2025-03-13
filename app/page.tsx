import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Leaf, BookOpen, FlaskRoundIcon as Flask, Users, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-br from-primary/95 to-primary/80 text-white flex items-center">
      <div className="absolute inset-0 z-0">
        <Image 
        src="https://images.unsplash.com/photo-1540126034813-121bf29033d2?q=80&w=2070" 
        alt="Ayurvedic herbs and plants"
        fill
        className="object-cover mix-blend-overlay opacity-40"
        priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-[fadeIn_1s_ease-in-out]">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Discover the Healing Power of <span className="text-secondary-50">Ayurvedic Plants</span>
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
          Dhanvantari Vatika is your virtual herbal garden for interactive Ayurvedic learning, connecting ancient
          wisdom with modern technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10 pt-4">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg py-6 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out">
          <Link href="/explore">Explore Plants</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg py-6 px-8 rounded-full shadow-lg transition-all duration-300">
          <Link href="/virtual-garden">Visit Virtual Garden</Link>
          </Button>
        </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Unique Features</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore our comprehensive platform designed to make Ayurvedic learning accessible, interactive, and
          engaging for everyone.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Feature 1 */}
        <Card className="border-none rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_84,_0.07)] overflow-hidden group">
          <div className="h-48 bg-gray-100 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070"
            alt="Virtual Herbal Garden"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          </div>
          <CardContent className="pt-8 pb-8 px-6">
          <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <Leaf className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Virtual Herbal Garden</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Explore our interactive 3D garden featuring medicinal plants and learn about their properties and
            uses in traditional Ayurvedic medicine.
          </p>
          <Link href="/virtual-garden" className="text-primary font-medium inline-flex items-center group">
            Explore Garden <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          </CardContent>
        </Card>

        {/* Feature 2 */}
        <Card className="border-none rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_84,_0.07)] overflow-hidden group">
          <div className="h-48 bg-gray-100 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974"
            alt="Learning Resources"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          </div>
          <CardContent className="pt-8 pb-8 px-6">
          <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Learning Resources</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Access comprehensive courses, video tutorials, and articles on Ayurvedic principles and practices
            from renowned experts in the field.
          </p>
          <Link href="/learning" className="text-primary font-medium inline-flex items-center group">
            Start Learning <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          </CardContent>
        </Card>

        {/* Feature 3 */}
        <Card className="border-none rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_84,_0.07)] overflow-hidden group">
          <div className="h-48 bg-gray-100 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1611071598351-d7b26e3e8bd8?q=80&w=2070"
            alt="Ayush Vriksha Kit"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          </div>
          <CardContent className="pt-8 pb-8 px-6">
          <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <Flask className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Ayush Vriksha Kit</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Get started with your own herbal garden with our specially curated kits for home gardening and
            traditional Ayurvedic treatments.
          </p>
          <Link href="/ayush-vriksha-kit" className="text-primary font-medium inline-flex items-center group">
            View Kits <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          </CardContent>
        </Card>
        </div>
      </div>
      </section>

      {/* About Section */}
      <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -left-6 -top-6 w-64 h-64 bg-primary/5 rounded-full -z-10"></div>
          <Image
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070"
          alt="About Dhanvantari Vatika"
          width={600}
          height={700}
          className="rounded-2xl shadow-2xl object-cover h-[600px] w-full"
          />
          <div className="absolute -right-6 -bottom-6 w-48 h-48 bg-secondary/5 rounded-full -z-10"></div>
        </div>
        <div className="lg:pl-10">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">About Dhanvantari Vatika</h2>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          Named after Dhanvantari, the Hindu god of medicine, our virtual herbal garden is dedicated to preserving
          and promoting the ancient wisdom of Ayurveda through modern technology.
          </p>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Our mission is to make Ayurvedic knowledge accessible to everyone, helping people reconnect with
          nature's healing power and incorporate traditional remedies into their modern lifestyles.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="flex items-start">
            <div className="rounded-full bg-primary/10 p-3 mr-4">
            <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
            <h4 className="text-lg font-semibold text-gray-800">Expert Team</h4>
            <p className="text-gray-600">Ayurvedic doctors & botanists</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="rounded-full bg-primary/10 p-3 mr-4">
            <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
            <h4 className="text-lg font-semibold text-gray-800">Holistic Approach</h4>
            <p className="text-gray-600">Mind, body & spirit wellness</p>
            </div>
          </div>
          </div>
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg">
          <Link href="/about" className="inline-flex items-center">
            Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          </Button>
        </div>
      </div></div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">What Our Users Say</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover how Dhanvantari Vatika has helped people learn about Ayurveda and improve their well-being.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Testimonial 1 */}
        <Card className="border-none rounded-2xl shadow-lg overflow-hidden">
          <CardContent className="pt-8 pb-8 px-8 relative">
          <div className="absolute top-6 right-6 text-6xl text-primary/10 font-serif">"</div>
          <div className="flex items-center mb-6">
            <div className="mr-4 relative">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974"
              alt="Priya Sharma"
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-primary/20"
            />
            </div>
            <div>
            <h4 className="text-xl font-semibold text-gray-800">Priya Sharma</h4>
            <p className="text-primary/80">Ayurveda Enthusiast</p>
            </div>
          </div>
          <p className="text-gray-600 italic text-lg leading-relaxed">
            "The virtual garden is incredibly detailed and informative. I've learned so much about medicinal
            plants that I can now grow in my own garden and use for daily wellness!"
          </p>
          </CardContent>
        </Card>

        {/* Testimonial 2 */}
        <Card className="border-none rounded-2xl shadow-lg overflow-hidden">
          <CardContent className="pt-8 pb-8 px-8 relative">
          <div className="absolute top-6 right-6 text-6xl text-primary/10 font-serif">"</div>
          <div className="flex items-center mb-6">
            <div className="mr-4 relative">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974"
              alt="Rahul Patel"
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-primary/20"
            />
            </div>
            <div>
            <h4 className="text-xl font-semibold text-gray-800">Rahul Patel</h4>
            <p className="text-primary/80">Wellness Coach</p>
            </div>
          </div>
          <p className="text-gray-600 italic text-lg leading-relaxed">
            "As a wellness coach, I recommend Dhanvantari Vatika to all my clients. The learning resources are
            comprehensive and have transformed my approach to holistic health."
          </p>
          </CardContent>
        </Card>

        {/* Testimonial 3 */}
        <Card className="border-none rounded-2xl shadow-lg overflow-hidden">
          <CardContent className="pt-8 pb-8 px-8 relative">
          <div className="absolute top-6 right-6 text-6xl text-primary/10 font-serif">"</div>
          <div className="flex items-center mb-6">
            <div className="mr-4 relative">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976"
              alt="Anita Desai"
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-primary/20"
            />
            </div>
            <div>
            <h4 className="text-xl font-semibold text-gray-800">Anita Desai</h4>
            <p className="text-primary/80">Herbal Practitioner</p>
            </div>
          </div>
          <p className="text-gray-600 italic text-lg leading-relaxed">
            "The Ayush Vriksha Kit has transformed my practice. My patients love growing their own medicinal
            plants and learning about their incredible healing benefits."
          </p>
          </CardContent>
        </Card>
        </div>
      </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 transform -translate-x-20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Ready to Start Your Ayurvedic Journey?</h2>
        <p className="text-xl text-gray-700 mb-10 leading-relaxed">
          Join thousands of users exploring the healing power of Ayurvedic plants and traditional remedies for a balanced, healthier life.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg py-6 px-10 rounded-full shadow-lg transition-all duration-300">
          <Link href="/explore">Explore Plants</Link>
          </Button>
          <Button
          asChild
          size="lg"
          variant="outline"
          className="border-2 border-secondary text-secondary hover:bg-secondary/10 text-lg py-6 px-10 rounded-full shadow-lg transition-all duration-300"
          >
          <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        </div>
      </div>
      </section>
    </div>
  )
}

