import { ErrorToast, SuccessToast } from "@/utils/toast-modals";
import { Truncate } from "@/utils/truncate";
import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Cookies from "js-cookie";
import { Presence } from "@/utils/motion-exports";
import { RxCross2 } from "react-icons/rx";
import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

const ProjectsPage = () => {
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  //
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 6;
  //
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
  const deleteProject = async (id: any) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/okorojames/project/${id}`
      );
      if (res.status === 200 || res.status === 201) {
        SuccessToast("Project deleted successfully");
        await getProjects();
      }
    } catch (error: any) {
      ErrorToast("Something went wrong");
    }
  };
  //
  const handlePageClick = ({ selected }: { selected: number }) => {
    const params = new URLSearchParams();
    const page = selected + 1;
    params.append("page", page.toString());
    router.push(`/projects?${params.toString()}`);
  };
  //

  return (
    <Fragment>
      <div className="w-[95%] mx-auto relative mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-start gap-4 mb-4">
        {loading && <p>Loading...</p>}
        {projects &&
          projects?.docs?.map((project: any) => (
            <div key={project?._id}>
              <div className="h-[250px] overflow-y-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/${project?.image}`}
                  alt={project?.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[40%]">
                <h4>{project?.name}</h4>
                <p>{Truncate(project?.desc, 16)}</p>
                <div className="flex items-center gap-2">
                  <FiEdit
                    className="text-primary-100"
                    onClick={() => {
                      setSelectedItem(project), setShowUpdate(true);
                    }}
                  />
                  <MdDelete
                    className="text-red-500"
                    onClick={() => deleteProject(project?._id)}
                  />
                </div>
              </div>
            </div>
          ))}
        <Presence>
          {showUpdate && selectedItem && (
            <UpdateProject
              getProjects={getProjects}
              item={selectedItem}
              setShowUpdate={setShowUpdate}
            />
          )}
        </Presence>
      </div>
      <div className="mb-16">
        {projects && (
          <ReactPaginate
            breakLabel="..."
            // nextLabel={<FaChevronCircleRight className="text-3xl" />}
            nextLabel={">"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={projects?.totalPages}
            // previousLabel={<FaChevronCircleLeft className="text-3xl" />}
            previousLabel={"<"}
            renderOnZeroPageCount={null}
            className="project-paginate flex items-center justify-center flex-wrap gap-2 mt-7"
          />
        )}
      </div>
    </Fragment>
  );
};

export default ProjectsPage;

//
export const UpdateProject = ({
  item,
  setShowUpdate,
  getProjects,
}: {
  item: any;
  setShowUpdate: any;
  getProjects: () => Promise<QueryObserverResult<Error, unknown>>;
}) => {
  //
  const [saving, setSaving] = useState<boolean>(false);
  const [image, setImage] = useState<any>(null);
  const [img_prev, setImgPrev] = useState<string>(item?.image);
  //
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: item?.name,
      desc: item?.desc,
      topRated: item?.topRated,
      link: item?.link,
      github: item?.github,
      stacks: item?.stacks,
    },
  });
  //
  const createProject = async (data: any) => {
    setSaving(true);
    const isAuth = Cookies.get("token");
    if (!isAuth) return ErrorToast("Please login first");
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("desc", data.desc);
      formData.append("topRated", data.topRated);
      formData.append("link", data.link);
      formData.append("github", data.github);
      formData.append("stacks", data.stacks);
      if (image) formData.append("image", image);
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/okorojames/project/${item?._id}`,
        formData
      );
      if (res.status === 200 || res.status === 201) {
        SuccessToast("Project created successfully");
        reset();
        setImage(null);
        setShowUpdate(false);
        await getProjects();
      }
    } catch (error: any) {
      ErrorToast("Something went wrong");
    } finally {
      setSaving(false);
    }
  };
  //
  //
  return (
    <div className="fixed w-full top-0 left-0 bottom-0 flex flex-col justify-center items-center bg-bgDark/45 backdrop-blur-sm z-[999]">
      <div className="relative h-[350px] overflow-y-auto my-auto bg-light-100 rounded-md p-4">
        <RxCross2
          className="text-red-500 absolute right-2 top-2 text-3xl"
          onClick={() => setShowUpdate(false)}
        />
        <form
          className="text-dark-100 w-[90%] sm:w-[450px] mx-auto flex flex-col gap-5 mt-8 mb-[50px]"
          onSubmit={handleSubmit(createProject)}
        >
          <label htmlFor="name" className="flex flex-col gap-1">
            <p>Project Name</p>
            <input
              type="text"
              id="name"
              className="border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
              {...register("name", { required: "name is required" })}
            />
            <small className="text-xs text-red-500">
              {typeof errors?.name?.message === "string" &&
                errors?.name?.message}
            </small>
          </label>
          {/*  */}
          <label htmlFor="image" className="flex flex-col gap-1">
            <p>Image</p>
            <div className="flex items-center gap-2 rounded-md bg-light-100 border-primary-100 border-[1.5px] overflow-hidden">
              <p className="w-full pl-2 overflow-x-hidden whitespace-nowrap">
                {image
                  ? image?.name
                  : item?.image
                  ? item?.image
                  : "Upload Image"}
              </p>
              <div className="bg-primary-200 text-light-100 py-2 px-2">
                Browse
              </div>
            </div>
            <input
              type="file"
              id="image"
              className="border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
              hidden
              onChange={(e: any) => {
                const file = e.target.files[0];
                if (file) {
                  setImage(file);
                }
              }}
            />
            {/* <small className="text-xs text-red-500">
          {typeof errors?.name?.message === "string" && errors?.name?.message}
        </small> */}
          </label>
          {/*  */}
          <label htmlFor="link" className="flex flex-col gap-1">
            <p>Project Link</p>
            <input
              type="text"
              id="link"
              className="border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
              {...register("link", { required: "link is required" })}
            />
            <small className="text-xs text-red-500">
              {typeof errors?.link?.message === "string" &&
                errors?.link?.message}
            </small>
          </label>
          {/*  */}
          <label htmlFor="github" className="flex flex-col gap-1">
            <p>Project Github Link</p>
            <input
              type="text"
              id="github"
              className="border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
              {...register("github", { required: "github is required" })}
            />
            <small className="text-xs text-red-500">
              {typeof errors?.github?.message === "string" &&
                errors?.github?.message}
            </small>
          </label>
          {/*  */}
          <label htmlFor="stacks" className="flex flex-col gap-1">
            <p>Stacks</p>
            <input
              type="text"
              id="stacks"
              className="border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
              {...register("stacks", { required: "stacks is required" })}
            />
            <small className="text-xs text-red-500">
              {typeof errors?.stacks?.message === "string" &&
                errors?.stacks?.message}
            </small>
          </label>
          {/*  */}
          <label htmlFor="desc" className="flex flex-col gap-1">
            <p>Project Description</p>
            <textarea
              id="desc"
              rows={6}
              className="border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
              {...register("desc", { required: "description is required" })}
            />
            <small className="text-xs text-red-500">
              {typeof errors?.desc?.message === "string" &&
                errors?.desc?.message}
            </small>
          </label>
          {/*  */}
          <label
            htmlFor="topRated"
            className="flex flex-row-reverse self-start items-center gap-1"
          >
            <p>Top Rated</p>
            <input
              id="topRated"
              type="checkbox"
              className="w-[18px] h-[18px] border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
              {...register("topRated")}
            />
            <small className="text-xs text-red-500">
              {typeof errors?.topRated?.message === "string" &&
                errors?.topRated?.message}
            </small>
          </label>
          {/*  */}
          <button className="border-[1.5px] border-primary-100 rounded-md py-2 pl-2 text-primary-100">
            {saving ? "Saving" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};
