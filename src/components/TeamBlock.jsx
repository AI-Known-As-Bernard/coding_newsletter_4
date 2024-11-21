const people = [
    {
      name: 'Audrey Geehan',
      role: 'President',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Sabrina Shafer',
        role: 'Vice-President',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
        name: 'Maanvik Poddar',
        role: 'Secretary',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
        name: 'Stryder Bateman',
        role: 'Treasurer',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
        name: 'Viraaj Singh',
        role: 'Historian & Social Media Director',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
        name: 'Nicolas Diaz',
        role: 'Year 2 - Representative',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
        name: 'Angie Cote',
        role: 'Year 1 - Representaive',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
  ]
  
  export default function TeamBlock() {
    return (
      <div className="bg-gray-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Leadership Team</h2>
            <p className="mt-6 text-lg/8 text-gray-200">
            The Coding Student Leadership Team is a group of dedicated and driven students committed to fostering a collaborative and innovative environment within the coding program. These leaders serve as role models and advocates, organizing events, mentoring peers, and promoting teamwork to enhance technical and professional skills. Through their leadership, they inspire their classmates to excel in coding, participate in extracurricular activities, and prepare for successful careers in technology.
            </p>
          </div>
          <ul
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img alt="" src={person.imageUrl} className="aspect-[3/2] w-full rounded-2xl object-cover" />
                <h3 className="mt-6 text-xl/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-md/7 text-gray-200">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
 