import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { UpperHeader } from "@/components/upper-header";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Software from '@/public/Soft 1.png';
export default function WebDesignServices() {
  return (
    <main className="min-h-screen">
      <UpperHeader/>
      <Header/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container px-4 py-12 md:py-24 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Transforming Ideas into Stunning Websites with Web Design
              </h1>
              <p className="text-lg opacity-90">
                Your website is the digital face of your business, and first impressions matter. Our Web Design Services help you create and align with your brand. Whether you're launching a new site or revamping an existing one, we help you stand out online.
              </p>
              <Button size="lg" variant="secondary">
                Get A Quote Now
              </Button>
            </div>
            <div className="relative h-[200px] md:h-[300px]">
              <Image
                src={Software}
                alt="Web Design Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Web Design Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="h-40 relative">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features of Our Web Designs</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Features Illustration"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Web Design Process</h2>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Technology Stack"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Finally Delivered Project</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt={`Project ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

const services = [
  {
    title: "Custom Web Design",
    description: "Professional designs tailored to your brand identity and business needs.",
  },
  {
    title: "Responsive Design",
    description: "Websites optimized for all devices, from desktops to smartphones.",
  },
  {
    title: "UX/UI Design",
    description: "Intuitive user experience and aesthetically pleasing interfaces.",
  },
  {
    title: "Landing Page Design",
    description: "High-converting landing pages for marketing campaigns.",
  },
  {
    title: "E-commerce Web Design",
    description: "Customer-centric shopping experiences with modern design elements.",
  },
  {
    title: "Brand Integration",
    description: "Seamless integration of your brand identity across all digital platforms.",
  },
]

const features = [
  {
    title: "SEO Ready Structure",
    description: "Designs optimized for better search engine rankings.",
  },
  {
    title: "Fast Loading Times",
    description: "Quick page loads optimized with latest web standards.",
  },
  {
    title: "Interactive Elements",
    description: "Engaging animations and interactive features to enhance user experience.",
  },
  {
    title: "Customizable Components",
    description: "Flexible design elements that adapt to your needs.",
  },
]

