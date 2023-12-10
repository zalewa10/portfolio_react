import { overviews } from "../constants";
import OverviewCard from "../components/OverviewCard";

const Overview = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col min-h-screen gap-10 max-container">
      <div className="relative  flex flex-col justify-center w-full p-4">
        <h1 className="text-white font-extrabold text-4xl">Overview</h1>
        <p className="info-text py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          exercitationem alias! Ab nisi consectetur, fugit optio, aliquam
          repudiandae dignissimos in ipsam voluptatibus architecto quasi illo.
          Repellendus deleniti velit quod labore.
        </p>
      </div>
      <div className="max-container flex justify-center flex-wrap gap-9">
        {overviews.map((overview) => (
          <OverviewCard key={overview.label} {...overview} />
        ))}
      </div>
    </section>
  );
};

export default Overview;
