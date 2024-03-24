import Image from "next/image";


const Hero = () => {
  return (
    <header className="bg-white ">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex xl:flex 2xl:flex 3xl:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-[#0e101a]  lg:text-5xl">
                Responsible AI that ensures your writing and reputation shine
              </h1>

              <p className=" text-[#0e101a] mt-10 mb-5">
                Work with an AI writing partner that helps you find the words
                you need⁠—⁠to write that tricky email, to get your point across,
                to keep your work moving.
              </p>

              <div className="flex items-center">
                <div>
                  <button className="w-full px-5 py-5 mt-6 text-sm hover:bg-[#014c43] transition-all duration-300  text-white    transform bg-[#027e6f] rounded-lg lg:w-auto ">
                    Sign up It's free
                  </button>
                </div>
                <div>
                  <button className="w-full ml-3 px-5 py-5 mt-6 text-sm  text-[#0e101a] border border-[#0e101a]   transition-colors duration-300 rounded-lg lg:w-auto inline-block   ">
                    <div className="flex items-center">
                      <Image
                        src="/gogle.png"
                        alt="img"
                        width={16}
                        height={16}
                      />
                      <span className=" ml-2">Sign up with google</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <video width="640" height="360" autoPlay muted loop>
              <source
                src="https://static-web.grammarly.com/1e6ajr2k4140/5EqhPyvNiIygTb5ZNekZOu/c9b6f09c33898142415eac7ed465bd7b/013124_Hero_Full_2x_NewLogo_1240x784.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;