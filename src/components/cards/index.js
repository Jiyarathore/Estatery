import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { list } from "../data/data";
import "./style.css";
import image1 from "../../assets/list1.png";
import image2 from "../../assets/list2.png";
import image3 from "../../assets/list3.png";
import image4 from "../../assets/list4.png";
import image5 from "../../assets/list5.png";
import image6 from "../../assets/list6.png";
import image7 from "../../assets/list7.png";
import image8 from "../../assets/list8.png";
import image9 from "../../assets/list9.png";
import image10 from "../../assets/list10.png";
import image11 from "../../assets/list11.png";
import image12 from "../../assets/list12.png";

export default function MediaCard(props) {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9,image10, image11, image12];
  return (
    <>
      <div className="content grid3">
        {props.list.map((val, index) => {
          const { property_type, location, name, price, beds, bathrooms, area } = val;
          return (
            <div className="card">
              <Card sx={{ maxWidth: 305 }} key={index}>
                <CardMedia
                  component="img"
                  height="140"
                  image={images[index]}
                  alt="house"
                />
                <CardContent>
                  <div className="price_tag flex">
                    <Typography
                      gutterBottom
                      variant="h6"
                      fontWeight="700"
                      color="blue"
                      component="div"
                    >
                      {price}/month
                    </Typography>
                    <Typography>
                      <i className="fa-regular fa-heart"></i>
                    </Typography>
                  </div>
                  <Typography gutterBottom variant="h5" fontWeight="700">
                    {name}
                  </Typography>
                  <Typography variant="body3" color="gray">
                    {location}
                  </Typography>
                  <Typography variant="body2" color="blueviolet">
                    {property_type}
                  </Typography>
                  <hr />
                  <br />
                  <div className="expl flex">
                    <Typography variant="body2">
                      <i className="fa-solid fa-bed"></i>
                      {beds} Beds
                    </Typography>
                    <Typography variant="body2">
                      <i className="fa-solid fa-bath"></i>
                      {bathrooms} Bathrooms
                    </Typography>
                    <Typography variant="body2">
                      <i className="fa-regular fa-layer-group"></i>
                      {area}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}