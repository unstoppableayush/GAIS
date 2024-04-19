import React from "react";
import { gaisCards, gaisLogos } from "../../constants";
import Card from "./Card";
import Banner from "./Banner";

const Gais = () => {
  return (
    <>
      <section>
        <div
          className="w-full h-screen bg-no-repeat bg-cover  border-b border-neutral-800 "
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Flanding_img.png?alt=media&token=a104f4b6-ac45-4187-a3c9-e230cc496f0a')`,
          }}
        >
          <div className="w-full h-full backdrop-blur-[1px] backdrop-brightness-40">
            <div className="max-w-6xl mx-auto pt-20  md:pt-40 lg:pt-48  ">
              <div className="flex flex-col items-start mt-6 ">
                <h2 className="text-2xl px-3  md:text-4xl lg:text-5xl text-start tracking-wide font-bold">
                  DON'T LEFT BEHIND IN YOUR BUSINESS WHEN THE ENTIRE WORLD
                  IMPLEMENTING AI IN THEIR OPERATIONS. JOIN US TO LEARN THE
                  LATEST ADVANCEMENTS OR TRENDS OF AI.
                </h2>
                <p className="pt-5 px-3  text-lg md:text-1xl lg:text-2xl font-semibold  text-neutral-200 ">
                  18th-19th June, 2024.
                </p>
                <p className="pt-2 px-3 text-lg md:text-1xl lg:text-2xl font-semibold    text-neutral-200 ">
                  Amsterdam, Netherlands.
                </p>
                <hr className="h1   mt-3 divide-x font-bold  w-1/3  mx-3" />
                <p className="pt-3 px-3 text-lg md:text-1xl lg:text-2xl  text-neutral-200 ">
                  World's largest AI summit in true sense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[600px]  bg-neutral-300 text-blue-950">
          <div className="p-5 pt-20 md:p-32 text-center ">
            <div className="flex w-full ">
              <div className="w-1/2 font-extrabold text-8xl">
                0+
                <p className="text-3xl  md:text-4xl font-thin">
                  Expected Visitors
                </p>
              </div>
              <div className="w-1/2 font-extrabold text-8xl">
                0+
                <p className="text-3xl  md:text-4xl font-thin">
                  Networking & Meetings
                </p>
              </div>
            </div>
            <div className="flex w-full pt-24  ">
              <div className="w-1/2 font-extrabold text-8xl">
                0+
                <p className="text-3xl  md:text-4xl font-thin">Conferencess</p>
              </div>
              <div className="w-1/2 font-extrabold text-8xl">
                0+
                <p className="text-3xl  md:text-4xl font-thin">Speakers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-[520px] bg-gradient-to-r from-orange-700 to-purple-600">
          <div className=" flex-col text-center   content-center  w-full h-full  ">
            <h3 className=" max-w-5xl mx-auto text-4xl lg:text-6xl  tracking-wide ">
              ABOUT GAIS
            </h3>
            <p className="mt-2  bg-transparent md:w-2/3 sm:w-full mx-auto p-3 md:text-[18px] text-neutral-200 ">
              Global Artificial Intelligence Summit (GAIS) is the world's
              largest iconic platform that brings together the all leading AI
              businesses, Innovators, Consultancies, most desirable startups,
              several government agencies, investors, decision makers,
              technologists, academia, thought leaders and several associations
              - to stimulate the industry growth, change the investment
              landscape and share the practically proven innovative ideas. GAIS
              will have participants from 55+ countries that represents a wide
              range of industries includes food and agriculture, energy and
              manufacturing, financial services, healthcare, and transportation
              and logistics that offers an exclusive opportunity to directly
              hear from the senior leaders and C-suite speakers about industry
              leading solutions and interact with them in person.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div
          className="min-h-[800px] bg-cover"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Fjoinbackground.png?alt=media&token=c5916a2c-a1f8-41cc-80f8-e9e08918f9eb')`,
          }}
        >
          <h1 className="mx-auto pt-20 text-neutral-900 text-3xl lg:text-5xl md:text-4xl text-center font-bold tracking-wide">
            WHY JOIN?
          </h1>
          <div className="px-20 py-10 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8   ">
            {gaisCards.map((card, index) => (
              <Card
                key={index}
                imgUrl={card.imgURL}
                head={card.title}
                desc={card.discription}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section>
        <div className="relative bg-gradient-to-r from-orange-700 to-purple-600 min-h-[700px]">
          <h1 className="pt-10 text-3xl md:text-5xl lg:text-6xl  font-bold text-neutral-50 text-center mb-3 tracking-wide">
            SUMMIT DEMOGRAPHY
          </h1>
          <div className=" flex-wrap md:flex justify-center p-5">
            <div className="md:w-1/2 flex justify-center ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Fimage1.png?alt=media&token=a1a876d7-451b-4ebb-9f43-db180a213de2"
                alt=""
                className="w-[70%] rounded-lg"
              />
            </div>
            <div className="md:w-1/2 p-10 text-xl">
              <p>
                GAIS attracts a broad range of people who are interested in
                learning about the latest advancements, networking with
                like-minded individuals, and exploring potential business
                opportunities related to AI. Our visitor profile can vary, but
                typically includes professionals and enthusiasts from diverse
                backgrounds, such as:
              </p>
              <ul className="list-disc p-5 text-lg">
                <li>
                  Innovative AI-Powered Startups and Fortune 500 companies.
                </li>
                <li>Researchers and academics in the field of AI.</li>
                <li>Associations, Chamber of commerce and business bodies.</li>
                <li>
                  Industry professionals and executives interested in AI
                  applications and trends.
                </li>
                <li>
                  Entrepreneurs and startup founders developing AI-based
                  products and services.
                </li>
                <li>
                  Government officials and policymakers involved in AI
                  regulation and policy-making.
                </li>
                <li>
                  Investors and venture capitalists seeking to fund AI-related
                  projects.
                </li>
                <li>
                  Tech enthusiasts and students interested in learning more
                  about AI and its potential impact on various industries.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" min-h-[400px] bg-gradient-to-r from-purple-600 to-orange-700 ">
          <div className="flex-wrap p-10 md:flex">
            <div className="w-1/2 flex justify-center items-center">
              <h1 className="p-10 lg:text-5xl text-4xl  font-bold w-4/5">
                GIAS INCORPORATED SUMMIT & CONFERENCES
              </h1>
            </div>
            <div className="md:w-1/2 p-5">
              <div className="grid md:grid-cols-3 grid-cols-2 gap-6  content-between items-center ">
                {gaisLogos.map((logo, index) => (
                  <div className="flex items-center" key={index}>
                    <div className="text-4xl me-3">{logo.logo}</div>
                    <div className="">{logo.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" min-h-[400px] ">
          <div className="flex-wrap p-10 md:flex bg-gradient-to-r from-orange-700 to-purple-600 ">
            <div className="md:w-1/2  flex-wrap  order-2">
              <h1 className="p-10 lg:text-5xl text-4xl  font-bold ">
                AWARD CEREMONY
              </h1>
              <p className="px-12 text-xl">
                Join us in celebrating trailblazing AI-powered startups that
                have transformed industries! Be part of The Innovative
                AI-Powered Startup Award ceremony, where we honor those who've
                integrated AI into business operations, offering groundbreaking
                solutions. Don't miss your chance to witness innovation at its
                peak – join us!
              </p>
            </div>
            <div className="md:w-1/2 p-5 flex justify-center items-center">
              <img
                className="md:w-[80%] w-[90%] rounded-lg"
                src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Faward_pic.png?alt=media&token=5d82b0a4-977c-45fe-8589-8dbda6fc0da7"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" min-h-[400px] bg-gradient-to-r from-purple-600 to-orange-700 ">
          <div className="flex-wrap p-10 md:flex">
            <div className="md:w-2/3  ">
              <h1 className="p-10 lg:text-5xl text-4xl  font-bold ">
                GLOBAL INVESTORS MEET
              </h1>
              <p className="px-12 text-xl">
                Unite with the investment elite – VC's, Angel funds, Private
                Equity, and more. Forge direct connections between startups and
                investors in a face-to-face convergence, fostering
                collaboration, empowering startups to secure investments and
                fueling the next wave of AI-driven success.
              </p>
            </div>
            <div className="md:w-1/3 p-5 flex justify-center">
              <img
                className="w-[90%] rounded-lg"
                src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Finvestors_pic.png?alt=media&token=bd653498-f8c7-4bd2-b6c8-2a6ab5bdcb07"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className=" min-h-screen bg-gradient-to-r from-orange-700 to-purple-600 ">
          <div className="p-10 lg:flex">
            <div className="lg:w-1/4 flex-wrap  ">
              <h1 className="p-10 lg:text-3xl text-5xl  font-bold ">
                Workshops
              </h1>
              <p className="px-12 text-xl">
                Dive deeper than theory. Get your hands dirty with immersive,
                industry-specific workshops led by AI pioneers. Master practical
                skills and unlock the true potential of AI in your field. From
                healthcare to finance, marketing to robotics, there's a workshop
                to ignite your AI journey.
              </p>
              <div className=" p-5 flex justify-center">
                <img
                  className=" rounded-lg"
                  src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2FWorkshops-img.jpg?alt=media&token=073237b3-bbb2-4bda-a4b8-6c05fe2404da"
                  alt=""
                />
              </div>
            </div>
            <div className="lg:w-2/4  ">
              <div className=" p-5 flex justify-center">
                <img
                  className=" rounded-lg"
                  src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2FStartup-img.jpg?alt=media&token=0911cd41-c005-4487-86ee-9f9b8488d835"
                  alt=""
                />
              </div>
              <h1 className="p-10 lg:text-3xl text-5xl  font-bold ">
                Startup pitches
              </h1>
              <p className="px-12 text-xl">
                Witness the future unfold before your eyes. Witness the
                brightest AI-powered startups pitch their groundbreaking
                solutions, from healthcare to finance to climate change. Get a
                front-row seat to disruptive innovation, spot the next unicorn,
                and network with the trailblazers shaping tomorrow.
              </p>
            </div>

            <div className="lg:w-1/4">
              <h1 className="p-10 lg:text-3xl text-5xl  font-bold ">
                Innovative AI solutions
              </h1>
              <p className="px-12 text-xl">
                See the future, now. Explore a showcase of cutting-edge AI
                applications and trends that are transforming industries. Learn
                from experts, uncover hidden opportunities to leverage AI in
                your business, and gain the competitive edge you need to thrive
                in the age of intelligence. From groundbreaking medical
                breakthroughs to groundbreaking marketing strategies, the future
                is here, waiting to be unlocked.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Banner />
    </>
  );
};

export default Gais;
