import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";


const person: Person = {
  firstName: "Vithusan",
  lastName: "Uruthirakumaran",
  name: `Vithusan Uruthirakumaran`,
  role: "Product Manager/Software Developer",
  avatar: "/images/avatar.png",
  email: "vithusan.business@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
headline: (
  <div style={{ lineHeight: 1.1 }}>
    <Text size="md" color="gray">
      Hi I’m
    </Text>

    <br />

    <Text
      size="4xl"
      weight="bold"
      style={{ letterSpacing: "-0.03em" }}
    >
      {person.firstName}
    </Text>
  </div>
  
) ,


  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      <Text size="xl">
        Product Manager focused on turning ambiguous problems into{" "}
        <strong>shipped solutions, </strong>
      </Text>

      <Text size="md" color="gray" marginTop="8">
        Blending product thinking with hands-on execution.
      </Text>
    </>
  ),

};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
 intro: {
  display: true,
  title: "Introduction",
  description: (
    <>
      Vithusan is a product-minded software developer with a strong foundation in business and
      operations. He specializes in building thoughtful, user-focused web applications and AI-powered
      tools that solve real problems. With experience spanning product strategy, frontend development,
      and system thinking, he bridges the gap between technical execution and product vision.
      <br /><br />
      His work focuses on clarity, scalability, and impact — turning complex ideas into practical,
      well-designed digital products.
    </>
  ),
},
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Toronto",
      description: <>Completed a Software Development bootcamp with a focus on full-stack web development.</>,
      },
      {
        name: "York University",
      description: <>Bachelor of Commerce (BCom) with a concentration in business and finance.</>,
      },
      {
        name: "Coursera",
      description: <>Completed coursework in product management, agile methodologies, and software development fundamentals.</>,
      },
      {
        name: "CodeAcademy",
      description: <>Completed hands-on courses in full-stack development, JavaScript, and modern web technologies.</>,
      }
    ],
  },
 technical: {
  display: true,
  title: "Product & Technical Skills",
  skills: [
    {
      title: "Product Management",
      description: (
        <>End-to-end product ownership from discovery to delivery, with a strong focus on user value and execution.</>
      ),
      tags: [
        { name: "Product Discovery", icon: "search" },
        { name: "MVP Scoping", icon: "layers" },
        { name: "User Stories", icon: "story" },
        { name: "Roadmapping", icon: "roadmap" },
        { name: "Agile / Scrum", icon: "agile" },
        { name: "Stakeholder Alignment", icon: "users" },
      ],
      images: [],
    },
    {
      title: "Design & UX",
      description: (
        <>Translating product requirements into clear UX flows, wireframes, and high-fidelity prototypes.</>
      ),
      tags: [
        { name: "Figma", icon: "figma" },
        { name: "Once UI", icon: "design" },
        { name: "UX Flows", icon: "flow" },
        { name: "Prototyping", icon: "prototype" },
      ],
      images: [],
    },
    {
      title: "Frontend Engineering (Execution)",
      description: (
        <>Implementing product features and interfaces to validate ideas and ship production-ready MVPs.</>
      ),
      tags: [
        { name: "JavaScript", icon: "javascript" },
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
      ],
      images: [],
    },
    {
      title: "Backend, Data & Auth",
      description: (
        <>Supporting product functionality with APIs, authentication, and data persistence.</>
      ),
      tags: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "Supabase", icon: "supabase" },
        { name: "PostgreSQL", icon: "postgres" },
        { name: "REST APIs", icon: "api" },
      ],
      images: [],
    },
    {
      title: "Testing & Delivery",
      description: (
        <>Validating product behavior through testing, iteration, and deployment.</>
      ),
      tags: [
        { name: "Chai", icon: "test" },
        { name: "JSDOM", icon: "test" },
        { name: "Manual QA", icon: "check" },
        { name: "Vercel", icon: "vercel" },
        { name: "GitHub", icon: "github" },
      ],
      images: [],
    },
  ],
},

};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
