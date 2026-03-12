"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Brain, Sparkles, User, Database, Cloud, Lock, Cpu, Network, Zap, Shield, TrendingUp, GitBranch, BarChart3, Users, Award, Rocket, DollarSign, HelpCircle, MessageSquare, Eye, Volume2, TrendingUp as TrendingUpAlt } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Features", id: "features" },
            { name: "Capabilities", id: "capabilities" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AIVerse"
          bottomLeftText="Global AI Community"
          bottomRightText="hello@aiverse.io"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          features={[
            {
              title: "Natural Language Processing",              description: "Understand and generate human language with unprecedented accuracy",              bentoComponent: "chat",              aiIcon: Brain,
              userIcon: User,
              exchanges: [
                {
                  userMessage: "Analyze customer sentiment from this feedback",                  aiResponse: "Detected 92% positive sentiment with strong satisfaction in product quality and customer service"
                },
                {
                  userMessage: "What are the key pain points?",                  aiResponse: "Main concerns: onboarding complexity and integration documentation. Suggestions provided."
                }
              ],
              placeholder: "Ask anything..."
            },
            {
              title: "Real-Time Analytics",              description: "Monitor AI model performance and insights as they happen",              bentoComponent: "animated-bar-chart"
            },
            {
              title: "Global Integration Hub",              description: "Connect seamlessly with your existing tech stack",              bentoComponent: "orbiting-icons",              centerIcon: Zap,
              items: [
                { icon: Database, ring: 1 },
                { icon: Cloud, ring: 1 },
                { icon: Lock, ring: 2 },
                { icon: Cpu, ring: 2 },
                { icon: Network, ring: 3 },
                { icon: Zap, ring: 3 }
              ]
            },
            {
              title: "Multi-Model Support",              description: "Deploy various AI models optimized for your use case",              bentoComponent: "3d-card-grid",              centerIcon: Brain,
              items: [
                { name: "Language Models", icon: MessageSquare },
                { name: "Vision AI", icon: Eye },
                { name: "Predictive Analytics", icon: TrendingUpAlt },
                { name: "Audio Processing", icon: Volume2 }
              ]
            }
          ]}
          animationType="slide-up"
          title="Powerful AI Capabilities"
          description="Experience the next generation of artificial intelligence with our comprehensive platform features designed for enterprise-scale performance"
          tag="Advanced Features"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          carouselMode="buttons"
        />
      </div>

      <div id="capabilities" data-section="capabilities">
        <FeatureHoverPattern
          features={[
            {
              icon: Zap,
              title: "Lightning-Fast Inference",              description: "Sub-millisecond response times optimized for real-time applications and high-volume processing"
            },
            {
              icon: Shield,
              title: "Enterprise Security",              description: "Military-grade encryption and compliance with HIPAA, SOC 2, and ISO 27001 standards"
            },
            {
              icon: TrendingUp,
              title: "Continuous Learning",              description: "Adaptive models that improve with every interaction and user feedback"
            },
            {
              icon: GitBranch,
              title: "Version Control",              description: "Track, compare, and rollback AI model versions seamlessly"
            },
            {
              icon: BarChart3,
              title: "Detailed Analytics",              description: "Comprehensive dashboards tracking model accuracy, usage metrics, and ROI"
            },
            {
              icon: Users,
              title: "Collaboration Tools",              description: "Work together with team members on AI model development and deployment"
            }
          ]}
          animationType="slide-up"
          title="Advanced AI Capabilities"
          description="Discover the sophisticated features that power enterprise-grade AI solutions"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Our Impact"
          tagIcon={Award}
          tagAnimation="slide-up"
          title="Transforming Businesses with Intelligent Automation"
          description="We empower organizations worldwide to harness the full potential of artificial intelligence. Our platform has become the trusted foundation for enterprises seeking to automate complex workflows, unlock data-driven insights, and scale their AI initiatives with confidence."
          metrics={[
            { value: "10,000+", title: "Active Users Globally" },
            { value: "500M+", title: "API Calls Monthly" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqgTkHmxulkjQkHeJ5SNYg13dq/a-futuristic-ai-platform-dashboard-inter-1773325594478-8a865243.png"
          imageAlt="A futuristic AI platform dashboard interface with dark background, featuring holographic data visual"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          testimonials={[
            {
              id: "1",              name: "Priya Sharma",              handle: "@priyasharma_ceo",              testimonial: "AIVerse transformed our operations. We reduced processing time by 85% and discovered insights we never knew existed. Absolutely game-changing.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqgTkHmxulkjQkHeJ5SNYg13dq/a-professional-headshot-of-a-confident-t-1773325595844-4048c79d.png",              imageAlt: "A professional headshot of a confident tech CEO, Asian male, wearing modern business attire against "
            },
            {
              id: "2",              name: "Marcus Chen",              handle: "@mchen_insights",              testimonial: "The platform's intuitive interface and powerful capabilities make it accessible to our entire team. Our productivity has skyrocketed since implementation.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqgTkHmxulkjQkHeJ5SNYg13dq/a-professional-headshot-of-a-successful--1773325593548-18e1bb9a.png",              imageAlt: "A professional headshot of a successful product manager, female, Caucasian, wearing business casual "
            },
            {
              id: "3",              name: "Aisha Johnson",              handle: "@aisha_innov",              testimonial: "From deployment to scale, AIVerse has been our trusted partner. The support team is exceptional and the documentation is comprehensive.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqgTkHmxulkjQkHeJ5SNYg13dq/a-professional-headshot-of-an-innovative-1773325593378-20e9e6c9.png",              imageAlt: "A professional headshot of an innovative entrepreneur, male, Black, wearing modern business attire a"
            },
            {
              id: "4",              name: "David Rodriguez",              handle: "@drodriguez_ai",              testimonial: "We've integrated AIVerse with all our backend systems seamlessly. The API documentation and integration tools are best-in-class.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqgTkHmxulkjQkHeJ5SNYg13dq/a-professional-headshot-of-a-data-scient-1773325593914-04d31d37.png",              imageAlt: "A professional headshot of a data scientist, female, Hispanic, wearing business casual clothing agai"
            },
            {
              id: "5",              name: "Elena Kowalski",              handle: "@elena_k_data",              testimonial: "The advanced analytics capabilities gave us competitive advantage. We're now making data-driven decisions faster than ever before.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqgTkHmxulkjQkHeJ5SNYg13dq/a-professional-headshot-of-a-tech-innova-1773325593850-e3114c16.png",              imageAlt: "A professional headshot of a tech innovator, male, South Asian, wearing modern business attire again"
            },
            {
              id: "6",              name: "James Thompson",              handle: "@jthompson_ops",              testimonial: "Security and compliance were our top concerns. AIVerse exceeded all our requirements and passed every audit with flying colors.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqgTkHmxulkjQkHeJ5SNYg13dq/a-professional-headshot-of-an-operations-1773325593678-3763ec85.png",              imageAlt: "A professional headshot of an operations director, female, Middle Eastern, wearing business casual a"
            }
          ]}
          animationType="slide-up"
          title="What Our Clients Say"
          description="Hear from forward-thinking leaders who are reshaping their industries"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          plans={[
            {
              id: "1",              price: "$299/month",              name: "Growth",              buttons: [
                { text: "Start Free Trial", href: "/signup" },
                { text: "Book Demo", href: "/contact" }
              ],
              features: [
                "Perfect for teams just exploring AI",                "100M API calls/month",                "Single AI model",                "Basic analytics dashboard",                "Email support",                "Standard SLA 99.5%"
              ]
            },
            {
              id: "2",              badge: "Most Popular",              badgeIcon: Sparkles,
              price: "$999/month",              name: "Professional",              buttons: [
                { text: "Start Free Trial", href: "/signup" },
                { text: "Book Demo", href: "/contact" }
              ],
              features: [
                "1B API calls/month",                "Unlimited AI models",                "Advanced analytics",                "Priority support",                "Enterprise SLA 99.9%",                "Custom integrations"
              ]
            },
            {
              id: "3",              price: "Custom",              name: "Enterprise",              buttons: [
                { text: "Contact Sales", href: "/contact" },
                { text: "Schedule Call", href: "/contact" }
              ],
              features: [
                "Unlimited API calls",                "Dedicated infrastructure",                "Custom AI models",                "24/7 dedicated support",                "99.99% SLA guarantee",                "On-premise deployment",                "Advanced security options"
              ]
            }
          ]}
          animationType="slide-up"
          title="Flexible Pricing for Every Scale"
          description="Choose the plan that fits your organization's needs. All plans include 14-day free trial with full feature access."
          tag="Transparent Pricing"
          tagIcon={DollarSign}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          carouselMode="buttons"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            {
              id: "1",              title: "What makes AIVerse different from competitors?",              content: "AIVerse combines state-of-the-art AI technology with enterprise-grade security, exceptional developer experience, and unparalleled customer support. Our platform is built for scalability, offering flexible deployment options from cloud to on-premise, with transparent pricing and no hidden fees."
            },
            {
              id: "2",              title: "How quickly can we get started?",              content: "Most customers are operational within 24-48 hours. Our onboarding team provides step-by-step guidance, API documentation, code examples, and dedicated support. We also offer a 14-day free trial so you can test the platform risk-free."
            },
            {
              id: "3",              title: "What kind of support do you provide?",              content: "We offer email support for Starter plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers. All plans include access to our comprehensive documentation, video tutorials, and active developer community."
            },
            {
              id: "4",              title: "Is my data secure with AIVerse?",              content: "Yes. We implement military-grade encryption, comply with HIPAA, SOC 2, and ISO 27001 standards, and conduct regular third-party security audits. Data is encrypted both in transit and at rest, and you maintain complete control over your data."
            },
            {
              id: "5",              title: "Can we customize the AI models for our specific use case?",              content: "Absolutely. Professional and Enterprise plans offer access to custom model development. Our AI specialists work with your team to train models tailored to your specific requirements and data patterns."
            },
            {
              id: "6",              title: "What are the system requirements for integration?",              content: "AIVerse is accessible via REST API, making it compatible with any programming language or platform. Minimal requirements: HTTPS connectivity and ability to make HTTP requests. We provide SDKs for Python, JavaScript, Java, and Go."
            },
            {
              id: "7",              title: "Do you offer volume discounts?",              content: "Yes. Enterprise customers with high API usage can negotiate custom pricing. Our sales team works with you to create a cost-effective solution that scales with your business needs."
            },
            {
              id: "8",              title: "Can we run AIVerse on our own infrastructure?",              content: "Enterprise customers have the option for on-premise deployment or private cloud deployment. This ensures data never leaves your infrastructure while maintaining full access to all platform features."
            }
          ]}
          title="Frequently Asked Questions"
          description="Find answers to common questions about our AI platform, pricing, and implementation"
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Transform?"
          tagIcon={Rocket}
          tagAnimation="slide-up"
          title="Start Your AI Journey Today"
          description="Join 10,000+ global companies already using AIVerse to unlock intelligent automation. Get started with a free trial—no credit card required."
          buttons={[
            { text: "Start Free Trial", href: "/signup" },
            { text: "Schedule Demo", href: "/contact" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="AIVerse"
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "API Documentation", href: "#" },
                { label: "Integrations", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Documentation", href: "#" },
                { label: "Support", href: "#" },
                { label: "Community", href: "#" },
                { label: "Status", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Security", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
          copyrightText="© 2025 AIVerse. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
