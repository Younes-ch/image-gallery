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

const sortOrders = [
  { value: "", label: "Popular" },
  { value: "latest", label: "Latest" },
];

const SortSelector = () => {
  const [sortOrder, setSortOrder] = imageQueryStore((store) => [
    store.imageQuery.sortOrder,
    store.setSortOrder,
  ]);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-[200px]">
        <Button variant="outline">
          Order by: {currentSortOrder?.label || "Popular"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]">
        <DropdownMenuRadioGroup
          value={currentSortOrder?.value || ""}
          onValueChange={(value) => setSortOrder(value as "" | "latest")}
        >
          {sortOrders.map((order) => (
            <DropdownMenuRadioItem key={order.value} value={order.value}>
              {order.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortSelector;
