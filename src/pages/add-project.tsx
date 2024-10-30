import { ErrorToast, SuccessToast } from "@/utils/toast-modals";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const AddProject = () => {
  //
  const [saving, setSaving] = useState<boolean>(false);
  const [image, setImage] = useState<any>(null);
  //
  const toBase64 = async (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  //
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      desc: "",
      topRated: false,
      link: "",
      github: "",
      stacks: "",
    },
  });
  //
  const createProject = async (data: any) => {
    setSaving(true);
    if (!image) return ErrorToast("Please select an image");
    try {
      const img = await toBase64(image);
      const formData = {
        ...data,
        image: img,
      };
      const res = await axios.post(`/api/new-project-s`, formData);
      if (res.status === 200 || res.status === 201) {
        SuccessToast("Project created successfully");
        reset();
        setImage(null);
      }
    } catch (error: any) {
      ErrorToast("Something went wrong");
    } finally {
      setSaving(false);
    }
  };
  //
  return (
    <form
      className="text-dark-100  w-[90%] sm:w-[450px] mx-auto flex flex-col gap-5 mt-8 mb-[50px]"
      onSubmit={handleSubmit(createProject)}
    >
      <label htmlFor="name" className="flex flex-col gap-1">
        <p className="text-light-100">Project Name</p>
        <input
          type="text"
          id="name"
          className="border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
          {...register("name", { required: "name is required" })}
        />
        <small className="text-xs text-red-500">{errors?.name?.message}</small>
      </label>
      {/*  */}
      <label htmlFor="image" className="flex flex-col gap-1">
        <p className="text-light-100">Image</p>
        <div className="flex items-center gap-2 rounded-md bg-light-100 border-primary-100 border-[1.5px] overflow-hidden">
          <p className="w-full pl-2 overflow-x-hidden whitespace-nowrap">
            {image ? image?.name : "Upload Image"}
          </p>
          <div className="bg-primary-200 text-light-100 py-2 px-2">Browse</div>
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
        {/* <small className="text-xs text-red-500">{errors?.name?.message}</small> */}
      </label>
      {/*  */}
      <label htmlFor="link" className="flex flex-col gap-1">
        <p className="text-light-100">Project Link</p>
        <input
          type="text"
          id="link"
          className="border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
          {...register("link", { required: "link is required" })}
        />
        <small className="text-xs text-red-500">{errors?.link?.message}</small>
      </label>
      {/*  */}
      <label htmlFor="github" className="flex flex-col gap-1">
        <p className="text-light-100">Project Github Link</p>
        <input
          type="text"
          id="github"
          className="border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
          {...register("github", { required: "github is required" })}
        />
        <small className="text-xs text-red-500">
          {errors?.github?.message}
        </small>
      </label>
      {/*  */}
      <label htmlFor="stacks" className="flex flex-col gap-1">
        <p className="text-light-100">Stacks</p>
        <input
          type="text"
          id="stacks"
          className="border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
          {...register("stacks", { required: "stacks is required" })}
        />
        <small className="text-xs text-red-500">
          {errors?.stacks?.message}
        </small>
      </label>
      {/*  */}
      <label htmlFor="desc" className="flex flex-col gap-1">
        <p className="text-light-100">Project Description</p>
        <textarea
          id="desc"
          rows={6}
          className="border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
          {...register("desc", { required: "description is required" })}
        />
        <small className="text-xs text-red-500">{errors?.desc?.message}</small>
      </label>
      {/*  */}
      <label
        htmlFor="topRated"
        className="flex flex-row-reverse self-start items-center gap-1"
      >
        <p className="text-light-100">Top Rated</p>
        <input
          id="topRated"
          type="checkbox"
          className="w-[18px] h-[18px] border-[1.5px] border-primary-100 outline-none rounded-md py-2 pl-2"
          {...register("topRated")}
        />
        {/* <small className="text-xs text-red-500">
          {errors?.topRated?.message}
        </small> */}
      </label>
      {/*  */}
      <button className="border-[1.5px] border-primary-100 rounded-md py-2 pl-2 text-primary-100">
        {saving ? "Saving" : "Save"}
      </button>
    </form>
  );
};

export default AddProject;
