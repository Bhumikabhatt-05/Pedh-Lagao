import React, { useState } from 'react'
import { backendUrl } from '../App';
import axios from 'axios';
const Add = ({token}) => {

  const [image, setImage] = useState(null);

  const [data, setData] = useState({
    name: '',
    description: '',
    category: '',
    uses: '',
    price: ''
  });

  // Input Handler
  const onChangeHandler = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value
    }));

  };

  // Submit
  const onSubmitHandler = async (e) => {

  e.preventDefault();
  if (!image) {
  alert("Please upload image");
  return;
}

  try {

    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('uses', data.uses);
    formData.append('price', data.price);
    formData.append('image', image);

    const response = await axios.post(

      backendUrl + '/api/product/add',

      formData,

      {
        headers: {
          token
        }
      }

    );

    console.log(response.data);

    if (response.data.success) {

      alert('Product Added Successfully');

      setData({
        name: '',
        description: '',
        category: '',
        uses: '',
        price: ''
      });

      setImage(false);

    }

    else {

      alert(response.data.message);

    }

  }

  catch (error) {

    console.log(error);

    alert(error.message);

  }

};

  return (

    <div className='min-h-screen w-full flex justify-center items-center bg-linear-to-br from-green-100 via-white to-green-200 p-8'>

      <form
        onSubmit={onSubmitHandler}
        className='w-full max-w-3xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-[40px] p-10 flex flex-col gap-8 border border-white'
      >

        {/* Heading */}
        <div className='text-center'>

          <h1 className='text-5xl font-black text-green-800'>
            Add Product
          </h1>

          <p className='text-gray-500 mt-3 text-lg'>
            Upload beautiful plants to your store 🌱
          </p>

        </div>

        {/* Upload Image */}
        <div className='flex flex-col items-center justify-center'>

          <label
            htmlFor='image'
            className='w-44 h-44 rounded-3xl border-2 border-dashed border-green-500 flex flex-col justify-center items-center cursor-pointer hover:bg-green-50 transition overflow-hidden'
          >

            {
              image
                ? <img
                    className='w-full h-full object-cover'
                    src={URL.createObjectURL(image)}
                    alt=""
                  />
                : <>
                    <p className='text-6xl'>📷</p>
                    <p className='text-gray-500 mt-2'>
                      Upload Image
                    </p>
                  </>
            }

          </label>

          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id='image'
            hidden
            required
          />

        </div>

        {/* Product Name */}
        <div>

          <p className='mb-3 text-lg font-semibold text-gray-700'>
            Product Name
          </p>

          <input
            name='name'
            value={data.name}
            onChange={onChangeHandler}
            className='w-full px-5 py-4 rounded-2xl border border-gray-300 outline-none focus:border-green-600 text-lg'
            type="text"
            placeholder='Enter Product Name'
            required
          />

        </div>

        {/* Description */}
        <div>

          <p className='mb-3 text-lg font-semibold text-gray-700'>
            Description
          </p>

          <textarea
            name='description'
            value={data.description}
            onChange={onChangeHandler}
            className='w-full px-5 py-4 rounded-2xl border border-gray-300 outline-none focus:border-green-600 text-lg'
            rows={5}
            placeholder='Write product description'
            required
          />

        </div>

        {/* Category + Price */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

          {/* Category */}
          <div>

            <p className='mb-3 text-lg font-semibold text-gray-700'>
              Category
            </p>

            <select
              name='category'
              value={data.category}
              onChange={onChangeHandler}
              className='w-full px-5 py-4 rounded-2xl border border-gray-300 outline-none focus:border-green-600 text-lg'
              required
            >

              <option value="">Select Category</option>
              <option value="Tools">Tools</option>
              <option value="Seeds">Seeds</option>
              <option value="Plants">Plants</option>
              <option value="Flowers">Flowers</option>

            </select>

          </div>

          {/* Price */}
          <div>

            <p className='mb-3 text-lg font-semibold text-gray-700'>
              Price
            </p>

            <input
              name='price'
              value={data.price}
              onChange={onChangeHandler}
              className='w-full px-5 py-4 rounded-2xl border border-gray-300 outline-none focus:border-green-600 text-lg'
              type="number"
              placeholder='Enter Price'
              required
            />

          </div>

        </div>

        {/* Uses */}
        <div>

          <p className='mb-3 text-lg font-semibold text-gray-700'>
            Uses
          </p>

          <input
            name='uses'
            value={data.uses}
            onChange={onChangeHandler}
            className='w-full px-5 py-4 rounded-2xl border border-gray-300 outline-none focus:border-green-600 text-lg'
            type="text"
            placeholder='Air Purifier, Decoration, Medicinal'
            required
          />

          <p className='text-sm text-gray-500 mt-2'>
            Separate multiple uses using commas
          </p>

        </div>

        {/* Button */}
        <button
          type='submit'
          className='w-full py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white text-xl font-bold tracking-wide transition duration-300 shadow-lg hover:scale-[1.02]'
        >
          ADD PRODUCT 🌱
        </button>

      </form>

    </div>

  )
}

export default Add