import React, { useEffect, useState } from "react";
import PN from "persian-number";
import styled from "styled-components";
import { pink } from "@mui/material/colors";

import ItemCartDialog from "./ItemCartDialog";
import { Link } from "react-router-dom";
import { MobileMode } from "../../../util/MobileMode";

const Container = styled.div`
  max-width: 1000px;
  min-width: ${!MobileMode() ? '750px':'100%'};
  padding-bottom: ${!MobileMode()? null:'70px'};
  height: 100%;
`;
const EmpetyWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
`

const EmpetyIcon = styled.span`
&::before{
  font-size:100pt;
  }
`;
const Title = styled.h1`
  font-size: 20pt;
  width: 100%;
  text-align: center;
  margin: 10px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content:${!MobileMode() ? 'space-between':''} ;
  align-items:${!MobileMode() ? '':'center'} ;

  background-color: #f5f5f5;
  flex-direction: ${!MobileMode() ? '':'column'};

`;
const FinalPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  padding: 10px;
 
`;

const TotalPrice = styled.span`
  font-size: 14pt;
  color: #8b8b8b;
  margin-left: 10px;
`;
const PayablePrice = styled.span`
  font-size: 18pt;
  color: ${pink[500]};
  margin-left: 10px;
`;

const BtnContinue = styled.button`
  font-size: 14pt;
  color: white;
  width: ${!MobileMode()?"30%":"90%"};
  height: 50px;
  margin: 10px;
  background-color: ${pink[500]};
  border: none;
  border-radius: 10px;
`;
const DialogCart = ({ items,onClose,cartSubmit}) => {
  const [totalPrice, setTotalPrice] = useState(
    items.reduce((acc, item) => acc + parseInt(item.price), 0)
  );
  const [payablePrice, setPayablePrice] = useState(
    items.reduce((acc, item) => acc + parseInt(item.priceWithDiscount), 0)
  );

  // useEffect(() => {
  //   items.map((item) => {});
  // }, [items]);


  if(items.length==0){
    return(
      <Container>
        <EmpetyWrapper>
          <EmpetyIcon className='emptyCart-label'/>
        <Title>
          ?????? ?????? ???????? ???? ????????!
        </Title>
        </EmpetyWrapper>
      </Container>
    );
  }
  return (
    <Container>
      <Title>?????? ???????? ?????? </Title>
      {items &&
        items.map((item, index) => {
          return <ItemCartDialog item={item} key={index} />;
        })}

      <Wrapper>
        <FinalPriceWrapper>
          <TotalPrice>
            <span>???????? ???? ??????????: </span>
            <span className="price-label">{PN.convertEnToPe(totalPrice)}</span>
          </TotalPrice>
          <PayablePrice>
            <span>???????? ???????? ????????????: </span>
            <span className="price-label">
              {PN.convertEnToPe(payablePrice)}
            </span>
          </PayablePrice>
        </FinalPriceWrapper>

          
          {
            !MobileMode() ? 
        <BtnContinue onClick={()=>onClose(true)}>
          <Link to="/order" style={{color:'white'}}>?????? ??????????</Link>
        </BtnContinue>
        :
        <BtnContinue onClick={()=>cartSubmit(true)}>
       ?????? ??????????
      </BtnContinue>
          }
          
      </Wrapper>
    </Container>
  );
};

export default DialogCart;
