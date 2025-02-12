import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "vimfn // work",
  description: "Find a list of all my projects here.",
};

const workPage = () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Work</h1>
        Most of my projects are written either to meet my own needs or for the
        fun of implementing them myself. There are quite a few interesting
        things I plan to do yet.
        <br />
        <br />
        <p>
          Always happy to discuss new ideas — hit me a up at
          <a
            href="http://x.com/vimfnx"
            className="link ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @vimfnx
          </a>
          {""}.
        </p>
      </div>

      <h2 className="text-xl font-bold pb-8">Experience</h2>

      <h3 className="text-md font-semibold">Google Developers Group</h3>
      <p className="text-sm">Dec'24 - Present · On-Campus Core Team Member</p>
      <ul className="list-disc p-3">
        <li>
          Developed full-stack solutions using React (Next.js) and Svelte
          (SvelteKit) for dynamic UIs.
        </li>
        <li>
          Built RESTful APIs and microservices with Node.js and Go, integrated
          with MongoDB, MySQL, and PostgreSQL.
        </li>
        <li>
          Optimized database schemas, queries, and API performance for
          scalability and reliability.
        </li>
        <li>
          Ensured seamless front-end and back-end data integration through
          RESTful and GraphQL APIs.
        </li>
        <li>
          Implemented best practices in code quality, testing, and CI/CD
          pipelines.
        </li>
        <li>
          Collaborated on system architecture and tech stack decisions to
          streamline development processes.
        </li>
      </ul>

      <h3 className="tetx-md font-semibold">{"<Undisclosed>"}</h3>
      <p className="text-sm">Jan'24 Remote - Freelance</p>
      <ul className="list-disc p-3">
        <li>
          Led the architecture design and implementation, ensuring scalability
          and cost-effectiveness of the solution.
        </li>
        <li>
          Developed a video upload feature with signed URLs for secure direct
          uploads to Google Cloud Storage.
        </li>
        <li>
          Utilized Cloud Pub/Sub for asynchronous processing of uploaded videos,
          transcoding them to multiple formats using Cloud Run workers.
        </li>
        <li>
          Stored video metadata in Firestore for efficient retrieval and display
          in the web client.
        </li>
        <li>Utilized Cloud Run for user interaction in the web client.</li>
        <li>
          Collaborated with team members to address limitations and plan future
          enhancements.
        </li>
      </ul>
      <h3 className="tetx-md font-semibold">{"Physicswallah"}</h3>
      <p className="text-sm">June'23 Remote - Part-time</p>
      <ul className="list-disc p-3">
        <li>
          Implemented an app allowing teachers to solve student doubts with
          features such as selecting slide numbers and lectures.
        </li>
        <li>
          Integrated APIs to fetch student doubts and enhanced functionality
          with OpenAI API for answer generation.
        </li>
        <li>
          Developed multiple doubt resolution modes including voice recording,
          picture upload, and text input.
        </li>
        <li>
          Ensured seamless cross-platform functionality using React Native's
          capabilities.
        </li>
        <li>
          Collaborated with a senior engineer to develop key features and worked
          closely with the team to design and implement components.
        </li>
        <li>
          Contributed to user-friendly interfaces and engaged in discussions to
          improve features, conducting testing and gathering feedback.
        </li>
      </ul>

      <h2 className="text-xl font-bold py-8">Projects</h2>

      <div className="">
        todo: write about my projects here, meanwhile you can checkout my{" "}
        <a href="/gh" className="link">
          github
        </a>{" "}
        /{" "}
        <a
          href="/ln"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        .
      </div>
      {/* 
      <Table>
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
      */}
    </section>
  );
};

export default workPage;
