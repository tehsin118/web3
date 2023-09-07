import React, { useEffect, useState } from "react";
import marketplaceContract from "../contracts/marketplace";
import mintContract from "../contracts/mintContract";
import { useAccount } from "wagmi";
import axios from "axios";
import Countdown from "react-countdown";

const GetNft = () => {
  const [Uris, setUris] = useState([]);
  const [endTimes, setEndTime] = useState([]);
  const { address } = useAccount();

  const myData = async () => {
    setUris([]);
    try {
      await marketplaceContract.methods
        .getAuctionListedNfts(address)
        .call()
        .then((res) => {
          res[1].map(async (item, index) => {
            await mintContract.methods
              .tokenURI(item[0].tokenId.toString())
              .call()
              .then((tokenUri) => {
                axios.get(tokenUri).then((data) => {
                  setUris((prev) => [
                    ...prev,
                    {
                      data: data.data,
                      endtime: parseInt(item[0].endTime.toString()),
                    },
                  ]);
                });
                // setEndTime(parseInt(item[0].endTime.toString()));
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      console.log("time3", endTimes);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    myData();
  }, []);
  useEffect(() => {
    console.log("time", endTimes);
  }, [endTimes]);

  return (
    <div>
      <h6>{address}</h6>
      <div className="row">
        {Uris.map((item, index) => {
          return (
            <div className="col-2">
              <div class="card" style={{ width: "18rem" }}>
                <img src={item.data.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.data.name} </h5>
                  <h5 class="card-title">{index} </h5>
                  <h6>Price: {item.data.price}</h6>

                  <Countdown date={item.endtime * 1000} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetNft;
