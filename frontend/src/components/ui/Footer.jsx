import { Link } from "react-router-dom";
import Container from "../shared/Container";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer rounded-[40px] items-center p-6 bg-[#ffffff] text-black">
      <Container className=" md:flex lg:flex justify-between items-center">
        {/* part-1  */}
        <article className="flex-">
          <div className="flex justify-center items-center gap-1">
            <nav className="flex items-center justify-center gap-8 pb-5">
              <Link className=" p-4 rounded-full text-2xl" to={"/"}>
                <img className="w-20" src={logo} alt="" />
              </Link>
            </nav>
            <div className="text-[#3C0089]">
              <h3 className=" text-4xl font-bold">interiorVerse</h3>
              <h5 className="text-xl">by interioXr™</h5>
            </div>
          </div>
          <p className="#808080">
            Welcome to interiorVerse, where design dreams come to life in
            breathtaking virtual reality! Step into a world of hyper-realistic
            and fully immersive VR walkthroughs that redefine how we envision
            and create interior spaces. Welcome to interiorVerse – where your
            dream spaces await!
          </p>
        </article>

        {/* part-2  */}

        <div></div>

        <aside className=" flex items-center justify-center gap-4   ">
          <p>© All Rights Reserved 2023 - | Mahdi Hasan </p>
        </aside>
      </Container>
    </footer>
  );
};

export default Footer;
