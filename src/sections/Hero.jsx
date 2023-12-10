const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-center w-full p-4">
        <h1 className="mt-24 font-palanquin max-sm:text-[72px] max-sm:leading-[62px] font-extrabold text-center text-white">
          Frontend Developer <br />
          For <span className="fiolet-gradient inline-block">Your</span> Needs
        </h1>
        <p className="font-montserrat info-text text-lg leading-8 mt-8 mb-14 sm:max-w-sm text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          commodi quidem praesentium nostrum.
        </p>
        <button class="btn-cta" role="button">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
