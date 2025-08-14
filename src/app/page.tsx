import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Heart, Users, MessageCircle, Stethoscope, BookOpen, Video, Crown, Shield } from "lucide-react"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif font-bold text-xl text-gray-900">MedConnect</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#specialties" className="text-gray-600 hover:text-blue-600 transition-colors">
                Specialties
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                Pricing
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif font-bold text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
            Connecting Care:
            <br />
            <span className="text-blue-600">Your Health, Your Community</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join a network of trusted medical professionals and informed patients. Access expert consultations,
            specialty groups, and premium healthcare content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Join as Patient
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
            >
              Join as Doctor
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10,000+ Healthcare Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>Trusted by Patients Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-gray-900 mb-4">
              Everything You Need for Better Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From expert consultations to community support, we've built the complete healthcare platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="font-serif text-xl">Doctor Channels</CardTitle>
                <CardDescription>
                  Follow your favorite healthcare professionals and stay updated with the latest medical insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-sky-600" />
                </div>
                <CardTitle className="font-serif text-xl">Specialty Groups</CardTitle>
                <CardDescription>
                  Join discussions in cardiology, neurology, and other medical specialties tailored to your needs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="font-serif text-xl">Expert Consultations</CardTitle>
                <CardDescription>
                  Book one-on-one consultations with certified medical professionals from around the world.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-sky-600" />
                </div>
                <CardTitle className="font-serif text-xl">Educational Content</CardTitle>
                <CardDescription>
                  Access a vast library of medical articles, videos, and resources for continuous learning.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="font-serif text-xl">Community Feed</CardTitle>
                <CardDescription>
                  Share experiences, ask questions, and connect with others on similar health journeys.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Crown className="w-6 h-6 text-sky-600" />
                </div>
                <CardTitle className="font-serif text-xl">Premium Access</CardTitle>
                <CardDescription>
                  Unlock exclusive content, priority consultations, and advanced features with our premium plans.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-gray-900 mb-4">Medical Specialties & Communities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with specialists and patients in your area of interest or medical condition.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Cardiology",
              "Neurology",
              "Oncology",
              "Pediatrics",
              "Dermatology",
              "Orthopedics",
              "Psychiatry",
              "Endocrinology",
              "Gastroenterology",
              "Pulmonology",
              "Rheumatology",
              "Urology",
            ].map((specialty) => (
              <Badge
                key={specialty}
                variant="secondary"
                className="p-3 text-center justify-center bg-white hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer border border-gray-200"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-gray-900 mb-4">Choose Your Healthcare Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible plans designed for patients and healthcare professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Patient Plans */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Patient Basic</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="text-3xl font-bold text-gray-900">Free</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Access to community feed</li>
                  <li>• Join specialty groups</li>
                  <li>• Basic educational content</li>
                  <li>• Limited consultations</li>
                </ul>
                <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 hover:border-blue-600 transition-colors relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl">Patient Premium</CardTitle>
                <CardDescription>Enhanced healthcare experience</CardDescription>
                <div className="text-3xl font-bold text-gray-900">
                  $29<span className="text-lg text-gray-500">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Everything in Basic</li>
                  <li>• Premium educational content</li>
                  <li>• Priority consultations</li>
                  <li>• Unlimited group access</li>
                  <li>• Direct doctor messaging</li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Start Premium</Button>
              </CardContent>
            </Card>

            {/* Doctor Plans */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Doctor Basic</CardTitle>
                <CardDescription>Share your expertise</CardDescription>
                <div className="text-3xl font-bold text-gray-900">Free</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Post to community feed</li>
                  <li>• Join professional groups</li>
                  <li>• Basic profile features</li>
                  <li>• Limited consultations</li>
                </ul>
                <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800">Join as Doctor</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-sky-500 hover:border-sky-600 transition-colors">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Doctor Pro</CardTitle>
                <CardDescription>Build your practice online</CardDescription>
                <div className="text-3xl font-bold text-gray-900">
                  $99<span className="text-lg text-gray-500">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Everything in Basic</li>
                  <li>• Create your own channel</li>
                  <li>• Advanced analytics</li>
                  <li>• Unlimited consultations</li>
                  <li>• Priority support</li>
                </ul>
                <Button className="w-full mt-6 bg-sky-600 hover:bg-sky-700">Go Professional</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-serif font-bold text-xl">MedConnect</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting healthcare professionals and patients for better health outcomes worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    For Patients
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    For Doctors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Specialties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Consultations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 MedConnect. All rights reserved. | HIPAA Compliant Healthcare Platform</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
