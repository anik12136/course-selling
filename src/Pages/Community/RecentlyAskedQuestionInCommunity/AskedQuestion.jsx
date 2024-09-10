const AskedQuestion = ({ post }) => {
  console.log(post);
  return (
    <div>
      <div className="collapse  my-4  bg-slate-200 z-0">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          {post.questionTitle}
          </div>
          <div className="collapse-content">
            <p>{post.questionDescription}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AskedQuestion;
