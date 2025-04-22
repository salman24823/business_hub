"use client"

export default function TermsAndConditions() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-[10%]">
      <h1 className="text-4xl font-bold text-center mb-8">
        <span className="text-yellow-400">Terms</span> and <span className="text-yellow-400">Conditions</span>
      </h1>

      <div className="text-center mb-12 text-gray-600">
        <p>Effective Date: {currentDate}</p>
        <p className="mt-4">
          Welcome to Business Hub. By accessing or using our website and services, you agree to be bound by the
          following Terms and Conditions. Please read them carefully.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
        <p className="text-gray-700">
          Business Hub offers resources, training, and digital services to individuals and businesses for growth and
          development. You agree to use our services only for lawful purposes and in accordance with our policies.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
        <p className="text-gray-700">
          All content on this site, including text, graphics, logos, videos, and other material, is the property of
          Business Hub and is protected by applicable copyright and trademark laws. You may not reproduce, distribute,
          or use any content without written permission.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
        <p className="text-gray-700">
          You agree not to misuse the website or attempt to interfere with the proper functioning of our platform. Any
          misuse may lead to termination of access.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Accountability</h2>
        <p className="text-gray-700">
          If you create an account or interact with our platform on behalf of a business, you are responsible for
          maintaining the confidentiality of your information and for all activities under your account.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Third-Party Links and Integrations</h2>
        <p className="text-gray-700">
          Our website may include links or integrations with platforms like TikTok or other third-party tools. We are
          not responsible for the content or practices of these external sites, though we ensure all integrations are
          secure and professional.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
        <p className="text-gray-700">
          Business Hub is not liable for any indirect, incidental, or consequential damages that may result from the use
          of, or inability to use, our services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
        <p className="text-gray-700">
          We may update these Terms and Conditions from time to time. Continued use of our services after changes
          constitutes acceptance of the new terms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
        <p className="text-gray-700">
          These terms shall be governed by and construed in accordance with the laws of [Insert Country/Region].
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          For any questions regarding these Terms and Conditions, please contact us at:
        </p>
        <div className="pl-4 border-l-4 border-yellow-400">
          <p className="mb-2">
            <strong>Email:</strong> businesshubworspace@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +923007238256
          </p>
        </div>
      </section>
    </div>
  )
}
