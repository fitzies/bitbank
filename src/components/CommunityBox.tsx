import twitter from "../assets/images/twitter.png";
import discord from "../assets/images/discord.png";
import youtube from "../assets/images/youtube.png";
import Image, { StaticImageData } from "next/image";

export default function CommunityBox(props: { title: string }) {
  let logo: string | StaticImageData = "";

  if (props.title.toLowerCase() === "twitter") logo = twitter;
  if (props.title.toLowerCase() === "discord") logo = discord;
  if (props.title.toLowerCase() === "youtube") logo = youtube;

  return (
    <div className="w-[28%] aspect-video bg-[#3a0f778c] border border-[#d3ddff1f] rounded-xl mt-4 flex justify-start items-center flex-col pt-8">
      <Image src={logo} alt="LOGO" className="mb-4 w-1/4" />
      <h1 className="text-white font-interbold text-2xl">{props.title}</h1>
    </div>
  );
}
