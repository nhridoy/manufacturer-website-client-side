import React from "react";

const MyPortfolio = () => {
  return (
    <>
      <header className="max-h-full p-6 grid">
        <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
          <div className="grid justify-center items-center order-1 col-span-1">
            <img
              className="lg:h-80 md:h-64 h-40 rounded-full"
              src="https://media-exp1.licdn.com/dms/image/D5603AQFZrg_FwWX92g/profile-displayphoto-shrink_800_800/0/1644350850912?e=1658966400&v=beta&t=XawNjmkEAFrCx3gl-EHzPLAJzCXAGXM_iGO00RrXfaI"
              alt=""
            />
          </div>
          <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
            <h1 className="text-4xl text-center md:text-left font-bold mb-6">
              Hi, I am Nahidujjaman Hridoy
            </h1>
            <p className="text-xl text-center md:text-left">
              A creative and passionate Full Stack Developer. I have been
              working with the software technologies for more that two years. I
              am a self-motivated and self-driven individual with a strong
              passion for learning and problem solving. I am a team player. I am
              a hard-working individual who is always willing to learn new
              technologies and work on new projects.
            </p>
            <button className="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">
              <a href="https://github.com/nhridoy" target="_blank">
                View My Work
              </a>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto text-primary px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-primary text-center">
                    <th
                      className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                    >
                      Name
                    </th>
                    <th
                      className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                    >
                      Platform
                    </th>
                    <th
                      className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                    >
                      Technology Used
                    </th>
                    <th
                      className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                    >
                      Live Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                    >
                      Result Publishing Website
                    </td>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                    >
                      Web
                    </td>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                    >
                      PHP and MySQL
                    </td>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                    ></td>
                  </tr>
                  <tr>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                    >
                      Hospital Recommendation System
                    </td>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                    >
                      Web
                    </td>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                    >
                      Python (Machine Learning, Streamlit)
                    </td>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                    >
                      <a href="https://share.streamlit.io/nhridoy/hospital-recommendation-system/main/Hospital_Recommender.py">
                        Link
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                    >
                      Movie and TV Show Search Engine
                    </td>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                    >
                      Web
                    </td>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                    >
                      Python (Django)
                    </td>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                    >
                      <a href="https://movie-and-tv.herokuapp.com/">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                    >
                      Al Quran
                    </td>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                    >
                      Progressigve Web App
                    </td>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                    >
                      React JS
                    </td>
                    <td
                      className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                    >
                      <a href="https://elated-spence-963691.netlify.app/">
                        Link
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPortfolio;
