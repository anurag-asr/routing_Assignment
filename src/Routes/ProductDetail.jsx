import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  // const param=useParam();
  const [data, setData] = useState([]);

  const params = useParams();
  console.log(params.user_id);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${params.user_id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);
  console.log(data);

  return (
    <div>
      <h1>hekkk</h1>
    </div>
  );
}
