import { Link } from "react-router-dom";

function Home() {
  const linkStyles = ["font-bold ml-5 underline"];

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl p-4">Welcome to English Guru</h1>
      <p className="text-2xl mt-5">
        If not, click to create a user account.
        <Link className={linkStyles.join(" ")} to={"/signup"}>
          Signup
        </Link>
      </p>
      <p className="text-2xl mt-5">
        Already a member? Click to login.{" "}
        <Link className={linkStyles.join(" ")} to={"/signin"}>
          Signin
        </Link>
      </p>
    </div>
  );
}

export default Home;