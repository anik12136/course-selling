import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Post from "./Post";

const CommunityPost = () => {
  

  /* -------------------------------------------------
    A Dummy json folder has been created in the public folder. From that folder post.json is being utilized in this useEffect (public/DummyJson/post.json ).
    -----------------------------------------------------*/

  /* -----------------------------------------------------------------
এখন এখানে database হতে data fetch করে দিলেই post গুলো show করবে। আমি dummy json create করে use করেছি।
----------------------------------------------------------------------- */
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        /* ------------------------
          fetching data from public folder
          --------------------------------- */
        const response = await fetch("http://localhost:5000/communityPost");
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
 

  /* -------------------------------
  Anik's works start from Here
  ------------------------------------------- */

  /*  
    // data fetch..............
  const [fetchData, setFetchData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://assignment-11-serve-site-kdls-ms7xe0kt1-anik12136s-projects.vercel.app/communityPost"
        ); // Specify the path to your JSON file in the public folder
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFetchData(data);
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(fetchData); */

  /* -------------------------------
  Anik's works end  here from Here
  ------------------------------------------- */

  return (
    <div>
      {
        fetchData?.map((post)=><Post post={post} key={post.id}></Post>)
      }
   
    </div>
  );
};

export default CommunityPost;
