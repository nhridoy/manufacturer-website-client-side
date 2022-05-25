import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import interceptors from "../../utils/interceptors";

const Blogs = () => {
  // const [firstBlog, setFirstBlog] = React.useState(null);
  // const [secondBlog, setSecondBlog] = React.useState(null);
  // const [thirdBlog, setThirdBlog] = React.useState(null);
  // const [fourthBlog, setFourthBlog] = React.useState(null);
  // const [restBlog, setRestBlog] = React.useState(null);
  const { data: blogs, isLoading } = useQuery("blogs", () =>
    interceptors.get("/blogs")
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (blogs?.data?.length === 0) {
    return <div>No blogs found</div>;
  }
  const {
    firstBlog,
    secondBlog,
    thirdBlog,
    fourthBlog,
    fifthBlog,
    sixthBlog,
    restBlog,
  } = blogs.data.reduce(
    (acc, blog, index) => {
      if (index === 0) {
        acc.firstBlog = blog;
      } else if (index === 1) {
        acc.secondBlog = blog;
      } else if (index === 2) {
        acc.thirdBlog = blog;
      } else if (index === 3) {
        acc.fourthBlog = blog;
      } else if (index === 4) {
        acc.fifthBlog = blog;
      } else if (index === 5) {
        acc.sixthBlog = blog;
      } else {
        acc.restBlog = acc.restBlog.concat(blog);
      }
      return acc;
    },
    {
      firstBlog: null,
      secondBlog: null,
      thirdBlog: null,
      fourthBlog: null,
      fifthBlog: null,
      sixthBlog: null,
      restBlog: [],
    }
  );

  // console.log(firstBlog, secondBlog, thirdBlog, fourthBlog, restBlog);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div
            role="main"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
              Latest Blogs
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              Question and answer forum for developers.
            </p>
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {firstBlog?.date}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        {firstBlog?.title}
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        {firstBlog?.details?.toString()?.slice(0, 20) + "..."}
                      </p>
                      <Link
                        to={firstBlog?._id}
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src={firstBlog?.image}
                    className="w-full"
                    alt={firstBlog?.title}
                  />
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {secondBlog?.date}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        {secondBlog?.title}
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        {secondBlog?.details?.toString()?.slice(0, 20) + "..."}
                      </p>
                      <Link
                        to={secondBlog?._id}
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src={secondBlog?.image}
                    className="w-full"
                    alt={secondBlog?.title}
                  />
                </div>
              </div>
              <div className="relative">
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    {thirdBlog?.date}
                  </p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      {thirdBlog?.title}
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      {thirdBlog?.details?.toString()?.slice(0, 20) + "..."}
                    </p>
                    <Link
                      to={thirdBlog?._id}
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img
                  src={thirdBlog?.image}
                  alt={thirdBlog?.title}
                  className="w-full mt-8 md:mt-6 hidden sm:block"
                />
                <img
                  className="w-full mt-4 sm:hidden"
                  src={thirdBlog?.image}
                  alt={thirdBlog?.title}
                />
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative">
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    {fourthBlog?.date}
                  </p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      {fourthBlog?.title}
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      {fourthBlog?.details?.toString()?.slice(0, 20) + "..."}
                    </p>
                    <Link
                      to={fourthBlog?._id}
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img
                  src={fourthBlog?.image}
                  alt={fourthBlog?.title}
                  className="w-full sm:block hidden"
                />
                <img
                  className="w-full sm:hidden"
                  src={fourthBlog?.image}
                  alt={fourthBlog?.title}
                />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {fifthBlog?.date}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        {fifthBlog?.title}
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        {fifthBlog?.details?.toString()?.slice(0, 20) + "..."}
                      </p>
                      <Link
                        to={fifthBlog?._id}
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src={fifthBlog?.image}
                    className="w-full"
                    alt={fifthBlog?.title}
                  />
                </div>
                <div className="relative w-full sm:mt-0 mt-4">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {sixthBlog?.date}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        {sixthBlog?.title}
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        {sixthBlog?.details?.toString()?.slice(0, 20) + "..."}
                      </p>
                      <Link
                        to={sixthBlog?._id}
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src={sixthBlog?.image}
                    className="w-full"
                    alt={sixthBlog?.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {restBlog && (
        <div className="container mx-auto px-4 pt-16 pb-16">
          {restBlog.map((blog) => (
            <div className="grid md:grid-cols-2 border" key={blog?._id}>
              <img src={blog.image} alt={blog.title} className="w-full" />
              <div className="">
                <p className="p-6 text-xs font-medium leading-3 text-white  ">
                  {blog.date}
                </p>
                <div className="p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    {blog.title}
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    {blog.details?.toString()?.slice(0, 20) + "..."}
                  </p>
                  <Link
                    to={blog?._id}
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Blogs;
