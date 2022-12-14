import React, { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {
  Alert,
  CircularProgress,
  Divider,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import CustomSpinner from "../../components/customSpinner/CustomSpinner";
import {
  Wrapper,
  WrapperInfo,
  Title,
  PropertyContainer,
  InfoContainer,
  Categoyr,
  Brand,
  Description,
  PriceContainer,
  PriceAndDiscountWrapper,
  Price,
  Discount,
  CurrentPrice,
  FilterContainer,
  Filter,
  FilterTitle,
  WrapperBtn,
  ButtonAddToCart,
  DeliveryInfo,
  ImgContainer,
  ErrorMassage,
} from "./styles/DesctopStyles";

import ImageSlideProduct from "../../components/ImageSlideProduct/ImageSlideProduct";
import CustomRadioBtnContainer from "../../components/CustomRadioButton/CustomRadioBtnContainer";
import Select from "../../components/customSelect/Select";
import { pink } from "@mui/material/colors";
import PN from "persian-number";
import CustomSnakbar from "../../components/snakbar/CustomSnakbar";
import { useEffect } from "react";

// import ListComments from "../components/ListComments";

const DesktopWrapper = ({ addToCart, product }) => {
  const [data, setData] = useState(product);
  const [openSnakbar, setOpenSnakbar] = useState(false);
  const [loadingProduct, setLoadingProduct] = useState(false);
 

  const snakbarHandler = (open) => {
    setOpenSnakbar(open);
  };
  const selectColorHandler = (color) => {
    setData({ ...data, colorSelected: color });
  };
  const selectSizeHanlder = (size) => {
    setData({ ...data, sizeSelected: size });
  };
  const addToCartHandler = () => {
    //this func add product to cart and this is just for test
    if (!loadingProduct) {
      setLoadingProduct(true);
      setTimeout(() => {
        setLoadingProduct(false);
        addToCart(data);
        snakbarHandler(true);
      }, 2000);
    }
  };

  useEffect(() => {

    setData(product);
  }, [product]);

  return (
    <Wrapper>
      <WrapperInfo>
        <InfoContainer>
          <Title>{data.title}</Title>
          <Divider />
          <PropertyContainer>
            <InfoContainer>
              <Categoyr>
                <span>???????? ????????:</span>
                <a>{data.category}</a>
              </Categoyr>
              <Brand>{data.brand}</Brand>
              <Description>{data.desc}</Description>
            </InfoContainer>
            <PriceContainer>
              <PriceAndDiscountWrapper>
                <Price className="price-label">
                  <span> {PN.convertEnToPe(data.price)}</span>
                </Price>
                <Discount>
                  <span>???????? ???????? ?????? :</span>
                  <span>{PN.convertEnToPe(data.discount)}%</span>
                </Discount>
              </PriceAndDiscountWrapper>
              <CurrentPrice className="price-label">
                <span>{PN.convertEnToPe(data.priceWithDiscount)}</span>
              </CurrentPrice>
            </PriceContainer>
          </PropertyContainer>
          <FilterContainer>
            {data.colors && (
              <Filter>
                <FilterTitle>?????? ????????</FilterTitle>
                <CustomRadioBtnContainer
                  colors={data.colors}
                  selectedColor={selectColorHandler}
                />
              </Filter>
            )}

            {data.sizes && (
              <Filter>
                <FilterTitle>????????</FilterTitle>

                <Select
                  items={data.sizes}
                  defaultValue={"???????????? ????????"}
                  onSelected={selectSizeHanlder}
                />
              </Filter>
            )}
          </FilterContainer>
          <WrapperBtn>
            <ButtonAddToCart
              onClick={addToCartHandler}
              disabled={data.colorSelected && data.sizeSelected ? false : true}
            >
              {loadingProduct ? (
                <CircularProgress color="primary" size={40} />
              ) : (
                "    ???????????? ???? ?????? ????????!"
              )}
            </ButtonAddToCart>
            <ErrorMassage
              show={data.colorSelected && data.sizeSelected ? false : true}
            >
              ???????? ?????????? ?????? ?????????? ???????? ?????? ???? ???????????? ????????????!
            </ErrorMassage>
          </WrapperBtn>
          <Divider />
          <DeliveryInfo className="shoppingCar-label">
            <div>
              <h3>?????????? ????????????</h3>
              <p>???????? ???????? ?????? ?????????? ?????? ???????? ??????????</p>
            </div>
          </DeliveryInfo>
        </InfoContainer>
      </WrapperInfo>
      <ImgContainer>
        <ImageSlideProduct item={data} />
      </ImgContainer>
      <CustomSnakbar
        open={openSnakbar}
        onClose={() => setOpenSnakbar(false)}
        message="?????????? ???? ???????????? ???? ?????? ?????? ?????????? ????!"
      />

      {/* <CustomSpinner/> */}
    </Wrapper>
  );
};

export default DesktopWrapper;
