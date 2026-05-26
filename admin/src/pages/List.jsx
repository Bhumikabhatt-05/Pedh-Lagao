import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'

const List = ({ token }) => {

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchList = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${backendUrl}/api/product/list`,
  {
    headers: {
      token:token
    }})

      if (response.data.success) {
        setList(response.data.products)
        console.log(list);
      } else {
        console.log(response.data.message)
      }

    } catch (error) {
      console.log("Error fetching list:", error)
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className="p-6">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-green-700">
        Product List
      </h1>

      {/* Loading */}
      {loading ? (
        <p className="text-gray-500">Loading products...</p>
      ) : list.length === 0 ? (
        <p className="text-gray-500">No products found</p>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full border border-gray-300 text-left">

            {/* Table Head */}
            <thead className="bg-green-100">
              <tr>
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Description</th>
                <th className="p-3 border">Category</th>
                <th className="p-3 border">Uses</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {list.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">

                  {/* Image */}
                  <td className="p-3 border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>

                  {/* Name */}
                  <td className="p-3 border font-medium">
                    {item.name}
                  </td>

                  {/* Description */}
                  <td className="p-3 border text-sm text-gray-600">
                    {item.description}
                  </td>

                  {/* Category */}
                  <td className="p-3 border">
                    {item.category}
                  </td>

                  {/* Uses */}
                  <td className="p-3 border text-sm">
                    {item.uses}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}

    </div>
  )
}

export default List