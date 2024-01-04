import blogapp from "../public/images/blogapp.png";
import londonjobs from "../public/images/londonjobs.png";
import pokemon from "../public/images/pokemon.png";
import nutraiplan from "../public/images/nutriplan.png";

export const portfolioProjects = [
  {
    name: "NutraiPlan",
    // gitHub: "https://github.com/binithekid/onecloudmedia",
    link: "https://nutraiplan.com/",
    description:
      "I undertook the design and development of this website utilizing React Js. The website boasts seamless mobile responsiveness, ensuring a smooth user experience across different devices. To add a touch of sophistication to the website, I incorporated customized animations leveraging the GSAP animation library. By creating this website, I was able to demonstrate my ability to design and code high-quality web applications that deliver both form and function, and offer an immersive user experience",
    image: nutraiplan.src,
    excerpt:
      "I undertook the design and development of this website utilizing React Js, showcasing my proficiency in the latest web technologies. ",
    techStack: ["React", "CSS", "GSAP", "Material UI"],
  },
  {
    name: "London Retail Jobs",
    // gitHub: "https://github.com/binithekid/myblog",
    link: "https://www.retailjobslondon.co.uk/",
    description:
      "Leveraging the powerful features of Next.js, I was able to create a blazing-fast job board with server side content rendering. The integration of TypeScript ensured robust type-checking and increased code maintainability, while the use of Firebase enabled efficient data querying and management. By utilizing these advanced technologies, I was able to develop a fully responsive and intuitive website that offers a seamless user experience. This project showcases my ability to deliver full-stack solutions that are efficient, secure, and visually appealing",
    image: londonjobs.src,
    excerpt:
      "I recently undertook the development of a full-stack job board website using cutting-edge technologies including Next.js, TypeScript, and Firebase.",
    techStack: ["Next JS", "Firebase", "Tailwind"],
  },
  {
    name: "Pokemon Battle Game",
    gitHub: "https://github.com/binithekid/pokeapp",
    link: "https://pokebattle.vercel.app/",
    description:
      "I developed a dynamic Pokemon battle game using Next.js. This engaging game allows users to select their favourite Pokemon or choose one at random and engage in a thrilling battle experience. Leveraging my expertise in developing intuitive user interfaces, I created a visually appealing and responsive design. Through the use of advanced game logic and interactive features, users can fully immerse themselves in the world of Pokemon battles and experience the excitement of taking down opponents with their chosen Pokemon. This project demonstrates my ability to develop complex applications that deliver both functionality and a captivating user experience.",
    image: pokemon.src,
    excerpt:
      "Pokemon game I made using Next Js and hosted on Vercel! Throwback to the good old days!",
    techStack: ["Next", "Typescript", "Tailwind", "API"],
  },
];
