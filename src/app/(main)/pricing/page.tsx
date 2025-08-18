import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Check, Star, Zap, Crown, Users, Database, Shield } from "lucide-react";
import { Pricing } from "@/components/pricing";

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals and small projects",
      features: [
        "1,000 API calls per month",
        "Basic memory storage",
        "Email support",
        "SDK access",
        "Basic integrations",
      ],
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Ideal for growing teams and businesses",
      features: [
        "50,000 API calls per month",
        "Advanced memory features",
        "Priority support",
        "Advanced integrations",
        "Team collaboration",
        "Custom webhooks",
        "Analytics dashboard",
      ],
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited API calls",
        "Custom memory models",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees",
        "On-premise deployment",
        "Custom training",
      ],
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      popular: false,
    },
  ];

  const features = [
    {
      title: "Unified Memory",
      description:
        "Connect all your apps and services for seamless memory access",
      icon: Database,
    },
    {
      title: "AI-Powered Search",
      description:
        "Intelligent search across all your memories with natural language",
      icon: Zap,
    },
    {
      title: "Team Collaboration",
      description: "Share and collaborate on memories with your team",
      icon: Users,
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption and compliance",
      icon: Shield,
    },
  ];

  return <Pricing />;
}
