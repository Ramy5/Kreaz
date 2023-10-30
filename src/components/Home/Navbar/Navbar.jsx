import {
  navListTorta,
  navListBaked,
  navListEasternSweet,
  navListIceCream,
  navListCoffe,
} from "@/data/NavbarList";
import NavbarItem from "./NavbarItem";
import { BiLogoFirefox } from "react-icons/bi";
import { SlPresent } from "react-icons/sl";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center main_layout rounded-xl justify-between bg-grayColorLight py-2 text-white">
      <ul className="flex">
        <li>
          <NavbarItem title="تورت وجاتوة" list={navListTorta} />
        </li>
        <li>
          <NavbarItem title="حلويات شرقيه" list={navListEasternSweet} />
        </li>
        <li>
          <NavbarItem title="مخبوزات" list={navListBaked} />
        </li>
        <li>
          <NavbarItem title="حلويات المولد" />
        </li>
        <li>
          <NavbarItem title="شوكولاته" />
        </li>
        <li>
          <NavbarItem title="كحك وبسكويت" />
        </li>
        <li>
          <NavbarItem title="منتجات الألبان" />
        </li>
        <li>
          <NavbarItem title="ايس كريم" list={navListIceCream} />
        </li>
        <li>
          <NavbarItem title="كافيه" list={navListCoffe} />
        </li>
        <li>
          <NavbarItem title="اخري" />
        </li>
      </ul>

      {/* LEFT  */}
      <div className="flex items-center gap-6">
        <Link
          href={"/"}
          className="flex items-center gap-2  hover:text-white transition-all duration-200 text-gray-200"
        >
          <BiLogoFirefox />
          <p>عروض</p>
        </Link>
        <Link
          className="flex items-center gap-2  hover:text-white transition-all duration-200 text-gray-200"
          href={"/"}
        >
          <SlPresent />
          <p>هدايا</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
