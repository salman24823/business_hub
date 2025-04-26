"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Content from "./Content"; // assuming default export

const Detail = () => {
  const searchParams = useSearchParams();
  const param = searchParams.get("params");

  const data = [
    {
      id: 1,
      dataTitle: "Web Development",
      description:
        "Businesshub Workspace is your one-stop solution for powerful, modern, and scalable web applications. Our team specializes in the MERN stack, but our capabilities go far beyond that.",
      subTitle2: "Our Services Include:",
      points: [
        "Full-Stack Web Application Development using MERN",
        "Custom Frontend Development with React, Next.js, and Tailwind CSS",
        "Backend API Development with Express.js, Node.js, and MongoDB",
        "Shopify Store Setup, Theme Customization & App Integration",
        "WordPress Website Development including Custom Themes & Plugins",
        "E-commerce Website Development with secure payment gateways",
        "PHP & Laravel based Web Applications",
        "Website Optimization, SEO Readiness & Performance Tuning",
        "Real-time Application Development with WebSockets & Firebase",
        "Maintenance, Bug Fixing, and Ongoing Technical Support",
      ],
      subTitle3: "Technologies",
      technologies: [
        "MERN Stack",
        "Next.js",
        "Tailwind CSS",
        "Shopify",
        "WordPress",
        "PHP",
        "Laravel",
        "Firebase",
        "REST APIs",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "Our web development team brings a balance of technical precision and creative problem-solving. We don’t just build websites; we engineer growth platforms that scale with your business. With experience in diverse frameworks and industries, we tailor every feature to support your unique goals, ensuring security, speed, and seamless performance."
    },
    {
      id: 2,
      dataTitle: "SEO",
      description:
        "Enhance your online presence and rank higher on search engines with our comprehensive SEO services tailored for modern businesses.",
      subTitle2: "Our Services Include:",
      points: [
        "On-Page SEO Optimization",
        "Keyword Research and Strategy",
        "Technical SEO Audit and Fixes",
        "Local SEO Services",
        "Link Building Campaigns",
        "Content Optimization for SEO",
        "Competitor SEO Analysis",
        "SEO Reporting & Analytics",
      ],
      subTitle3: "Technologies",
      technologies: [
        "Google Search Console",
        "SEMRush",
        "Ahrefs",
        "Yoast SEO",
        "Screaming Frog",
        "Moz",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "We go beyond keyword stuffing and technical tweaks. Our SEO experts combine in-depth analytics with user-centric strategies to improve your visibility where it counts. From local optimization to enterprise-level campaigns, we use white-hat practices that build long-term rankings and sustainable traffic."
    },
    {
      id: 3,
      dataTitle: "App Development",
      description:
        "We craft high-performance mobile applications tailored to your business goals, using modern technologies and a user-focused approach.",
      subTitle2: "Our Services Include:",
      points: [
        "iOS & Android App Development",
        "Cross-Platform Apps using React Native & Flutter",
        "Backend Integration & API Development",
        "UI/UX Design for Mobile Apps",
        "App Store Deployment & Support",
        "Maintenance & Feature Enhancements",
      ],
      subTitle3: "Technologies",
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "Node.js",
        "MongoDB",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "From concept to deployment, we take a user-first approach to app development. Our apps are lightweight, secure, and built for scalability, delivering seamless experiences across platforms. Whether you're a startup or an enterprise, we ensure rapid development without compromising quality."
    },
    {
      id: 4,
      dataTitle: "Social Media Marketing",
      description:
        "Grow your brand’s digital footprint and engage your target audience with data-driven social media strategies.",
      subTitle2: "Our Services Include:",
      points: [
        "Social Media Strategy & Planning",
        "Content Creation & Scheduling",
        "Ad Campaign Management",
        "Audience Engagement & Community Management",
        "Analytics & Performance Tracking",
      ],
      subTitle3: "Platforms",
      technologies: [
        "Facebook",
        "Instagram",
        "LinkedIn",
        "Twitter (X)",
        "TikTok",
        "Meta Ads Manager",
        "Canva",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "We don’t just post — we strategize. Our team uses platform algorithms, trend tracking, and data analysis to create meaningful content that drives engagement. Whether it's organic growth or paid ads, we help your brand build a loyal digital community."
    },
    {
      id: 5,
      dataTitle: "Ecommerce Solutions",
      description:
        "We offer end-to-end ecommerce solutions to build, scale, and manage your online store effectively.",
      subTitle2: "Our Services Include:",
      points: [
        "Custom Ecommerce Website Development",
        "Shopify & WooCommerce Store Setup",
        "Payment Gateway Integration",
        "Inventory & Order Management Systems",
        "User Experience Optimization",
      ],
      subTitle3: "Technologies",
      technologies: [
        "Shopify",
        "WooCommerce",
        "Magento",
        "Stripe",
        "PayPal",
        "React",
        "Node.js",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "We understand ecommerce from every angle—UX, performance, security, and conversions. Our custom-built solutions are optimized to reduce cart abandonment, improve user flow, and maximize ROI. Whether you're launching a new store or upgrading an existing one, we’ve got the tools and expertise."
    },
    {
      id: 6,
      dataTitle: "Graphics and UI/UX Designing",
      description:
        "We create visually stunning graphics and intuitive UI/UX designs to make your brand stand out and enhance user experience.",
      subTitle2: "Our Services Include:",
      points: [
        "Logo & Brand Identity Design",
        "Website & App UI/UX Design",
        "Marketing Materials & Social Media Graphics",
        "User Journey & Wireframe Prototyping",
      ],
      subTitle3: "Tools",
      technologies: [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Sketch",
        "InVision",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "Design is more than visuals — it's about connection. Our team creates designs that speak your brand's voice while focusing on user experience. Every detail, from typography to color palette, is intentionally crafted to create delightful, intuitive journeys."
    },
    {
      id: 7,
      dataTitle: "Video Editing",
      description:
        "High-quality video editing services to bring your stories to life, tailored for marketing, branding, or entertainment purposes.",
      subTitle2: "Our Services Include:",
      points: [
        "Promotional & Corporate Videos",
        "YouTube Video Editing",
        "Short-form Social Content",
        "Color Grading & Sound Editing",
      ],
      subTitle3: "Tools",
      technologies: [
        "Adobe Premiere Pro",
        "Final Cut Pro",
        "After Effects",
        "DaVinci Resolve",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "We bring your stories to life with cinematic precision. From creative storytelling to professional post-production, we produce videos that captivate, educate, and inspire across any platform."
    },
    {
      id: 8,
      dataTitle: "Digital Consulting",
      description:
        "Strategic consulting to help businesses navigate digital transformation and maximize tech-driven opportunities.",
      subTitle2: "Our Services Include:",
      points: [
        "Technology Roadmapping",
        "Digital Strategy Formulation",
        "Process Automation",
        "Business Intelligence & Data Analytics",
      ],
      subTitle3: "Expertise Areas",
      technologies: [
        "ERP Systems",
        "CRM Platforms",
        "Data Analytics Tools",
        "AI & Machine Learning",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "We act as your innovation partner—guiding you through digital transformation with clarity, strategy, and measurable outcomes. Our insights help streamline operations, boost efficiency, and future-proof your business."
    },
    {
      id: 9,
      dataTitle: "Podcasting",
      description:
        "We help you launch and grow your podcast with professional production, editing, and distribution services.",
      subTitle2: "Our Services Include:",
      points: [
        "Podcast Recording & Editing",
        "Episode Planning & Scripting",
        "Distribution to Major Platforms",
        "Cover Art & Branding",
      ],
      subTitle3: "Tools",
      technologies: [
        "Audacity",
        "Adobe Audition",
        "Anchor",
        "Spotify for Podcasters",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "Podcasting is about connection. We help you create polished, compelling content that resonates with your audience while handling the technical side so you can focus on your voice and vision."
    },
    {
      id: 10,
      dataTitle: "Digital Trading Services",
      description:
        "Expert guidance and tools to help you navigate the world of digital trading and online assets.",
      subTitle2: "Our Services Include:",
      points: [
        "Crypto Trading Strategy Consulting",
        "Technical & Fundamental Analysis",
        "Portfolio Management",
        "Market Research & Insights",
      ],
      subTitle3: "Platforms",
      technologies: [
        "Binance",
        "Coinbase",
        "MetaTrader",
        "TradingView",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "We simplify the complex world of digital assets with strategic insights, personalized guidance, and risk-aware strategies—empowering both new and experienced traders."
    },
    {
      id: 11,
      dataTitle: "Social Media Influence",
      description:
        "Boost your influence with curated social media campaigns and influencer collaborations.",
      subTitle2: "Our Services Include:",
      points: [
        "Influencer Marketing Campaigns",
        "Brand Collaborations",
        "Audience Growth Strategies",
        "Performance Analytics",
      ],
      subTitle3: "Platforms",
      technologies: [
        "Instagram",
        "TikTok",
        "YouTube",
        "Influencer Platforms",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "We turn creators into influencers and brands into trendsetters. With targeted collaborations and smart analytics, we grow authentic engagement that translates into impact."
    },
    {
      id: 12,
      dataTitle: "Email Marketing",
      description:
        "Reach your audience directly with customized email campaigns that convert and retain customers.",
      subTitle2: "Our Services Include:",
      points: [
        "Email Campaign Design",
        "Automation & Drip Campaigns",
        "Audience Segmentation",
        "Performance Tracking",
      ],
      subTitle3: "Tools",
      technologies: [
        "Mailchimp",
        "Sendinblue",
        "ActiveCampaign",
        "HubSpot",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "Our email marketing services go beyond templates. We design personalized, data-driven campaigns that boost engagement, reduce churn, and drive conversions—delivering real value to your subscribers."
    },
  ];

  const filteredData = data.filter((item) => item.id === Number(param));

  return (
    <div>
      <Content data={filteredData} />
    </div>
  );
};

export default Detail;
