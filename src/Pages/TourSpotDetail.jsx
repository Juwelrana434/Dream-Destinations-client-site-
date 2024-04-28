import { useLoaderData } from "react-router-dom";

const TourSpotDetail = () => {
  const tourspot = useLoaderData();
  console.log(tourspot);
  return (
    <div>
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 gap-6 bg-[#dde5f6]">
        <div
          className="border-2 rounded-md border-gray-100 p-4 shadow-md"
          id="left-side/up"
        >
          <img className="w-full h-full" src={tourspot?.photo} />
        </div>
        <div className="border-2 rounded-md border-gray-100 p-4 shadow-md">
        <h1 className="text-2xl font-bold"> <span>Name of Place  : </span>{tourspot.tourists_spot_name}</h1>
        <h1 className="text-xl font-medium"> Location : {tourspot.location}</h1>
        <h1 className="font-medium">{tourspot.short_description}</h1>
        
        {/* <h1 className="font-medium"> seasonality : {tourspot.seasonality[0]}, {tourspot.seasonality[1]}</h1> */}
        
        
        <h1 className="font-medium"> Travel Time : {tourspot.travel_time}</h1>
        <h1 className="font-medium"> Average Cost : {tourspot.average_cost}/ person</h1>
        <h1 className="font-medium">Total Visitors Per Year :{tourspot.total_visitors_per_year} person</h1>
        </div>
      </div>
    </div>
  );
};

export default TourSpotDetail;