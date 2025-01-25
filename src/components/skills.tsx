import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoscroll from "embla-carousel-auto-scroll";
import { skiil_list } from "@/lib/const";

function chunkedArray<T>(array: T[], chunkSize: number): T[][] {
  const itemsLength = array.length;
  const [a, b] = [
    Math.ceil(itemsLength / chunkSize),
    Math.ceil((2 * itemsLength) / chunkSize),
  ];

  return [array.slice(0, a), array.slice(a, b), array.slice(b, itemsLength)];
}

export default function Skills() {
  return (
    <div className="space-y-4 relative w-full">
      <div className="bg-gradient-to-r from-background to-30% absolute inset-0 z-30" />
      <div className="bg-gradient-to-l from-background to-30% absolute inset-0 z-20 -top-4" />

      {chunkedArray(skiil_list, 3).map((skills, index) => (
        <Carousel
          key={index}
          opts={{ loop: true }}
          plugins={[
            Autoscroll({
              speed: 0.5,
              direction: (index + 1) % 2 === 0 ? "backward" : "forward",
            }),
          ]}
        >
          <CarouselContent>
            {skills.map((item) => (
              <CarouselItem
                key={item.label}
                className="basis-auto px-4 py-2 text-sm font-medium flex items-center gap-2 rounded-full border bg-secondary/50 w-fit"
              >
                <Image
                  src={item.imageUrl}
                  height={18}
                  width={18}
                  alt={item.label}
                  loading="lazy"
                />
                {item.label}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ))}
    </div>
  );
}
