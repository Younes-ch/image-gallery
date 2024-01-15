"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import imageQueryStore from "@/stores/imageQueryStore";

const imageTypes = [
  { value: "", label: "Photo" },
  { value: "illustration", label: "Illustration" },
  { value: "vector", label: "Vector" },
];

const ImageTypeSelector = () => {
  const [imageType, setImageType] = imageQueryStore((store) => [
    store.imageQuery.imageType,
    store.setImageType,
  ]);

  const currentImageType = imageTypes.find(
    (type) => type.value === imageType
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-[200px]">
        <Button variant="outline">
          Image Type: {currentImageType?.label || "Photo"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]">
        <DropdownMenuRadioGroup
          value={currentImageType?.value || ""}
          onValueChange={(value) =>
            setImageType(value as "" | "illustration" | "vector")
          }
        >
          {imageTypes.map((type) => (
            <DropdownMenuRadioItem key={type.value} value={type.value}>
              {type.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ImageTypeSelector;
