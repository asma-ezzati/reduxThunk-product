import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/productSlice";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  let isDisable = false;

  const onTitleChange = (e) => setTitle(e.target.value);
  const onPriceChange = (e) => setPrice(e.target.value);
  const onCategoryChange = (e) => setCategory(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onImageChange = (e) => setImage(e.target.value);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      if (title && price && category && description && image) {
        isDisable = false;
        await dispatch(
          addProduct({
            title,
            price,
            category,
            description,
            image,
          })
        );

        setTitle(" ");
        setImage(" ");
        setPrice(" ");
        setCategory(" ");
        setDescription(" ");

        navigate("/");
      } else {
        isDisable = true;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <main className="bg-white min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <form
          onSubmit={handleSubmitForm}
          className="w-full max-w-lg bg-purple backdrop-blur rounded-2xl shadow-xl p-8 border-2 border-indigo"
        >
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-indigo">New Product</h1>
          </header>

          <div className="grid gap-5">
            {/* 1) title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-indigo mb-2"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={onTitleChange}
                className="block w-full rounded-xl border focus:bg-blue border-indigo bg-purple px-4 py-3 text-indigo placeholder-indigo shadow-sm  outline-none transition"
              />
            </div>
            {/* 2) image */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-indigo mb-2"
              >
                image Address
              </label>
              <input
                id="image"
                name="image"
                type="text"
                value={image}
                onChange={onImageChange}
                className="block w-full rounded-xl border focus:bg-blue border-indigo bg-purple px-4 py-3 text-indigo placeholder-indigo shadow-sm  outline-none transition"
              />
            </div>

            {/* 2) price */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-indigo mb-2"
              >
                Price
              </label>
              <input
                id="price"
                name="price"
                type="text"
                value={price}
                onChange={onPriceChange}
                className="block w-full rounded-xl border focus:bg-blue border-indigo bg-purple px-4 py-3 text-indigo placeholder-indigo shadow-sm  outline-none transition"
              />
            </div>

            {/* 3) category  */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-indigo mb-2"
              >
                Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                value={category}
                onChange={onCategoryChange}
                className="block w-full rounded-xl border focus:bg-blue border-indigo bg-purple px-4 py-3 text-indigo placeholder-indigo shadow-sm  outline-none transition"
              />
            </div>

            {/* 4) explain */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-indigo mb-2"
              >
                description
              </label>
              <textarea
                id="description"
                name="description"
                type="text"
                value={description}
                onChange={onDescriptionChange}
                className="block w-full rounded-xl border focus:bg-blue border-indigo bg-purple px-4 py-3 text-indigo placeholder-indigo shadow-sm  outline-none transition"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center gap-3">
            <button
              disabled={isDisable}
              type="submit"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-blue text-white shadow hover:bg-indigo  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 transition disabled:bg-orange"
            >
              Submit
            </button>
            <Link
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-blue text-white shadow hover:bg-indigo  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 transition"
              to={"/"}
            >
              Cancel
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default AddProduct;
