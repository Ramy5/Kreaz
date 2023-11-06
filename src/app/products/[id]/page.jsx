"use client";

const page = async ({ params }) => {
  const paramsId = params.id;

  return <div>page with id {paramsId}</div>;
};

export default page;
