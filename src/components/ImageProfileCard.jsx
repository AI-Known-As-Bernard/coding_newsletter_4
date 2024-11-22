import React from 'react'

const ImageProfileCard = ({profile}) => {
  return (
    <a href="#" className="group relative block bg-black">
        <img
            alt=""
            src={profile.profileImage}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-orange-500">YEAR: {profile.year}</p>

            <p className="text-xl font-bold text-white sm:text-2xl">{profile.firstName + " " + profile.lastName}</p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
            <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            >
                <p className="text-md text-white">
                {profile.quote}
                </p>
            </div>
            </div>
        </div>
    </a>
  )
}

export default ImageProfileCard