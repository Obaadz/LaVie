import { FC } from "react";
import Image from "next/image";
import { User } from "../../types/users/User";
import { BsCart } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import header_profile_image from "../../images/header_profile_image.png";
import Link from "next/link";

type Props = {
  user: Partial<User>;
};

const UserProfile: FC<Props> = ({ user }) => {
  return (
    <div className="d-flex gap-3 align-items-center ms-4 ms-lg-0">
      <Link href="#" className="link-dark">
        <BsCart />
      </Link>
      <Link href="#" className="link-dark">
        <AiOutlineBell />
      </Link>
      <Link href="#" className="link-dark">
        <Image src={header_profile_image} alt="profile image" width={20} />
      </Link>
    </div>
  );
};

export default UserProfile;
