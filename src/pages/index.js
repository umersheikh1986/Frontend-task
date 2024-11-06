import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { MdOutlineArrowForward } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFlip,
  Pagination,
  Navigation,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="  bg-[#F2FBFF] ">
      <div className="  absolute z-10 top-0 w-full pt-20 pb-20 px-4 max-w-8xl  lg:px-20 bg-[#0091CC] ">
        <div className=" mx-auto max-w-9xl">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex space-x-4 md:space-x-6 pb-12"></div>
            <div className="header_info flex space-x-6"></div>
          </div>
        </div>
      </div>
      <div className=" z-30  absolute bg-[#0091CC]/65 -opacity-220 top-0 w-full max-w-8xl  pt-8 pb-16 px-4 lg:px-20 ">
        <div className=" mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm ">
            <div className="header_info flex space-x-6">
              <ul className="flex space-x-4 ">
                <li className="flex items-center gap-2 ">
                  <FaRegEnvelope className="text-white text-2xl" />
                  <Link
                    href="mailto:hello@yourlawfirm.com"
                    className="text-white text-2xl  "
                  >
                    hello@yourlawfirm.com
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <LuPhone className="text-white text-2xl " />
                  <Link href="tel:+80092333213" className="text-white text-2xl">
                    +800-9233-3213
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header_info flex space-x-6">
              <ul className="flex space-x-4">
                <li className="flex items-center">
                  <Link href="tel:+80092333213" className="text-white text-2xl">
                    Privacy Policy
                  </Link>
                </li>
                <li className="text-2xl text-white"> |</li>
                <li className="flex items-center">
                  <Link
                    href="mailto:hello@yourlawfirm.com"
                    className="text-white text-2xl"
                  >
                    Terms and condition
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="inset-0  absolute  max-w-8xl      z-20">
        <div className=" h-[1300px]       bg-[#F2FBFF]  rounded-t-[40px] mt-20 flex flex-3 max-w-8xl overflow-hidden ">
          {/* <!-- Left Sub-Div --> */}

          <div className="w-[45%] py-6  ">
            <div className="mt-10 py-6">
              <ul className="flex flex-row gap-6 justify-end mb-4">
                <li className="flex ">
                  <Link href="#" className="text-3xl">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="#" className="text-3xl">
                    About Us
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="#" className="text-3xl">
                    Wholesaler
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mx-0  flex flex-row">
              <div className="relative">
                {" "}
                <Image src="/cl-1.png" alt="Logo" width={200} height={80} />
              </div>

              <div className=" absolute top-1/2 ml-24 font-bold  text-5xl ">
                {" "}
                Largest <span className="text-[#0091CC]">WholeSalers</span>{" "}
              </div>
            </div>
            <div className="  flex flex-row">
              <div className="relative font-bold  ml-24 text-5xl"> Of </div>

              <div className=" absolute top-1/2 mt-10  ml-40 font-bold flex text-5xl ">
                {" "}
                <Image
                  src="/cl4.png"
                  alt="Logo"
                  width={300}
                  height={90}
                  // className="h-10"
                />{" "}
                <span className=" absolute top-1/4 text-[#0091CC]     ml-5 font-bold flex text-6xl ">
                  Mobile
                </span>
                <span className=" absolute mt-8 text-[#0091CC]  ml-60 text-6xl">
                  Phones
                </span>
              </div>
            </div>
            <div className="ml-20 m-10 ">
              <p className="pl-5 pt-5 text-xl">
                Supply that meets Demand, Get Best Wholesale Prices Of used and
                refurbished mobile Stocks
              </p>
            </div>
            <div className="pl-20 ml-5 flex gap-4 ">
              <div>
                <Link href="#" className="text-2xl text-[#0091CC] ">
                  Learn More{" "}
                </Link>
              </div>
              <div className="mt-1">
                <MdOutlineArrowForward className="w-6 h-6 text-[#0091CC]" />
              </div>
            </div>
            <div className="flex items-center pt-4 ml-16 justify-center gap-4 w-full ">
              {/* <!-- Search Bar --> */}
              <div className="">
                <input
                  type="text"
                  placeholder="Email..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-[40px]"
                />
              </div>

              <div className="px-10 py-2 text-xl flex bg-[#61C34B] text-white rounded-[40px]">
                <div> Subscribe</div>{" "}
                <div className="">
                  <MdOutlineArrowForward className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="px-10 py-2 flex gap-4 bg-[#0091CC] text-white rounded-[40px] ">
                <div className="text-xl"> StockList</div>
                <div>
                  {" "}
                  <FaArrowDown className="w-4 h-8 text-white" />
                </div>
              </div>
            </div>
            <div className="pl-24 pt-4 flex">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-[#75BC49] to-[#3D8CBB]">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Image src="/insta.png" width={20} height={20} />
                </div>
              </div>
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-[#75BC49] to-[#3D8CBB]">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Image src="/facebook.png" width={25} height={25} />
                </div>
              </div>
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-[#75BC49] to-[#3D8CBB]">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Image src="/linkidin.png" width={20} height={20} />
                </div>
              </div>
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-[#75BC49] to-[#3D8CBB]">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Image src="/X.png" width={20} height={20} />
                </div>
              </div>
              <div className="px-8  pt-2 gap-2 flex">
                <div>
                  <Image src="/p.png" width={30} height={30} />{" "}
                </div>
                <div>
                  <p className="text-[#0091CC] text-2xl "> 400k </p>
                </div>
                <div className="">
                  {" "}
                  <p className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#3D8CBB] to-[#75BC49]">
                    People Registered{" "}
                  </p>{" "}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-0  ">
                <Image src="/dots.png" width={320} height={100} />
                <div className="absolute text-transparent   left-0 top-1/3 rounded-xl bg-gradient-to-r from-[#3D8CBB] to-[#75BC49]  w-[550px]">
                  w
                </div>
                <div className="absolute left-0 top-1/4 rounded-xl  text-transparent    bg-gradient-to-r from-[#75BC49] to-[#3D8CBB] w-[470px]">
                  wwws
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Sub-Div --> */}

          <div className="w-[55%] p-6  h-[1180px] bg-[url('/image.png')] bg-[length:980px_1180px]  ">
            <Image
              src="/wifi.png"
              alt="Logo"
              width={22}
              height={10}
              className="absolute mt-12 left-1/2 ml-20  "
            />
            <div className="mt-10 py-6">
              <ul className="ml-14 flex flex-row gap-12 justify-start mb-4">
                <li className="flex ">
                  <Image src="/l.png" alt="Logo" width={80} height={50} />{" "}
                </li>
                <li className="flex items-center">
                  <Link href="#" className="text-3xl ">
                    Service
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="#" className="text-3xl">
                    News
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="#" className="text-3xl">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-end text-2xl font-bold mr-20 items-right mb-4">
              {" "}
              <Image
                src="/GreenSphere.png"
                alt="Logo"
                width={120}
                height={50}
              />
            </div>
            <div className="flex justify-center text-2xl mt-20  font-bold ">
              <Image src="/d-spheres.png" alt="Logo" width={450} height={450} />
            </div>

            <div className="relative  h-[200px] mr-10 -top-1/2  mt-20 -right-1/3">
              <div className="swiper-pagination-custom absolute  items-center justify-center  ml-28 right-0   gap-4  flex flex-col  "></div>
              <Swiper
                effect={"flip"}
                // spaceBetween={10}
                grabCursor={true}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination-custom", // Custom pagination element
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[EffectFlip, Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="/m1.png" className="  w-90 h-90" alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/m2.png"
                    className=" mt-4 w-80 h-auto"
                    alt="Slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/m1.png" className="  w-90 h-90" alt="Slide 1" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="mx-auto absolute  -bottom-2/3 w-full ">
            <Swiper
              slidesPerView={15} // Default to showing 3 slides at a time
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3000, // Time in ms, 3000 = 3 seconds
                disableOnInteraction: false,
              }}
              // pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <img src="/m3.png" className="w-14" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/r.png" className="w-10" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/head.png" className="w-16" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/m3.png" className="w-14" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/r.png" className="w-10" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/head.png" className="w-16" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/m3.png" className="w-14" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/r.png" className="w-10" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/head.png" className="w-16" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/m3.png" className="w-14" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/r.png" className="w-10" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/head.png" className="w-16" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/m3.png" className="w-14" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/r.png" className="w-10" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/head.png" className="w-16" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/m3.png" className="w-14" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/r.png" className="w-10" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/head.png" className="w-16" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" relative">
            <div className="absolute   top-1/2 ">
              {" "}
              <Image
                src="/Dc.png"
                width={4000}
                height={300}
                className="w-2000"
              />{" "}
            </div>
            <div className="absolute top-1/2 left-0  ">
              <Image src="/dots2.png" width={300} height={100} />
            </div>
            <div className="absolute mt-20 top-1/2 left-1/3 ">
              <Image
                src="/last.png"
                width={300}
                height={300}
                className="w-2000"
              />
            </div>
          </div>
        </div>
        <div className=" relative  bg-[#F2FBFF]  ">
          <div className="absolute   top-1/2 ">
            {" "}
            <Image
              src="/Dc.png"
              width={4000}
              height={300}
              className="w-2000"
            />{" "}
          </div>
          <div className="absolute top-1/2 left-0  ">
            <Image src="/dots2.png" width={300} height={100} />
          </div>
          <div className="absolute mt-20 top-1/2 left-1/3 ">
            <Image
              src="/last.png"
              width={300}
              height={300}
              className="w-2000"
            />
          </div>

          <div className="absolute mt-32 pl-16 top-1/2 left-1/3 text-7xl text-white ">
            Mobile <span className="text-[#0091CC]">Stock</span>
          </div>
          <div className="absolute pt-72  top-1/2 left-1/4 text-xl  ">
            {" "}
            <p>
              We Stay Upto date with the latest technology trends and offers
              innovative solutions. that help
            </p>
            <p className="text-center">you stay ahead in competition</p>
          </div>
        </div>
        <div>
          <div className="mt-80">
            <div className="relative">
              <div className="flex items-center justify-center mx-20 mt-20 w-auto pt-10">
                <Swiper
                  cssMode={true}
                  navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                  }}
                  pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                  }}
                  slidesPerView={4}
                  spaceBetween={10}
                  mousewheel={true}
                  keyboard={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[
                    Navigation,
                    Autoplay,
                    Pagination,
                    Mousewheel,
                    Keyboard,
                  ]}
                  className="mySwiper"
                >
                  {/* Swiper Slides */}
                  {Array(6)
                    .fill()
                    .map((_, index) => (
                      <SwiperSlide
                        key={index}
                        className="border-2 rounded-lg border-green-500"
                      >
                        <div className="p-6 pb-6 flex flex-col items-center justify-center">
                          <div>
                            <img
                              src="/m2.png"
                              className="ml-6 w-20 h-20"
                              alt={`Slide ${index + 1}`}
                            />
                          </div>
                          <div>
                            <p className="">IPhone 14 Pro Max</p>
                          </div>
                          <div>
                            <p className="text-sm">
                              Apple IPhone 14 Pro Max 512GB (MQ233)
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>

              {/* Custom Navigation Buttons */}
              <div className="flex absolute mt-6 left-[700px]  transform -translate-y-1/2 custom-prev cursor-pointer">
                <Image src="/right.png" width={20} height={10} alt="Previous" />
              </div>
              <div className="flex absolute mt-6 right-[700px]  transform -translate-y-1/2 custom-next cursor-pointer">
                <Image src="/left.png" width={20} height={10} alt="Next" />
              </div>

              {/* Custom Pagination Dots */}
              <div className="  flex justify-center  mt-4 space-x-2 custom-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
