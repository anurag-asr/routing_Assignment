import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((res) => {
        //  console.log(data1.data)
        setData(res.data);
      })
      .catch((err) => alert("you have some error"));
  }, []);

  console.log(data);
  return (
    <div>
      <table
        style={{
          border: "1px red solid",
          margin: "auto",
          justifyContent: "space-between"
        }}
      >
        <tr>
          <th>FirstName | </th>
          <th>LastName | </th>
          <th>More_Deatais </th>
        </tr>

        {data.map((elem) => (
          <tr>
            <td>{`${elem.first_name}`}</td>
            <td>{elem.last_name}</td>
            <td>
              <Link to={`/allproducts/${elem.id}`}>Show more details</Link>
            </td>
          </tr>
        ))}
        <tr>
          <th></th>
        </tr>

        {/* <tr>
          <th>Product_Name</th>
          <th>Price</th>
          <th>More_Deatais</th>
        </tr> */}
      </table>
    </div>
  );
}
