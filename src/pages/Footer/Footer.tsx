import contactList from "@/data/contactInfo/contactInfo";
import Logo from "@/components/Globals/Logo";
import { DangrekFont, MetalFont } from "@/utils/GoogleFonts";

const Footer = () => {
  return (
    <>
      {/* <WaterWave /> */}
      <footer className="eachSections pb-14 mt-20 ">
        <div className="flex justify-between flex-wrap">
          <Logo />

          <div>
            <div className=" gap-x-1 sm:gap-x-4 flex flex-wrap">
              {contactList.map((val) => {
                return (
                  <a
                    style={{
                      background: val.bgGradient,
                    }}
                    href={val.link}
                    key={val.name + val.link}
                    target="_blank"
                    className={`hover:scale-110 text-2xl transition-all p-1 rounded-full`}
                  >
                    {val.components}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="into-center flex-col mt-10">
          <p className={`${DangrekFont.className}`}>
            Created with <span className="text-red-500">❤</span> by Yeasin
          </p>
          <div
            className={` gap-x-2 mt-5 into-center sm:text-xl 2xl:text-2xl ${MetalFont.className}`}
          >
            <p>All Right Reserved </p>
            <p>@yeasin2002.dev</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
