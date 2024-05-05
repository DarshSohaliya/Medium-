import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { useBlogs } from "../hooks"

export function Blogs () {

    const {loading,blogs} = useBlogs()

  if (loading) {
    return <div>
      <Appbar/>
          <div className="flex justify-center">
             <div>
             <BlogSkeleton/>
             <BlogSkeleton/>
             <BlogSkeleton/>
             <BlogSkeleton/>
             </div>
    </div>
    </div>
    

  }
  
  // if (!blogs || blogs.length === 0) {
  //   return <div>No blogs found.</div>;
  // }
  
  console.log(blogs);

    return <div>
     <Appbar/> 
     
    <div className="flex justify-center">
     <div>
     {blogs.map((post) => (
                        <BlogCard
                            authorName={post.author.name || "Anonymous"}
                            title={post.title}
                            content={post.content}
                            publishedDate={"2nd Feb 2024"}
                            id={post.id}
                        />
                    ))}

    </div>
    </div>
    </div>
}