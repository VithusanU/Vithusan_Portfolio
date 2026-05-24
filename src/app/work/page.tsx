import { Column, Heading, Text, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

const RECENT_SLUGS  = ["drivn", "pm-career-ops"];
const EARLIER_SLUGS = ["hangman-app", "book-search-engine", "ecommerce-backend"];

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Recent Work */}
      <Heading marginBottom="4" variant="heading-strong-xl" align="center">
        Recent Work
      </Heading>
      <Text
        align="center"
        onBackground="neutral-weak"
        variant="body-default-m"
        marginBottom="xl"
      >
        Products built end-to-end — from problem definition to shipped code.
      </Text>
      <Projects exclude={EARLIER_SLUGS} />

      {/* Earlier Work */}
      <Heading marginTop="xl" marginBottom="4" variant="heading-strong-l" align="center">
        Earlier Work
      </Heading>
      <Text
        align="center"
        onBackground="neutral-weak"
        variant="body-default-m"
        marginBottom="xl"
      >
        Learning projects from the development bootcamp — included for technical breadth.
      </Text>
      <Projects exclude={RECENT_SLUGS} />
    </Column>
  );
}
