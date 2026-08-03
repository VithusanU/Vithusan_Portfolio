import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";


const person: Person = {
  firstName: "Vithusan",
  lastName: "Uruthirakumaran",
  name: `Vithusan Uruthirakumaran`,
  role: "Product Owner (CSPO) · Business Analysis · Agile Delivery",
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
  description: `Portfolio website showcasing product ownership, business analysis, and agile delivery work by ${person.name}`,
headline: (
  <>
    {person.name}
    <Text
      variant="label-default-m"
      onBackground="neutral-weak"
      style={{ display: "block", marginTop: "14px", letterSpacing: "0.12em" }}
    >
      Product Owner (CSPO) · Business Analysis · Agile Delivery
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
      Turning ambiguous problems into documented requirements and{" "}
      <strong>shipped solutions</strong> — blending product ownership
      with hands-on engineering.
    </>
  ),

};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name} — Certified Scrum Product Owner and business analyst based in Toronto, ON`,
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
      Vithusan is a Certified Scrum Product Owner and business analyst who works the full arc of a
      product — requirements gathering, process mapping, and BRD/FRD documentation on one end;
      backlog ownership, sprint planning, and release delivery on the other. A Full-Stack Computer
      Science certificate and a BCom mean he can write the spec and then build against it.
      <br /><br />
      That range came from five years of operations analysis at a Toronto delivery company —
      shadowing drivers, mapping current-state workflows, and turning what he found into functional
      specs — and from shipping his own products since 2024, where he owns the backlog end-to-end
      and measures whether the decisions actually worked.
    </>
  ),
},
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Independent Product Builder — Self-Directed",
        timeframe: "Jan 2024 – Present",
        role: "Founder & Product Manager · Toronto, ON",
        achievements: [
          <>
            <strong>drivn</strong> — AI productivity PWA ·{" "}
            <a href="https://getdrivn.app">getdrivn.app</a> · 2025 – Present. Owned the product
            backlog end-to-end — authoring full PRDs (problem statement, personas, P0/P1/P2 scope,
            risks, launch plan) in Confluence — shipping from zero to <strong>40 daily active
            users</strong> with zero paid acquisition, reaching <strong>72% activation</strong>,{" "}
            <strong>83% day-7 retention</strong>, and a <strong>62% task-completion rate</strong>.
            Directed backlog prioritization and sprint planning across 4 shipped versions in Jira,
            including a Next Best Action engine that surfaces personalized daily recommendations,
            and instrumented behavioural analytics (PostHog, SQL) to define KPIs and drive
            data-informed prioritization. Built in Next.js 14, TypeScript, and Supabase.
          </>,
          <>
            <strong>PM Career Ops</strong> — Job Application OS ·{" "}
            <a href="https://pm-career-ops.vercel.app">pm-career-ops.vercel.app</a> · 2026 –
            Present. Built an AI-powered data extraction and field-mapping pipeline (URL → company,
            role, ATS keywords) using JSON-LD parsing, purpose-built for a targeted job-search
            market, and designed an <strong>8-stage pipeline tracker</strong> with fit scoring to
            help candidates track and prioritize applications end-to-end.
          </>,
          <>
            <strong>On a Vibe</strong> — Product/BA advisory & build for a Toronto mobile beverage
            cart (freelance) · <a href="/work/on-a-vibe">case study</a> · May 2026 – Aug 2026.
            Advised on product direction in a BA/PO capacity — documenting requirements, producing
            wireframes and mockups, and building a prioritized feature roadmap for future platform
            expansion. Gathered requirements directly from stakeholders and scoped/built a QR-code
            ordering system with 3D product viewability, translating stakeholder input into feature
            specs.
          </>,
          <>
            <strong>Ruby Pizza N' Wings</strong> — freelance website build · Jan 2024. Translated
            the owner's requirements and design preferences into site structure and layout, backed
            by a formal BRD, functional requirements spec, MoSCoW-prioritized backlog with
            Given/When/Then acceptance criteria, and a release roadmap.
          </>,
          <>
            Follows Full-Stack Computer Science certificate completion and PM coursework
            (2023 – 2024). Full case studies live on the{" "}
            <a href="/work">work</a> page.
          </>,
        ],
        images: [],
      },
      {
        company: "Atripco Delivery Service",
        timeframe: "Jun 2018 – Feb 2023",
        role: "Business Analyst · Toronto, ON",
        achievements: [
          <>
            Shadowed drivers and ran interviews to surface pain points across the full pipeline —
            warehouse arrival, sorting, scanning, driver handoff, and EOD delivery completion — then
            partnered with the scrum master and developers to translate those findings into UX and
            functional specs for the driver portal, delivering clearer metrics/order visibility,
            print capability, and built-in routing.
          </>,
          <>
            Mapped current-state dispatch and routing workflows, identified inefficiency gaps
            through data analysis, and redesigned the process — cutting processing time{" "}
            <strong>40%</strong> and improving on-time delivery <strong>15%</strong>.
          </>,
          <>
            Facilitated structured retrospectives across a <strong>12-person team</strong> and
            partnered with ops leadership to define KPI and performance-tracking requirements,
            translating operational needs into documented specs — cutting scheduling conflicts{" "}
            <strong>30%</strong>, reducing routing errors <strong>~25%</strong>, and driving a{" "}
            <strong>20% efficiency gain</strong> over 6 months.
          </>,
          <>
            Built escalation playbooks and triage SOPs across <strong>50+ daily interactions</strong>{" "}
            (<strong>95% first-contact resolution</strong>); redesigned onboarding SOPs, cutting
            ramp time <strong>30%</strong> and driving a <strong>20% shift-efficiency
            increase</strong>.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "York University",
        description: (
          <>Bachelor of Commerce — GPA 3.5. Graduated June 2026.</>
        ),
      },
      {
        name: "University of Toronto, SCS",
        description: (
          <>Full-Stack Computer Science Certificate — Grade: A. April – October 2023.</>
        ),
      },
      {
        name: "Professional Development",
        description: (
          <>
            Product management coursework, applied coding practice, and portfolio development
            alongside continued BCom coursework. 2023 – 2025.
          </>
        ),
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        name: "Certified Scrum Product Owner (CSPO)",
        description: <>Scrum Alliance — completed July 2026.</>,
      },
      {
        name: "IBM Product Manager Professional Certificate",
        description: <>Completed 2026.</>,
      },
      {
        name: "IBM AI Product Manager Professional Certificate",
        description: <>In progress — 2025 to present.</>,
      },
    ],
  },
 technical: {
  display: true,
  title: "Skills",
  skills: [
    {
      title: "Business Analysis",
      description: (
        <>Getting to the real requirement — talking to the people doing the work, mapping how it actually happens today, and writing it down so a team can build against it.</>
      ),
      tags: [
        { name: "Requirements Gathering" },
        { name: "BRD / FRD Documentation" },
        { name: "Process Mapping (Current / Future-State)" },
        { name: "Gap Analysis" },
        { name: "Stakeholder Facilitation & Workshops" },
        { name: "Data-Informed Decision-Making" },
      ],
      images: [],
    },
    {
      title: "Product",
      description: (
        <>End-to-end product ownership from discovery to delivery — defining problems, prioritizing ruthlessly, and shipping with measurable impact.</>
      ),
      tags: [
        { name: "PRD Writing" },
        { name: "User Story Mapping" },
        { name: "Acceptance Criteria" },
        { name: "Wireframing / Prototyping" },
        { name: "Prioritization (RICE / ICE / MoSCoW)" },
        { name: "Customer Discovery" },
        { name: "MVP Scoping" },
        { name: "OKR & KPI Definition" },
      ],
      images: [],
    },
    {
      title: "Agile Delivery",
      description: (
        <>Certified Scrum Product Owner — running the backlog, the ceremonies, and the release plan that turns a spec into shipped software.</>
      ),
      tags: [
        { name: "Agile / Scrum" },
        { name: "Sprint Planning" },
        { name: "Backlog Grooming" },
        { name: "Kanban Boards" },
        { name: "Release Planning" },
        { name: "Roadmapping" },
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
      title: "Tools & Analytics",
      description: (
        <>Turning raw data into decisions — using the right tools to track behaviour, measure impact, and keep teams aligned.</>
      ),
      tags: [
        { name: "Jira" },
        { name: "Confluence" },
        { name: "Miro" },
        { name: "Figma" },
        { name: "PostHog" },
        { name: "SQL" },
        { name: "Excel (Advanced)" },
        { name: "Dashboard Design" },
        { name: "Claude" },
        { name: "GitHub Copilot" },
        { name: "Git / GitHub" },
      ],
      images: [],
    },
    {
      title: "Finance & Business",
      description: (
        <>BCom background applied to product and operations — market sizing, business cases, and decision frameworks grounded in commercial reality.</>
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
