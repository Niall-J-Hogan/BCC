import { Landing } from "@/pages/landingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seven Hills Tattoo Convention | Sheffield’s Best Tattoo Convention",
  description:
    "Seven Hills is Sheffield’s newest and best artist-run tattoo convention. Featuring the best artists from the UK and beyond, Seven Hills is by tattooers, for the people.",
};

const index = () => {
  return <Landing />;
};

export default index;
