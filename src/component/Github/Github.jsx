import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Esam-jr")
  //       .then((response) => response.json())
  //       .then((resp) => {
  //         setData(resp);
  //         console.log(resp);
  //       });
  //   }, []);
  return (
    <div className="bg-gray-600 text-xl m-4 py-5 text-center text-white">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="img" />
    </div>
  );
}

export default Github;

export const githubLoder = async () => {
  const response = await fetch("https://api.github.com/users/Esam-jr");
  return response.json();
};
