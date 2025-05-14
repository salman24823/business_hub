import React from 'react'

const link_us = () => {
  return (
    <div id='links_container'>
      <div className="font-sans bg-gray-50 text-gray-800 leading-relaxed py-8 px-4 max-w-3xl mx-auto">
        <a
          href="/businesshubworkspace.vcf"
          className="inline-block px-5 py-3 mb-8 bg-yellow-400 text-black font-bold rounded-md no-underline hover:bg-yellow-500"
          download
        >
          📥 Download vCard
        </a>

        <h1 className="text-yellow-400 text-3xl mb-2">📇 Connect with Business Hub Workspace</h1>
        <p className="mb-8">Your one-stop connection point — reach us anytime, anywhere.</p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">📞 Phone Numbers & WhatsApp</h2>
          <ul className="space-y-2">
            <li><span className="font-bold mr-1">📱</span>+92 300 8405105 — <a href="https://wa.me/923008405105" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">WhatsApp</a></li>
            <li><span className="font-bold mr-1">📱</span>0300 7238256 — <a href="https://wa.me/923007238256" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">WhatsApp</a></li>
            <li><span className="font-bold mr-1">📱</span>0320 7483568 — <a href="https://wa.me/923207483568" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">WhatsApp</a></li>
            <li><span className="font-bold mr-1">📱</span>0300 8664329 — <a href="https://wa.me/923008664329" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">WhatsApp</a></li>
            <li><span className="font-bold mr-1">☎️</span>041 - 8718800</li>
            <li><span className="font-bold mr-1">☎️</span>041 - 5235627</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">📧 Email & Website</h2>
          <p><span className="font-bold mr-1">🌐</span><a href="https://www.businesshubworkspace.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.businesshubworkspace.com</a></p>
          <p><span className="font-bold mr-1">📧</span><a href="mailto:businesshubworkspace@gmail.com" className="text-blue-500 hover:underline">businesshubworkspace@gmail.com</a></p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">📍 Location</h2>
          <p className="mb-2">
            Main Blvd, D Ground Block B, People's Colony No. 1,<br />
            Faisalabad, Pakistan
          </p>
          <p><a href="https://maps.app.goo.gl/P34gyioo2X75nhGA6" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">📌 View on Google Maps</a></p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔗 Follow Us on Social Media</h2>
          <div className="space-x-4">
            <a href="https://facebook.com/businesshubworkspace" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">👍 Facebook</a>
            <a href="https://instagram.com/businesshubworkspace" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">📸 Instagram</a>
            <a href="https://youtube.com/@businesshubworkspace" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">▶️ YouTube</a>
            <a href="https://tiktok.com/@businesshubworkspace" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">🎵 TikTok</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default link_us


