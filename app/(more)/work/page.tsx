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
        built over the years.
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
          </a>{""}
          .
        </p>
      </div>
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
