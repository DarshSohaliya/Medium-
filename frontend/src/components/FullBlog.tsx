import { Blog } from "../hooks"
import { Appbar } from "./Appbar"

export const FullBlog = ({blog} : {blog :Blog}) => {
    return <div>
        <Appbar/>
      <div className="flex justify-center">
      <div className="grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
      <div className="  col-span-8">
     <div className="text-5xl font-extrabold">
       {blog.title}
     </div>
     <div className="text-slate-500 pt-2">
        Posted on 2nd Decembar 2023
     </div>
     <div className="pt-4">
       {blog.content}
     </div>
      </div>
      <div className=" bg-green-200 col-span-4">
hello
      </div>
    </div>
      </div>
    </div>
}