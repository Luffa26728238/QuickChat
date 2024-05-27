import { useState } from "react"
import { IoClose } from "react-icons/io5"

function RegisterPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profileImg: "",
  })

  const [photo, setPhoto] = useState("")

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleUploadPhoto = (e) => {
    if (e.target.files.length === 0) return
    setPhoto(e.target.files[0])
  }

  const handleClearPhoto = (e) => {
    e.preventDefault()

    setPhoto(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  console.log(photo)

  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-sm mx-2 rounded  overflow-hidden p-4">
        <h3 className="text-center text-3xl font-bold">註冊新用戶</h3>
        <form className="grid gap-3 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">使用者名稱 : </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="使用者名稱"
              className="bg-slate-100 px-2 py-1 rounded transition-all duration-500 focus:outline"
              value={data.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">電子信箱 : </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="電子信箱"
              className="bg-slate-100 px-2 py-1 rounded transition-all duration-500 focus:outline"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">密碼 : </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="密碼"
              className="bg-slate-100 px-2 py-1 rounded transition-all duration-500 focus:outline"
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="profileImg">
              {" "}
              照片:
              <div className=" flex justify-center items-center h-14 bg-slate-100  rounded border hover:border-blue-500 cursor-pointer">
                <p className="text-sm max-w-[300] text-ellipsis line-clamp-1">
                  {photo?.name ?? "上傳大頭照"}
                </p>
                {photo?.name && (
                  <button
                    className="text-lg ml-2 hover:text-red-500"
                    onClick={handleClearPhoto}
                  >
                    <IoClose size={20} />
                  </button>
                )}
              </div>
            </label>
            <input
              type="file"
              id="profileImg"
              name="profileImg"
              placeholder="上傳大頭照"
              className="bg-slate-100 px-2 py-1 rounded transition-all duration-500 focus:outline hidden"
              onChange={handleUploadPhoto}
            />
          </div>
          <button className="bg-green-400 py-2 rounded hover:bg-green-300">
            註冊
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
