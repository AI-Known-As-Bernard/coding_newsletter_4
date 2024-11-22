import Header from './Header'
const posts = [
    {
      "_id": {
        "$oid": "63d2d9985fb717111f9cea39"
      },
      "id": 10,
      "date": "May 2022",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1674762482/NewsLetter/Blog%20Pics/May%202022/20220514_134803_1_ct4skw.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674762482/NewsLetter/Blog%20Pics/May%202022/20220514_122744_hehzyj.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1674762482/NewsLetter/Blog%20Pics/May%202022/20220514_134817_unu9gp.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674762482/NewsLetter/Blog%20Pics/May%202022/20220514_122732_fz7bcy.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674762482/NewsLetter/Blog%20Pics/May%202022/20220523_174814_qplr7x.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1674762482/NewsLetter/Blog%20Pics/May%202022/20220523_162404_o6an2i.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "End of the Year Fun",
      "description": "For the last Month we visited St.Mary's Foodbank and had Fun on the last day of School"
    },
    {
      "_id": {
        "$oid": "63d2ec048a84a67b6872b972"
      },
      "id": 12,
      "date": "August 2022",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674767220/NewsLetter/Blog%20Pics/August%202022/20220815_175421_ovbf4y.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674767219/NewsLetter/Blog%20Pics/August%202022/20220815_175433_cg3bvd.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674767219/NewsLetter/Blog%20Pics/August%202022/20220815_175419_jstwbg.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674767220/NewsLetter/Blog%20Pics/August%202022/20220815_175432_ieo8ke.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Welcome 2022-23 Coding Program",
      "description": "Hello new and returning parents and students we have a packed Year of Coding and Fun planned, I'm Looking forward to new students and nerding out. We are already breaking the ice"
    },
    {
      "_id": {
        "$oid": "63d301c28a84a67b6872b976"
      },
      "id": 15,
      "date": "November 2022",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674772818/NewsLetter/Blog%20Pics/November%2022/Image_20221108_122454_199_1_tthqqz.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1674772818/NewsLetter/Blog%20Pics/November%2022/Image_20221108_205652_540_indnpn.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1674772817/NewsLetter/Blog%20Pics/November%2022/IMG_0384_1_n3yd2j.heic"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674772818/NewsLetter/Blog%20Pics/November%2022/Copy_of_Copy_of_IMG_4521_cz4o9n.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Spooky Season",
      "description": "This month Coding enjoyed the Fall Leadership Extravaganza and Open House. Big thanks to Officers and their Hard work!!!"
    },
    {
      "_id": {
        "$oid": "63d2d67d5fb717111f9cea37"
      },
      "id": 8,
      "date": "March 2022",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1652823471/NewsLetter/Blog%20Pics/March%2022/CC8563F2-BC2D-4484-9AD5-D004F9487810_ht2ws6.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1674757755/NewsLetter/Blog%20Pics/March%2022/20220310_171511_svgegn.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674757753/NewsLetter/Blog%20Pics/March%2022/20220328_181909_fiz663.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Coding's March Madness",
      "description": "This month was a lot and some people could take it LOL. We had a visit from MA and planned for the State Competition"
    },
    {
      "_id": {
        "$oid": "64373e97a8cc0011b839aab4"
      },
      "id": 19,
      "date": "March 2023",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1681341947/NewsLetter/Blog%20Pics/March%2023/20230331_173634_wmxkvs.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1681341947/NewsLetter/Blog%20Pics/March%2023/20230331_174856_v4z40g.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1681341947/NewsLetter/Blog%20Pics/March%2023/20230331_174847_fqe7ym.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Parent Night Was A Blast",
      "description": "The officers put on a great parent night on about Digital Literacy as well as prepped the class for FBLA State"
    },
    {
      "_id": {
        "$oid": "63f69aaf95d3d241c9ba7a25"
      },
      "id": 18,
      "date": "Febuary 2023",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1677106022/NewsLetter/Blog%20Pics/Feb%202023/20230208_163152_aj35tv.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1677106019/NewsLetter/Blog%20Pics/Feb%202023/20230208_163142_ordzas.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1677106019/NewsLetter/Blog%20Pics/Feb%202023/20230208_163142_ordzas.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Work Based Learning Fun",
      "description": "Students are already working on their 1st client project and 1st professional accolade in their portfolios"
    },
    {
      "_id": {
        "$oid": "65d52af6bf35970d16efdc28"
      },
      "id": 22,
      "date": "September 2023",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1693759471/NewsLetter/Blog%20Pics/August%2023/20230901_144040_pr7yqz.jpg"
        }
      ],
      "datetime": "2023-09-1",
      "href": "#",
      "category": {
        "title": "Starting the Year with Elections and Training",
        "href": "#"
      },
      "title": "Officer Training",
      "description": "Our Newly Elected officers went to officer training and learned more about their roles in the team and built a foundation for their new team"
    },
    {
      "_id": {
        "$oid": "65d52af6bf35970d16efdc29"
      },
      "id": 23,
      "date": "October 2023",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1708467486/NewsLetter/Blog%20Pics/Officers_qowxq8.jpg"
        }
      ],
      "datetime": "2024-10-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Getting the Most of Coding",
      "description": "Both year 1 and 2 are getting into coding and we have started our dual enrollment registration and signup for scholarships to pay for it"
    },
    {
      "_id": {
        "$oid": "65d52af6bf35970d16efdc2a"
      },
      "id": 24,
      "date": "November 2023",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1708467487/NewsLetter/Blog%20Pics/20231201_181524_g9hthp.jpg"
        }
      ],
      "datetime": "2023-11-17",
      "href": "#",
      "category": {
        "title": "Coding and Tournaments",
        "href": "#"
      },
      "title": "Keyboard drain",
      "description": "Students have been working on their first projects and working on their FBLA Online Testing Tournament"
    },
    {
      "_id": {
        "$oid": "65d52af6bf35970d16efdc2b"
      },
      "id": 25,
      "date": "December 2023",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1708467489/NewsLetter/Blog%20Pics/20231215_174148_uxm68h.jpg"
        }
      ],
      "datetime": "2023-12-22",
      "href": "#",
      "category": {
        "title": "Parents Night",
        "href": "#"
      },
      "title": "Parent Night Was A Blast",
      "description": "We had many parents and siblings attend our Awesome Jeopardy Themed Event"
    },
    {
      "_id": {
        "$oid": "639edda63a9fd0bf5b18aa46"
      },
      "id": 2,
      "date": "September 2021",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/students_at_work.august_jm0hdg.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/IMG_3200_znh7yi.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Coding Students at work",
      "description": "Year 2 students are taking their time with their summer amnesia but JS review is going well. Year 1 students are learning webdesign and JS basics and doing GREAT!!!"
    },
    {
      "_id": {
        "$oid": "639edda63a9fd0bf5b18aa49"
      },
      "id": 5,
      "date": "December 2021",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Dec%2021/IMG_18191_puy0kg.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Dec%2021/20211210_132009_ksupvj.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Dec%2021/20211211_102253_jcd5j6.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Dec%2021/20211211_114406_dopcwk.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Coding to All Ages",
      "description": "Future Coding students visted our program to take a look at what our Program had to offer and our students were great \n Please check out our students new work"
    },
    {
      "_id": {
        "$oid": "639edda63a9fd0bf5b18aa4b"
      },
      "id": 7,
      "date": "Febuary 2022",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Feb%2022/Copy_of_Copy_of_IMG_2664_narvwn.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Jan%202022/st_marys5_wzcmde.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Feb%2022/Copy_of_IMG_2528_nu3s0g.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Amazing Febuary For Coding",
      "description": "The Students absolutely crushed FBLA Regionals with 27 awards and competitors. Everyone continues to grow professionally and personally"
    },
    {
      "_id": {
        "$oid": "63d303c78a84a67b6872b978"
      },
      "id": 17,
      "date": "January 2023",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674773326/NewsLetter/Blog%20Pics/January%202023/20230121_165706_qxqv0b.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674773327/NewsLetter/Blog%20Pics/January%202023/IMG_4731_dzfdf5.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Happy New Year 20223",
      "description": "We Started this year off with a BANG. 18 awards Won for FBLA Reginal Competition YAY!!!"
    },
    {
      "_id": {
        "$oid": "63d2d6f05fb717111f9cea38"
      },
      "id": 9,
      "date": "April 2022",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1652823394/NewsLetter/Blog%20Pics/April%2022/DSC_0037_zyu0kv.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1652823398/NewsLetter/Blog%20Pics/April%2022/DSC_0015_hjcu18.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1652823387/NewsLetter/Blog%20Pics/April%2022/DSC_0043_v8erpe.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "FBLA STATE WAS A SUCCESS",
      "description": "This month's highlight is definitely the FBLA State Competion, where we had 15 in the top 10 and 6 who qualified for Nationals"
    },
    {
      "_id": {
        "$oid": "65d52af6bf35970d16efdc2c"
      },
      "id": 26,
      "date": "January 2024",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1707158185/NewsLetter/Blog%20Pics/20240117_171158_hn3qdu.jpg"
        }
      ],
      "datetime": "2024-01-17",
      "href": "#",
      "category": {
        "title": "FBLA Regional winners",
        "href": "#"
      },
      "title": "We won Regionals",
      "description": "All students competed and almost half came back winners. Rivalries were started fun was had and Online Testing Tournament Champions were awarded"
    },
    {
      "_id": {
        "$oid": "639edda63a9fd0bf5b18aa4a"
      },
      "id": 6,
      "date": "January 2022",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Jan%202022/20220129_140505_tbayl8.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Jan%202022/st_marys5_wzcmde.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Jan%202022/IMG_6433_kutlcr.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Jan%202022/st_marys4_avwrav.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "New Years 2022-Coding Giving Back",
      "description": "The Students visited to St. Mary Food Bank to give back to the community and start the NEW YEAR of right!!!"
    },
    {
      "_id": {
        "$oid": "6441a507a8cc0011b839aaba"
      },
      "id": 20,
      "date": "April 2023",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1681334108/NewsLetter/Blog%20Pics/April%2023/20230404_171651_rhbugi.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1681334107/NewsLetter/Blog%20Pics/April%2023/20230403_204944_zacywl.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1682023304/NewsLetter/Blog%20Pics/April%2023/IMG_5009_u5omf8.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1682023304/NewsLetter/Blog%20Pics/April%2023/20230404_100102_ty7ksw.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1682023305/NewsLetter/Blog%20Pics/April%2023/IMG_5539_Original_flojrp.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1682023305/NewsLetter/Blog%20Pics/April%2023/20230403_150812_b40egc.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "FBLA STATE Success + Certifications are Next",
      "description": "FBLA State was a great success. We came back with 13 Top 10 Students 9 that qualified Nationals and 4 that will be attending. Next is Certifications and Portfolio Work"
    },
    {
      "_id": {
        "$oid": "639edda63a9fd0bf5b18aa45"
      },
      "id": 1,
      "date": "August 2021",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Coding_zgxvgt.png"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Coding_zgxvgt.png"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Welcome West-Mec Coding",
      "description": "Hello, parents and students website and blog will be used each month to keep you and the students connected"
    },
    {
      "_id": {
        "$oid": "63d2fe9a8a84a67b6872b974"
      },
      "id": 13,
      "date": "September 2022",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674767565/NewsLetter/Blog%20Pics/September%202022/20220902_140718_aqbvf5.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Officer Training",
      "description": "This month we get the pedal to the medal with Coding and our 22-23 FBLA Officer Training"
    },
    {
      "_id": {
        "$oid": "63d2dc205fb717111f9cea3a"
      },
      "id": 11,
      "date": "June 2022",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1674762923/NewsLetter/Blog%20Pics/nationals%202022/20220627_190503_bv1nab.jpg\n"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1673376276/NewsLetter/Blog%20Pics/nationals%202022/nationalCeremony_cya3vn.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1673376276/NewsLetter/Blog%20Pics/nationals%202022/pizzaTogether_drfxhg.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674762923/NewsLetter/Blog%20Pics/nationals%202022/20220701_122536_ssrmab.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_exif/v1674762923/NewsLetter/Blog%20Pics/nationals%202022/20220628_113600_aoysit.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674762923/NewsLetter/Blog%20Pics/nationals%202022/20220628_135153_woqy7l.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Nationals",
      "description": "We had a BLAST at FBLA Nationals in Chicago. We came, we competed and we had a blast in the city"
    },
    {
      "_id": {
        "$oid": "63d301d48a84a67b6872b977"
      },
      "id": 16,
      "date": "December 2022",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674773018/NewsLetter/Blog%20Pics/December%2022/IMG_4564_t3wlsh.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674773018/NewsLetter/Blog%20Pics/December%2022/Copy_of_IMG_4555_clg3pi.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/a_0/v1674773018/NewsLetter/Blog%20Pics/December%2022/Copy_of_IMG_4543_o24ysp.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Holiday Season",
      "description": "This month Coding enjoyed winter fun in the Vet Program Winter Social and of course still nerding out and coding"
    },
    {
      "_id": {
        "$oid": "639edda63a9fd0bf5b18aa48"
      },
      "id": 4,
      "date": "November 2021",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/NEC_safety-december_yxhqyj.png"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/November%2021/IMG_4883_pofiwn.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/November%2021/IMG_4881_g1lvfk.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Coding + Safety",
      "description": "Students will be putting on an Internet Safety Event on November 13th Parents, Students and Friends are welcome."
    },
    {
      "_id": {
        "$oid": "639edda63a9fd0bf5b18aa47"
      },
      "id": 3,
      "date": "October 2021",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/st.marys-october_znv1xd.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Oct%2021/IMG_3614_k1me5n.jpg"
        },
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/w_603,h_452,c_fill/NewsLetter/Blog%20Pics/Oct%2021/IMG_4283_spc8rd.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "October Successes",
      "description": "Tech-tober has been an AMAZING Success. Alex Welton's Designs for our apparel gained us over $300 in re-orders and we helped at St. Mary's Food Bank"
    },
    {
      "_id": {
        "$oid": "63d300998a84a67b6872b975"
      },
      "id": 14,
      "date": "October 2022",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1674772553/NewsLetter/Blog%20Pics/October%202022/GH010355_1666894060982_exported_1787_pl6n7j.jpg"
        }
      ],
      "datetime": "2020-03-16",
      "href": "#",
      "category": {
        "title": "CTSO",
        "href": "#"
      },
      "title": "Tech-Tober",
      "description": "This month Coding is in full swing with team projects for Yr1 and Capstone Project for Yr2"
    },
    {
      "_id": {
        "$oid": "65d52af6bf35970d16efdc2d"
      },
      "id": 27,
      "date": "February 2024",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1708467485/NewsLetter/Blog%20Pics/VideoCapture_20240220-151437_n0lri7.jpg"
        }
      ],
      "datetime": "2024-02-02",
      "href": "#",
      "category": {
        "title": "Students Being Leaders",
        "href": "#"
      },
      "title": " Officer Announcement",
      "description": "A past FBLA officer came to the class and talked to the class about fundraising and his experience as an officer. This inspired our current officer team to reachout to "
    },
    {
      "_id": {
        "$oid": "6658afad317712a61b294fb8"
      },
      "id": 28,
      "date": "March 2024",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1717088957/NewsLetter/Blog%20Pics/20240210_074304_1_yjaoze.jpg"
        }
      ],
      "datetime": "2024-03-18",
      "href": "#",
      "category": {
        "title": "Giving back to the Community",
        "href": "#"
      },
      "title": "Giving back to the Communityt",
      "description": "In times of need, communities must come together and support one another. That is exactly what our FBLA chapter set out to do by hosting a volunteer event at St. Mary's Food Bank for emergency food packaging."
    },
    {
      "_id": {
        "$oid": "6658b339317712a61b294fb9"
      },
      "id": 29,
      "date": "April 2024",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1717089291/NewsLetter/Blog%20Pics/DSC_0183_gxija5.jpg"
        }
      ],
      "datetime": "2024-04-08",
      "href": "#",
      "category": {
        "title": "Giving back to the Community",
        "href": "#"
      },
      "title": "FBLA State was a Blast",
      "description": "We had a blast at State and WE ARE GOING TO NATIONALS. Our students did a fantastic job and got a lot great experience."
    },
    {
      "_id": {
        "$oid": "6658b463317712a61b294fbb"
      },
      "id": 30,
      "date": "May 2024",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1726001075/NewsLetter/Blog%20Pics/May%202024/20240521_151345_p348e5.jpg"
        }
      ],
      "datetime": "2024-05-20",
      "href": "#",
      "category": {
        "title": "The Final Countdown",
        "href": "#"
      },
      "title": "The Final Countdown",
      "description": "A Bitter sweet goodbye to Year 2 Students and I wish you all best. We are still on our way to nationals and looking forward to it. THANK YOU ALL"
    },
    {
      "_id": {
        "$oid": "66e0b07e1f0629733b377252"
      },
      "id": 31,
      "date": "June-July 2024",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1726000903/NewsLetter/Blog%20Pics/May%202024/20240628_115026_yjntsc.jpg"
        }
      ],
      "datetime": "2024-07-20",
      "href": "#",
      "category": {
        "title": "FBLA Nationals was a BLAST!!!",
        "href": "#"
      },
      "title": "Nationals Was BLAST",
      "description": "FBLA Nationals in Orlando, FL was a amazing we went to Disney the beach and soo much more. Unfortunately we didnt win still worth it"
    },
    {
      "_id": {
        "$oid": "66e0b2031f0629733b377253"
      },
      "id": 32,
      "date": "August 2024",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1726001484/NewsLetter/Blog%20Pics/Aug%2024/20240830_162559_pxvgp9.jpg"
        }
      ],
      "datetime": "2024-08-30",
      "href": "#",
      "category": {
        "title": "School Starting + FBLA",
        "href": "#"
      },
      "title": "School Has Started and So have the FBLA Officer Campaigns",
      "description": "Finishing out our first month back students have been having a blast learning new programming languages and getting involved with FBLA running for Officer Positions"
    },
    {
      "_id": {
        "$oid": "6707002ec48683aa53606deb"
      },
      "id": 33,
      "date": "September 2024",
      "imageUrl": [
        {
          "url": "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1726867815/NewsLetter/Blog%20Pics/September%2024/DSC_0250_skthh9.jpg"
        }
      ],
      "datetime": "2024-09-25",
      "href": "#",
      "category": {
        "title": "School Starting + FBLA",
        "href": "#"
      },
      "title": "School Has Started and So have the FBLA Officer Campaigns",
      "description": "Well Into Developing and Programming. Year 2 in NodeJS & JSON Databases and Year 1 is incorporating CSS "
    }
  ]


const BlogSection = () => {
  return (
    <div className="bg-gray-600 pb-24 sm:pb-32">
        <div className="mx-auto max-w-[90vw] px-6 lg:px-8">
          {/* <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Class Blog
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">Code, Create, Conquer – Fun Every Step of the Way!</p>
          </div> */}
          <Header title={"Coding Blog"} message={"Code, Create, Conquer – Fun Every Step of the Way!"}/>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" >
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    alt=""
                    src={post.imageUrl[0].url}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-300">
                      {post.date}
                    </time>
                   {/* //#tags for what we want */}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-200">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-white">{post.description}</p>
                  </div>
                  
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
  )
}

export default BlogSection