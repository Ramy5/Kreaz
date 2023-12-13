import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionMostVisitedCard = ({ img, name, link }) => {
  return (
    <Link href={link} className="flex flex-col gap-2 items-center w-40">
      <Image src={img} alt="Category Image" width={100} height={100} />
      <p className=" text-center text-mainColorLight font-bold text-lg">
        {name}
      </p>
    </Link>
  );
};

export default SectionMostVisitedCard;
