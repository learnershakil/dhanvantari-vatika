import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Leaf, BookOpen, FlaskRoundIcon as Flask, Users, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] overflow-hidden">
        {/* Background layers with parallax effect */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1720397744986-3aaee36464dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Ayurvedic herbs and plants"
            fill
            className="object-cover scale-110 transform transition-transform duration-[30s] ease-in-out animate-subtle-zoom"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#256670]/95 via-[#256670]/85 to-[#256670]/75 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(217,165,102,0.15),transparent_60%)]"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D9A566]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D9A566]/15 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-[fadeIn_1.5s_ease-out]">
            <span className="inline-block py-2 px-6 rounded-full bg-[#256670]/20 backdrop-blur-md text-white font-medium border border-[#D9A566]/30 shadow-lg mb-2 transform animate-[fadeInUp_1s_ease-out]">
              Virtual Ayurvedic Garden
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
              Discover the <span className="text-[#D9A566] relative">
                Healing Power
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#D9A566]/40 -z-10 rounded-full transform animate-pulse"></span>
              </span> of <span className="bg-gradient-to-r from-[#D9A566] to-white bg-clip-text text-transparent">Ayurvedic Plants</span>
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-white/90">
              Dhanvantari Vatika is your immersive virtual herbal garden connecting ancient wisdom with cutting-edge technology for an unparalleled learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 pt-4">
              <Button asChild size="lg" className="bg-[#D9A566] text-[#256670] hover:bg-[#D9A566]/90 text-lg font-medium py-6 px-10 rounded-full shadow-[0_10px_25px_-5px_rgba(217,165,102,0.3)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_20px_35px_-10px_rgba(217,165,102,0.4)]">
                <Link href="/explore" className="flex items-center">
                  Explore Plants <ArrowRight className="ml-2 w-5 h-5 animate-[bounceRight_2s_infinite]" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[#D9A566] text-white hover:bg-[#D9A566]/10 text-lg py-6 px-10 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <Link href="/virtual-garden" className="flex items-center">Visit Virtual Garden <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-16 left-0 right-0 mx-auto w-fit animate-bounce hidden md:block">
              <div className="w-8 h-12 rounded-full border-2 border-[#D9A566]/80 flex items-center justify-center">
                <div className="w-1.5 h-3 bg-[#D9A566] rounded-full animate-[scrollIndicate_1.5s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        {/* Modern geometric accents */}
        <div className="absolute bottom-[20%] left-[5%] w-20 h-20 border-l-4 border-t-4 border-[#D9A566]/40 rounded-tl-lg"></div>
        <div className="absolute top-[20%] right-[5%] w-20 h-20 border-r-4 border-b-4 border-[#D9A566]/40 rounded-br-lg"></div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-[#256670]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-[#D9A566]/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Elegant pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23256670' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }}></div>
        
        {/* Decorative lines */}
        <div className="absolute top-20 right-40 w-32 h-32 border-r-4 border-t-4 border-[#D9A566]/30 rounded-tr-3xl"></div>
        <div className="absolute bottom-20 left-40 w-32 h-32 border-l-4 border-b-4 border-[#256670]/30 rounded-bl-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24 max-w-4xl mx-auto">
        <span className="text-[#256670] font-medium px-6 py-2 bg-[#256670]/5 rounded-full mb-5 inline-block animate-[fadeIn_1s_ease-out] border border-[#256670]/20 shadow-sm">Discover Our Platform</span>
        <h2 className="text-5xl font-bold mb-8 text-gray-800 leading-tight tracking-tight animate-[fadeIn_1.2s_ease-out]">
          Experience the <span className="text-[#256670] relative inline-block">
            Wisdom of Ayurveda
            <span className="absolute bottom-1 left-0 w-full h-2 bg-[#D9A566]/30 -z-10 rounded-full"></span>
          </span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed animate-[fadeIn_1.4s_ease-out]">
          Our immersive platform combines ancient knowledge with modern technology to create a 
          transformative learning experience for enthusiasts, practitioners, and curious minds alike.
        </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {/* Feature 1 */}
        <div className="group animate-[fadeInUp_1s_ease-out]">
          <Card className="border-none rounded-3xl overflow-hidden h-full transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_30px_60px_rgba(37,102,112,0.15)] bg-white/80 backdrop-blur-sm">
            <div className="h-56 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1542752942-76f45239da72?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Virtual Herbal Garden"
            fill
            className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#256670]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 bg-[#D9A566] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            FEATURED
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            Explore Our Virtual Garden
          </div>
            </div>
            <CardContent className="pt-8 pb-8 px-8">
          <div className="rounded-2xl bg-[#256670]/10 p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#D9A566]/20 transition-all duration-300 group-hover:scale-110">
            <Leaf className="h-8 w-8 text-[#256670] group-hover:text-[#D9A566] transition-colors duration-300 group-hover:animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#256670] transition-colors">Virtual Herbal Garden</h3>
          <p className="text-gray-600 mb-7 leading-relaxed">
            Immerse yourself in our interactive 3D garden showcasing rare medicinal plants with detailed information on their Ayurvedic properties and applications.
          </p>
          <Link href="/virtual-garden" className="text-[#256670] font-medium inline-flex items-center group/link relative pl-0 hover:pl-1 transition-all duration-300">
            <span>Explore Garden</span> 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D9A566] transition-all duration-300 group-hover/link:w-full"></span>
          </Link>
            </CardContent>
          </Card>
        </div>

        {/* Feature 2 */}
        <div className="group animate-[fadeInUp_1.2s_ease-out]">
          <Card className="border-none rounded-3xl overflow-hidden h-full transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_30px_60px_rgba(37,102,112,0.15)] bg-white/80 backdrop-blur-sm border-t border-l border-white/50">
            <div className="h-56 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1523302270222-0f256786563c?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Learning Resources"
            fill
            className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#256670]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 bg-[#D9A566] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            PREMIUM
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            Curated Educational Content
          </div>
            </div>
            <CardContent className="pt-8 pb-8 px-8">
          <div className="rounded-2xl bg-[#256670]/10 p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#D9A566]/20 transition-all duration-300 group-hover:scale-110">
            <BookOpen className="h-8 w-8 text-[#256670] group-hover:text-[#D9A566] transition-colors duration-300 group-hover:animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#256670] transition-colors">Learning Resources</h3>
          <p className="text-gray-600 mb-7 leading-relaxed">
            Access exclusive courses, video tutorials, and expert-authored articles on Ayurvedic principles, diagnosis methods, and treatment protocols.
          </p>
          <Link href="/learning" className="text-[#256670] font-medium inline-flex items-center group/link relative pl-0 hover:pl-1 transition-all duration-300">
            <span>Start Learning</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D9A566] transition-all duration-300 group-hover/link:w-full"></span>
          </Link>
            </CardContent>
          </Card>
        </div>

        {/* Feature 3 */}
        <div className="group animate-[fadeInUp_1.4s_ease-out]">
          <Card className="border-none rounded-3xl overflow-hidden h-full transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_30px_60px_rgba(37,102,112,0.15)] bg-white/80 backdrop-blur-sm border-t border-l border-white/50">
            <div className="h-56 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1568274515506-f2db7b6b6878?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ayush Vriksha Kit"
            fill
            className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#256670]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 bg-[#D9A566] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            NEW
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            Grow Your Own Healing Plants
          </div>
            </div>
            <CardContent className="pt-8 pb-8 px-8">
          <div className="rounded-2xl bg-[#256670]/10 p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#D9A566]/20 transition-all duration-300 group-hover:scale-110">
            <Flask className="h-8 w-8 text-[#256670] group-hover:text-[#D9A566] transition-colors duration-300 group-hover:animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#256670] transition-colors">Ayush Vriksha Kit</h3>
          <p className="text-gray-600 mb-7 leading-relaxed">
            Cultivate your personal Ayurvedic garden with our premium herb growing kits, complete with organic seeds, soil, and detailed cultivation guides.
          </p>
          <Link href="/ayush-vriksha-kit" className="text-[#256670] font-medium inline-flex items-center group/link relative pl-0 hover:pl-1 transition-all duration-300">
            <span>View Kits</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D9A566] transition-all duration-300 group-hover/link:w-full"></span>
          </Link>
            </CardContent>
          </Card>
        </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#256670]/5 blur-3xl -z-0 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#D9A566]/5 blur-3xl -z-0 animate-pulse opacity-70"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23256670' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 relative animate-[fadeIn_1s_ease-out]">
              <div className="absolute -left-8 -top-8 w-72 h-72 bg-[#256670]/10 rounded-full -z-10 animate-pulse opacity-70"></div>
              <div className="absolute -right-6 -bottom-10 w-52 h-52 bg-[#D9A566]/10 rounded-full -z-10 animate-pulse opacity-70"></div>
              
              {/* Image with overlays and effects */}
              <div className="relative group">
                <div className="absolute -inset-2.5 bg-gradient-to-r from-[#256670] to-[#D9A566] rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <Image
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070"
                  alt="About Dhanvantari Vatika"
                  width={600}
                  height={700}
                  className="rounded-3xl shadow-2xl object-cover h-[600px] w-full transition-all duration-700 ease-in-out group-hover:scale-[1.02] relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#256670]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-20"></div>
                
                {/* Floating accent card */}
                <div className="absolute -right-10 bottom-14 max-w-xs bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 border-l-4 border-[#D9A566] z-30">
                  <h4 className="text-lg font-bold text-[#256670] mb-2">Rooted in Tradition</h4>
                  <p className="text-gray-700">Our garden connects ancient wisdom with modern technology to preserve Ayurvedic heritage</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -left-10 -bottom-8 w-20 h-20 rounded-full border-8 border-white bg-[#D9A566]/30 z-20 shadow-lg"></div>
                <div className="absolute top-10 -right-6 w-16 h-16 rounded-full border-4 border-white bg-[#256670]/20 z-20 shadow-lg"></div>
              </div>
            </div>
            
            <div className="lg:col-span-6 lg:pl-10 animate-[fadeInRight_1.2s_ease-out]">
              <span className="text-[#256670] font-medium px-6 py-2 bg-[#256670]/5 rounded-full mb-5 inline-block border border-[#256670]/20 shadow-sm">Our Story & Mission</span>
              <h2 className="text-5xl font-bold mb-8 text-gray-800 leading-tight tracking-tight">
                About <span className="text-[#256670] relative inline-block">
                  Dhanvantari Vatika
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#D9A566]/40 -z-10 rounded-full"></span>
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Named after Dhanvantari, the Hindu god of medicine, our virtual herbal garden is dedicated to preserving
                and promoting the ancient wisdom of Ayurveda through modern technology.
              </p>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Our mission is to make Ayurvedic knowledge accessible to everyone, helping people reconnect with
                nature's healing power and incorporate traditional remedies into their modern lifestyles.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex items-start group p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl">
                  <div className="rounded-2xl bg-[#256670]/10 p-4 mr-5 group-hover:bg-[#D9A566]/20 transition-all duration-300 group-hover:scale-110">
                    <Users className="h-7 w-7 text-[#256670] group-hover:text-[#D9A566] transition-colors duration-300 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#256670] transition-colors">Expert Team</h4>
                    <p className="text-gray-600">Led by Ayurvedic doctors, botanists & herbal practitioners</p>
                  </div>
                </div>
                
                <div className="flex items-start group p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl">
                  <div className="rounded-2xl bg-[#256670]/10 p-4 mr-5 group-hover:bg-[#D9A566]/20 transition-all duration-300 group-hover:scale-110">
                    <Heart className="h-7 w-7 text-[#256670] group-hover:text-[#D9A566] transition-colors duration-300 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#256670] transition-colors">Holistic Approach</h4>
                    <p className="text-gray-600">Integrating mind, body & spirit for complete wellness</p>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-10 py-7 text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-[#256670] to-[#256670]/90 hover:from-[#256670]/90 hover:to-[#D9A566]"
              >
                <Link href="/about" className="inline-flex items-center">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5 animate-[bounceRight_2s_infinite]" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#256670]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-[#D9A566]/10 rounded-full blur-3xl"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23256670' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
        
        {/* Modern geometric accents */}
        <div className="absolute top-20 left-20 w-32 h-32 border-t-4 border-l-4 border-[#D9A566]/30 rounded-tl-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-b-4 border-r-4 border-[#256670]/30 rounded-br-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto animate-[fadeIn_1s_ease-out]">
            <span className="text-[#256670] font-medium px-6 py-2 bg-[#256670]/5 rounded-full mb-5 inline-block border border-[#256670]/20 shadow-sm">Testimonials</span>
            <h2 className="text-5xl font-bold mb-8 text-gray-800 leading-tight tracking-tight">
              What People <span className="text-[#256670] relative inline-block">
                Say About Us
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#D9A566]/40 -z-10 rounded-full"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how Dhanvantari Vatika has helped people learn about Ayurveda and incorporate traditional healing practices into their modern lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* Testimonial 1 */}
            <div className="group animate-[fadeInUp_0.8s_ease-out]">
              <Card className="border-none rounded-3xl overflow-hidden h-full transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_30px_60px_rgba(37,102,112,0.15)] bg-white backdrop-blur-lg">
                <CardContent className="p-10 relative">
                  <div className="absolute top-6 right-6 text-7xl text-[#D9A566]/10 font-serif group-hover:text-[#D9A566]/20 transition-all duration-500">"</div>
                  
                  <div className="mb-8 relative">
                    <div className="relative inline-block">
                      <div className="absolute -inset-1 bg-gradient-to-br from-[#256670]/80 to-[#D9A566]/80 rounded-full blur-sm opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974"
                        alt="Priya Sharma"
                        width={90}
                        height={90}
                        className="rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                      />
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-2xl font-bold text-[#256670] group-hover:text-[#256670] transition-colors duration-300">Priya Sharma</h4>
                      <p className="text-[#D9A566] font-medium">Ayurveda Enthusiast</p>
                      
                      <div className="flex items-center justify-center mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-[#D9A566]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed relative">
                    <span className="relative">
                      "The virtual garden is incredibly detailed and immersive. I've learned so much about medicinal plants that I now grow in my own garden for daily wellness rituals. The 3D models are remarkably accurate!"
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D9A566]/30 rounded-full"></span>
                    </span>
                  </p>
                  
                  <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-8 bg-gradient-to-r from-[#256670]/20 to-[#D9A566]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#256670]/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#D9A566]/30"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial 2 */}
            <div className="group animate-[fadeInUp_1.1s_ease-out] mt-10 md:mt-0">
              <Card className="border-none rounded-3xl overflow-hidden h-full transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_30px_60px_rgba(37,102,112,0.15)] bg-white backdrop-blur-lg border-t border-l border-white/50">
                <CardContent className="p-10 relative">
                  <div className="absolute top-6 right-6 text-7xl text-[#D9A566]/10 font-serif group-hover:text-[#D9A566]/20 transition-all duration-500">"</div>
                  
                  <div className="mb-8 relative">
                    <div className="relative inline-block">
                      <div className="absolute -inset-1 bg-gradient-to-br from-[#256670]/80 to-[#D9A566]/80 rounded-full blur-sm opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974"
                        alt="Rahul Patel"
                        width={90}
                        height={90}
                        className="rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                      />
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-2xl font-bold text-[#256670] group-hover:text-[#256670] transition-colors duration-300">Rahul Patel</h4>
                      <p className="text-[#D9A566] font-medium">Wellness Coach</p>
                      
                      <div className="flex items-center justify-center mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-[#D9A566]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed relative">
                    <span className="relative">
                      "As a wellness coach, I recommend Dhanvantari Vatika to all my clients. The learning resources are comprehensive and have transformed my approach to holistic health and Ayurvedic practices."
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D9A566]/30 rounded-full"></span>
                    </span>
                  </p>
                  
                  <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-8 bg-gradient-to-r from-[#256670]/20 to-[#D9A566]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#256670]/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#D9A566]/30"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial 3 */}
            <div className="group animate-[fadeInUp_1.4s_ease-out] mt-10 md:mt-0">
              <Card className="border-none rounded-3xl overflow-hidden h-full transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_30px_60px_rgba(37,102,112,0.15)] bg-white backdrop-blur-lg border-t border-l border-white/50">
                <CardContent className="p-10 relative">
                  <div className="absolute top-6 right-6 text-7xl text-[#D9A566]/10 font-serif group-hover:text-[#D9A566]/20 transition-all duration-500">"</div>
                  
                  <div className="mb-8 relative">
                    <div className="relative inline-block">
                      <div className="absolute -inset-1 bg-gradient-to-br from-[#256670]/80 to-[#D9A566]/80 rounded-full blur-sm opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976"
                        alt="Anita Desai"
                        width={90}
                        height={90}
                        className="rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                      />
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-2xl font-bold text-[#256670] group-hover:text-[#256670] transition-colors duration-300">Anita Desai</h4>
                      <p className="text-[#D9A566] font-medium">Herbal Practitioner</p>
                      
                      <div className="flex items-center justify-center mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-[#D9A566]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed relative">
                    <span className="relative">
                      "The Ayush Vriksha Kit has transformed my practice. My patients love growing their own medicinal plants and the detailed guides make it easy to understand their incredible healing benefits."
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D9A566]/30 rounded-full"></span>
                    </span>
                  </p>
                  
                  <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-8 bg-gradient-to-r from-[#256670]/20 to-[#D9A566]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#256670]/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#D9A566]/30"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* View more testimonials button */}
          <div className="flex justify-center mt-16">
            <Button asChild size="lg" className="rounded-full bg-[#256670] hover:bg-[#D9A566] text-white hover:text-[#256670] shadow-lg shadow-[#256670]/20 hover:shadow-[#D9A566]/30 transition-all duration-300">
              <Link href="/testimonials" className="flex items-center py-6 px-10">
                View More Success Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements and gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#256670]/5 to-[#D9A566]/10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#256670]/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#D9A566]/10 blur-3xl"></div>
        
        {/* Decorative patterns */}
        <div className="absolute top-10 left-10 w-40 h-40 border-l-4 border-t-4 border-[#D9A566]/30 rounded-tl-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-r-4 border-b-4 border-[#256670]/30 rounded-br-3xl"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23256670' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-2xl border border-white/50 animate-[fadeIn_1s_ease-out]">
            <span className="text-[#256670] font-medium px-6 py-2 bg-[#256670]/5 rounded-full mb-5 inline-block border border-[#256670]/20 shadow-sm">Begin Your Wellness Journey</span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 leading-tight tracking-tight">
              Ready to Explore the <span className="text-[#256670] relative inline-block">
                Healing Power
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#D9A566]/40 -z-10 rounded-full"></span>
              </span> of Ayurveda?
            </h2>
            
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Join thousands of users discovering the ancient wisdom of Ayurvedic plants and traditional remedies for a balanced, healthier life in our modern world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#256670] hover:bg-[#256670]/90 text-white text-lg py-7 px-10 rounded-full shadow-[0_10px_25px_-5px_rgba(37,102,112,0.3)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_20px_35px_-10px_rgba(37,102,112,0.4)] group"
              >
                <Link href="/explore" className="flex items-center">
                  Explore Plants 
                  <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#D9A566] text-[#256670] hover:bg-[#D9A566]/10 text-lg py-7 px-10 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
              >
                <Link href="/contact" className="flex items-center">
                  Contact Us 
                  <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            {/* Decorative elements */}
            <div className="mt-16 flex justify-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-[#D9A566]"></div>
              <div className="w-3 h-3 rounded-full bg-[#256670]/30"></div>
              <div className="w-3 h-3 rounded-full bg-[#D9A566]/30"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

