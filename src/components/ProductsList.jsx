import { useSelector } from "react-redux";
import { selectAllProducts } from "../reducers/productSlice";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const { status, items } = useSelector((state) => state.products);

  return (
    <>
      <main className="bg-white h-full ">
        <div className="flex flex-row flex-wrap justify-center ">
          {status === "success" ? (
            <>
              {items?.map((item, index) => (
                <>
                  <article
                    key={index}
                    className="group relative max-w-sm m-3 border-2 border-indigo overflow-hidden rounded-2xl bg-purple shadow-xl   transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl "
                  >
                    <div className="h-56 w-full overflow-visible">
                      <img
                        className="h-full w-full object-scale-down p-3 transition-transform duration-500 group-hover:scale-105 "
                        src={item.image}
                        alt={item.title}
                      ></img>
                    </div>
                    <div className="p-6">
                      <h1 className="text-indigo font-bold text-xl">
                        {item.title}
                      </h1>
                      <h2 className="text-indigo font-bold text-xl ">
                        price : {item.price} $
                      </h2>
                      <h3 className="text-indigo font-bold text-xl">
                        category: {item.category}
                      </h3>
                      <div className="mt-4 flex items-center gap-4">
                        <Link
                          className="inline-flex  rounded-xl px-4 py-2 text-xl font-medium mb-4  
                        bg-purple text-indigo border-indigo border-2 p-3  ml-10 hover:bg-blue hover:text-white"
                          to={`/products/${item.id}`}
                        >
                          Show
                        </Link>
                      </div>
                    </div>
                  </article>
                </>
              ))}
            </>
          ) : status === "pending" ? (
            <p>pending</p>
          ) : (
            <p>rejected</p>
          )}
        </div>
      </main>
    </>
  );
};

export default ProductsList;
