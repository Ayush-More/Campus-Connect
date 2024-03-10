import { useRouteError } from "react-router-dom";
import Error from "./../../assets/images/error.png";
import "./../../assets/style/myStyle.css"
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <img className="image-container" width={500} height={400} src={Error} alt="Error"/>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}