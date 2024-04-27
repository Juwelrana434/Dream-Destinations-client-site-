import Home1 from "../../src/assets/cox.jpg";
import Home2 from "../../src/assets/saint.jpg";
import Home3 from "../../src/assets/kuala.jpg";
import Home4 from "../../src/assets/Bangkok.jpg";
import Home5 from "../../src/assets/halong.jpg";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });
  const tourspots = useLoaderData();
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
            <div className="absolute z-10 top-[60%] right-[20%]"><h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">Plan Your Traveling With Us </h1> <button className="btn btn-primary my-4">View Details</button></div>
          <div className="absolute z-10 top-[20%] left-[70%]"><h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">Saint Martin </h1></div>
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
            <div className="absolute z-10 top-[60%] right-[20%]"><h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">Plan Your Traveling With Us </h1> <button className="btn btn-primary my-4">View Details</button></div>
          <div className="absolute z-10 top-[20%] left-[70%]"><h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">Cox's Bazar </h1></div>
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
            <div className="absolute z-10 top-[60%] right-[20%]"><h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">Plan Your Traveling With Us </h1> <button className="btn btn-primary my-4">View Details</button></div>
          <div className="absolute z-10 top-[20%] left-[70%]"><h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">Halong Bay </h1></div>
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
            <div className="absolute z-10 top-[60%] right-[20%]"><h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">Plan Your Traveling With Us </h1> <button className="btn btn-primary my-4">View Details</button></div>
          <div className="absolute z-10 top-[20%] left-[70%]"><h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">Halong Bay </h1></div>
          </div>
          <div className="absolute z-10 top-[60%] right-[20%]"><h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">Plan Your Traveling With Us </h1> <button className="btn btn-primary my-4">View Details</button></div>
          <div className="absolute z-10 top-[20%] left-[70%]"><h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#0e25f2]">kuala Lumpur </h1></div>
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
                  src={tourspot.image_url}
                  className="w-full h-[280px] border-2 rounded-md border-gray-100 p-4 shadow-md"
                />
              </div>
              <div className="">
                <h2 className="card-title my-2 px-4">
                  {tourspot.tourists_spot_name}
                </h2>
                <div className="flex justify-between items-center px-4">
                  <p>{tourspot.location}</p>
                  <p className="p-4">{tourspot.country_name}</p>
                </div>
                <div className="card-actions justify-end ">
                  <div className="w-full my-4 px-4">
                    <Link to={`/tourspot/${tourspot.id}`}>
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
      <div></div>
    </div>
  );
};

export default Home;

{
  /* <div className="bg-[url('/img/hero-pattern.svg')]">
  <!-- Your Code -->
</div> */
}
//style = {{backgroundImage: `url("https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}
