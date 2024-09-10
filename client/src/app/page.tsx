import { API_URL } from "@/utils/contants";
import WhyChooseUs from "@/components/WhyChooseUsSection";

async function getOptions() {
  const response = await fetch(
    `${API_URL}/why-choose-uses?populate[image][fields][0]=url`
  );
  const result = await response.json();
  return result.data;
}

export default async function Home() {
  const options = await getOptions();
  return (
    <>
      <WhyChooseUs options={options} />
    </>
  );
}
