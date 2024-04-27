import { useLoaderData } from "react-router-dom";


const TourSpotDetail = () => {
const tourspot = useLoaderData();
console.log(tourspot);
    return (
        <div>
            {tourspot.id}
            <img src="" alt="" />
        </div>
    );
};

export default TourSpotDetail;