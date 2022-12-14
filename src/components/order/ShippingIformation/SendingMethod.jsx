import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { pink } from "@mui/material/colors";
import ToggleSenddingItem from "./ToggleSenddingItem";
import { MobileMode } from "../../../util/MobileMode";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  background-color: #f9fafb;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 12pt;
  font-weight: normal;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
`;

const Info = styled.p`
  padding: 10px;
  font-size: 10pt;
  color: gray;
`;

const toggleButtonGroupStyle = {
  padding: "10px",
  direction: "rtl",
  background: "none",
  display: !MobileMode() ? '':'flex',
  flexDirection:!MobileMode() ? '' : 'column',
  justifyContent: "center",
  ".Mui-selected": {
    border: `2px solid ${pink[500]} !important`,
    background: "none !important",
  },
};
const toggleButtonStyle = {
  width:!MobileMode()? "40%" : '100%',
  marginRight:!MobileMode() ?"20px !important":"0px !important",
  marginTop: "20px !important",
  border: "none",
  borderRadius: "10px !important",
};

const SendingMethod = ({submitIndex}) => {
  const [alignment, setAlignment] = useState("");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    submitIndexHandler(newAlignment);
  };

  const submitIndexHandler = (newAlignment) => {
    submitIndex(newAlignment);
  };




  return (
    <Container>
      <Header>
        <Title>شیوه ارسال</Title>
      </Header>
      <Wrapper>
        <Info>لطفا نحوه ارسال کالای حود را انتخاب نمایید !</Info>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={toggleButtonGroupStyle}
        >
          <ToggleButton value={'tipax'} size="small" sx={toggleButtonStyle}>
            <ToggleSenddingItem icon='./images/tipax.jpg' title='تیپاکس' description='ارسال تا ۷۲ ساعت کار-۱۰ هزار تومان تخفیف' price='۱۹۰۰۰' />
          </ToggleButton>
          
          <ToggleButton value={'pishtaz'} size="small" sx={toggleButtonStyle}>
            <ToggleSenddingItem icon='./images/pishtaz.jpg' title='پست پیشتاز' description='تا ۷۲ ساعت کاری' price='۲۵۰۰۰' />
          </ToggleButton>
          
        </ToggleButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default SendingMethod;
