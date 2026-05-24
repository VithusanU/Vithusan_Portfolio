import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";


const person: Person = {
  firstName: "Vithusan",
  lastName: "Uruthirakumaran",
  name: `Vithusan Uruthirakumaran`,
  role: "Product Manager",
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
  <>
    {person.name}
    <Text
      variant="label-default-m"
      onBackground="neutral-weak"
      style={{ display: "block", marginTop: "14px", letterSpacing: "0.12em" }}
    >
      Product Manager · Builder · Ex-Ops
    </Text>
  </>
),


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
      Focused on turning ambiguous problems into{" "}
      <strong>shipped solutions</strong> — blending product thinking
      with hands-on engineering.
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
      Vithusan is a product manager and builder with a background in operations leadership and
      full-stack software development. He brings a rare combination of strategic product thinking
      and hands-on technical execution — capable of going from problem definition to shipped product.
      <br /><br />
      With experience spanning product strategy, frontend and backend engineering, and data-driven
      operations, he bridges the gap between user needs and technical reality — and has the receipts
      to prove it.
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
            (3.45 GPA) with concentration in management science and decision analysis.
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
            Identified manual scheduling as the highest-friction point in team operations —
            audited two weeks of data to quantify the problem, designed a data-driven scheduling
            system from scratch, piloted it across 3 routes, then rolled it out to the full team.
            Measured <strong>40% reduction in processing time</strong> and{" "}
            <strong>15% improvement in delivery times</strong>.
          </>,
          <>
            Recognized that performance data existed across multiple systems with no single view.
            Built weekly reporting that consolidated KPIs, scheduling, and workflow data into one
            place — giving the team visibility to catch bottlenecks before they compounded. Drove a{" "}
            <strong>20% improvement in operational efficiency</strong> and reduced scheduling
            conflicts by <strong>30%</strong>.
          </>,
          <>
            Standardized the customer response process after identifying inconsistent handling as
            the root cause of repeat contacts. Designed response frameworks for the 10 most
            common issues, trained the team, and tracked outcomes — reaching a{" "}
            <strong>95% first-contact resolution rate</strong> across 50+ daily touchpoints.
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
            Identified that inconsistent onboarding was extending new hire ramp-up time and
            causing avoidable first-30-day errors. Designed a structured program from scratch —
            role-specific documentation, hands-on workflow walkthroughs, and a 30-day checkpoint
            — and measured a <strong>30% reduction in time-to-productivity</strong> across 12+
            new hires.
          </>,
          <>
            Recognized undocumented workflows as a recurring source of inconsistency across
            shifts. Built and maintained process documentation for all production workflows,
            creating a shared operational baseline that reduced errors by{" "}
            <strong>15%</strong> and became the foundation for future onboarding.
          </>,
          <>
            Led daily operations for a 12-person crew through a period of process change — using
            direct feedback loops and structured check-ins to surface and resolve blockers before
            they compounded. Contributed to a <strong>20% improvement</strong> in team efficiency
            over the following quarter.
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
  title: "On product, building, and the ops-to-PM journey",
  description: `Thoughts on PM craft, building in public, and the long game of career transition`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `From PRD to production — products built end-to-end by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `Screenshots, walkthroughs, and builds`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/DrivnVideo.mp4",
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
