import { useEffect, useRef, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./UniversityCards.css";
const universities = [
  {
    name: "UNIVERSITY OF ABERDEEN",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/1 53.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Anglia Ruskin University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/2 10.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "PRIFYSGOL BANGOR UNIVERSITY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/3 51.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "BATH SPA UNIVERSITY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/4 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Bedfordshire",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/5 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF BIRMINGHAM",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/6 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "BIRMINGHAM CITY University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/7 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY COLLEGE BIRMINGHAM",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/8 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Brighton",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/9 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Cardiff Metropolitan University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/10 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Conventry University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/11 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University for the Creative Arts",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/12 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "DE MONTFORT UNIVERSITY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/13 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Dundee",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/15 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of East Anglia",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/16 2.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of East London",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/17 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Abertay University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/18 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Exeter",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/19 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF EXETER",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/19u 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Glasgow Caledonian University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/20 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF GLOUCESTERSHIRE",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/21 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Hertfordshire",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/22 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of HUDDERSFIELD",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/23 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Manchester Metropolitan University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/24 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of South Wales Prifysgol",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/25 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "CITY UNIVERSITY LONDON",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/25U 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Newcastle University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/26 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Northumbria University NEWCASTLE",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/27 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "The University of Nottingham",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/28 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "NOTTINGHAM TRENT UNIVERSITY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/29 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "QUEEN'S UNIVERSITY BELFAST",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/30 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Reading",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/31 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Chester",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/32 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF CHICHESTER",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/33 2.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "St Mary's University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/34 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY of STIRLING",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/35 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF PORTSMOUTH",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/36 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF WOLVERHAMPTON",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/37 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF SURREY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/38 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Ulster University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/39 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "The University of Law",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/40 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of the West of England",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/41 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Worcester",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/42 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "THE UNIVERSITY of EDINBURGH",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/43 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Coventry University, London",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/48 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Newcastle University, London",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/49 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Northumbria University NEWCASTLE",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/Northumbria_University_Logo 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Roehampton London",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/University_of_Roehampton_logo 1.png",
    link: "https://www.shabujglobal.com",
  },
];

const UniversityCards = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(universities[0]);

  const handleCardClick = (university) => {
    setSelectedUniversity(university);
  };

  const contentAreaRef = useRef(null);
  const sideBarRef = useRef(null);

  useEffect(() => {
    const contentArea = contentAreaRef.current;
    const sideBar = sideBarRef.current;

    const controlSideBarFloating = () => {
      const rectL = contentArea.getBoundingClientRect();
      const rectR = sideBar.getBoundingClientRect();
      const topSpace = 10;
      const breakpoint = 992;
      const stickyClass = "sticky-sidebar";
      const bottomFixedClass = "bottom-fixed-sidebar";

      if (window.innerWidth >= breakpoint) {
        if (
          rectL.top - topSpace + (rectL.height - rectR.height) >= 0 &&
          rectL.top - topSpace <= 0
        ) {
          sideBar.classList.add(stickyClass);
          sideBar.classList.remove(bottomFixedClass);
        } else if (rectL.top - topSpace + (rectL.height - rectR.height) <= 0) {
          sideBar.classList.remove(stickyClass);
          sideBar.classList.add(bottomFixedClass);
        } else {
          sideBar.classList.remove(stickyClass);
          sideBar.classList.remove(bottomFixedClass);
        }
      } else {
        sideBar.classList.remove(stickyClass);
        sideBar.classList.remove(bottomFixedClass);
      }
    };

    window.addEventListener("load", controlSideBarFloating);
    window.addEventListener("scroll", controlSideBarFloating);
    window.addEventListener("resize", controlSideBarFloating);

    return () => {
      window.removeEventListener("load", controlSideBarFloating);
      window.removeEventListener("scroll", controlSideBarFloating);
      window.removeEventListener("resize", controlSideBarFloating);
    };
  }, []);

  return (
    <div className="p-4 bg-[#EFF6FF]">
      <h1 className="text-[56px] font-bold py-28 text-center">
        Top Universities in The UK
      </h1>
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-4">
        <div
          className="col-span-2 grid grid-cols-4 gap-4 content-area h-[1550px] border-r-4 border-gray-300 pr-4"
          ref={contentAreaRef}
        >
          {universities.map((university, index) => (
            <div
              key={index}
              className="px-4 bg-white cursor-pointer h-28 hover:border-b-[6px] hover:border-blue-700"
              onClick={() => handleCardClick(university)}
            >
              <img
                src={university.logo}
                alt={university.name}
                className="w-full h-24 object-contain mb-4"
              />
            </div>
          ))}
        </div>
        <div className="side-bar h-[450px]" ref={sideBarRef}>
          {selectedUniversity && (
            <div className="p-4">
              <img
                src={selectedUniversity.logo}
                alt=""
                className="mx-auto pt-2"
              />
              <h2 className="text-2xl font-bold mb-3 text-center">
                {selectedUniversity.name}
              </h2>
              <p className="pb-4">{selectedUniversity.info}</p>
              <p className="font-extrabold pb-4">
                One of the UK's leading universities
              </p>
              <span className="inline-flex items-center gap-x-1">
                <HiLocationMarker className="text-blue-700 text-lg" />
                Located in scenic Aberdeen, Scotland
              </span>
              <button className="mt-4 w-full py-3 bg-blue-700 text-lg text-white rounded-full">
                <a href={selectedUniversity.link}>Apply Now</a>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversityCards;
