import { Hero } from "../components/Hero/";
import { About } from "../components/About/";
import { Skills } from "../components/Skills/";
import { Projects } from "../components/Projects/";
import { Blog } from "../components/Blog/";
import { Contact } from "../components/Contact/";
import { Footer } from "../components/Footer/";
import { createClient } from "contentful";
import Head from "next/head";
import { useRouter } from "next/router";

const HomePage = ({ posts, about, skills, projects }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Shahmir Faisal - Web Developer</title>
        <meta name="description" content={about.description} />

        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_SITE_URL + router.pathname}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_SITE_NAME}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Shahmir Faisal - Web Developer"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={about.description}
          key="ogdesc"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@codewithshahmir" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero about={about} />
      <About about={about} />
      <Skills skills={skills} />
      <Projects projects={projects} about={about} />
      <Blog posts={posts} about={about} />
      <Contact />
      <Footer about={about} />
    </>
  );
};

export const getStaticProps = async () => {
  const postsQuery = `
      query {
    user(username: "shahmir") {
      publication {
        posts {
          _id
          title
          coverImage
          dateAdded
          slug
          brief
        }
      }
    }
  }
    `;

  const postsRes = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: postsQuery,
    }),
  });
  const postsData = await postsRes.json();
  const posts = postsData.data.user.publication.posts;

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const aboutRes = await client.getEntry("2tRryl7Ze1l1JfNj47Qfbl");
  const skillsRes = await client.getEntries({ content_type: "skills" });
  const projectsRes = await client.getEntries({ content_type: "project" });

  return {
    props: {
      posts: posts.slice(0, 4),
      about: aboutRes.fields,
      skills: skillsRes.items,
      projects: projectsRes.items,
    },
  };
};

export default HomePage;
