import React from 'react'

const SimpleNavbar = () => {
  let navigation ={
    alt:"west-mec coding logo",
    organization:"NEC-Coding",
    logo: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1652816912/NewsLetter/WM-Coding_b2q0dl.svg",
    links:[{name:"Home", url:"/"},{name:"Blog", url:"/blog"},{name:"FBLA", url:"/fbla"},{name:"Students", url:"/students"},{name:"Alumni", url:"/alumni"}]
  }
  return (
    <nav className="bg-gray-800 border border-gray-700  px-2 sm:px-4 py-2.5 rounded shadow">
        <div className="text-center my-2 flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
            <img src={navigation.logo} alt={navigation.alt} className='h-16 ml-4 mr-3' />
                <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
                    {navigation.organization}
                </span>
            </a>

            <div className="flex items-center">
                <button className="inline-flex items-center p-2 ml-3 text-sm text-gray-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden" id='menu-toggle'>
                    <span className="sr-only">Open Main Menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
            <div className="w-full md:block md:w-auto hidden" id='mobile-menu'>
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    {navigation.links.map((link, index) =>(
                       <li key={index}>
                       <a href={link.url} className="block py-2 pr-4 text-xl pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{link.name}</a>
                        </li>
                    ))}
                  </ul>
                </div>
        </div>
      </nav>
  )
}

export default SimpleNavbar