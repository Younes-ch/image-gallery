import { Eye, DownloadIcon, Heart } from "lucide-react"

const ImageCard = () => {
  const tags = ["dog", "cat", "rabbit"];

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl border border-primary-foreground">
      <img
        src="https://pixabay.com/get/g57ebf94375a43a9b856f6d811f2972d388658a24c5080dae2d8f5614bc134abf46f51687cbe2d138c93f0af73af390bc_640.jpg"
        alt=""
        className="w-full"
      />
      <div className="px-6 py-4">
        <h3 className="text-primary scroll-m-20 text-2xl font-semibold tracking-tight">
          The Joke Tax
        </h3>
        <ul className="flex flex-col gap-1">
          <li className="flex gap-1">
            <Eye />
            1013574
          </li>
          <li className="flex gap-1">
            <DownloadIcon />
            769513
          </li>
          <li className="flex gap-1">
            <Heart />
            1876
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
