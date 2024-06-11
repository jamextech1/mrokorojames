import { Mdiv, Mlink } from "@/utils/motion-exports";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";

export const SocialHandles = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        // staggerDirection: 3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <Mdiv
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="fixed -bottom-2 left-2 flex flex-col gap-6 z-40"
    >
      <Mlink
        variants={itemVariants}
        href="https://www.github.com/okorojames"
        target="_blank"
        className="flex justify-center items-center w-[40px]"
      >
        <FaGithub className="text-2xl" />
      </Mlink>
      <Mlink
        variants={itemVariants}
        href="https://www.x.com/okorojames_"
        target="_blank"
        className="flex justify-center items-center w-[40px]"
      >
        <BsTwitterX className="text-2xl" />
      </Mlink>
      <Mlink
        variants={itemVariants}
        href="https://www.linkedin.com/in/okorojames"
        target="_blank"
        className="flex justify-center items-center w-[40px]"
      >
        <CiLinkedin className="text-3xl" />
      </Mlink>
      <Mlink
        variants={itemVariants}
        href="https://www.facebook.com/mrokorojames"
        target="_blank"
        className="flex justify-center items-center w-[40px]"
      >
        <RiFacebookCircleFill className="text-3xl" />
      </Mlink>
      <Mdiv
        variants={itemVariants}
        className="w-[3px] h-[150px] self-center rounded-md bg-primary-100"
      />
    </Mdiv>
  );
};
