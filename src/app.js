import "./styles.scss";

import Home from "./components/home";

const app = async () => {
  const rootDiv = document.getElementById("root");

  rootDiv.innerHTML = await Home();
};

app();
