import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";


const person: Person = {
  firstName: "Vithusan",
  lastName: "Uruthirakumaran",
  name: `Vithusan Uruthirakumaran`,
  role: "Product Owner · CSPO Certified · AI-Assisted Product Development",
  avatar: "/images/avatar.png",
  email: "vithusan.business@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Thoughts on product, delivery, and building in public — coming soon.</>,
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
      Product Owner · CSPO Certified · AI-Assisted Product Development
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
  description: `Meet ${person.name} — Certified Scrum Product Owner based in Toronto, ON`,
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
      Vithusan is a Certified Scrum Product Owner with hands-on experience shipping live products,
      writing user stories with clear acceptance criteria, and using AI tools (Claude) to draft,
      critique, and refine specs before they reach the team. His technical background — SQL data
      analysis, business analysis, and full-stack development in MERN and TypeScript — means he can
      partner directly with a Tech Lead on complex story scoping without losing the thread.
      <br /><br />
      That grounding came from five years at a Toronto delivery company, where he moved from the
      floor into a business analyst role, shadowing drivers, mapping process flows, and working
      alongside the scrum master and dev team through system design. Since 2023, he's been running
      his own products end-to-end, measuring whether the decisions actually held up. CSPO certified
      and experienced in documentation-heavy environments where compliance requirements get built
      into the work from the start, not discovered in QA.
    </>
  ),
},
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Independent Product Consulting",
        timeframe: "Oct 2023 – Present",
        role: "Product Owner · Toronto, ON",
        achievements: [
          <>
            <strong>On a Vibe</strong> — Product Owner ·{" "}
            <a href="/work/on-a-vibe">case study</a> · Dec 2024 – Present · Milton, ON (hybrid,
            contract full-time). Own end-to-end delivery direction for a Toronto mobile beverage
            cart business — a QR-code digital ordering system with{" "}
            <strong>3D product viewability</strong>, supporting{" "}
            <strong>$85,000+ in sales</strong> across <strong>100+ events</strong> and{" "}
            <strong>14% revenue growth</strong>. Led stakeholder discovery and translated operator
            needs into a scoped feature set covering menu display, live order routing, and
            staff-facing order management; delivered wireframes, mockups, and a prioritized product
            roadmap.
          </>,
          <>
            <strong>drivn</strong> — Product Owner ·{" "}
            <a href="https://getdrivn.app">getdrivn.app</a> · Jan 2025 – Present · Toronto, ON
            (remote). Owned the full delivery lifecycle for an AI-powered productivity PWA —
            authoring PRDs and owning the full backlog — scaling from zero to{" "}
            <strong>40 daily active users</strong> with zero paid acquisition, at a{" "}
            <strong>72% activation rate</strong>, <strong>83% day-7 retention</strong>, and a{" "}
            <strong>62% task-completion rate</strong> across <strong>4 versioned releases</strong>{" "}
            shipped in Jira. Built the Next Best Action engine and instrumented a behavioural
            analytics pipeline (PostHog, SQL); built on Next.js 14, TypeScript, and Supabase.
          </>,
          <>
            <strong>PM Career Ops</strong> — Product Owner ·{" "}
            <a href="https://pm-career-ops.vercel.app">pm-career-ops.vercel.app</a> · Jul 2025 –
            Feb 2026 (ended, planned end-of-life). Took an AI-powered PM career tool from concept to
            live product within the first quarter, authoring <strong>20+ user stories</strong>{" "}
            across <strong>3 core feature sets</strong> and tracking adoption against OKRs.
          </>,
          <>
            <strong>Ruby Pizza N' Wings</strong> — Freelance Web Developer · Oct 2023 – Jan 2024.
            Built and launched a public-facing website, translating owner requirements and design
            preferences into site structure and layout.
          </>,
          <>
            Full case studies live on the <a href="/work">work</a> page.
          </>,
        ],
        images: [],
      },
      {
        company: "Atripco Delivery Service",
        timeframe: "Feb 2023 – Nov 2024",
        role: "Business Analyst · Toronto, ON",
        achievements: [
          <>
            Ran discovery interviews and driver shadowing across the full delivery pipeline, then
            partnered with the scrum master and dev team to translate findings into UX and functional
            specs for the driver portal, adding order visibility, print capability, and integrated
            routing.
          </>,
          <>
            Identified dispatch inefficiencies through SQL and Excel data analysis and redesigned
            the end-to-end routing process, cutting processing time <strong>40%</strong> and
            improving on-time delivery <strong>15%</strong>.
          </>,
          <>
            Partnered with leadership to define KPI and performance-tracking requirements, producing
            documented specs that cut scheduling conflicts <strong>30%</strong> and drove a{" "}
            <strong>20% efficiency gain</strong> across a 12-person team over six months.
          </>,
          <>
            Influenced cross-functional direction without direct authority — coordinating delivery
            planning, resource allocation, and business case development with ops leadership to
            drive process improvements and budget optimization.
          </>,
        ],
        images: [],
      },
      {
        company: "Atripco Delivery Service",
        timeframe: "Jul 2019 – Feb 2023",
        role: "Operations Supervisor · Etobicoke, ON",
        achievements: [
          <>
            Built and maintained KPI dashboards for high-volume programs (HelloFresh, Chef's Plate,
            Indigo), using performance data to surface process gaps and redesigns that drove
            approximately <strong>70% efficiency improvement</strong> and a{" "}
            <strong>20% reduction in operating expenses</strong>.
          </>,
          <>
            Promoted into the role from the line, then led a team through daily sorting and dispatch,
            identifying bottlenecks on the floor and improving throughput shift over shift.
          </>,
          <>
            Worked directly with drivers and dispatchers to surface what was actually slowing the
            operation down, and carried findings to operations and logistics leadership as written
            reports — the habit that eventually led into the business analyst role.
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
          <>Bachelor of Commerce — GPA 3.5. Sep 2022 – Jul 2026.</>
        ),
      },
      {
        name: "University of Toronto, SCS",
        description: <>Full-Stack Computer Science Certificate — Apr 2023 – Oct 2023.</>,
      },
      {
        name: "Professional Development",
        description: (
          <>
            Product lifecycle management, requirements elicitation, market research, go-to-market
            planning, launch plans, and beta test plans; technical upskilling and portfolio work.
            2023 – 2025.
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
        description: <>Completed July 2026.</>,
      },
      {
        name: "Introduction to Agile Development and Scrum",
        description: <>IBM — completed July 2026.</>,
      },
      {
        name: "IBM AI Product Manager Professional Certificate",
        description: <>In progress.</>,
      },
      {
        name: "Professional Scrum Product Owner I (PSPO I)",
        description: <>Scrum.org — currently pursuing.</>,
      },
    ],
  },
 technical: {
  display: true,
  title: "Skills",
  skills: [
    {
      title: "Delivery & Product Ownership",
      description: (
        <>Owning the path from a defined problem to a shipped release — the backlog, the plan, the milestones, and the risks that decide whether a date holds.</>
      ),
      tags: [
        { name: "Backlog Management" },
        { name: "Delivery Planning" },
        { name: "Epics / User Stories / Acceptance Criteria" },
        { name: "BRD & PRD Writing" },
        { name: "Prioritization (RICE / MoSCoW)" },
        { name: "Roadmapping" },
        { name: "Sprint Planning" },
        { name: "Milestone & Risk Tracking" },
        { name: "UAT Planning" },
      ],
      images: [],
    },
    {
      title: "Agile Delivery",
      description: (
        <>Certified Scrum Product Owner — running the ceremonies and the working relationships that turn a spec into shipped software.</>
      ),
      tags: [
        { name: "Scrum" },
        { name: "Kanban" },
        { name: "Sprint Ceremonies" },
        { name: "Retrospectives" },
        { name: "Facilitation" },
        { name: "Stakeholder Management" },
        { name: "Cross-functional Collaboration" },
        { name: "Influence Without Direct Authority" },
      ],
      images: [],
    },
    {
      title: "Business Analysis",
      description: (
        <>Getting to the real requirement — talking to the people doing the work, mapping how it actually happens today, and writing it down so a team can build against it.</>
      ),
      tags: [
        { name: "Requirements Elicitation" },
        { name: "Stakeholder Discovery" },
        { name: "Process Mapping" },
        { name: "Process Flows" },
        { name: "Solution Design Input" },
        { name: "Data-Informed Decision-Making" },
        { name: "Competitive Analysis" },
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
      title: "Tools & Technical",
      description: (
        <>Turning raw data into decisions, and keeping the team aligned while it happens — with enough hands-on depth to work alongside engineering without losing the thread.</>
      ),
      tags: [
        { name: "Jira" },
        { name: "Azure DevOps (familiar)" },
        { name: "Confluence" },
        { name: "Miro" },
        { name: "Figma" },
        { name: "Excel" },
        { name: "SQL" },
        { name: "PostHog" },
        { name: "AI-Assisted Drafting & Workflow Automation" },
        { name: "Next.js / TypeScript" },
        { name: "Git / CI/CD Concepts" },
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
  title: "On product, delivery, and building in public",
  description: `Thoughts on business analysis, product ownership, and the long game of career transition`,
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
