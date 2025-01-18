import React from "react";

function Why() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-4 pt-16 pb-8 bg-white-100">
        <div className="text-left md:w-1/2">
          <div className="text-secondary text-xs uppercase tracking-widest pb-4">
            Why RegisterKaro.in
          </div>
          <h2 className="text-3xl md:text-4xl font-bold flex pb-4">
  Why Choose Register
  <div className="text-secondary pl-1"> Karo</div>
</h2>

          <p className="mt-2 mb-8">
            It is with consistent services and results that build trust with
            the people and that in turn help us to serve the business better.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap md:w-1/2 justify-between mt-8 md:mt-0">
          {/* First Box */}
          <div className="bg-[#FEF3EF] p-5 w-full max-w-[352px] border-solid border-2 mx-auto rounded-md cursor-pointer hover:shadow-2xl transition flex flex-col items-center text-center mb-6 md:mb-0">
            <div className="mb-8">
              <svg
                width="38"
                height="41"
                viewBox="0 0 38 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.3763 6.5625C36.7825 7.1875 37.72 8.51562 37.72 10C37.72 27.3438 27.095 36.9531 20.3763 39.7656C19.4388 40.1562 18.4231 40.1562 17.4856 39.7656C9.12625 36.25 0.220001 25.5469 0.220001 10C0.220001 8.51562 1.07938 7.1875 2.48563 6.5625L17.4856 0.3125C17.9544 0.15625 18.4231 0.078125 18.97 0.078125C19.4388 0.078125 19.9075 0.15625 20.3763 0.3125L35.3763 6.5625ZM18.97 34.9219C26.2356 31.25 32.4075 22.6562 32.6419 10.8594L18.97 5.15625V34.9219Z"
                  fill="#F45C20"
                />
              </svg>
            </div>

            <div className="text-lg font-bold max-w-[260px]">
              Confidential & Safe
            </div>
            <div className="text-base p-3">
              All your private information is safe with us
            </div>
          </div>

          {/* Second Box */}
          <div className="bg-[#f1fbf3] p-5 w-full max-w-[352px] border-solid border-2 mx-auto rounded-md cursor-pointer hover:shadow-2xl transition flex flex-col items-center text-center mb-6 md:mb-0">
            <div className="mb-8">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.395 20C39.395 30.7031 30.645 39.375 20.02 39.375C9.31689 39.375 0.64502 30.7031 0.64502 20C0.64502 9.375 9.31689 0.625 20.02 0.625C30.645 0.625 39.395 9.375 39.395 20ZM17.7544 30.3125L32.1294 15.9375C32.5981 15.4688 32.5981 14.6094 32.1294 14.1406L30.3325 12.4219C29.8638 11.875 29.0825 11.875 28.6138 12.4219L16.895 24.1406L11.3481 18.6719C10.8794 18.125 10.0981 18.125 9.62939 18.6719L7.83252 20.3906C7.36377 20.8594 7.36377 21.7188 7.83252 22.1875L15.9575 30.3125C16.4263 30.7812 17.2856 30.7812 17.7544 30.3125Z"
                  fill="#3DCD5C"
                />
              </svg>
            </div>

            <div className="text-lg font-bold max-w-[260px]">No hidden Fee</div>
            <div className="text-base p-3">
              Everything is put before you with no hidden charges or conditions
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Boxes */}
      <div className="flex flex-wrap w-full p-4 justify-center md:justify-end">
        {/* Box 1 */}
        <div className="bg-[#EDF3FF] p-5 w-full max-w-[352px] border-solid border-2 mx-auto rounded-md cursor-pointer hover:shadow-2xl transition flex flex-col items-center text-center mb-6 md:mb-0">
          <div className="mb-8">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.985 0.625C30.6881 0.625 39.36 9.29688 39.36 20C39.36 30.7031 30.6881 39.375 19.985 39.375C9.28189 39.375 0.610016 30.7031 0.610016 20C0.610016 9.29688 9.28189 0.625 19.985 0.625ZM26.235 13.75C24.8288 13.75 23.735 14.9219 23.735 16.25C23.735 17.6562 24.8288 18.75 26.235 18.75C27.5631 18.75 28.735 17.6562 28.735 16.25C28.735 14.9219 27.5631 13.75 26.235 13.75ZM13.735 13.75C12.3288 13.75 11.235 14.9219 11.235 16.25C11.235 17.6562 12.3288 18.75 13.735 18.75C15.0631 18.75 16.235 17.6562 16.235 16.25C16.235 14.9219 15.0631 13.75 13.735 13.75ZM28.8913 27.1094C29.985 25.7812 28.0319 24.2188 27.0163 25.4688C25.2194 27.5781 22.7194 28.75 19.985 28.75C17.2506 28.75 14.6725 27.5781 12.8756 25.4688C11.86 24.2188 9.90689 25.7812 11.0006 27.1094C13.1881 29.7656 16.4694 31.25 19.985 31.25C23.4225 31.25 26.7038 29.7656 28.8913 27.1094Z"
                fill="#2F6AE1"
              />
            </svg>
          </div>

          <div className="text-lg font-bold max-w-[260px]">
            Guaranteed Satisfaction
          </div>
          <div className="text-base p-3">
            All your private information is safe with us
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-[#fbf1fb] p-5 ml-3 w-full max-w-[352px] border-solid border-2 mx-auto rounded-md cursor-pointer hover:shadow-2xl transition flex flex-col items-center text-center mb-6 md:mb-0">
          <div className="mb-8">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.985 0.625C30.6881 0.625 39.36 9.29688 39.36 20C39.36 30.7031 30.6881 39.375 19.985 39.375C9.28189 39.375 0.610016 30.7031 0.610016 20C0.610016 9.29688 9.28189 0.625 19.985 0.625ZM26.235 13.75C24.8288 13.75 23.735 14.9219 23.735 16.25C23.735 17.6562 24.8288 18.75 26.235 18.75C27.5631 18.75 28.735 17.6562 28.735 16.25C28.735 14.9219 27.5631 13.75 26.235 13.75ZM13.735 13.75C12.3288 13.75 11.235 14.9219 11.235 16.25C11.235 17.6562 12.3288 18.75 13.735 18.75C15.0631 18.75 16.235 17.6562 16.235 16.25C16.235 14.9219 15.0631 13.75 13.735 13.75ZM28.8913 27.1094C29.985 25.7812 28.0319 24.2188 27.0163 25.4688C25.2194 27.5781 22.7194 28.75 19.985 28.75C17.2506 28.75 14.6725 27.5781 12.8756 25.4688C11.86 24.2188 9.90689 25.7812 11.0006 27.1094C13.1881 29.7656 16.4694 31.25 19.985 31.25C23.4225 31.25 26.7038 29.7656 28.8913 27.1094Z"
                fill="#9C4EDD"
              />
            </svg>
          </div>

          <div className="text-lg font-bold max-w-[260px]">Expert CA/CS Assistance</div>
          <div className="text-base p-3">
            Everything is put before you with no hidden charges or conditions
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
