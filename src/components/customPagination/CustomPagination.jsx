import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PaginationItem } from "@mui/material";
import PN from "persian-number";
const CustomPagination = ({ COLOR = "#e94560", TEXTCOLOR = "#fff" }) => {
  const [color] = useState(COLOR);
  const [textColor] = useState(TEXTCOLOR);
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    window.innerWidth < 480 ? setMobileMode(true) : setMobileMode(false);
  });
  const Theme = createTheme({
    palette: {
      color: {
        main: color,
        contrastText: textColor,
      },
    },
  });
  return (
    <ThemeProvider theme={Theme}>
      <Pagination
        count={5}
        shape="rounded"
        size={mobileMode ? "medium" : "large"}
        color="color"
        // renderItem={(item) => (
        //   <PaginationItem 
        //   component={(props)=><button {...props}>{PN.convertEnToPe( item.page)}</button>} />
        // )}
      />
    </ThemeProvider>
  );
};

export default CustomPagination;
