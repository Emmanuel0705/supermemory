"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  BookOpen,
  Code,
  Zap,
  Database,
  Shield,
  Search,
  ArrowRight,
  ExternalLink,
  Download,
  HelpCircle,
} from "lucide-react";

export default function DocsPage() {
  const docSections = [
    {
      title: "Getting Started",
      description:
        "Quick start guide to integrate supermemory into your application",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      items: [
        "Installation",
        "Authentication",
        "First API Call",
        "Basic Examples",
      ],
    },
    {
      title: "API Reference",
      description: "Complete API documentation with examples and parameters",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      items: ["Authentication", "Memories API", "Search API", "Webhooks API"],
    },
    {
      title: "SDKs & Libraries",
      description: "Official SDKs and client libraries for popular languages",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      items: ["JavaScript SDK", "Python SDK", "REST API", "GraphQL API"],
    },
    {
      title: "Security & Privacy",
      description: "Learn about our security practices and data protection",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      items: [
        "Data Encryption",
        "API Security",
        "Privacy Policy",
        "GDPR Compliance",
      ],
    },
  ];

  const quickLinks = [
    {
      title: "API Reference",
      description: "Complete API documentation",
      href: "#",
      icon: Code,
    },
    {
      title: "SDK Downloads",
      description: "Get the latest SDKs",
      href: "#",
      icon: Download,
    },
    {
      title: "Examples",
      description: "Code examples and tutorials",
      href: "#",
      icon: BookOpen,
    },
    {
      title: "Support",
      description: "Get help and support",
      href: "#",
      icon: HelpCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                supermemory{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Everything you need to integrate supermemory into your
                applications and build the future of AI-powered memory.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-medium rounded-lg flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Start Reading</span>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-lg font-medium rounded-lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  API Reference
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Quick Links
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <link.icon className="w-6 h-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {link.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {link.description}
                    </p>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Documentation Sections
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {docSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mb-6`}
                    >
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {section.description}
                    </p>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center space-x-2 text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="ghost"
                      className="mt-6 text-blue-600 hover:text-blue-700 p-0"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quick Start Example
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get up and running with supermemory in just a few lines of code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">
                  JavaScript Example
                </span>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`import { SuperMemory } from '@supermemory/sdk';

// Initialize the client
const memory = new SuperMemory({
  apiKey: 'your-api-key'
});

// Create a new memory
const newMemory = await memory.create({
  content: 'Important meeting notes about Q1 planning',
  tags: ['work', 'meeting', 'planning'],
  source: 'slack'
});

// Search for memories
const results = await memory.search({
  query: 'Q1 planning',
  limit: 10
});

console.log('Found memories:', results);`}</code>
              </pre>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to get started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of developers who are already building with
                supermemory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-medium rounded-lg">
                  Get API Key
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-lg font-medium rounded-lg"
                >
                  View Examples
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
