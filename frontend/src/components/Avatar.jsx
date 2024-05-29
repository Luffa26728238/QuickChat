import { LuUser2 } from "react-icons/lu"

function Avatar({ userId, name, imageUrl, width, height }) {
  const bgColor = ["bg-slate-200", "bg-teal-200"]

  return (
    <div
      className="text-slate-800  text-xl  font-bold overflow-hidden rounded-full shadow-md border"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          width={width}
          height={height}
          alt={name}
          className="overflow-hidden required-full"
        />
      ) : name ? (
        <div
          style={{ width: `${width}px`, height: `${height}px` }}
          className="overflow-hidden rounded-full flex justify-center items-center"
        >
          {name}
        </div>
      ) : (
        <LuUser2 size={70} />
      )}
    </div>
  )
}
export default Avatar
