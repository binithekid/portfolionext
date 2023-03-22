import blogapp from "../public/images/blogapp.png";
import onecloudlogo from "../public/images/onecloudlogo.png";
import pokemon from "../public/images/pokemon.png";

export const portfolioProjects = [
  {
    name: "One Cloud Media",
    gitHub: "https://github.com/binithekid/onecloudmedia",
    link: "https://onecloudmedia.io/",
    description:
      "We undertook the design and development of this website utilizing React Js. The website boasts seamless mobile responsiveness, ensuring a smooth user experience across different devices. To add a touch of sophistication to the website, we incorporated customized animations leveraging the GSAP animation library. By creating this website, we were able to demonstrate our ability to design and code high-quality web applications that deliver both form and function, and offer an immersive user experience",
    image: onecloudlogo.src,
    excerpt:
      "We undertook the design and development of this website utilizing React Js, showcasing my proficiency in the latest web technologies. ",
    techStack: ["React", "CSS", "GSAP", "Material UI"],
  },
  {
    name: "Blog Website",
    gitHub: "https://github.com/binithekid/myblog",
    link: "https://bentech.vercel.app/",
    description:
      "Leveraging the powerful features of Next.js, we were able to create a blazing-fast website with dynamic content rendering. The integration of TypeScript ensured robust type-checking and increased code maintainability, while the use of GraphQL enabled efficient data querying and management. By utilizing these advanced technologies, we were able to develop a fully responsive and intuitive website that offers a seamless user experience. The website boasts an elegant and modern design, with comprehensive blogging features such as article publishing, commenting, and user authentication. This project showcases our ability to deliver full-stack solutions that are efficient, secure, and visually appealing",
    image: blogapp.src,
    excerpt:
      "We recently undertook the development of a full-stack blog website using cutting-edge technologies including Next.js, TypeScript, and GraphQL.",
    techStack: ["Next", "Node", "Tailwind", "SQL"],
  },
  {
    name: "Pokemon Battle Game",
    gitHub: "https://github.com/binithekid/pokeapp",
    link: "https://pokebattle.vercel.app/",
    description:
      "We developed a dynamic Pokemon battle game using Next.js. This engaging game allows users to select their favourite Pokemon or choose one at random and engage in a thrilling battle experience. Leveraging my expertise in developing intuitive user interfaces, we created a visually appealing and responsive design. Through the use of advanced game logic and interactive features, users can fully immerse themselves in the world of Pokemon battles and experience the excitement of taking down opponents with their chosen Pokemon. This project demonstrates our ability to develop complex applications that deliver both functionality and a captivating user experience.",
    image: pokemon.src,
    excerpt:
      "Pokemon game we made using Next Js and hosted on Vercel! Throwback to the good old days!",
    techStack: ["Next", "Typescript", "Tailwind", "API"],
  },
];
