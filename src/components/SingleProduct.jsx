import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, selectProductById } from "../reducers/productSlice";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  HiOutlineTrash,
  HiPencilSquare,
  HiOutlineArrowSmallLeft,
} from "react-icons/hi2";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = useSelector((state) => selectProductById(state, productId));

  const deleteItem = () => {
    dispatch(deleteProduct(product.id));
    navigate("/");
  };

  return (
    <>
      {product ? (
        <>
          <div className=" flex">
            <Link
              to={"/"}
              className="bg-purple rounded-full text-white p-4 m-1"
            >
              <HiOutlineArrowSmallLeft size={20} />
            </Link>
            <button
              onClick={deleteItem}
              type="button"
              className="bg-orange text-white p-4 rounded-full m-1  "
            >
              <HiOutlineTrash size={20} />
              {/* delete */}
            </button>
            <Link
              to={`/edit/${product.id}`}
              className="bg-indigo text-white p-4 rounded-full m-1  "
            >
              <HiPencilSquare size={20} />
              {/* Edit Item */}
            </Link>
          </div>
          <div className="flex align-center w-[75vw] max-w-[650px] pt-[24px] pr-[30px] pb-[24px] pl-[20px]  bg-purple mt-6 mb-4 ml-[300px] ">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-[280px] w-[36vw] h-[340px]   ml-[-60px] mr-[30px] rounded-xl border-2 border-indigo backdrop-blur-2xl p-3 shadow-2xl "
            ></img>
            <div>
              <h1 className="text-indigo font-bold text-2xl mt-[24px] mr-[30px] mb-[10px]  ">
                "{product.title}"
              </h1>
              <h1 className="text-indigo font-bold text-2xl  mt-7">
                price: {product.price}$
              </h1>
              <h1 className="text-indigo font-semibold text-xl  mt-7">
                category: {product.category}
              </h1>
              <p className="text-indigo font-semibold text-xl mt-7 opacity-80 ">
                {product.description}
              </p>
            </div>
          </div>
        </>
      ) : (
        <p>not Found</p>
      )}
    </>
  );
};
export default SingleProduct;
