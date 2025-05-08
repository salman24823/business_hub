"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Content from "./Content"; // assuming default export

const DetailContent = () => {
  const searchParams = useSearchParams();
  const param = searchParams.get("params");

  const data = [
    {
      id: 1,
      dataTitle: "Product Hunting",
      description:
        "At Businesshub Workspace, we specialize in helping entrepreneurs and e-commerce brands identify winning products through advanced product hunting strategies. Our expert team utilizes cutting-edge tools, deep market research, and data-driven techniques to uncover high-demand, low-competition products across various platforms like Amazon, Shopify, and Daraz. Whether you're launching a new online store or scaling an existing one, we provide actionable insights that align with current trends and consumer behavior, ensuring profitability and sustained growth.",
      subTitle2: "Our Services Include:",
      points: [
        "In-depth market analysis to identify trending and high-demand products with minimal competition.",
        "Use of powerful tools like Jungle Scout, Helium 10, and DataDive to extract profitable product ideas.",
        "Competitor analysis and reverse engineering to understand what’s working in the market.",
        "Product validation through metrics like BSR (Best Seller Rank), reviews, ratings, and estimated sales.",
        "Niche selection and segmentation for tailored product listings and better targeting.",
        "Listing optimization and keyword research to enhance visibility and conversion.",
        "Risk assessment and ROI calculation to ensure informed product selection.",
        "Platform-specific product hunting for Amazon FBA, Shopify, Daraz, and other marketplaces.",
        "Sourcing guidance and supplier evaluation from platforms like Alibaba and local vendors.",
        "Continuous trend monitoring and seasonal opportunity identification for sustained success.",
      ],
      subTitle3: "Tools & Platforms We Use",
      technologies: [
        "Helium 10",
        "Jungle Scout",
        "DataDive",
        "Amazon Seller Central",
        "Shopify",
        "Daraz",
        "Alibaba",
        "Keepa",
        "Google Trends",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "We don’t just find products—we discover opportunities. Our team blends analytical precision with entrepreneurial insight to deliver product recommendations that are scalable, profitable, and market-ready. Whether you're a beginner or a seasoned seller, we equip you with the tools, data, and strategy to succeed in the fast-paced world of e-commerce.",
    },
    {
      id: 2,
      dataTitle: "Product Sourcing",
      description:
        "At Businesshub Workspace, we specialize in streamlined and strategic product sourcing to help entrepreneurs and e-commerce brands discover reliable, high-quality suppliers globally. Our sourcing experts connect you with verified manufacturers and wholesalers, ensuring cost-effective procurement, consistent quality, and timely delivery. Whether you're launching a new product line or scaling your inventory, we provide end-to-end sourcing solutions that align with your brand goals and market demands. With a deep understanding of international trade, supplier negotiations, and risk management, we ensure a seamless sourcing journey that accelerates your business growth.",
      subTitle2: "Our Services Include:",
      points: [
        "Supplier discovery and verification from trusted global markets including China, USA, and Europe.",
        "Product research based on market demand, competition analysis, and pricing insights.",
        "Factory audits and quality control to ensure product standards and reliability.",
        "Negotiation and communication with suppliers to secure favorable pricing and terms.",
        "Sampling coordination and product testing before bulk orders.",
        "Logistics support including freight forwarding, customs clearance, and shipping solutions.",
        "Private labeling and packaging customization to align with your brand identity.",
        "Inventory forecasting and reordering strategies to avoid stockouts or overstock.",
        "Risk management and legal compliance for import/export operations.",
        "Ongoing sourcing support to adapt to evolving product trends and market shifts.",
      ],
      subTitle3: "Sourcing Channels",
      technologies: [
        "Alibaba",
        "1688",
        "Global Sources",
        "DHgate",
        "Made-in-China",
        "Local Wholesale Markets",
        "Manufacturer Direct Connections",
        "Logistics Partners",
        "Inspection Services",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "With Businesshub Workspace, you gain a sourcing partner who prioritizes transparency, quality, and cost-efficiency. Our global supplier network, hands-on verification processes, and market-driven insights empower your business to find winning products while minimizing sourcing risks. We handle the heavy lifting so you can focus on selling and scaling.",
    },
    {
      id: 3,
      dataTitle: "Niched Market",
      description:
        "At Businesshub Workspace, we help entrepreneurs and businesses target and succeed in specific, high-value market segments. Our approach to niching down allows you to focus on a defined audience, delivering tailored solutions that resonate with their unique needs. By combining deep market research, strategic insights, and targeted marketing, we enable you to create a brand that speaks directly to your ideal customers. From identifying profitable niches to building compelling offers, our team supports you in carving out a space where your business can thrive, even in competitive industries.",
      subTitle2: "Our Services Include:",
      points: [
        "In-depth market research to identify high-potential, underserved niches within your industry.",
        "Consumer behavior analysis to understand the pain points, preferences, and motivations of your target audience.",
        "Competitive analysis to determine market gaps and positioning strategies for differentiation.",
        "Branding and messaging development focused on appealing to a specific audience with a unique value proposition.",
        "Custom product and service offerings tailored to the needs of a niche market.",
        "Targeted marketing campaigns, including social media, content marketing, and paid advertising, designed for niche visibility.",
        "SEO strategies that focus on niche keywords to drive organic traffic and attract the right customers.",
        "Building niche-specific websites or e-commerce platforms with a personalized experience for your audience.",
        "Networking support with industry influencers and partnerships to grow brand awareness within niche communities.",
        "Ongoing market analysis and strategy optimization to stay ahead of evolving trends within your niche.",
      ],
      subTitle3: "Key Niche Market Areas",
      technologies: [
        "Market Research Tools",
        "Google Trends",
        "SEMrush",
        "BuzzSumo",
        "Social Media Analytics",
        "SEO & Content Strategy",
        "Influencer Marketing Platforms",
        "CRM Systems",
        "Email Marketing Tools",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "We specialize in helping businesses identify and capitalize on profitable niche markets, ensuring your brand connects with the right customers. With a focus on research-driven strategies, targeted messaging, and expert digital marketing techniques, we guide you in carving out a unique position in the market. We don’t just follow trends; we help you set them, ensuring your business stands out in your niche.",
    },
    {
      id: 4,
      dataTitle: "Marketing Support",
      description:
        "At Businesshub Workspace, we provide comprehensive marketing support to help you grow your brand and reach your ideal customers. Our team of experts uses data-driven strategies and creative techniques to boost your online presence, improve customer engagement, and drive conversions. From social media marketing to SEO and content creation, we help you develop a strong digital marketing strategy that aligns with your business goals. Whether you're a startup or an established brand, our tailored marketing solutions are designed to accelerate your growth and increase your competitive edge in the market.",
      subTitle2: "Our Services Include:",
      points: [
        "Social media marketing and management to increase brand awareness and drive customer engagement on platforms like Facebook, Instagram, LinkedIn, and Twitter.",
        "Search Engine Optimization (SEO) to improve your website's visibility and ranking on search engines, driving organic traffic to your site.",
        "Content marketing strategies including blog posts, articles, videos, and infographics to educate, engage, and convert your audience.",
        "Paid advertising campaigns (PPC, Google Ads, Facebook Ads) designed to drive targeted traffic and generate high-quality leads.",
        "Email marketing campaigns to nurture leads, build relationships with customers, and promote products or services.",
        "Brand strategy development, helping you create a strong and consistent brand identity across all touchpoints.",
        "Conversion rate optimization (CRO) to enhance the effectiveness of your website or landing pages and increase conversions.",
        "Influencer and affiliate marketing partnerships to extend your reach and connect with relevant audiences.",
        "Analytics and performance tracking to measure the success of marketing efforts and make data-driven adjustments for continuous improvement.",
        "Marketing automation tools to streamline your campaigns and improve efficiency in lead generation, nurturing, and conversion.",
      ],
      subTitle3: "Marketing Tools & Platforms",
      technologies: [
        "Google Ads",
        "Facebook Ads",
        "Instagram Ads",
        "LinkedIn Ads",
        "Google Analytics",
        "SEMrush",
        "Hootsuite",
        "Mailchimp",
        "HubSpot",
        "Canva",
        "Ahrefs",
        "Buffer",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "Our marketing support team combines creativity with analytics to develop effective strategies that deliver measurable results. We work closely with you to understand your brand's unique needs and develop customized marketing solutions that drive growth. Whether you're looking to build a strong online presence, generate leads, or boost conversions, we ensure that your marketing efforts are aligned with your business goals, enabling sustainable success in a competitive digital landscape.",
    },
    {
      id: 5,
      dataTitle: "Networking Support",
      description:
        "At Businesshub Workspace, we understand that success often hinges on the strength of your professional network. That's why we offer tailored networking support to help you build meaningful connections, foster partnerships, and open doors to new opportunities. Our team helps you connect with key industry players, potential clients, suppliers, and investors, empowering your business to thrive in a collaborative environment. Through targeted networking events, personalized introductions, and strategic relationship-building, we ensure you have the right connections to accelerate your growth and success.",
      subTitle2: "Our Services Include:",
      points: [
        "Access to exclusive networking events, conferences, and meetups tailored to your industry and business needs.",
        "Personalized introductions to key stakeholders, including potential clients, partners, suppliers, and investors.",
        "Strategic guidance on building and nurturing valuable business relationships both online and offline.",
        "Opportunities for collaboration through joint ventures, partnerships, and cross-promotion with other businesses.",
        "Support in finding and joining relevant industry associations and communities for long-term networking growth.",
        "Investor matchmaking services, helping startups connect with angel investors, venture capitalists, and funding opportunities.",
        "Development of a strong online presence and network through LinkedIn and other professional platforms.",
        "Co-working space access for networking with like-minded entrepreneurs and professionals in a collaborative environment.",
        "Tailored workshops and seminars focused on improving networking skills, relationship-building strategies, and business development.",
        "Ongoing support and advice on leveraging your network for business growth and expansion.",
      ],
      subTitle3: "Networking Platforms & Tools",
      technologies: [
        "LinkedIn",
        "Eventbrite",
        "Meetup",
        "Slack Communities",
        "AngelList",
        "Co-working Spaces",
        "Professional Associations",
        "Business Forums",
        "Referral Programs",
        "Zoom for Virtual Networking",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "Networking is more than just collecting business cards—it's about fostering genuine relationships that lead to growth. Our networking support services provide you with the tools, events, and expertise to connect with the right people at the right time. With our help, you'll build a powerful network that opens doors to new business opportunities, partnerships, and funding, ensuring long-term success for your business.",
    },
    {
      id: 6,
      dataTitle: "Training & Development",
      description:
        "At Businesshub Workspace, we are committed to empowering businesses and individuals with the knowledge and skills they need to succeed. Our training and development services are designed to equip your team with the latest industry insights, tools, and best practices. Whether you're looking to enhance your team's technical abilities, improve leadership skills, or stay ahead of emerging trends, our tailored training programs provide the support necessary to drive growth and innovation. With hands-on learning, expert trainers, and continuous development resources, we ensure that you and your team are always at the forefront of your industry.",
      subTitle2: "Our Services Include:",
      points: [
        "Customized corporate training programs in areas such as leadership development, communication skills, and team collaboration.",
        "Technical training for software development teams, focusing on modern technologies like the MERN stack, cloud computing, and DevOps practices.",
        "Workshops and seminars on digital marketing, social media strategies, and e-commerce development to help businesses grow online.",
        "Professional development programs that enhance employees' soft skills, including problem-solving, time management, and critical thinking.",
        "Tailored training for startups and entrepreneurs, covering business strategy, operations management, and financial literacy.",
        "Employee onboarding programs to help new hires integrate quickly and effectively into your company culture and processes.",
        "Training in the use of project management tools such as Jira, Trello, and Asana for improved team collaboration and project tracking.",
        "Customer service and sales training to improve client interactions, conversions, and retention.",
        "Ongoing development opportunities to keep your team up to date with the latest industry trends, tools, and methodologies.",
        "Access to online training resources, e-learning modules, and certifications to promote continuous learning.",
      ],
      subTitle3: "Key Areas of Focus",
      technologies: [
        "Leadership Development",
        "Team Collaboration",
        "Technical Skills (MERN Stack, Cloud Computing, DevOps)",
        "Digital Marketing & E-commerce",
        "Professional & Soft Skills",
        "Project Management (Jira, Trello, Asana)",
        "Customer Service & Sales",
        "Entrepreneurship & Business Strategy",
        "Financial Literacy & Operations Management",
        "Online Learning Platforms & E-learning Tools",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "Our training and development services are designed to empower your team and foster a culture of continuous learning. We work closely with you to develop programs that align with your business goals, ensuring that every training session is relevant, practical, and impactful. Whether you’re preparing your team for new challenges or helping them enhance existing skills, our expert trainers and flexible learning formats ensure that you get the most out of every session.",
    },
    {
      id: 7,
      dataTitle: "Consultancy Service",
      description:
        "At Businesshub Workspace, we provide strategic consultancy services that help businesses thrive in today's competitive landscape. Our experienced consultants work closely with you to identify challenges, define opportunities, and create tailored strategies that drive growth and efficiency. Whether you are looking for business development advice, market analysis, operational optimization, or digital transformation, we offer comprehensive solutions to ensure your business reaches its full potential. With our industry expertise and hands-on approach, we empower you to make informed decisions and achieve sustainable success.",
      subTitle2: "Our Services Include:",
      points: [
        "Business strategy consulting to help you define clear objectives, align your team, and set actionable goals for sustainable growth.",
        "Market research and competitive analysis to identify trends, evaluate your position, and uncover opportunities for expansion.",
        "Operational optimization strategies to streamline processes, reduce costs, and improve efficiency across your business operations.",
        "Financial consulting to guide you on budgeting, forecasting, cost management, and securing funding for expansion or new ventures.",
        "Digital transformation and technology consulting to integrate modern tools and systems that enhance productivity and innovation.",
        "Branding and marketing consultancy to help you develop a strong, marketable brand identity and impactful marketing campaigns.",
        "Human resources consulting for talent acquisition, organizational structure, employee development, and improving company culture.",
        "Change management consulting to assist with organizational shifts, ensuring smooth transitions and minimizing resistance.",
        "E-commerce and digital business consulting, from platform selection to optimization strategies for driving online sales and growth.",
        "Legal and compliance consulting to ensure your business adheres to relevant laws, regulations, and industry standards.",
      ],
      subTitle3: "Industries We Serve",
      technologies: [
        "Startups & Entrepreneurs",
        "E-commerce",
        "Technology & SaaS",
        "Retail & Consumer Goods",
        "Healthcare & Life Sciences",
        "Manufacturing & Supply Chain",
        "Financial Services & FinTech",
        "Education & EdTech",
        "Real Estate & Property Management",
        "Nonprofit & Social Enterprises",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "Our consultancy services are designed to provide you with clear, actionable insights and strategic guidance to drive your business forward. We take the time to understand your unique needs and challenges, tailoring our recommendations to ensure practical, impactful solutions. With a focus on long-term success, we work alongside you every step of the way, helping you navigate complex decisions and achieve sustainable growth. Whether you're looking to optimize internal processes, enter new markets, or enhance your digital presence, our experienced consultants are here to support you.",
    },
    {
      id: 8,
      dataTitle: "Strategy & Planning",
      description:
        "At Businesshub Workspace, we specialize in providing actionable strategies and comprehensive planning to help businesses succeed and scale in today's competitive environment. Our expert team works closely with you to define clear goals, create a solid roadmap for success, and implement plans that drive growth and profitability. Whether you're launching a new venture, optimizing your current operations, or planning for future expansion, we deliver tailored strategies that align with your business vision and objectives.",
      subTitle2: "Our Services Include:",
      points: [
        "Strategic business planning, from defining mission and vision to outlining measurable objectives and KPIs for success.",
        "Market analysis and positioning strategies to help you understand the competitive landscape and capitalize on emerging trends.",
        "Growth hacking strategies that drive rapid customer acquisition, engagement, and retention in scalable ways.",
        "Product and service portfolio optimization, ensuring your offerings meet market demand and deliver maximum value.",
        "Financial forecasting and budgeting to ensure optimal resource allocation and profitability.",
        "Risk management strategies, helping you identify and mitigate potential risks to business continuity.",
        "Digital transformation and innovation strategies to incorporate the latest technology and processes that enhance efficiency and competitiveness.",
        "Branding and marketing strategies, from identity development to lead generation and conversion optimization.",
        "Operational strategy and optimization, refining business processes to improve efficiency, reduce costs, and maximize profitability.",
        "Business model development and innovation to adapt to evolving markets and create sustainable revenue streams.",
      ],
      subTitle3: "Industries We Serve",
      technologies: [
        "Startups & Entrepreneurs",
        "E-commerce & Retail",
        "Technology & SaaS",
        "Healthcare & Biotech",
        "Manufacturing & Industrial",
        "Real Estate & Property Development",
        "Financial Services & FinTech",
        "Consumer Goods & Services",
        "Education & EdTech",
        "Nonprofit & Social Enterprises",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "We bring a results-driven approach to strategy and planning, helping you turn your vision into a sustainable, growth-oriented business. Our team blends analytical rigor with creative thinking to develop strategies that are both actionable and impactful. With years of experience across diverse industries, we tailor our approach to meet your specific business challenges and opportunities. Whether you're aiming for rapid growth, exploring new markets, or optimizing your internal processes, we deliver strategies that help you succeed in the long run.",
    },
    {
      id: 9,
      dataTitle: "Research & Development",
      description:
        "At Businesshub Workspace, we combine cutting-edge technology and innovative methodologies to accelerate the research and development of your products and services. Our dedicated team works closely with you to explore new ideas, refine existing offerings, and integrate advanced technologies that drive competitive advantage. Whether you're developing a new product, enhancing your current services, or exploring new technologies, we provide the R&D expertise needed to turn visionary concepts into tangible results.",
      subTitle2: "Our Services Include:",
      points: [
        "Market research and analysis to understand trends, customer needs, and competitive landscapes.",
        "Product development, from concept to prototype, ensuring functionality, scalability, and usability.",
        "Innovation strategy development to identify new opportunities and explore emerging technologies that can disrupt industries.",
        "User experience (UX) and user interface (UI) research, ensuring products meet customer expectations and are intuitive to use.",
        "Technology integration and experimentation, evaluating and adopting cutting-edge solutions like AI, blockchain, and IoT.",
        "Product testing and feedback loops to iterate and improve product features based on real-world usage.",
        "Process optimization and improvement, identifying efficiencies in operations and reducing time-to-market.",
        "Development of proof-of-concept (POC) prototypes to validate new product ideas and technologies before full-scale development.",
        "Collaborations and partnerships with academic institutions and research labs to stay at the forefront of innovation.",
        "Ongoing R&D support, ensuring products evolve with changing markets, technologies, and customer demands.",
      ],
      subTitle3: "Technologies",
      technologies: [
        "Artificial Intelligence (AI)",
        "Blockchain",
        "Internet of Things (IoT)",
        "Machine Learning (ML)",
        "Cloud Computing",
        "Augmented Reality (AR) & Virtual Reality (VR)",
        "Big Data & Analytics",
        "API Integrations",
        "5G Technology",
        "Robotic Process Automation (RPA)",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "At Businesshub Workspace, we blend research and development with real-world application to help you stay ahead of the curve. Our team is driven by curiosity, innovation, and a relentless pursuit of excellence. We collaborate closely with you to understand your vision and transform it into breakthrough products and services. With our deep expertise in emerging technologies and market trends, we offer R&D solutions that are not just theoretical but practical, ensuring your business remains competitive and ready for the future.",
    },
    {
      id: 10,
      dataTitle: "Modern Technologies",
      description:
        "At Businesshub Workspace, we are committed to providing modern and scalable solutions that empower your business through the latest technologies. Our expert team specializes in a variety of frameworks and emerging technologies, ensuring that your digital presence is powered by the most effective and innovative solutions. Whether you're exploring new opportunities in AI, blockchain, or advanced web development, we are your partner in harnessing the power of modern technologies to deliver superior user experiences and drive measurable results.",
      subTitle2: "Our Services Include:",
      points: [
        "Leveraging Artificial Intelligence (AI) to create intelligent, data-driven solutions that enhance user experiences and automate business processes.",
        "Integrating Blockchain technologies for enhanced security, transparency, and decentralized operations in sectors like finance, supply chain, and more.",
        "Developing advanced web and mobile applications using the MERN stack, Next.js, React, and Tailwind CSS for high-performance user interfaces.",
        "Utilizing Cloud Computing platforms like AWS, Google Cloud, and Azure to build scalable and reliable solutions with high availability.",
        "Building and optimizing real-time applications using WebSockets, Firebase, and other cutting-edge tools to provide live interactions and notifications.",
        "Implementing Internet of Things (IoT) solutions to connect devices, collect data, and automate processes for smart environments.",
        "Creating custom e-commerce experiences using Shopify, WordPress, and other platforms, integrating payment systems, inventory, and personalized shopping.",
        "Building AR/VR applications to engage users in immersive experiences for retail, entertainment, and training solutions.",
        "Optimizing websites with advanced SEO strategies and performance enhancements using tools like Lighthouse and GTmetrix.",
        "Providing ongoing technical support, bug fixing, and system maintenance to ensure continuous growth and adaptation to modern technology trends.",
      ],
      subTitle3: "Technologies",
      technologies: [
        "Artificial Intelligence (AI)",
        "Blockchain",
        "Internet of Things (IoT)",
        "Machine Learning (ML)",
        "Cloud Computing (AWS, Google Cloud, Azure)",
        "Augmented Reality (AR) & Virtual Reality (VR)",
        "MERN Stack",
        "Next.js",
        "Tailwind CSS",
        "Firebase",
        "Shopify",
        "WordPress",
        "PHP",
        "Laravel",
        "REST APIs",
      ],
      subTitle4: "Why Choose Us",
      whyChooseUs:
        "At Businesshub Workspace, we embrace the most modern technologies to drive innovation for your business. Our team stays ahead of the curve by continuously exploring new solutions and techniques that offer competitive advantages. Whether you are looking to innovate with AI, enhance your security with blockchain, or transform your customer experience through immersive AR/VR, we provide the technological expertise to help you succeed in the digital age. Our tailored solutions ensure that your business is not only current but also prepared for future advancements.",
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

const Detail = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailContent />
    </Suspense>
  );
};

export default Detail;
