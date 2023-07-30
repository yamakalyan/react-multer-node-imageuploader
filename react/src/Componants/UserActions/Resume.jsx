import { useState, useEffect } from "react";
import { saveAs } from "file-saver";

const Resume = () => {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    const fetchingImage = async () => {
      await fetch(`http://localhost:4000/user/list`, {
        method: "get",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            console.log(data.message);
            setuserData(data.results);
            console.log(data.results);
          } else {
            console.log(data.message);
            setuserData(data.results);
            console.log(data.results);
          }
        });
    };
    fetchingImage();
  }, []);

  const mapping = userData?.map((user, i) => {
    return (
      <>
        <div className="col-md-12 col-lg-12" key={i}>
          <p>{user.user_name}</p>
          <br />
          <img src={`http://localhost:4000/resumes/${user.user_resume}`} />
          <p>{user.user_resume}</p>
          {/* <a
            href={`http://localhost:4000/resumes/${user.user_resume}`}
            download
          >
            Link
          </a> */}

          <button
            onClick={() => {
                saveAs(
                  `http://localhost:4000/resumes/${user.user_resume}`,
                  `${user.user_resume}`
                );
            }}
          >
            Link
          </button>
        </div>
      </>
    );
  });
  return (
    <div>
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
            <h2>Image view</h2>

            {mapping}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
