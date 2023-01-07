import React from "react";

interface HeadProps {}

const Head: React.FC<HeadProps> = ({}) => {
  return (
    <>
      <title>williameliasson-dev</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
      />
    </>
  );
};

export default Head;
