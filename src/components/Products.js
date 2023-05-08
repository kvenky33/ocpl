import React from "react";

const Products = () => {
  return (
    <div id="product">
      <div className="mt-40 ">
        <div>
          <h1 className="font-sans text-[white] text-5xl font-extrabold">
            Catalog of Products.
          </h1>
          <p className="text-[#cfd0d3] text-xl font-sans font-normal py-10 w-9/12  tracking-wide leading-7">
            We offer a range of products designed to help businesses leverage
            the power of blockchain technology. With chatbots and voice
            assistants among your offerings, you are helping businesses automate
            their operations and deliver better customer experiences, while also
            ensuring that user data is protected and transactions are secure
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row ">
          <div className="w-4/12 h-full bg-[#000] rounded-lg border-4 flex flex-col p-4 gap-6">
            <img
              src="https://ocpl.tech/assets/comingsoon-deb507ef.webp"
              className="rounded-3xl "
              alt="commingsoon"
            />

            <h1 className="text-[#fff] text-3xl  font-bold ">Voxgenius</h1>
            <h1 className="text-[#fff] pb-8">
              Voxgenius™ is an intelligent, intuitive, and interactive AI voice
              assistant that integrates seamlessly with your organisation's
              data. With its advanced natural language processing capabilities,
              it understands user queries and responds accurately, providing
              real-time support and personalized experiences to customers around
              the globe providing benefits such as 24/7 Customer Support,
              Improved Customer Engagement, Cost Savings, Enhanced Business
              Efficiency etc.
            </h1>
          </div>
          <div className="w-4/12 h-full bg-[#000] rounded-lg border-4 flex flex-col p-4 gap-6">
            <img
              src="https://ocpl.tech/assets/chatwise-4dfd3358.webp"
              alt="chatwise"
              className="rounded-3xl h-64 "
            />

            <h1 className="text-[#fff] text-3xl  font-bold ">ChatWise AI</h1>
            <h1 className="text-[#fff]">
              ChatWise AI™ is an intelligent, intuitive, and interactive AI
              chatbot that integrates seamlessly with WhatsApp, one of the
              world's most popular messaging platforms. With its advanced
              natural language processing capabilities, it understands user
              queries and responds accurately, providing real-time support and
              personalized experiences to customers around the globe providing
              benefits such as 24/7 Customer Support, Improved Customer
              Engagement, Cost Savings, Enhanced Business Efficiency etc. Click
              Here for a demo
            </h1>
          </div>
          <div className="w-4/12 h-full bg-[#000] rounded-lg border-4 flex flex-col p-4 gap-6">
            <img
              src="https://ocpl.tech/assets/nexgen-b13216f3.webp"
              alt="nexgen"
              className="rounded-3xl h-64 "
            />

            <h1 className="text-[#fff] text-3xl  font-bold ">NexGenAuth</h1>
            <h1 className="text-[#fff] pb-6">
              NexGenAuth is an authentication solution that will redefine
              security, privacy, and convenience in the digital age. With our
              cutting-edge technology, businesses can unlock the full potential
              of a passwordless future, ensuring the ultimate user experience
              while fortifying their online defenses. Our advanced
              authentication system boasts unparalleled protection against cyber
              threats, empowering users to enjoy seamless, hassle-free access to
              their favorite platforms with total peace.
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-40">
          <div>
            <h1 className="font-sans text-[white] text-5xl font-extrabold">
              Services.
            </h1>
            <p className="text-[#cfd0d3] text-xl font-sans font-normal py-10 w-9/12  tracking-wide leading-7">
              The idea behind OCPL Tech's service is to provide businesses with
              efficient, secure, and user-friendly solutions that enhance their
              processes and customer interactions. By offering various API
              integrations and features, OCPL Tech aims to cater to a wide range
              of industries and business requirements.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row ">
            <div className="w-4/12 h-full bg-[#000] rounded-lg border-4 flex flex-col p-4 gap-6">
              <img
                src="https://ocpl.tech/assets/divinitybox-0f56e066.webp"
                className="rounded-3xl "
                alt="divinitybox"
              />

              <h1 className="text-[#fff] text-3xl  font-bold ">
                Cresco Divinity Box
              </h1>
              <h1 className="text-[#fff] pb-16  ">
                Cresco Divinity Box is a cutting-edge AI-powered chat
                integration for WhatsApp, designed by Opulentia Cresco (OCPL) to
                revolutionize the way you communicate. By harnessing the
                limitless potential of GPT-4, Cresco Divinity Box brings you an
                extraordinary messaging experience that goes beyond simple text
                exchanges. Click Here for a demo
              </h1>
            </div>
            <div className="w-4/12 h-full bg-[#000] rounded-lg border-4 flex flex-col p-4 gap-6">
              <img
                src="https://ocpl.tech/assets/api-7dd752f7.webp"
                alt="api"
                className="rounded-3xl h-64 "
              />

              <h1 className="text-[#fff] text-3xl  font-bold ">ApI's</h1>
              <h1 className="text-[#fff] ">
                OCPL Tech offers a wide range of APIs and features to help
                businesses streamline their processes, enhance user experience,
                and leverage third-party services. This model includes WhatsApp
                Business API, Bank Account Verification API, Aadhaar
                Verification API, PAN Verification API, GST Verification API,TAN
                Search API, IFSC Code API to enhance customer communication and
                security by leveraging user-friendly solutions for diverse
                industries.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
