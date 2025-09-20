import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Brain, Zap, Shield, Users, BarChart3, ArrowRight, Play } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8" />
            <span className="text-xl font-bold">DentalAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-accent transition-colors">
              Home
            </a>
            <a href="#technology" className="hover:text-accent transition-colors">
              Technology
            </a>
            <a href="#features" className="hover:text-accent transition-colors">
              Features
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          <Button variant="secondary" size="sm">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Zap className="h-4 w-4 mr-2" />
                  AI-Powered Detection
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Advanced Tooth X-Ray
                  <span className="text-primary block">Disease Detection</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Revolutionary AI system using YOLOv5 and YOLOv8 deep learning models to detect dental issues from
                  X-ray images with unprecedented accuracy and speed.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Try Demo
                  <Play className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.2%</div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2.3s</div>
                  <div className="text-sm text-muted-foreground">Analysis Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Conditions</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <img
                  src="/dental-xray-ai.png"
                  alt="AI analyzing dental X-ray"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  AI Analysis Complete
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              <Brain className="h-4 w-4 mr-2" />
              Deep Learning Technology
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">Powered by Advanced AI Models</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our system leverages state-of-the-art YOLOv5 and YOLOv8 architectures for real-time object detection and
              classification of dental pathologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">YOLOv8 Architecture</CardTitle>
                    <CardDescription>Latest generation object detection</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Enhanced accuracy and speed with improved feature extraction and multi-scale detection capabilities
                  for precise dental anomaly identification.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Real-time processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Multi-class detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">High precision boundaries</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">YOLOv5 Foundation</CardTitle>
                    <CardDescription>Proven reliability and robustness</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Battle-tested architecture providing consistent performance across diverse X-ray imaging conditions
                  and equipment variations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Robust performance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Equipment agnostic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Extensive validation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-2xl p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Detection Capabilities</h3>
                <p className="text-muted-foreground">
                  Our AI models can identify and classify multiple dental conditions simultaneously with clinical-grade
                  accuracy.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Caries Detection",
                    "Root Canal Issues",
                    "Periodontal Disease",
                    "Impacted Teeth",
                    "Bone Loss",
                    "Fractures",
                    "Abscesses",
                    "Cysts",
                    "Tumors",
                  ].map((condition) => (
                    <div key={condition} className="bg-muted/50 rounded-lg p-3 text-center">
                      <div className="text-sm font-medium">{condition}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              <BarChart3 className="h-4 w-4 mr-2" />
              Key Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">Why Choose Our AI System</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Designed specifically for dental professionals, our system combines cutting-edge AI with practical
              clinical workflow integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Process X-rays in under 3 seconds with real-time analysis and instant results delivery.",
              },
              {
                icon: Shield,
                title: "Clinical Accuracy",
                description: "99.2% accuracy rate validated against expert radiologist diagnoses across 50,000+ cases.",
              },
              {
                icon: Users,
                title: "Easy Integration",
                description:
                  "Seamlessly integrates with existing PACS systems and dental practice management software.",
              },
              {
                icon: Brain,
                title: "Continuous Learning",
                description:
                  "AI models continuously improve through federated learning while maintaining patient privacy.",
              },
              {
                icon: BarChart3,
                title: "Detailed Reports",
                description:
                  "Comprehensive analysis reports with confidence scores and visual annotations for each finding.",
              },
              {
                icon: CheckCircle,
                title: "FDA Compliant",
                description:
                  "Meets all regulatory requirements for medical AI devices with full audit trail capabilities.",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 p-3 rounded-lg w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">Ready to Transform Your Practice?</h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Join hundreds of dental professionals already using our AI system to improve diagnostic accuracy and patient
            outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">DentalAI</span>
              </div>
              <p className="text-muted-foreground">Advanced AI-powered dental diagnosis for the modern practice.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Features</div>
                <div>Technology</div>
                <div>Pricing</div>
                <div>Demo</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>About</div>
                <div>Careers</div>
                <div>Press</div>
                <div>Contact</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Documentation</div>
                <div>Help Center</div>
                <div>Training</div>
                <div>Status</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 DentalAI. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </div>
  )
}
