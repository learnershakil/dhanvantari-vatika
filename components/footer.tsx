import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dhanvantari Vatika</h3>
            <p className="text-white/80 mb-4">Interactive Ayurvedic learning platform with virtual herbal garden.</p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-white/80 hover:text-white" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-white/80 hover:text-white" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-white/80 hover:text-white" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-white/80 hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-white/80 hover:text-white">
                  Explore Plants
                </Link>
              </li>
              <li>
                <Link href="/learning" className="text-white/80 hover:text-white">
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ayush-vriksha-kit" className="text-white/80 hover:text-white">
                  Ayush Vriksha Kit
                </Link>
              </li>
              <li>
                <Link href="/virtual-garden" className="text-white/80 hover:text-white">
                  Virtual Garden
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Ayurvedic Remedies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/80 mt-0.5" />
                <span className="text-white/80">123 Ayurveda Lane, Herbal Garden, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/80" />
                <span className="text-white/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/80" />
                <span className="text-white/80">info@dhanvantarivatika.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Dhanvantari Vatika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

