import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className=" bg-blue-400 h-screen w-screen flex items-center justify-center flex-col text-white">
      <h1 className="text-6xl "> 404 Page Not Found</h1>
      <Link className="btn specialbtn mt-12 " to={"/"}>
        Go back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
