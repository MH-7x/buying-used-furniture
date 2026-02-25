"use client";

import { useRouter } from "next/navigation";

const MyLink = () => {
  const router = useRouter();
  return (
    <p
      className=" "
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onClick={(_) =>
        router.push(
          "https://wa.me/+923471309916?text=Hello%20Mashal,%20I%20Need%20Your%20Service%20!",
        )
      }
    >
      التطوير والصيانة بواسطة مشعل حريرة
    </p>
  );
};

export default MyLink;
