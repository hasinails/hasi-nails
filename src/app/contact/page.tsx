import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SocialsList from "@/shared/SocialsList";
import Label from "@/components/Label";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface PageContactProps { }

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
  },
  {
    title: "⏰ WORKING TIME",
    desc: `Mo. – Fr.:  9:30 – 20:00
    Sa.: 9:30 – 19:00
   `,
  },
  {
    title: "☎ PHONE",
    desc: "000-123-456-7890",
  },
];

const PageContact: FC<PageContactProps> = ({ }) => {
  return (
    <div className={`nc-PageContact overflow-hidden container`}>
      <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
        Contact
      </h2>
      <ContactAddress />
      <ContactMap />
      {/* <div className=" mb-24 lg:mb-32">
        
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            {info.map((item, index) => (
              <div key={index}>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  {item.title}
                </h3>
                <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                  {item.desc}
                </span>
              </div>
            ))}
            <div>
              <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                🌏 SOCIALS
              </h3>
              <SocialsList className="mt-2" />
            </div>

          </div>
        </div>
      </div> */}


      {/* <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Location</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            48 Hàng Đậu, Đồng Xuân, Hoàn Kiếm, Hà Nội
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0">
          <div className="rounded-xl overflow-hidden z-0">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY&q=48+Hàng+Đậu,+Đồng+Xuân,+Hoàn+Kiếm,+Hà+Nội,+Vietnam"
            ></iframe>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default PageContact;

export const ContactAddress = () => {
  return (<div className=" mb-24 lg:mb-32">

    <div className="container max-w-7xl mx-auto">
      <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
        {info.map((item, index) => (
          <div key={index}>
            <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
              {item.title}
            </h3>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              {item.desc}
            </span>
          </div>
        ))}
        <div>
          <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
            🌏 SOCIALS
          </h3>
          <SocialsList className="mt-2" />
        </div>

      </div>
    </div>
  </div>)
}

export const ContactMap = () => {
  return (<div className="listingSection__wrap">
    <div>
      <h2 className="text-2xl font-semibold">Location</h2>
      <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
        48 Hàng Đậu, Đồng Xuân, Hoàn Kiếm, Hà Nội
      </span>
    </div>
    <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

    <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0">
      <div className="rounded-xl overflow-hidden z-0">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY&q=48+Hàng+Đậu,+Đồng+Xuân,+Hoàn+Kiếm,+Hà+Nội,+Vietnam"
        ></iframe>
      </div>
    </div>
  </div>)
}
