import React from 'react'

const IntroOgranization = () => {
  return (
    <div className='container mx-auto mt-4 pt-14 bg-gray-600'>
    <div className='flex flex-col  px-8 mx-auto space-y-12 max-w-7xl xl:px-12'>
        <div className='relative'>
            <h2 className='w-full text-4xl text-white font-bold text-center sm:text-4xl md:text-5xl'>NEC Coding Program News Letter</h2>
            <p className='w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-300 intro sm:max-w-3xl'>The interactive Coding program prepares students for a career as a software developer. It teaches students how to design and develop software, build apps for phones, tablets, websites, and write and test computer code.</p>
        </div>
        <div className='flex flex-col mb-4 animated fadeIn sm:flex-row'>
            <div className='flex items-center mb-4 sm:w-1/2 md:w-5/12 sm:order-last'>
                <a href='/current'>
                <img className='rounded-lg shadow-xl' src='https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1671055041/NewsLetter/NE-Coding-19_nsmjqj.jpg' alt='current students' width='500' height='250'/>
                </a>
            </div>

                <div className='flex flex-col justify-center mt-5 mb-4 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16'>
                    <a href='/currentStudents'>
                        <p className='mb-2 font-semibold leading-none text-left text-orange-500 uppercase text-4xl'>Current Students</p>
                        <h3 className='mt-2 text-2xl text-white sm:text-left md:text-3xl'>Learning and Growing</h3>
                        <p className='mt-5 text-lg text-gray-300 text md:text-left'>During the program, accommodations and modifications are provided to high school students based on the IEP/504. In addition, Dual enrollment is available for eligible high school students. They can earn college credit through the Coding course and transfer these credits to a community college or university, towards a specific degree.</p>
                    </a>
                </div>

        </div>
        <div className='flex flex-col mb-4 animated fadeIn sm:flex-row'>
            <div className='flex items-center mb-4 sm:w-1/2 md:w-5/12'>
                <a href='/alumni'>
                <img className='rounded-lg shadow-xl' src='https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1652823394/NewsLetter/Blog%20Pics/April%2022/DSC_0037_zyu0kv.jpg' alt='alumni students' width='500' height='250'/>
                </a>
            </div>

                <div className='flex flex-col justify-center mt-5 mb-4 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16'>
                    <a href='/alumni'>
                        <p className='mb-2 text-4xl font-semibold leading-none text-left text-orange-500 uppercase'>Alumni Students</p>
                        <h3 className='mt-2 text-2xl sm:text-left text-white md:text-3xl'>Graduated</h3>
                        <p className='mt-5 text-lg text-gray-300 text md:text-left'>After completion of the two-year program, successful candidates will be prepared to seek one or more certifications like the Certified Internet Web (CIW) JavaScript Specialist. Careers that a student could pursue after receiving their certification(s) are: Software developer, computer programmer, web developer, mobile application designer, product manager*, quality assurance engineer*, software development engineer*</p>
                    </a>
                </div>

        </div>
        <div className='flex flex-col mb-4 animated fadeIn sm:flex-row'>
            <div className='flex items-center mb-4 sm:w-1/2 md:w-5/12 sm:order-last'>
                <a href='/blog'>
                    <img className='rounded-lg shadow-xl' src='https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1652822114/NewsLetter/Blog%20Pics/st.marys-october_znv1xd.jpg' alt='blog picture' width='500' height='250'/>
                </a>
            </div>

                <div className='flex flex-col justify-center mt-5 mb-4 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16'>
                    <a href='/news'>
                        <p className='mb-2 text-4xl font-semibold leading-none text-left text-orange-500 uppercase'>Program Blog</p>
                        <h3 className='mt-2 text-2xl sm:text-left text-white md:text-3xl'>Events and Fun Activites</h3>
                        <p className='mt-5 text-lg text-gray-300 text md:text-left'>As a group students that aspire for personal and professional growth. We also participate in activities outside of class. These events provide the opportunity for students to work together, give back together or student academic training</p>
                    </a>
                </div>
          
        </div>
    </div>
    </div>
  )
}

export default IntroOgranization