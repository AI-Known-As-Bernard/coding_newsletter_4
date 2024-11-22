const people = [
  {
    id:1,
    firstName: 'Audrey',
    lastName: 'Geehan',
    position: 'President',
    img:'https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0243_wwzn2b.jpg'
  },
  {
    id:2,
    firstName: 'Sabrina',
    lastName: 'Shafer',
    position: 'Vice-President',
    img:'https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0228_un5uxd.jpg'
  },
  {
    id:3,
    firstName: 'Maanvik',
    lastName: 'Poddar',
    position: 'Secretary',
    img:'https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0226_lqkxnz.jpg'
  },
  {
    id:4,
    firstName: 'Stryder',
    lastName: 'Bateman',
    position: 'Treasurer',
    img:'https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0098_kcpsw9.jpg'
  },
  {
    id:5,
    firstName: 'Viraaj',
    lastName: 'Singh',
    position: 'Recorder/Historian',
    img:'https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0227_ujahkh.jpg'
  },
  {
    id:6,
    firstName: 'Nicolas',
    lastName: 'Diaz',
    position: 'Yr:2 Class Representative',
    img:'https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0239_slijhl.jpg'
  },
  {
    id:7,
    firstName: 'Angie',
    lastName: 'Cote',
    position: 'Yr:1 Class Representative',
    img:'https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0225_rdtltj.jpg'
  },
]
  
  export default function TeamBlock() {
    return (
      <div className="bg-gray-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <ul
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Leadership Team</h2>
              <p className="mt-6 text-lg/8 text-gray-200">
              The Coding Student Leadership Team is a group of dedicated and driven students committed to fostering a collaborative and innovative environment within the coding program. These leaders serve as role models and advocates, organizing events, mentoring peers, and promoting teamwork to enhance technical and professional skills. Through their leadership, they inspire their classmates to excel in coding, participate in extracurricular activities, and prepare for successful careers in technology.
              </p>
            </div>
            {people.map((person) => (
              <li key={person.name}>
                <img alt="" src={person.img} className="aspect-[3/2] w-full rounded-2xl object-cover" />
                <h3 className="mt-6 text-xl/8 font-semibold tracking-tight text-gray-900">{person.firstName + " " + person.lastName}</h3>
                <p className="text-md/7 text-gray-200">{person.position}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
 