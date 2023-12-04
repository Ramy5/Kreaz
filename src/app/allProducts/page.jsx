import Aside from "@/components/AllProducts/Aside";
import AllProducts from "@/components/AllProducts/AllProducts";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-6 main_layout py-8">
      {/* RIGHT */}
      <Aside />

      {/* LEFT */}
      <AllProducts />
    </div>
  );
};

export default page;
