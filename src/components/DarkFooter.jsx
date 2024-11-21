import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";


const DarkFooter = () => {
    let navigation = {
        logo: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1652816912/NewsLetter/WM-Coding_b2q0dl.svg",
        message: "Code, Create, Conquer – Fun Every Step of the Way!",
        socialMedia: [
            {
                name: "Facebook",
                icon: FaFacebook,
                url: "https://www.facebook.com/"
            },
            {
                name: "Instagram",
                icon: FaInstagram,
                url: "https://www.instagram.com/"
            },
            {
                name: "Twitter",
                icon: FaTwitter,
                url: "https://www.twitter.com/"
            },
            {
                name: "GitHub",
                icon: FaGithub,
                url: "https://www.github.com/"
            }
        ],
        company:[
            { name: 'About', url: '/about' },
            { name: 'Meet the Team', url: '/meet-the-team' },
            { name: 'History/Testimonials', url: '/history-testimonials' },
            { name: 'Careers Options', url: '/careers' }
          ],
        helpfulLinks:[
            { name: 'Contact', url: '/contact' },
            { name: 'FAQ', url: '/faq' },
          ],
        legal:[
            { name: 'Privacy Policy', url: '/privacy-policy' },
            { name: 'Terms & Conditions', url: '/terms---conditions' },
          ],
        services:[
            { name: 'Current Students', url: '/students' },
            { name: 'Alumni', url: '/alumni' },
            { name: 'Blog', url: '/blog' },
            { name: 'FBLA', url: '/fbla' }
          ],
        companyName:"West-MEC North-East Coding -",
        year:2024
    }
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="flex items-start">
                <img
                alt={navigation.companyName}
                src={navigation.logo}
                className="h-16"
                />
                <p className="text-white text-xl font-bold">North-East Coding</p>
            </span>
            <p className="text-balance text-sm font-bold text-gray-300">
              {navigation.message}
            </p>
            <div className="flex gap-x-6">
              {navigation.socialMedia.map((item) => (
                <a key={item.name} url={item.url} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">Site Map</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a url={item.url} className="text-sm/6 text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">Support</h3>
                <ul  className="mt-6 space-y-4">
                  {navigation.helpfulLinks.map((item) => (
                    <li key={item.name}>
                      <a url={item.url} className="text-sm/6 text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">Company</h3>
                <ul  className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a url={item.url} className="text-sm/6 text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">Legal</h3>
                <ul  className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a url={item.url} className="text-sm/6 text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-gray-400">&copy; {navigation.year} {navigation.companyName} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default DarkFooter