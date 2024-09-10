import { useEffect, useState } from "react";
import AskedQuestion from "./AskedQuestion";

const RecentlyAskedQuestionInCommunity = () => {
  /* -------------------------------------------------
    A Dummy json folder has been created in the public folder. From that folder RecentlyAskedQuestionInCommunity.json is being utilized in this useEffect (public/DummyJson/RecentlyAskedQuestionInCommunity.json ).
    -----------------------------------------------------*/
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        /* ------------------------
        fetching data from public folder
        --------------------------------- */
        const response = await fetch(
          "http://localhost:5000/communityPost"
        ); // Specify the path to your JSON file in the public folder
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFetchData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(fetchData);
  return (
    <div>
      <h1 className="text-2xl my-4 mb-6">Your recently asked questions</h1>
        {/* ----------------------------------------------------------
        All recently asked question will be shown from AskedQuestion Component.  RecentlyAskedQuestionInCommunity/AskedQuestion.jsx 
        -----------------------------------------------------------------------------*/}

      {fetchData.map((post) => (
        <AskedQuestion post={post} key={post.id}></AskedQuestion>
      ))}
    </div>
  );
};

export default RecentlyAskedQuestionInCommunity;
