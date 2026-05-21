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
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Thoughts on product, building in public, and the PM journey — coming soon.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/VithusanU",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vithusan-uruthirakumaran-00b3b91b9/",
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
    <Text size="m" onBackground="neutral-weak">
      Hi I’m
    </Text>

    <br />

    <Text
      size="xl"
      weight="strong"
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
        <strong className="ml-4">drivn</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/drivn",
  },
  subline: (
    <>
      <Text size="xl">
        Product Manager focused on turning ambiguous problems into{" "}
        <strong>shipped solutions, </strong>
      </Text>

      <Text size="m" onBackground="neutral-weak" marginTop="8">
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
    display: false,
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
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Self-Directed",
        timeframe: "2023 – Present",
        role: "Product Builder & Full-Stack Developer",
        achievements: [
          <>
            Designed and shipped <strong>drivn</strong> — a productivity PWA with a Next Best Action
            engine, habit tracking, focus sessions, push notifications, and a real-time admin
            dashboard. Acquired 10 users within the first week with no marketing spend.
          </>,
          <>
            Completed an intensive full-stack software development certification at the University of
            Toronto, covering the MERN stack, REST APIs, authentication, and database design.
          </>,
          <>
            Built 4+ production web applications applying product thinking at each stage — from
            writing user stories before coding to measuring completion rates post-launch.
          </>,
          <>
            Completed product management and agile coursework (Coursera), reinforcing frameworks for
            discovery, prioritization, and delivery. Pursuing BCom Finance at York University
            (3.7 GPA) with concentration in management science and decision analysis.
          </>,
        ],
        images: [],
      },
      {
        company: "Atripco Delivery Service",
        timeframe: "Jul 2019 – Feb 2023",
        role: "Operations Supervisor",
        achievements: [
          <>
            Owned end-to-end operational planning for a 12-person team — implemented data-driven
            scheduling that reduced processing time by <strong>40%</strong> and cut delivery times
            by <strong>15%</strong>.
          </>,
          <>
            Generated and analyzed weekly performance reports to surface workflow bottlenecks,
            driving a <strong>20% improvement</strong> in operational efficiency.
          </>,
          <>
            Managed 50+ daily customer touchpoints with a <strong>95% first-contact resolution
            rate</strong> — developing strong user empathy and stakeholder communication skills
            directly transferable to PM work.
          </>,
          <>
            Built and maintained Excel dashboards tracking team KPIs, scheduling, and performance
            data, reducing scheduling conflicts by <strong>30%</strong>.
          </>,
        ],
        images: [],
      },
      {
        company: "Atripco Delivery Service",
        timeframe: "Jun 2018 – Jul 2019",
        role: "Lead Hand",
        achievements: [
          <>
            Designed and delivered onboarding programs for 12+ new hires, reducing ramp-up time by
            <strong> 30%</strong> through structured documentation and hands-on mentorship.
          </>,
          <>
            Maintained detailed process documentation for production workflows and employee
            performance, reducing operational errors by <strong>15%</strong> and improving
            transparency across the team.
          </>,
          <>
            Provided daily team leadership across a 12-person crew, contributing to a{" "}
            <strong>20% improvement</strong> in overall team efficiency.
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
      src: "/images/gallery/DrivnRecording.mp4",
      alt: "drivn – App walkthrough",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/hangman-app.mp4",
      alt: "Hangman – Gameplay walkthrough",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/hangman-title.jpg",
      alt: "Hangman – Title screen",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/drivn-dashboard.jpg",
      alt: "drivn – Next Best Action dashboard",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/hangman-gameplay.jpg",
      alt: "Hangman – Mid-game with letter feedback",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/drivn-admin.jpg",
      alt: "drivn – Admin dashboard with growth metrics",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/drivn-habits.jpg",
      alt: "drivn – Habit tracking",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/book-search.jpg",
      alt: "Book Search Engine – Search results",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/drivn-onboarding.jpg",
      alt: "drivn – Onboarding screen",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/drivn-summary.jpg",
      alt: "drivn – Activity summary calendar",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ecommerce-readme.jpg",
      alt: "E-Commerce Back End – README",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
