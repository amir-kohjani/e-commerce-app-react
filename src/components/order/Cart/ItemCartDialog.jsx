import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Divider } from "@mui/material";
import React from "react";
import PN from "persian-number";
import {
  Container,
  Image,
  ImageWrapper,
  InfoWrapper,
  Title,
  Description,
  SizeColorWrapper,
  Size,
  Color,
  PriceWrapper,
  Price,
  DiscountWrapper,
  Discount,
  PriceWithDiscount,
  QuntityWrapper,
  Add,
  Count,
  Remove,
  FimalPriceWrapper,
  FinalPrice,
  ButtonWrapper,
  ConfirmationBtn,
} from "./styles/itemCartDialogStyles";
import CustomDialog from "../../CustomDialog/CustomDialog";
import { green, red } from "@mui/material/colors";

const ItemCartDialog = ({
  item,
  noQuantity = false,
  noPrice = false,
  noDiscount = false,
  removeItem,
}) => {
  const [quantity, setQuantity] = useState();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  useEffect(() => {
    console.log(item)
    if (item.quantity) {
      setQuantity(item.quantity);
    } else {
      setQuantity(1);
    }
  }, []);

  const addQuantityHandler = () => {
    setQuantity((prev) => prev + 1);
  };
  const removeQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else if (quantity == 1) {
      setDeleteConfirmation(true);
    }
  };
  const deleteItem = () => {
    removeItem(item);
    setDeleteConfirmation(false);
  };
  return !deleteConfirmation ? (
    <>
      <Divider />
      <Container>
        <Link to={`/product/${item.id}`}>
          <ImageWrapper>
            <Image src={item.colorSelected.image} />
          </ImageWrapper>
          <InfoWrapper>
            <Title>{item.brand}</Title>
            <Description>{item.title}</Description>
            <SizeColorWrapper>
              <Size>{item.sizeSelected}</Size>
              <Color>{item.colorSelected.name}</Color>
            </SizeColorWrapper>
          </InfoWrapper>
        </Link>
        {!noQuantity && (
          <QuntityWrapper>
            <Add className="add-label" onClick={() => addQuantityHandler()} />
            <Count>{PN.convertEnToPe(quantity)}</Count>
            <Remove
              className="remove-label"
              onClick={() => removeQuantityHandler()}
            />
          </QuntityWrapper>
        )}
        {!noDiscount &&
          (item.discount ? (
            <PriceWrapper>
              <Price className="price-label">{item.price}</Price>
              <DiscountWrapper>
                <Discount>{PN.convertEnToPe(item.discount)}</Discount>
              </DiscountWrapper>
            </PriceWrapper>
          ) : null)}
        {!noPrice && (
          <FimalPriceWrapper>
            <FinalPrice className="price-label">
              {item.discount
                ? PN.convertEnToPe(item.priceWithDiscount)
                : PN.convertEnToPe(item.price)}
            </FinalPrice>
          </FimalPriceWrapper>
        )}
      </Container>
    </>
  ) : (
    <Container>
      <Title>محصول از سبد شما حذف شود؟!</Title>
      <ButtonWrapper>
        <ConfirmationBtn backgroundColor={green[500]} onClick={()=>deleteItem()}>بله</ConfirmationBtn>
        <ConfirmationBtn backgroundColor={red[500]} onClick={()=>setDeleteConfirmation(false)}>خیر</ConfirmationBtn>
      </ButtonWrapper>
    </Container>
  );
};

const Test = () => {
  return (
    <CustomDialog open={true}>
      <h1>test</h1>
    </CustomDialog>
  );
};

export default ItemCartDialog;
