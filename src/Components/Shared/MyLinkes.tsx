export const links = [
  {
    name: "About",
    submenu: true,
    sublinks: [
      {
        Head: "History",
        sublink: [
          { name: "Teachers", link: "/about/teachers" },
          { name: "Collage History", link: "/about/history" },
          { name: "Gallery", link: "about/gallery" },
        ],
      },
      {
        Head: "Collage information",
        sublink: [
          { name: "About The Collage", link: "/about/collage" },
          { name: "Mission & Vision", link: "/about/mission&Vission" },
          {
            name: "collage Location & Google Maps",
            link: "/about/collageLocation",
          },

          { name: "Contact us", link: "/about/contact" },
        ],
      },
    ],
  },
  {
    name: "Department",
    submenu: true,
    sublinks: [
      {
        Head: "Degree",
        sublink: [
          {
            name: "Bachelor of Business Studies (BBS)",
            link: "/deparmentOf/Bachelor of Busniness Studies (BBS)",
          },
          {
            name: "Bachelor of Science (BSC)",
            link: "/deparmentOf/Bachelor of Science (BSC)",
          },
          {
            name: "Bachelor of Arts (BA)",
            link: "/deparmentOf/Bachelor of Arts (BA)",
          },
        ],
      },
      {
        Head: "Honurs",
        sublink: [
          {
            name: "Bachelor of Business Administration(BBA)",
            link: "/deparmentOf/Bachelor of Busniness Administraion(BBA)",
          },
          // { name: "Management", link: "/" }
        ],
      },
      {
        Head: "Master's",
        sublink: [
          {
            name: "Graduate Admission (Master's)",
            link: "/deparmentOf/Graduate Admission (Master's)",
          },
        ],
      },
      {
        Head: "HSC",
        sublink: [
          {
            name: "Higher Secondary Admission",
            link: "/deparmentOf/Higer Secondary Admission",
          },
        ],
      },
    ],
  },
  {
    name: "Academic",
    submenu: true,
    sublinks: [
      {
        Head: "Online Service",
        sublink: [
          // { name: "syllabus", link: "/" },
          { name: "Class Rotine", link: "/routine" },
          { name: "Find Result", link: "/result" },
          { name: "All Department Result", link: "/reslt" },
          { name: "Student Id card", link: "/studentId" },
          { name: "Online Admission", link: "/onlineAdmission" },
        ],
      },
    ],
  },
];
