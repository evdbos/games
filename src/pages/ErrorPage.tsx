import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Oops...</h1>
      <p>
        {isRouteErrorResponse(error)
          ? "Invalidpage"
          : " Sorry, an unexpectederror has occurred. "}
      </p>
    </>
  );
};
export default ErrorPage;
