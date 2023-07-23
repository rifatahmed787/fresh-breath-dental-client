import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center h-full p-16 ">
      <div className=" flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-brand ">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <Link
            to="/"
            className="group flex items-center justify-center text-center py-3 m-2 text-lg font-semibold  rounded shadow-sm bg-brand  text-white"
          >
            <Icon
              icon="material-symbols:arrow-back"
              className="pr-1 group-hover:-translate-x-1 duration-300"
            />
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
