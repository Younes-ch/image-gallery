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
import { ChevronDown } from "lucide-react";

const imageTypes = [
  { value: "", label: "Photos" },
  { value: "illustration", label: "Illustrations" },
  { value: "vector", label: "Vectors" },
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
        <Button variant="outline" className="flex justify-between">
          {currentImageType?.label || "Photos"}
          <ChevronDown />
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
