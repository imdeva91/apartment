import React, { useState, useEffect } from "react";
import { db } from "../Firebase";
import { ImLocation2 } from "react-icons/im";
import "../Styles/Slider.css"

import {
  collection,

  query,
  limit,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Spinner from "./Layout/Spinner";

function Slider() {
  const [listings, setListings] = useState(null);
  const [loding, setLoding] = useState(true);
  const navigate = useNavigate();
  // const userPic =
  //   "https://openclipart.org/download/247319/abstract-user-flat-3.svg";

  useEffect(() => {
    const fetchListing = async () => {
      const listingRef = collection(db, "listings");
      const querys = query(listingRef, orderBy("timestamp", "desc"), limit(4));
      const querySnap = await getDocs(querys);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setLoding(false);
    };
    fetchListing();
    // console.log(listings === null ? "loding" : listings);
    // eslint-disable-next-line
  }, []);

  if (loding) {
    return <Spinner />;
  }

  return (
    <>
      {listings === null ? (
        <Spinner />
      ) : (
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {listings.map(({ data, id }) => (
              <div
                className="carousel-item active mySwipe"
                data-bs-interval={2000}
                key={id}
                onClick={() => { navigate(`/category/${data.type}/${id}`) }}
              >

                <img
                  src={data.imgUrls[0]}
                  className="slider-img"


                  alt={data.name}
                />
                <h4 className=" text-light p-4 m-0 ">
                  {/* <img alt="user pic" src={userPic} height={35} width={35} /> */}
                  <ImLocation2 size={20} className="ms-2" /> Recently Added :{" "}
                  <br />
                  <span className="ms-4 mt-2"> {data.name}</span>
                  <span className="ms-2">
                    | Price ( $ {data.regularPrice} )
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </>
  );
}

export default Slider;
