import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="w-full h-auto lg:h-[80vh] p-[5%] flex items-center justify-center">
        <div className="w-full flex flex-col items-center gap-6">
          <h2 className="sub_heading">
            <span className="yellow">Privacy</span> Policy
          </h2>
          <p className="text-lg font-semibold text-gray-500 text-center">
            At Business Hub, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and services.
          </p>
        </div>
      </section>
      <section className="w-full p-[5%] flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="point">Information We Collect</span>
          <strong>We may collect the following types of information:</strong>
          <span className="text-gray-500">Personal Information:</span>
          <ul className="policysection">
            <li>Full name, email address, and phone number</li>
            <li>Job title, company name, and business-related details</li>
            <li>Demographic data such as age, gender, and location</li>
          </ul>
          <span className="text-gray-500">Usage & Technical Data:</span>
          <ul className="policysection">
            <li>IP address, browser type, and device information</li>
            <li>Pages visited, time spent, and interaction behavior</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <span className="point">How We Use Your Information</span>
          <strong>We use the information to:</strong>
          <ul className="policysection">
            <li>Enhance and personalize your experience</li>
            <li>Support skill development and professional growth</li>
            <li>Communicate updates, offers, and useful content</li>
            <li>Analyze trends and improve our services</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <span className="point">Sharing Your Information</span>
          <strong>
            We do not sell your personal information. However, we may share your data with:
          </strong>
          <ul className="policysection">
            <li>Third-party partners assisting in service delivery</li>
            <li>Service providers for analytics, communication, or operations</li>
          </ul>
          <span className="text-gray-500">
            All third-party partners are bound by confidentiality and data protection agreements.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="point">Your Rights</span>
          <strong>You have the right to:</strong>
          <ul className="policysection">
            <li>Access, update, or delete your personal information</li>
            <li>Withdraw consent for data processing</li>
            <li>Request a copy of the information we hold about you</li>
            <li>Opt-out of marketing communications</li>
          </ul>
          <span className="text-gray-500">
            To exercise your rights, contact us at:{" "}
            <span className="font-bold">businesshubworkspace@gmail.com</span>
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="point">Data Security</span>
          <span className="text-gray-500">
            We implement strong security protocols and regularly monitor our systems to protect your personal data from unauthorized access or misuse.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="point">Children's Privacy</span>
          <span className="text-gray-500">
            Our services are not directed toward individuals under the age of 13. We do not knowingly collect information from children. If you believe we have done so, please contact us for immediate removal.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="point">Policy Updates</span>
          <span className="text-gray-500">
            We may update this Privacy Policy periodically. The latest version will always be available on this page with the updated effective date.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="point">Contact Us</span>
          <span className="text-gray-500">
            For questions, concerns, or more information about this policy or our data practices, contact us:
          </span>
          <strong>Business Hub</strong>
          <span>
            <span className="font-bold blue">Email:</span>{" "}
            businesshubworkspace@gmail.com
          </span>
          <span>
            <span className="font-bold blue">Phone: </span> +923007238256
          </span>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;


// import React from "react";

// const PrivacyPolicy = () => {
//   return (
//     <>
//       <section className="w-full h-auto lg:h-[80vh] p-[5%] flex items-center justify-center">
//         <div className="w-full flex flex-col items-center gap-6">
//           <h2 className="sub_heading">
//             <span className="yellow">Privacy</span> Policy
//           </h2>
//           <p className="text-lg font-semibold text-gray-500 text-center">
//             At Business Hub, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and services.
//           </p>
//         </div>
//       </section>
//       <section className="w-full p-[5%] flex flex-col gap-10">
//         <div className="flex flex-col gap-2">
//           <span className="point">Information We Collect</span>
//           <strong>We may collect the following types of information:</strong>
//           <span className="text-gray-500">Personal Information:</span>
//           <ul className="policysection">
//             <li>Full name, contact number, and email address</li>
//             <li>Demographic details (age, gender, location)</li>
//             <li>Business-related information (if applicable)</li>
//           </ul>
//           <span className="text-gray-500">Usage:</span>
//           <ul className="policysection">
//             <li>Interaction with our website or services</li>
//             <li>Device information, IP address, browser type</li>
//             <li>Cookies and tracking technologies</li>
//           </ul>
//         </div>

//         <div className="flex flex-col gap-2">
//           <span className="point">How We Use Your Information</span>
//           <strong>We use the collected data to:</strong>
//           <ul className="policysection">
//             <li>Provide and improve our services</li>
//             <li>Assist in your skill development and business growth</li>
//             <li>Communicate updates, offers, and relevant content</li>
//             <li>Analyze engagement to enhance user experience</li>
//           </ul>
//         </div>

//         <div className="flex flex-col gap-2">
//           <span className="point">Sharing Your Information</span>
//           <strong>
//             We do not sell your personal information. We may share your
//             information with:
//           </strong>
//           <ul className="policysection">
//             <li>Trusted partners and platforms to provide our services</li>
//             <li>Service providers who assist us in our operations</li>
//           </ul>
//           <span className="text-gray-500">
//             All data shared is limited to the purpose intended and protected
//             under confidentiality agreements.
//           </span>
//         </div>

//         <div className="flex flex-col gap-2">
//           <span className="point">Your Rights and Choices</span>
//           <strong>You have the right to:</strong>
//           <ul className="policysection">
//             <li>Access, update, or delete your information</li>
//             <li>Withdraw your consent for data processing</li>
//             <li>Opt-out of promotional communications</li>
//           </ul>
//           <span className="text-gray-500">
//             To exercise any of these rights, please contact us at:{" "}
//             <span className="font-bold">businesshubworkspace@gmail.com</span>
//           </span>
//         </div>

//         <div className="flex flex-col gap-2">
//           <span className="point">Data Security</span>
//           <span className="text-gray-500">
//             We implement strict technical and organizational measures to
//             safeguard your information from unauthorized access, misuse, or
//             disclosure.
//           </span>
//         </div>

//         <div className="flex flex-col gap-2">
//           <span className="point">Children's Privacy</span>
//           <span className="text-gray-500">
//             Our services are not directed to individuals under the age of 13.
//             We do not knowingly collect personal information from children.
//           </span>
//         </div>

//         <div className="flex flex-col gap-2">
//           <span className="point">Changes to This Policy</span>
//           <span className="text-gray-500">
//             We may update this Privacy Policy from time to time. All changes
//             will be posted on this page with an updated "Last Updated" date.
//           </span>
//         </div>

//         <div className="flex flex-col gap-2">
//           <span className="point">Contact Us</span>
//           <span className="text-gray-500">
//             If you have any questions or concerns regarding this Privacy Policy
//             or how your data is handled, please reach out to:
//           </span>
//           <strong>Business Hub</strong>
//           <span>
//             <span className="font-bold blue">Email:</span>{" "}
//             businesshubworkspace@gmail.com
//           </span>
//           <span>
//             <span className="font-bold blue">Phone: </span> +923007238256
//           </span>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PrivacyPolicy;
