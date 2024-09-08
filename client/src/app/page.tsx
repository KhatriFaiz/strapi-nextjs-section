import { API_URL } from "@/utils/contants";
import WhyChooseUs from "@/components/WhyChooseUsSection";

export const dynamic = "force-dynamic";

async function getOptions() {
  const response = await fetch(
    `${API_URL}/why-choose-uses?populate[image][fields][0]=url`,
    {
      cache: "no-store",
    }
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
