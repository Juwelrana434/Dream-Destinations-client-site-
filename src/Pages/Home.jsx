import Home1 from "../../src/assets/cox.jpg";
import Home2 from "../../src/assets/saint.jpg";
import Home3 from "../../src/assets/kuala.jpg";
import Home4 from "../../src/assets/Bangkok.jpg";
import Home5 from "../../src/assets/halong.jpg";
import Home6 from "../../src/assets/im1.jpg";
import Home7 from "../../src/assets/im2.jpg";

// import Home8 from "../../src/assets/im3.jpg";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });
  const tourspots = useLoaderData();
  // my list data read 
  const [countryName, setCountryName] = useState([])
  
  // useEffect(() => {
  //   fetch(`http://localhost:5000/Tourist/${country_name}`)
  //   .then(res => res.json())
  //   .then((data) => {
  //   setCountryName(data)})
  //   },[]);
  return (
    <div>
      {/* banner section start */}
      <div className="lg:min-h-[calc(100vh - 450px)] mx-4">
        <div className="carousel w-full relative bg-[#101010]">
          <div id="slide1" className="carousel-item relative w-full one">
            <img src={Home3} className="w-full lg:h-[440px] h-72" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={Home2} className="w-full lg:h-[440px] h-72" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute z-10 top-[60%] right-[20%]">
              <h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">
                Plan Your Traveling With Us{" "}
              </h1>{" "}
              <button className="btn btn-primary my-4">View Details</button>
            </div>
            <div className="absolute z-10 top-[20%] left-[70%]">
              <h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">
                Saint Martin{" "}
              </h1>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={Home1} className="w-full lg:h-[440px] h-72" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute z-10 top-[60%] right-[20%]">
              <h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">
                Plan Your Traveling With Us{" "}
              </h1>{" "}
              <button className="btn btn-primary my-4">View Details</button>
            </div>
            <div className="absolute z-10 top-[20%] left-[70%]">
              <h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">
                Cox's Bazar{" "}
              </h1>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={Home4} className="w-full lg:h-[440px] h-72" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute z-10 top-[60%] right-[20%]">
              <h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">
                Plan Your Traveling With Us{" "}
              </h1>{" "}
              <button className="btn btn-primary my-4">View Details</button>
            </div>
            <div className="absolute z-10 top-[20%] left-[70%]">
              <h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">
                Halong Bay{" "}
              </h1>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={Home5} className="w-full lg:h-[440px] h-72" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute z-10 top-[60%] right-[20%]">
              <h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">
                Plan Your Traveling With Us{" "}
              </h1>{" "}
              <button className="btn btn-primary my-4">View Details</button>
            </div>
            <div className="absolute z-10 top-[20%] left-[70%]">
              <h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">
                Halong Bay{" "}
              </h1>
            </div>
          </div>
          <div className="absolute z-10 top-[60%] right-[20%]">
            <h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">
              Plan Your Traveling With Us{" "}
            </h1>{" "}
            <button className="btn btn-primary my-4">View Details</button>
          </div>
          <div className="absolute z-10 top-[20%] left-[70%]">
            <h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">
              kuala Lumpur{" "}
            </h1>
          </div>
        </div>
      </div>
      {/* banner section end */}

      {/* Tourists Spots section start  */}
      <div className="text-center text-lime-900 text-3xl font-bold my-10">
        <h1> Most Popular Tourists Spots Southeast Asia</h1>
      </div>
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

      {/* Tourists Spots section end  */}
      
      
      {/* country section start  */}
      
      {/* to={`/tourspot/${tourspot._id}`} */}
      <div>
      
      <h1 className="text-center text-2xl font-bold my-8 ">Find Out Your Dream Destination </h1>
      <div className="flex justify-evenly font-bold text-[#070bee] shadow-md">
            <a className="btn btn-primary">
              <Link>Bangladesh</Link> 
            </a>
            <a  className="btn btn-primary">
              <Link>Thailand</Link>
            </a>
            <a className="btn btn-primary">
              <Link>Indonesia</Link>
            </a>
            <a className="btn btn-primary">
              <Link>Malaysia</Link>
            </a>
            <a className="btn btn-primary">
              <Link>Vietnam</Link>
            </a>
            <a className="btn btn-primary">
              <Link>Cambodia</Link>
            </a>
          </div>
      
      </div>
      
      {/* country section END  */}
      {/* Extra two section Discount section start */}
      <div className="mx-4 mb-6">
      <h1 className="text-3xl font-bold text-center my-6">Hurry up ! Collect your discount</h1>
        <div className="bg-[#0723f5]">
          {" "}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1516357231954-91487b459602?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="">
              <div className="max-w-md text-white">
                <h1 className="mb-2 text-xl font-bold">Summer Special</h1>
                <p className="md:text-5xl text-2xl font-bold"> 30% OFF</p>
                <p className="mb-"> SPEND A BEST HOLIDAYS WITH US</p>
                <p className="mb-2">
                  {" "}
                  Enjoy Your Life with your friends & Family
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Extra two section Discount section end */}
      {/* Extra two awesome Tour section start */}
      <div className="my-6 mx-4">
        <div>
          <h1 className="text-center text-2xl font-bold my-8 ">Awesome Tour</h1>
          <div className="flex justify-evenly font-bold text-[#070bee] shadow-md my-6">
            <a className="btn btn-primary">
              <Link>All</Link>
            </a>
            <a className="btn btn-primary">
              <Link>Honeymoon</Link>
            </a>
            <a className="btn btn-primary">
              <Link>Holiday</Link>
            </a>
            <a className="btn btn-primary">
              <Link>Family</Link>
            </a>
            <a className="btn btn-primary">
              <Link>Relax</Link>
            </a>
          </div>
          <div className="relative"><div><img src={Home6} alt="" className="my-6" /></div>
          <div className="absolute bottom-0 w-full bg-blue-600 text-white"><div className="flex justify-evenly font-bold text-xl w-full py-4"><h1>Thailand: Bangkok</h1><h1>travel time-5days</h1><h1><del>$600</del> $400/person</h1>
          
          </div></div>
          </div>
          <div className="relative"><div><img src={Home7} alt="" className="my-6" /></div>
          <div className="absolute bottom-0 w-full bg-blue-600 text-white"><div className="flex justify-evenly font-bold text-xl w-full py-4"><h1>Thailand: Bangkok</h1><h1>travel time-5days</h1><h1><del>$600</del> $400/person</h1>
          
          </div></div>
          </div>
        </div>
      </div>
      {/* Extra two awesome Tour section end */}

      
    </div>
  );
};

export default Home;

