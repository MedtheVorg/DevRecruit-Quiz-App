import handGraduate from "../assets/Hands-Graduate.svg";

const Logo = () => {
  return (
    <>
      <span className="relative ">
        <img
          src={handGraduate}
          alt="handGraduate image"
          className={`inline-block w-25px] h-25px] absolute top-[-12px] left-[-18px] object-cover`}
        />
        Dev
      </span>
      <span className="text-yellowish">Recruit</span>
    </>
  );
};

export default Logo;
