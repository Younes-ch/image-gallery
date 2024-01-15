import Image from "@/entities/Image";
import { Eye, DownloadIcon, Heart } from "lucide-react";
import { Badge } from "./ui/badge";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";
import noImage from "@/assets/no-image.jpg";

interface Props {
  image: Image;
}

const ImageCard = ({ image }: Props) => {
  const tags = image.tags.split(", ");

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger>
        <div className="max-w-sm h-[450px] rounded overflow-hidden shadow-2xl border border-primary-foreground hover:scale-105 hover:transition-transform select-none">
          <a href={image.webformatURL} target="__blank">
            <img
              src={image.webformatURL}
              alt=""
              className="w-full h-[250px] object-cover bg-slate-200"
            />
          </a>
          <div className="px-6 py-4 flex flex-col justify-between gap-5">
            <div>
              <div className="flex gap-2">
                <img
                  src={image.userImageURL || noImage}
                  className="rounded-full w-10 h-10"
                />
                <h3 className="text-primary scroll-m-20 text-2xl font-semibold tracking-tight mb-5">
                  By {image.user}
                </h3>
              </div>
              <ul className="flex justify-evenly">
                <li className="flex gap-1">
                  <Eye />
                  {image.views}
                </li>
                <li className="flex gap-1">
                  <DownloadIcon />
                  {image.downloads}
                </li>
                <li className="flex gap-1">
                  <Heart className="text-red-400" />
                  {image.likes}
                </li>
              </ul>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              {tags.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent side="left" sideOffset={-70}>
        <img src={image.webformatURL} className="bg-slate-200"/>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ImageCard;
