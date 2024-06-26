import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"
import { LuUser2 } from "react-icons/lu"

function CheckEmailPage() {
  const [data, setData] = useState({
    email: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const URL = `${import.meta.env.VITE_APP_BACKEND_API}/email`
    try {
      const res = await axios.post(URL, data)

      toast.success(res.data.message)

      if (res.data.success) {
        setData({
          email: "",
        })
        console.log(res)
        navigate("/password", {
          state: res.data.data,
        })
      }
    } catch (err) {
      toast.error(err.response.data.message)
    }
  }
  return (
    <div className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[100vh] flex justify-center items-center">
      <div className="w-[50vw] h-[70vh] bg-red-50 rounded-md bg-[rgba(17,25,40,0.75)] backdrop-blur-lg saturate-150 flex justify-center items-center">
        <div className="w-[40vh] flex flex-col  ">
          <div className="w-fit mx-auto mb-3">
            <LuUser2 size={70} />
          </div>
          <h3 className="text-center text-3xl font-bold">歡迎回來</h3>
          <form className="grid gap-3 mt-10" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">電子信箱 : </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="電子信箱"
                className="bg-slate-100 px-2 py-1 rounded transition-all duration-500 focus:outline mb-3"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>

            <button className="bg-[#9370b2] py-2 rounded hover:bg-green-300 mt-2 font-bold text-white">
              登入
            </button>
          </form>
          <p className="text-center my-3">
            <Link
              to={"/register"}
              className=" text-blue-600  hover:text-blue-900 hover:underline "
            >
              新用戶? 立即註冊
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CheckEmailPage
