"use client";
import { Ids, IdsType } from "@/utils/ids";
import { Truncate } from "@/utils/truncate";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";

const MyProjectsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 6;
  const currPage = parseInt(searchParams.get("page") || "1", 10);
  const { data: projects, isLoading: loading } = useQuery({
    queryKey: ["projects", page, limit],
    queryFn: async () => {
      const res = await axios.get("/api/get-projects");
      return res.data?.data;
    },
  });
  // paginate data
  // the start index endIndex and currentData settings
  const startIndex = (Number(page) - 1) * Number(limit);
  const endIndex = Number(page) * Number(limit);
  const currentData = projects?.slice(startIndex, endIndex);
  // where we create the list of all the pagination numbers
  const paginationNumbers = [];
  for (let i = 1; i <= Math.ceil(projects?.length / Number(limit)); i++) {
    paginationNumbers.push(i);
  }
  //
  const handlePageClick = ({ selected }: { selected: number }) => {
    const params = new URLSearchParams();
    const page = selected + 1;
    params.append("page", page.toString());
    router.push(`/my-projects?${params.toString()}`);
  };
  //
  return (
    <div className="max-w-[1440px] mx-auto mb-[80px]">
      <div className="flex justify-center items-center">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-light-200 font-semibold">
          All My Projects
        </h3>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch gap-6 mt-10 mb-10">
        {loading &&
          Ids.map((id: IdsType) => (
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
          currentData?.map((project: any) => {
            const stacks = project?.stacks?.split(",");
            return (
              <div
                className="w-[90%] 376:w-[300px] h-[300px] overflow-y-auto scrollbar-2 rounded-md border-[2.5px] border-primary-100/50 overflow-hidden flex flex-col card-1 gap-4 cursor-pointer transition-all duration-300"
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
                  <p className="text-light-200">{project?.desc}</p>
                  <div className="flex items-center flex-wrap gap-2 mb-4">
                    {stacks?.map((stack: any) => (
                      <span
                        key={stack}
                        className="text-light-100 bg-light-200/20 rounded-full px-2 py-1 text-sm font-semibold"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-light-200 text-2xl mt-auto pb-5">
                    <Link
                      className="flex text-sm gap-1 items-center"
                      href={project?.link}
                      target="_blank"
                    >
                      <div className="mt-1">Visit</div>
                      <FiExternalLink />
                    </Link>
                    <Link
                      className="flex text-sm gap-1 items-center"
                      href={project?.github}
                      target="_blank"
                    >
                      <div className="mt-1">Github</div>
                      <IoLogoGithub />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {projects && (
        // <ReactPaginate
        //   breakLabel="..."
        //   // nextLabel={<FaChevronCircleRight className="text-3xl" />}
        //   nextLabel={">"}
        //   onPageChange={handlePageClick}
        //   pageRangeDisplayed={5}
        //   pageCount={Math.ceil(projects?.length / Number(limit))}
        //   // previousLabel={<FaChevronCircleLeft className="text-3xl" />}
        //   previousLabel={"<"}
        //   renderOnZeroPageCount={null}
        //   className="project-paginate flex items-center justify-center flex-wrap gap-2 mt-7"
        // />
        <div className="flex items-center justify-center flex-wrap gap-2">
          {paginationNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageClick({ selected: number - 1 })}
              className={`${
                currPage === number
                  ? "bg-primary-200 text-light-200"
                  : "bg-light-100 text-light-300"
              } px-3 py-1 rounded-md`}
            >
              {number}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProjectsPage;
