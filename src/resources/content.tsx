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
        company: "Ruby Pizza N' Wings",
        timeframe: "2023 – 2024",
        role: "Freelance Web Developer & Business Analyst",
        achievements: [
          <>
            Delivered a responsive website for a Toronto restaurant whose only digital presence
            was a commissioned Uber Eats listing — storefront branding, a full 13-category priced
            menu, and click-to-call ordering paths on every page.
          </>,
          <>
            Ran the business analysis end to end: problem statement, stakeholder analysis,
            scope definition, risk register, and five measurable business objectives captured in
            a formal BRD and functional requirements spec.
          </>,
          <>
            Owned the product side: customer personas, a MoSCoW-prioritized backlog with
            Given/When/Then acceptance criteria, and a release roadmap that gates on-site
            ordering on real traffic data instead of speculation.
          </>,
        ],
        images: [],
      },
      {
        company: "Atripco Delivery Service",
        timeframe: "Jul 2019 – Feb 2023",
        role: "Operations Coordinator",
        achievements: [
          <>
            Redesigned dispatch & routing workflow — mapped pain points, coordinated data-driven
            scheduling overhaul; cut processing time <strong>40%</strong>, improved on-time
            delivery <strong>15%</strong>.
          </>,
          <>
            Built <strong>KPI dashboards</strong> and ran structured retrospectives across a{" "}
            <strong>12-person team</strong> — drove <strong>20% efficiency gain</strong> over 6
            months.
          </>,
          <>
            Designed performance-tracking system with iterative operator feedback loops —
            eliminated scheduling conflicts <strong>30%</strong>, reduced routing errors{" "}
            <strong>~25%</strong>.
          </>,
          <>
            Bridged operator feedback to process decisions across cross-functional stakeholders
            — improved compliance & service quality <strong>25%</strong>.
          </>,
          <>
            Built escalation playbooks & triage SOPs across <strong>50+ daily
            interactions</strong> — achieved <strong>95% first-contact resolution</strong>.
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
            Redesigned onboarding SOPs & mentorship loops — cut ramp time{" "}
            <strong>30%</strong>, improved team readiness across shifts.
          </>,
          <>
            Led execution for <strong>12 associates</strong>, surfaced bottlenecks — drove{" "}
            <strong>20% shift efficiency increase</strong>.
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
  title: "Skills",
  skills: [
    {
      title: "Product Management",
      description: (
        <>End-to-end product ownership from discovery to delivery — defining problems, prioritizing ruthlessly, and shipping with measurable impact.</>
      ),
      tags: [
        { name: "PRD Writing" },
        { name: "Roadmapping" },
        { name: "User Story Mapping" },
        { name: "Feature Prioritization (RICE / ICE / MoSCoW)" },
        { name: "OKR & KPI Definition" },
        { name: "A/B Testing" },
        { name: "Customer Discovery" },
        { name: "MVP Scoping" },
        { name: "Sprint Planning" },
        { name: "Agile / Scrum" },
        { name: "Stakeholder Alignment" },
      ],
      images: [],
    },
    {
      title: "Operations & Leadership",
      description: (
        <>Running teams, designing processes, and building systems that scale — with a track record of measurable efficiency gains across cross-functional environments.</>
      ),
      tags: [
        { name: "Process Mapping & Redesign" },
        { name: "SOP Development" },
        { name: "KPI Dashboards" },
        { name: "Workflow Optimization" },
        { name: "Team Leadership" },
        { name: "Performance Tracking" },
        { name: "Cross-functional Coordination" },
        { name: "Escalation Management" },
        { name: "Onboarding & Training" },
        { name: "Scheduling & Dispatch" },
      ],
      images: [],
    },
    {
      title: "Analytics & Tools",
      description: (
        <>Turning raw data into decisions — using the right tools to track behaviour, measure impact, and keep teams aligned.</>
      ),
      tags: [
        { name: "PostHog" },
        { name: "SQL" },
        { name: "Excel (Advanced)" },
        { name: "Dashboard Design" },
        { name: "Jira" },
        { name: "Figma (Basic)" },
        { name: "Process Mapping" },
        { name: "Git / GitHub" },
      ],
      images: [],
    },
    {
      title: "Finance & Business",
      description: (
        <>BCom Finance background applied to product and operations — market sizing, business cases, and decision frameworks grounded in commercial reality.</>
      ),
      tags: [
        { name: "Financial Analysis" },
        { name: "Market Sizing" },
        { name: "Business Modeling" },
        { name: "Decision Analysis" },
        { name: "Management Science" },
        { name: "Budget & Cost Management" },
        { name: "Revenue Impact Analysis" },
        { name: "Risk Assessment" },
      ],
      images: [],
    },
    {
      title: "Technical",
      description: (
        <>Full-stack fluency used to validate ideas fast, build production MVPs, and work closely with engineering without losing the thread.</>
      ),
      tags: [
        { name: "Next.js", icon: "nextjs" },
        { name: "React.js" },
        { name: "TypeScript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Node.js" },
        { name: "Python" },
        { name: "Supabase", icon: "supabase" },
        { name: "MySQL" },
        { name: "REST APIs" },
        { name: "HTML / CSS" },
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
