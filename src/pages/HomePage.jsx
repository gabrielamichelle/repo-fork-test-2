import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrls } from "../services/apiUrl";

function HomePage(props) {
  const [data, setData] = useState(null);

  

  useEffect(() => {
    axios.get(apiUrls.PAGE_DATA)
    .then((response) => {
      console.log("data", data);
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return render();

  function render() {
    if (data) {
      console.log("data", data);
      return (
        <div>HomePage</div>
      )
    } else {
      return null;
    }
  }
}

export default HomePage;