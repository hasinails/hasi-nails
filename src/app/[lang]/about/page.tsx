import BgGlassmorphism from "@/components/BgGlassmorphism";
import { BasePageProps } from "@/types/page";
import { ContactMap } from "../contact/page";
const DEContent = () => {
  return (
    <div className="text-center ">
      <h3 className="text-2xl">
        <b>Sie finden unser Hasi Nails Studio mitten in Ludwigsburg</b>
      </h3>
      <br />
      <p>
        Wir sind seit 2007 mit einem erfolgreichen Studio in Ludwigsburg
        ansässig. Das Know How eines professionellen Serviceangebots und die
        erfolgreiche Umsetzung spiegeln sich in der Kundenzufriedenheit wieder.{" "}
      </p>
      <br />
      <p>
        Unser Team von Naildesignern werden ständig von uns geschult um immer
        den neuesten Service im Studio anbieten zu können. Gellack, Dipping und
        Nailart sind nur die letzten Neuerungen die wir in den vergangenen
        Monaten unserem Serviceangebot hinzugefügt haben.
      </p>
      <br />
      <h3>
        <b>
          Mit dem Service in unserem Studio haben Sie immer die Gewissheit voll
          im Trend zu liegen.
        </b>
      </h3>
    </div>
  );
};
const ENGContent = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl">
        <b>You will find our Hasi Nails Studio in the middle of Ludwigsburg</b>
      </h3>
      <br />
      <p>
        We have been based in Ludwigsburg since 2007 with a wholeheartedly
        services studio. The passion and skill of professional services and the
        successful implementation are reflected in customer satisfaction.
      </p>
      <br />
      <p>
        Our team of nail designers are constantly trained by us to always offer
        the latest service in the studio. Gel varnish, dipping and nail art are
        just the latest innovations we have had added in recent months.
      </p>
      <br />
      <h3>
        <b>
          With the service in our studio, you always have the certainty to be
          fully in line with the trend.
        </b>
      </h3>
    </div>
  );
};

const PageAbout = ({ params: { lang } }: BasePageProps) => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        {lang === "de-DE" ? <DEContent /> : <ENGContent />}
        <ContactMap />
        {/* <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        /> */}

        {/* <SectionFounder /> */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div> */}

        {/* <SectionStatistic /> */}

        {/* <SectionSubscribe2 /> */}
      </div>
    </div>
  );
};

export default PageAbout;
