import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const View = () => {
  const [name, setname] = useState("");
  const [resume, setresume] = useState(null);

  const [userData, setuserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileData = new FormData();
    fileData.append("name", name);
    fileData.append("resume", resume);
    await fetch("http://localhost:4000/user/create", {
      method: "post",
      body: fileData,
    })
      .then((res) => console.log(res))
      // .then((data) => {
      //   if (data.success) {
      //     console.log(data.message);
      //   } else {
      //     console.log(data.message);
      //   }
      // });
      .catch((err) => console.log(err));
  };

 

  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="enter name"
                onChange={(e) => setname(e.target.value)}
              />
              <br />
              <br />
              <input
                type="file"
                onChange={(e) => setresume(e.target.files[0])}
              />
              <br />
              <br />
              <button type="submit"> Submit</button>
            </form>
          </div>
          <div className="col-md-6 col-lg-6">
            <Link to='/list'>Link to show images</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
