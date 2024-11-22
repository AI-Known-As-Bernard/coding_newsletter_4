import React from 'react'

const IntroOgranization = () => {
    const organization = [
        {title:"Current Students", subtitle:"Learning & Growing",image:'https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1671055041/NewsLetter/NE-Coding-19_nsmjqj.jpg', description:"During the program, accommodations and modifications are provided to high school students based on the IEP/504. In addition, Dual enrollment is available for eligible high school students. They can earn college credit through the Coding course and transfer these credits to a community college or university, towards a specific degree.",orientation:"RIGHT"},
        {title:"Program Blog", subtitle:"Events & Fun Activities",image:'https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1652822114/NewsLetter/Blog%20Pics/st.marys-october_znv1xd.jpg', description:"As a group students that aspire for personal and professional growth. We also participate in activities outside of class. These events provide the opportunity for students to work together, give back together or student academic training",orientation:"LEFT"},
        {title:"FBLA", subtitle:"Develop Competent, Business Leadership",image:'https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1732221825/NewsLetter/Blog%20Pics/cropped2.jpg', description:"FBLA (Future Business Leaders of America) is a student organization focused on developing leadership, business, and career skills. It offers students opportunities to participate in competitive events, network with peers and professionals, attend conferences, and gain real-world experience through community service and business-related activities.",orientation:"RIGHT"},
        {title:"Alumni Students", subtitle:"Graduated",image:'https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1652823394/NewsLetter/Blog%20Pics/April%2022/DSC_0037_zyu0kv.jpg', description:"After completion of the two-year program, successful candidates will be prepared to seek one or more certifications like the Certified Internet Web (CIW) JavaScript Specialist. Careers that a student could pursue after receiving their certification(s) are: Software developer, computer programmer, web developer, mobile application designer, product manager*, quality assurance engineer*, software development engineer*",orientation:"LEFT"},
    ]
    let leftImageSetup = ["flex items-center mb-4 sm:w-1/2 md:w-5/12","flex flex-col justify-center mt-5 mb-4 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16"]
    let rightImageSetup = ["flex items-center mb-4 sm:w-1/2 md:w-5/12 sm:order-last","flex flex-col justify-center mt-5 mb-4 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16"]


  return (
    <div className='text-center mx-auto mt-4 pt-14 bg-gray-600'>
        <div className='flex flex-col  px-8 mx-auto space-y-12 max-w-7xl xl:px-12'>
        {organization.map((item)=>(
            
            <div className='flex flex-col mb-4 animated fadeIn sm:flex-row'>
                <div className={item.orientation==="RIGHT"? rightImageSetup[0]:leftImageSetup[0]}>
                    <a href='/current'>
                    <img className='rounded-lg shadow-xl' src={item.image} alt='current students' width='500' height='250'/>
                    </a>
                </div>

                    <div className={item.orientation==="RIGHT"? rightImageSetup[1]:leftImageSetup[1]}>
                        <a href='/currentStudents'>
                            <p className='mb-2 font-semibold leading-none text-left text-orange-500 uppercase text-4xl'>{item.title}</p>
                            <h3 className='mt-2 text-2xl text-white sm:text-left md:text-3xl'>{item.subtitle}</h3>
                            <p className='mt-5 text-lg text-gray-300 text md:text-left'>{item.description}</p>
                        </a>
                    </div>
            </div>
        ))}

        </div>
    </div>
  )
}

export default IntroOgranization