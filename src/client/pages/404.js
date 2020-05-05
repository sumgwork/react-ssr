import React from "react";

const Page404 = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div>
      <h3>Page not found</h3>
    </div>
  );
};

export default { component: Page404 };
