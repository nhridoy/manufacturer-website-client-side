import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import interceptors from "../../utils/interceptors";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = React.useState(null);
  useEffect(() => {
    interceptors.get(`/blogs/${id}`).then((res) => {
      setBlog(res.data);
    });
  }, [id]);
  return (
    <>
      <main className="relative container mx-auto px-4">
        <div className="relative -mx-4 top-0 pt-[17%] overflow-hidden">
          <img
            className="absolute inset-0 object-cover object-top w-full h-full filter blur"
            src={blog?.image}
            alt={blog?.title}
          />
        </div>

        <div className="mt-[-10%] w-1/2 mx-auto">
          <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
            <img
              className="w-full h-full absolute inset-0 object-cover"
              src={blog?.image}
              alt={blog?.title}
            />
          </div>
        </div>

        <article className="max-w-prose mx-auto py-8">
          <h1 className="text-2xl font-bold">{blog?.title}</h1>
          <h2 className="mt-2 text-sm text-gray-500">{blog?.date}</h2>

          <p className="mt-6">{blog?.details}</p>
        </article>
      </main>
    </>
  );
};

export default SingleBlog;
