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
        "At Businesshub Workspace, we redefine web development by delivering powerful, modern, and scalable solutions tailored to your business needs. Our expert team specializes in the MERN stack (MongoDB, Express.js, React, Node.js) but extends expertise across a wide range of frameworks and technologies. Whether you're launching a startup, scaling an enterprise platform, or enhancing an existing website, we craft bespoke web applications that prioritize performance, user experience, and long-term growth. From pixel-perfect frontends to robust backend architectures, our holistic approach ensures your digital presence is both visually stunning and technically sound, driving measurable results for your business.",
      subTitle2: "Our Services Include:",
      points: [
        "Comprehensive full-stack web application development using the MERN stack, ensuring seamless integration of frontend and backend functionalities.",
        "Custom frontend development with React, Next.js, and Tailwind CSS, creating responsive, intuitive, and visually appealing user interfaces.",
        "Robust backend API development with Express.js, Node.js, and MongoDB, delivering secure, scalable, and high-performance server-side solutions.",
        "Shopify store setup, theme customization, and app integration, tailored to create engaging and conversion-focused e-commerce experiences.",
        "WordPress website development, including custom themes, plugins, and optimizations for blogs, portfolios, and business sites.",
        "E-commerce website development with secure payment gateways like Stripe and PayPal, integrated inventory systems, and user-friendly checkout flows.",
        "PHP and Laravel-based web applications, providing flexible, secure, and maintainable solutions for complex business requirements.",
        "Website optimization, SEO readiness, and performance tuning, leveraging tools like Lighthouse and GTmetrix to enhance speed and search engine rankings.",
        "Real-time application development using WebSockets and Firebase, enabling dynamic features like live chat, notifications, and collaborative tools.",
        "Ongoing maintenance, bug fixing, and technical support to ensure your website remains secure, up-to-date, and aligned with evolving business needs.",
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
        "Elevate your brand’s online visibility and dominate search engine rankings with our comprehensive SEO services, meticulously designed for modern businesses. Our approach combines cutting-edge techniques, in-depth analytics, and user-focused strategies to ensure your website not only ranks higher but also attracts and retains the right audience. From optimizing on-page elements to executing sophisticated link-building campaigns, we deliver measurable results that drive organic traffic and enhance your digital presence. Whether you're a local business or a global enterprise, our tailored SEO solutions are built to maximize your reach and achieve sustainable growth in an ever-evolving digital landscape.",
      subTitle2: "Our Services Include:",
      points: [
        "On-page SEO optimization, including meta tags, headings, and content structure, to ensure search engines understand and prioritize your website.",
        "Advanced keyword research and strategy development, identifying high-value, low-competition terms to target your ideal audience effectively.",
        "Technical SEO audits and fixes, addressing site speed, mobile-friendliness, crawl errors, and schema markup to enhance search engine performance.",
        "Local SEO services, optimizing Google My Business profiles, local citations, and geo-targeted content to dominate regional search results.",
        "High-quality link-building campaigns, securing authoritative backlinks through guest posting, outreach, and content partnerships.",
        "Content optimization for SEO, creating engaging, keyword-rich articles, blogs, and landing pages that resonate with users and algorithms alike.",
        "Competitor SEO analysis, benchmarking your performance against industry leaders to uncover opportunities and refine strategies.",
        "Detailed SEO reporting and analytics, providing transparent insights into rankings, traffic, and conversions using tools like Google Analytics and SEMRush.",
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
        "Transform your business with high-performance, user-centric mobile applications crafted to meet your unique objectives. Our app development services encompass iOS, Android, and cross-platform solutions, blending innovative design with robust functionality. Whether you're building a consumer-facing app or an enterprise-grade tool, we prioritize seamless user experiences, scalability, and security. From initial concept to post-launch support, our team leverages modern technologies and agile methodologies to deliver apps that engage users and drive business value, ensuring your mobile presence stands out in a competitive digital ecosystem.",
      subTitle2: "Our Services Include:",
      points: [
        "Native iOS and Android app18 app development with Swift for iPhone and Kotlin for Android, delivering platform-specific performance and features.",
        "Cross-platform app development using React Native and Flutter, enabling cost-effective, high-quality apps that work seamlessly across iOS and Android.",
        "Custom backend integration and API development, creating secure, scalable server-side solutions with Node.js and MongoDB for real-time data syncing.",
        "Intuitive UI/UX design for mobile apps, focusing on user-friendly navigation, accessibility, and visually appealing interfaces tailored to your brand.",
        "App Store and Google Play deployment, including optimization for discoverability, compliance with store guidelines, and post-launch support.",
        "Ongoing maintenance and feature enhancements, ensuring your app remains compatible with new OS versions and user expectations over time.",
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
        "Amplify your brand’s digital presence and forge meaningful connections with your audience through our data-driven social media marketing services. We craft strategic, platform-specific campaigns that leverage the latest trends, algorithms, and analytics to boost engagement and brand loyalty. From creating compelling content to managing targeted ad campaigns, our team ensures your brand stands out in crowded social feeds. Whether you're aiming for organic growth or amplified reach through paid strategies, we deliver measurable results that align with your business goals and foster a loyal online community.",
      subTitle2: "Our Services Include:",
      points: [
        "Tailored social media strategy and planning, aligning campaigns with your brand identity, audience demographics, and business objectives.",
        "High-quality content creation and scheduling, including posts, stories, reels, and videos designed to captivate and engage your followers.",
        "Targeted ad campaign management, optimizing budgets and audiences on platforms like Meta Ads Manager to maximize ROI and conversions.",
        "Proactive audience engagement and community management, responding to comments, messages, and reviews to build trust and loyalty.",
        "Comprehensive analytics and performance tracking, providing detailed reports on reach, engagement, and conversions to refine strategies.",
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
        "Launch and scale your online store with our end-to-end e-commerce solutions, designed to deliver seamless shopping experiences and maximize conversions. We build custom, secure, and user-friendly platforms tailored to your business, integrating advanced features like payment gateways, inventory management, and analytics. Whether you're starting from scratch or optimizing an existing store, our team ensures your e-commerce ecosystem is robust, scalable, and optimized for performance, helping you reduce cart abandonment, enhance user flow, and drive sustainable revenue growth.",
      subTitle2: "Our Services Include:",
      points: [
        "Custom e-commerce website development, creating unique, brand-aligned stores with advanced functionality and responsive design.",
        "Shopify and WooCommerce store setup, including theme customization, app integrations, and performance optimizations for seamless operations.",
        "Secure payment gateway integration with providers like Stripe, PayPal, and Square, ensuring safe and efficient transactions for customers.",
        "Advanced inventory and order management systems, streamlining stock tracking, order fulfillment, and returns for operational efficiency.",
        "User experience optimization, leveraging heatmaps, A/B testing, and analytics to improve navigation, reduce friction, and boost conversions.",
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
        "We understand e-commerce from every angle—UX, performance, security, and conversions. Our custom-built solutions are optimized to reduce cart abandonment, improve user flow, and maximize ROI. Whether you're launching a new store or upgrading an existing one, we’ve got the tools and expertise."
    },
    {
      id: 6,
      dataTitle: "Graphics and UI/UX Designing",
      description:
        "Elevate your brand with visually captivating graphics and intuitive UI/UX designs that create memorable user experiences. Our design team combines creativity with user-centric principles to craft logos, interfaces, and marketing materials that resonate with your audience. From wireframes to final assets, we focus on usability, accessibility, and aesthetic appeal, ensuring every design element aligns with your brand identity and business goals. Whether for web, mobile, or print, our designs are crafted to inspire, engage, and convert.",
      subTitle2: "Our Services Include:",
      points: [
        "Logo and brand identity design, creating distinctive, scalable assets that reflect your brand’s values and vision across all touchpoints.",
        "Website and mobile app UI/UX design, delivering intuitive, responsive interfaces optimized for usability and conversion rates.",
        "Marketing materials and social media graphics, producing eye-catching banners, infographics, and posts for digital and print campaigns.",
        "User journey mapping and wireframe prototyping, ensuring seamless navigation and delightful experiences through iterative design processes.",
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
        "Transform your raw footage into compelling, professional-grade videos with our expert video editing services. We specialize in creating cinematic content for marketing, branding, education, and entertainment, tailored to your vision and audience. From promotional videos to social media clips, our team handles every aspect—editing, color grading, sound design, and motion graphics—to deliver polished results that captivate and inspire. With a focus on storytelling and technical precision, we ensure your videos leave a lasting impact across platforms.",
      subTitle2: "Our Services Include:",
      points: [
        "Promotional and corporate video production, crafting high-energy, brand-aligned content for product launches, events, and company profiles.",
        "YouTube video editing, optimizing intros, transitions, and pacing to boost viewer retention and channel growth.",
        "Short-form social media content, creating viral-ready clips for Instagram Reels, TikTok, and YouTube Shorts with dynamic effects and captions.",
        "Advanced color grading and sound editing, enhancing visual mood and audio clarity to deliver a professional, immersive experience.",
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
        "Navigate the complexities of digital transformation with our strategic consulting services, designed to unlock your business’s full potential. We provide actionable insights, technology roadmaps, and data-driven strategies to help you adopt innovative solutions and stay ahead of the curve. From process automation to business intelligence, our experts partner with you to streamline operations, enhance decision-making, and drive sustainable growth. Whether you're modernizing legacy systems or exploring AI-driven opportunities, we deliver tailored guidance for measurable success.",
      subTitle2: "Our Services Include:",
      points: [
        "Technology roadmapping, aligning IT investments with long-term business goals through phased, actionable plans.",
        "Digital strategy formulation, identifying opportunities for innovation, customer engagement, and competitive differentiation.",
        "Process automation, implementing tools like RPA and workflow software to reduce manual tasks and boost efficiency.",
        "Business intelligence and data analytics, leveraging platforms like Tableau and Power BI to uncover insights and drive informed decisions.",
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
        "Launch, produce, and grow your podcast with our end-to-end podcasting services, designed to help you connect with audiences worldwide. From recording and editing to distribution and branding, we handle the technical and creative aspects so you can focus on delivering compelling content. Whether you're a beginner or a seasoned podcaster, our team ensures your episodes are polished, professional, and optimized for platforms like Spotify and Apple Podcasts. Let us help you build a loyal listener base with high-quality audio and strategic promotion.",
      subTitle2: "Our Services Include:",
      points: [
        "High-quality podcast recording and editing, refining audio with noise reduction, EQ, and seamless transitions for a professional sound.",
        "Episode planning and scripting, crafting engaging narratives and structuring content to retain listeners and convey your message.",
        "Distribution to major platforms, optimizing metadata and submitting episodes to Spotify, Apple Podcasts, and Google Podcasts for maximum reach.",
        "Custom cover art and branding, designing eye-catching visuals that reflect your podcast’s identity and attract new listeners.",
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
        "Master the dynamic world of digital trading with our expert consulting and cutting-edge tools, tailored to empower traders of all levels. We offer personalized strategies, in-depth market analysis, and portfolio management services to help you navigate cryptocurrencies, forex, and other digital assets with confidence. Our team combines technical expertise with risk-aware approaches to deliver actionable insights and sustainable results. Whether you're a novice or a seasoned investor, we provide the guidance and resources to optimize your trading performance and achieve your financial goals.",
      subTitle2: "Our Services Include:",
      points: [
        "Crypto trading strategy consulting, developing personalized plans based on market trends, risk tolerance, and investment goals.",
        "Technical and fundamental analysis, using advanced charting tools and economic indicators to identify high-potential trading opportunities.",
        "Portfolio management services, optimizing asset allocation and rebalancing to maximize returns while minimizing volatility.",
        "Market research and insights, delivering real-time updates, trend analysis, and forecasts to keep you ahead of market movements.",
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
        "Build a powerful social media presence and amplify your influence with our expert-led influencer marketing and growth strategies. We help creators, brands, and businesses cultivate authentic engagement, forge impactful collaborations, and expand their reach across platforms. From crafting viral content to analyzing performance metrics, our team equips you with the tools and insights to become a trendsetter in your niche. Whether you're starting your journey or scaling your influence, we deliver tailored solutions that drive real-world impact and lasting connections.",
      subTitle2: "Our Services Include:",
      points: [
        "Influencer marketing campaigns, connecting brands with the right creators to drive awareness, trust, and conversions.",
        "Strategic brand collaborations, negotiating partnerships that align with your values and amplify your message to targeted audiences.",
        "Audience growth strategies, leveraging content plans, hashtag research, and engagement tactics to build a loyal, active follower base.",
        "Performance analytics and reporting, tracking KPIs like reach, engagement, and ROI to optimize campaigns and demonstrate value.",
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
        "Engage, convert, and retain your audience with our sophisticated email marketing services, designed to deliver personalized, results-driven campaigns. We create tailored email strategies that blend compelling content, smart automation, and advanced segmentation to maximize open rates and conversions. From welcome sequences to re-engagement campaigns, our team ensures every email aligns with your brand and drives measurable business outcomes. Whether you're nurturing leads or building customer loyalty, we help you harness the power of email to foster lasting relationships and boost revenue.",
      subTitle2: "Our Services Include:",
      points: [
        "Custom email campaign design, crafting visually appealing, mobile-optimized emails with persuasive copy and strong calls-to-action.",
        "Automation and drip campaigns, setting up triggered sequences for onboarding, cart recovery, and customer retention to save time and increase efficiency.",
        "Audience segmentation and personalization, targeting specific customer groups with tailored content based on behavior, preferences, and demographics.",
        "Performance tracking and optimization, analyzing open rates, click-through rates, and conversions to refine strategies and improve results over time.",
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
      <hr />
    </div>
  );
};

export default Detail;
