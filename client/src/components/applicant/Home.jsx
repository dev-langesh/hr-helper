import { useNavigate } from "react-router-dom";

import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="land flex-col items-center">
        <div className="flex justify-around items-center p-5 sm:mt-0 md:mt-0 mt-14">
          <div>
            <h1 className="sm:text-6xl md:text-6xl text-3xl text-white font-extrabold">
              The Best Place to get Hired
            </h1>
            <p className="mt-2 sm:text-xl md:text-xl   text-sm text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              distinctio.
            </p>
            <div className="flex justify-center">
              <a
                href="#team"
                className="mt-4 bg-blue-700 sm:py-2 md:py-2 sm:px-8 md:px-8 py-2 px-4  rounded-md bttn2 font-bold text-white sm:text-2xl md:text-2xl text-sm"
              >
                Learn More
              </a>
            </div>
          </div>
          <div>
            <img src="/logo3.png" width={400} alt="Data Science" />
          </div>
        </div>
      </div>
      {/* Section */}

      <div className="px-2 bg-blue-200">
        <br />
        <hr className=" border-2" />
        <div id="team" className=" sm:flex md:flex justify-around p-5">
          <div className="sm:w-1/2 ms:w-1/2">
            <h1 className="text-3xl font-bold text-blue-800">Our Story</h1>
            <p className="mt-2 p-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              nesciunt vitae alias ad ut quam debitis quisquam dolore, quasi,
              voluptatum praesentium officia. Expedita pariatur, modi sapiente
              itaque reiciendis, ratione porro repudiandae suscipit dolor veniam
              odit at labore nihil sed et eligendi perferendis illum quis
              laborum veritatis sit obcaecati nam temporibus. Dignissimos
              quaerat mollitia recusandae autem animi. Iusto vel eveniet eaque
              temporibus, obcaecati laudantium soluta dolores voluptatem? Sequi
              dolores quam voluptatibus quisquam eaque quos enim, rem assumenda
              ab esse nemo expedita corporis at minus iusto! Accusantium quia
              culpa numquam in doloremque placeat eveniet laboriosam provident
              tempore minima, consectetur aut, illum corrupti?
            </p>
          </div>
          <div className="mt-4">
            <img
              src="/comapny.jpg"
              className="shadow-xl rounded-lg"
              width={350}
              alt=""
            />
          </div>
        </div>
        <br />
        <hr className="border-2" />
        <div className="sm:flex md:flex justify-around p-5">
          <div className="mt-7">
            <img
              src="/people.jpg"
              className="shadow-xl rounded-lg mb-2"
              width={350}
              alt=""
            />
          </div>
          <div className="sm:w-1/2 md:w-1/2">
            <h1 className="text-3xl font-bold text-blue-800">Meet Our Team</h1>
            <p className="mt-2 p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores libero repellat consequuntur assumenda sed aut qui,
              tenetur officia minima, accusantium, quos quisquam nihil! Illo
              officiis iure sapiente minus eum accusantium, porro, similique
              quibusdam neque vel necessitatibus ducimus sed reiciendis!
              Mollitia rerum aliquid corrupti error, eius natus doloribus animi?
              Quo et aliquid, cum, praesentium veritatis eos nostrum qui
              laudantium esse libero ea similique voluptas cumque dolore quaerat
              eum, numquam eaque nesciunt. Excepturi commodi reiciendis rerum
              quam, aspernatur molestiae nulla suscipit ipsa soluta similique
              vitae quibusdam neque minima, tempore debitis cum nisi, nemo qui
              possimus! Atque rem quod officia iure unde. Magni.
            </p>
          </div>
        </div>
        <br />
        <hr className="border-2" />
        <br />
      </div>
      {/* Footer */}
      <div className="bg-blue-900">
        <div className="flex justify-around ">
          <div className="flex-col  p-5">
            <p className="mt-5">
              <a href="#" className="text-white foot font-bold text-md">
                Contact Us
              </a>
            </p>
            <p className="mt-5">
              <a href="#" className="text-white foot font-bold text-md">
                About Us
              </a>
            </p>
            <p className="mt-5">
              <a href="#" className="text-white foot font-bold text-md">
                Directions
              </a>
            </p>
          </div>
          <div className="flex-col p-5">
            {" "}
            <p className="mt-5">
              <a href="#" className="text-white foot font-bold text-md">
                Contact Us
              </a>
            </p>
            <p className="mt-5">
              <a href="#" className="text-white foot font-bold text-md">
                About Us
              </a>
            </p>
            <p className="mt-5">
              <a href="#" className="text-white foot font-bold text-md">
                Directions
              </a>
            </p>
          </div>
        </div>
        <div className="mt-5 flex justify-around bg-blue-900 pb-5">
          <h1 className="text-white text-lg font-semibold">
            Follow us on
            <a href="#" className="ml-6 text-2xl foot">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#" className="ml-4 text-2xl foot">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" className="ml-4 text-2xl foot">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" className="ml-4 text-2xl foot">
              <i class="bi bi-youtube"></i>
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
