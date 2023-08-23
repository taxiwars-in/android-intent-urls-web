import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const dataFromAndroid = searchParams.get("data_from_android");
    const dataFromWeb = searchParams.get("data_from_web");

    localStorage.setItem("dataFromAndroid", dataFromAndroid);
    localStorage.setItem("dataFromWeb", dataFromWeb);
  }, []);

  const [data, setData] = useState({
    web: "",
    android: "",
  });
  // const onClick = () => {};
  return (
    <div>
      <h1>Android intent link launch behaviour test app</h1>
      <h2>
        Version-&nbsp;&nbsp;&nbsp;<span>5</span>
      </h2>
      <a href="intent://#Intent;scheme=https;package=app.web.android_intent_urls.twa;S.custom_data=your_custom_data;end">
        Open App with Custom Data
      </a>

      {/* <a onClick={onClick}>Click to launch android app</a> */}
      <br />
      <br />
      <button
        onClick={() => {
          const dataWeb = localStorage.getItem("dataFromWeb");
          const dataAndroid = localStorage.getItem("dataFromAndroid");
          setData({
            web: dataWeb,
            android: dataAndroid,
          });
        }}
      >
        Show data from local storage
      </button>
      <p className="">Data shown below</p>
      <p>
        Web:&nbsp;&nbsp;<span>{data.web}</span>
      </p>
      <p>
        Android:&nbsp;&nbsp;<span>{data.android}</span>
      </p>
    </div>
  );
}

export default App;
