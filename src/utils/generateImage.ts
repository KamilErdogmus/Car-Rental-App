import Car from "../types";
import { colors } from "./constants";

const url1 = `https://cdn.imagin.studio/getimage=customer=hrjavascript-mastery&make=bmw&modelFamily=m4&zoomType=fullscreen&angle=11&paintId=pspc0124`;

const generateImage = (car: Car, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model as string);
  url.searchParams.append("zoomType", "fullscreen");
  if (angle) {
    url.searchParams.append("angle", angle);
  }

  const index = Math.floor(Math.random() * colors.length);

  url.searchParams.append("paintId", colors[index]);
  return url.href;
};

export default generateImage;
