import { Ids, IdsType } from "@/utils/ids";
import { Truncate } from "@/utils/truncate";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";

export const FourthSection = () => {
  const {
    data: projects,
    isLoading: loading,
    refetch: getProjects,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/okorojames/project`
      );
      return res.data?.data;
    },
  });
  //
  const topRatedProjects = useMemo(() => {
    if (projects) {
      return projects?.docs.filter((project: any) => project.topRated);
    }
  }, [projects]);

  //
  return (
    <div id="projects" className="mt-16 section-container">
      <div className="flex gap-2 items-center select-none">
        <p className="text-xl md:text-2xl text-primary-100 font-SF_Mono">03.</p>
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-light-200 font-semibold">
            Projects
          </h3>
          <p className="text-sm text-light-200">projects i&apos;ve worked on</p>
        </div>
        <div className="hidden 340:block w-[90px] 380:w-[150px] h-[2px] bg-primary-100/30" />
      </div>
      {/* top rated projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-stretch gap-6 mt-6 mb-4">
        {loading &&
          Ids.splice(0, 4).map((id: IdsType) => (
            <div
              className="w-[90%] 376:w-[300px] h-[300px] overflow-auto scrollbar-2 rounded-md border-[2.5px] border-primary-100/50 flex flex-col gap-4 animate-pulse"
              key={id?.id}
            >
              <div className="w-full h-64 bg-primary-100/30" />
              <div className="flex flex-col gap-5 p-3 h-full">
                <h3 className="h-4 w-full bg-primary-100/30 rounded-md" />
                <h3 className="h-3 w-full bg-primary-100/30 rounded-md" />
                <h3 className="h-5 w-[90%] bg-primary-100/30 rounded-md" />
                <h3 className="h-3 w-[60%] bg-primary-100/30 rounded-md" />
              </div>
            </div>
          ))}
        {projects &&
          topRatedProjects?.slice(0, 4)?.map((project: any) => {
            const stacks = project?.stacks?.split(",");
            return (
              <div
                className="w-[90%] 376:w-[300px] h-[300px] overflow-auto scrollbar-2 rounded-md border-[2.5px] border-primary-100/50 flex flex-col gap-4 cursor-pointer transition-all duration-300 card-1"
                key={project._id}
              >
                <Image
                  src={project.image}
                  alt={project?.name}
                  width={500}
                  height={500}
                  className="w-full"
                />
                <div className="flex flex-col gap-2 p-3 h-full">
                  <h3 className="text-lg font-semibold text-light-200">
                    {Truncate(project?.name, 30)}
                  </h3>
                  <p className="text-light-200" title={project?.desc}>
                    {project?.desc}
                  </p>
                  <div className="flex items-center flex-wrap gap-2 mb-4">
                    {stacks?.map((stack: any, index: any) => (
                      <span
                        key={index}
                        className="text-light-100 bg-light-200/20 rounded-full px-2 py-1 text-sm font-semibold"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-light-200 text-2xl mt-auto pb-5">
                    <Link href={project?.link} target="_blank">
                      <FiExternalLink />
                    </Link>
                    <Link href={project?.github} target="_blank">
                      <IoLogoGithub />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Link
        href={"/my-projects"}
        className="w-[150px] mx-auto flex justify-center items-center text-center text-primary-100 bg-bgDark shadow-[0_0_0_1.5px] shadow-primary-100 px-4 py-3 rounded-md"
      >
        More Projects
      </Link>
    </div>
  );
};
