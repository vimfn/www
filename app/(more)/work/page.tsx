import { workData } from "@/app/(more)/work/data";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "arnvgh // work",
  description: "Find a list of all my projects here.",
};

const workPage = () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Work</h1>
        I love building side projects that solve either my own or someone
        else&apos;s problems. Here is an extensive list of all the stuff I have
        worked on over the years.
        <br />
        <br />
        <p>
          As a student, I might not have the time for full-time projects, but
          who knows 🤭?
          <br />
          Always happy to discuss an idea — hit me a up at
          <a
            href="http://x.com/arnvgh"
            className="link ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @arnvgh
          </a>
          {""}.
        </p>
      </div>

      <h2 className="text-xl font-bold pb-8">Experience</h2>

      <h3 className="tetx-md font-semibold">{"<Undisclosed>"}</h3>
      <ul className="list-disc p-3">
        <li>
          <strong>Developed a video upload feature</strong> with signed URLs for
          secure direct uploads to Google Cloud Storage.
        </li>
        <li>
          <strong>Utilized Cloud Pub/Sub</strong> for asynchronous processing of
          uploaded videos, transcoding them to multiple formats using Cloud Run
          workers.
        </li>
        <li>
          <strong>Stored video metadata in Firestore</strong> for efficient
          retrieval and display in the web client.
        </li>
        <li>
          <strong>Designed and deployed a Next.js web client</strong> hosted on
          Cloud Run for user interaction.
        </li>
        <li>
          <strong>Led the architecture design and implementation</strong>,
          ensuring scalability and cost-effectiveness of the solution.
        </li>
        <li>
          <strong>Collaborated with team members</strong> to address limitations
          and plan future enhancements.
        </li>
      </ul>
      <h3 className="tetx-md font-semibold">{"Physicswallah Inc."}</h3>
      <ul className="list-disc p-3">
          <li>
            <strong>Worked closely with a senior engineer</strong> to develop
            key features of the app, including doubt resolution functionality.
          </li>
          <li>
            <strong>Collaborated with the team</strong> in designing and
            implementing various components and modules of the app.
          </li>
          <li>
            <strong>Participated in integrating</strong> external APIs, such as
            the OpenAI API, to enhance the app's functionality.
          </li>
          <li>
            <strong>Assisted in testing and debugging</strong> to ensure the
            app's reliability and performance.
          </li>
          <li>
            <strong>Contributed to the creation</strong> of user-friendly
            interfaces and experiences for teachers using React Native's
            capabilities.
          </li>
          <li>
            <strong>Engaged in discussions and brainstorming sessions</strong>{" "}
            to explore new ideas and improve existing features.
          </li>
          <li>
            <strong>Gained hands-on experience</strong> in mobile app
            development and collaborative software engineering practices.
          </li>
      </ul>
      <h2 className="text-xl font-bold py-8">Projects</h2>
      <Table className="">
        <TableCaption>A list of my projects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Project</TableHead>
            <TableHead className="text-right">Description</TableHead>
            <TableHead className="text-right">Year</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workData.map((item) => (
            <TableRow key={item.title} className="w-full">
              <TableCell className="font-medium">
                <a
                  href={item.link}
                  target="_blank"
                  className="link"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              </TableCell>
              <TableCell
                className="text-right"
                dangerouslySetInnerHTML={{ __html: item.shortDesc }}
              ></TableCell>
              <TableCell className="text-right">{item.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default workPage;
