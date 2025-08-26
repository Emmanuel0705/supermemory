import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Blog from "@/components/blog";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Introducing supermemory: Unified Memory for Claude",
      excerpt:
        "We're excited to announce the launch of supermemory, a revolutionary platform that connects all your favorite apps and services to provide unified memory for Claude.",
      author: "supermemory Team",
      date: "2025-01-15",
      readTime: "5 min read",
      tags: ["Product", "Launch"],
      featured: true,
    },
    {
      id: 2,
      title: "How AI Memory is Transforming Productivity",
      excerpt:
        "Discover how AI-powered memory systems are changing the way we work, think, and collaborate in the digital age.",
      author: "Sarah Chen",
      date: "2025-01-10",
      readTime: "8 min read",
      tags: ["AI", "Productivity"],
    },
    {
      id: 3,
      title: "Building the Future of Personal Knowledge Management",
      excerpt:
        "A deep dive into the technical architecture and design principles behind supermemory's unified memory system.",
      author: "Alex Rodriguez",
      date: "2025-01-08",
      readTime: "12 min read",
      tags: ["Engineering", "Architecture"],
    },
    {
      id: 4,
      title: "The Psychology of Digital Memory",
      excerpt:
        "Understanding how our brains work with digital tools and how supermemory enhances our cognitive capabilities.",
      author: "Dr. Emily Watson",
      date: "2025-01-05",
      readTime: "6 min read",
      tags: ["Psychology", "Research"],
    },
    {
      id: 5,
      title: "Integrating supermemory with Your Existing Workflow",
      excerpt:
        "Practical tips and strategies for seamlessly incorporating supermemory into your daily productivity routine.",
      author: "Mike Johnson",
      date: "2025-01-03",
      readTime: "7 min read",
      tags: ["Tutorial", "Productivity"],
    },
    {
      id: 6,
      title: "Privacy and Security in AI Memory Systems",
      excerpt:
        "How supermemory ensures your data remains private and secure while providing powerful AI-enhanced memory capabilities.",
      author: "Lisa Park",
      date: "2025-01-01",
      readTime: "9 min read",
      tags: ["Security", "Privacy"],
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return <Blog />;
}
