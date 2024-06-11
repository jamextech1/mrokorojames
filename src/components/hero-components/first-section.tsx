export const FirstSection = () => {
  return (
    <section className="mt-6 section-container">
      <div className="flex flex-col gap-4">
        <p className="font-SF_Mono text-lg text-primary-100">Hi, my name is</p>
        <h3 className="font-black text-2xl sm:text-4xl lg:text-6xl text-light-200">
          Okoro James <br /> Chizaram
        </h3>
        <p className="font-semibold tracking-wider text-lg md:text-xl text-light-300">
          I&apos;m a Frontend Web Developer
        </p>
        <p className="text-base md:text-lg text-light-300">
          I specialize in building responsive and scalable web applications, and
          <br />I love to solve problems, and I&apos;m always looking for new
          challenges.
        </p>
        <a
          href="/my-cv/OkoroJames_FrontendDeveloperCV.pdf"
          className="self-start shadow-[0_0_0_1.3px] shadow-primary-200 px-4 py-2 rounded-md"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};
