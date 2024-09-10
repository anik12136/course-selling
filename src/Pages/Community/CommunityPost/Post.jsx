

const Post = ({ post }) => {
    console.log("post", post)
    return (
        <div>
            <div className="w-full bg-slate-200 p-8 my-5 rounded-md text-justify">
                <div className="flex justify-between items-center bg-slate-100  px-2 py-1 rounded-md mb-3">
                    <div className="">
                        <h1 className="text-xl ">{post.name}</h1>
                        <h1 className="text-sm ">{post.email}</h1>
                    </div>
                    <div>
                        <h1 className="text-sm mb-3  px-2">{post.date}</h1>
                    </div>
                </div>
                <p className="mb-3 text-md text-gray-600">Question:{post.questionTitle}</p>
                <p >{post.questionDescription}</p>

            </div>

        </div>
    );
};

export default Post;