import MainLayout from "./layouts/MainLayout"

const posts = []
  
  export default function Blog() {
    return (
        <MainLayout>
      <div className="bg-gray-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Class Blog
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">Checkout what we are up to</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" >
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    alt=""
                    src={post.imageUrl[0].url}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-300">
                      {post.date}
                    </time>
                   {/* //#tags for what we want */}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-200">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-white">{post.description}</p>
                  </div>
                  
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      </MainLayout>
    )
  }
  