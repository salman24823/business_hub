import React from 'react'
import { Download, Phone, Mail, Globe, MapPin, Facebook, Instagram, Youtube, Music, Smartphone, LandPlot } from 'lucide-react'

const Links = () => {
  return (
    <div id='links_container' className='mt-32' > 
      <div className="font-sans bg-gray-50 text-gray-800 leading-relaxed py-8 px-4 max-w-3xl mx-auto">
        <a
          href="/businesshubworkspace.vcf"
          className="inline-block px-5 py-3 mb-8 bg-yellow-400 text-black font-bold rounded-md no-underline hover:bg-yellow-500"
          download
        >
          <Download className="inline-block mr-2 h-5 w-5" /> Download vCard
        </a>

        <h1 className="text-yellow-400 text-3xl mb-2"><LandPlot className="inline-block mr-2 h-6 w-6" /> Connect with Business Hub Workspace</h1>
        <p className="mb-8">Your one-stop connection point — reach us anytime, anywhere.</p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4"><Phone className="inline-block mr-2 h-5 w-5" /> Phone Numbers & WhatsApp</h2>
          <ul className="space-y-2">
            <li><Smartphone className="inline-block mr-2 h-5 w-5" />+92 300 8405105 — <a href="https://wa.me/923008405105" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">WhatsApp</a></li>
            <li><Smartphone className="inline-block mr-2 h-5 w-5" />0300 7238256 — <a href="https://wa.me/923007238256" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">WhatsApp</a></li>
            <li><Smartphone className="inline-block mr-2 h-5 w-5" />0320 7483568 — <a href="https://wa.me/923207483568" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">WhatsApp</a></li>
            <li><Smartphone className="inline-block mr-2 h-5 w-5" />0300 8664329 — <a href="https://wa.me/923008664329" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">WhatsApp</a></li>
            <li><Phone className="inline-block mr-2 h-5 w-5" />041 - 8718800</li>
            <li><Phone className="inline-block mr-2 h-5 w-5" />041 - 5235627</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4"><Mail className="inline-block mr-2 h-5 w-5" /> Email & Website</h2>
          <p><Globe className="inline-block mr-2 h-5 w-5" /><a href="https://www.businesshubworkspace.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.businesshubworkspace.com</a></p>
          <p><Mail className="inline-block mr-2 h-5 w-5" /><a href="mailto:businesshubworkspace@gmail.com" className="text-blue-500 hover:underline">businesshubworkspace@gmail.com</a></p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4"><MapPin className="inline-block mr-2 h-5 w-5" /> Location</h2>
          <p className="mb-2">
            Main Blvd, D Ground Block B, People's Colony No. 1,<br />
            Faisalabad, Pakistan
          </p>
          <p><MapPin className="inline-block mr-2 h-5 w-5" /><a href="https://maps.app.goo.gl/P34gyioo2X75nhGA6" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on Google Maps</a></p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔗 Follow Us on Social Media</h2>
          <div className="space-x-4">
            <a href="https://facebook.com/businesshubworkspace" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><Facebook className="inline-block mr-2 h-5 w-5" /> Facebook</a>
            <a href="https://instagram.com/businesshubworkspace" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><Instagram className="inline-block mr-2 h-5 w-5" /> Instagram</a>
            <a href="https://youtube.com/@businesshubworkspace" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><Youtube className="inline-block mr-2 h-5 w-5" /> YouTube</a>
            <a href="https://tiktok.com/@businesshubworkspace" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><Music className="inline-block mr-2 h-5 w-5" /> TikTok</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Links