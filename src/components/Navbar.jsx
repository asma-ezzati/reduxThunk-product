import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-[70px] border-2 border-purple bg-purple ">
        <div className="m-5">
          <Link
            className="bg-purple text-indigo border-indigo border-2 p-3 rounded-xl ml-10 hover:bg-blue hover:text-white "
            to={"/addItem"}
          >
            Add Item
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
