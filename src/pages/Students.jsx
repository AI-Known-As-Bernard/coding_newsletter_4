import MainLayout from "./layouts/MainLayout"
import Header from '../components/Header'
import ProfileCard from "../components/ProfileCard"
import ImageProfileCard from "../components/ImageProfileCard"
let profiles = [{
    "_id": {
      "$oid": "64f220d9656fb9bfaa2d631a"
    },
    "id": 19,
    "firstName": "Nicolas",
    "lastName": "Diaz",
    "profileImage": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0066_zz0qod.jpg",
    "year": "2",
    "starting Year": 2023,
    "featured": false,
    "graduated": false,
    "summary": "#",
    "homeHighSchool": "Moon Valley",
    "quote": "It's hard to believe that it's over, isn't it? Funny, how we get attached to the struggle",
    "accolades": [
      {
        "name": "#",
        "date": "##/##/####",
        "description": "#",
        "img": [
          "#"
        ]
      }
    ],
    "futurePlans": {
      "dreamJob": "Software and Security Engineer",
      "postGradPlans": "Attend University and retire by 45"
    },
    "socialMediaHandles": {
      "gitHub": "https://github.com/ndiaz413",
      "linkedIn": "#",
      "portfolio": "#",
      "instagram": "#",
      "twitter": "#"
    },
    "currentSkills": {
      "htmlSkill": "#",
      "cssSkill": "#",
      "jsSkill": "#",
      "reactSkill": "#",
      "nodeSkill": "#"
    }
  },
  {
    "_id": {
      "$oid": "64f220d9656fb9bfaa2d631a"
    },
    "id": 19,
    "firstName": "Nicolas",
    "lastName": "Diaz",
    "profileImage": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0066_zz0qod.jpg",
    "year": "2",
    "starting Year": 2023,
    "featured": false,
    "graduated": false,
    "summary": "#",
    "homeHighSchool": "Moon Valley",
    "quote": "It's hard to believe that it's over, isn't it? Funny, how we get attached to the struggle",
    "accolades": [
      {
        "name": "#",
        "date": "##/##/####",
        "description": "#",
        "img": [
          "#"
        ]
      }
    ],
    "futurePlans": {
      "dreamJob": "Software and Security Engineer",
      "postGradPlans": "Attend University and retire by 45"
    },
    "socialMediaHandles": {
      "gitHub": "https://github.com/ndiaz413",
      "linkedIn": "#",
      "portfolio": "#",
      "instagram": "#",
      "twitter": "#"
    },
    "currentSkills": {
      "htmlSkill": "#",
      "cssSkill": "#",
      "jsSkill": "#",
      "reactSkill": "#",
      "nodeSkill": "#"
    }
  },
  {
    "_id": {
      "$oid": "64f220d9656fb9bfaa2d6324"
    },
    "id": 29,
    "firstName": "Alan",
    "lastName": "Sanchez",
    "profileImage": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0068_jm9g3m.jpg",
    "year": "2",
    "starting Year": 2023,
    "featured": false,
    "graduated": false,
    "summary": "#",
    "homeHighSchool": "#",
    "quote": "#",
    "accolades": [
      {
        "name": "#",
        "date": "##/##/####",
        "description": "#",
        "img": [
          "#"
        ]
      }
    ],
    "futurePlans": {
      "dreamJob": "#",
      "postGradPlans": "#"
    },
    "socialMediaHandles": {
      "gitHub": "#",
      "linkedIn": "#",
      "portfolio": "#",
      "instagram": "#",
      "twitter": "#"
    },
    "currentSkills": {
      "htmlSkill": "#",
      "cssSkill": "#",
      "jsSkill": "#",
      "reactSkill": "#",
      "nodeSkill": "#"
    }
  },
]
const Students = () => {
  return (
    <MainLayout>
      <Header title={"Current Students"}/>
      <section class="bg-gray-600">
        <div class="container px-6 pb-10 mx-auto">
            <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
                {profiles.map((profile)=>{
                    return <ImageProfileCard key={profile._id.$oid} profile={profile}/>
                })}
            </div>
        </div>
    </section>
    </MainLayout>
  )
}

export default Students