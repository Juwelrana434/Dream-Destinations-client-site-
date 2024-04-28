import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../component/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import TourSpotUpdate from "./TourSpotUpdate";


const Mylist = () => {
  useEffect(() => {
    document.title = "My List";
    })
    const { user, logOut } = useContext(AuthContext);
    const [tourspots, setTourSpots] = useState([]);
    // console.log(tourspots)
    
    // my list data delete
    const handleDelete = _id => {
    console.log(_id, "delete")
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/Tourist/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              console.log("delete conform");
            }
          });
      }
    });
    };
    
    // my list data read 
    useEffect(() => {
    fetch(`http://localhost:5000/Tourist/email/${user?.email}`)
    .then(res => res.json())
    .then((data) => {
    setTourSpots(data)})
    },[user]);
    return (
        <div>
           <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
        {tourspots.map((tourspot) => (
          <div key={tourspot.id}>
            <div className="card bg-base-100 shadow-xl">
              <div className="w-full mb-4">
                <img
                  src={tourspot.photo}
                  className="w-full h-[280px] border-2 rounded-md border-gray-100 p-4 shadow-md"
                />
              </div>
              <div className="">
                <h2 className="card-title my-2 px-4">
                  {tourspot.spot_name}
                </h2>
                <div className="flex justify-between items-center px-4">
                  <p>{tourspot.travel_time} person</p>
                  <p className="p-4"> Travel Time :{tourspot.total_visitor} Day</p>
                </div>
                <div className="flex justify-between items-center px-4">
                  <p>Average cost : ${tourspot.average_cost} </p>
                  <p className="p-4">seasonality:{tourspot.seasonality} </p>
                </div>
                <div className="card-actions justify-end ">
                  <div className="w-full my-4 px-4">
                    <Link to={`/tourspot/${tourspot._id}`}>
                      <button className="btn btn-primary w-full">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
      tourspots.map((tour) => <div key={tour.id}><div className="overflow-x-auto my-6">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Tourist spot</th>
            <th>Country</th>
            <th>Average cost</th>
            <th>Seasonality</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-base-200">
            <th>1</th>
            <td>{tour.spot_name}</td>
            <td>{tour.country_name}</td>
            <td> ${tour.average_cost}</td>
            <td>{tour.seasonality}</td>
            <td><Link to={`/update/${tour._id}`}>
                      <button className="btn btn-success w-full">
                        Update
                      </button>
                    </Link></td>
            
            <td>
                      <button 
                      onClick={() => handleDelete(tour._id)}
                      className="btn btn-error w-full">
                        Delete
                      </button>
                    </td>
            
            
          </tr>
          {/* row 2 */}
          {/* <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            
          </tr> */}
          {/* row 3 */}
          {/* <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            
          </tr> */}
        </tbody>
      </table>
    </div></div>)
      }
      <div>
      {/* {
      tourspots.map(tourupdate => <TourSpotUpdate 
      key={tourupdate._id}
      tourupdate={tourupdate}
      ></TourSpotUpdate> )
      } */}
      </div>
        </div>
    );
};

export default Mylist;