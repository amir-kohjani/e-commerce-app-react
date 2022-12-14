import React, { setState, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import { mobile } from "../responsive";
const Container = styled.div`
  width: 100%;
height: 100%;
max-height: 350px;

`;

const Wrapper = styled.div``;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SliderTop = ({ items }) => {
  const [slidToShowCount, setSlidToShowCount] = useState(1);

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidToShowCount,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    arrows: false
  };
  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          {items.map((item, index) => (
            <ImgContainer key={index}>
              <Image src={item.img} key={index} />
            </ImgContainer>
          ))}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default SliderTop;
