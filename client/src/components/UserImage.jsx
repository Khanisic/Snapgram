import { Box } from "@mui/material";
import FlexBetween from "./FlexBetween";

const UserImage = ({ image, size = "60px", firstName }) => {
  return (
    <Box width={size} height={size}>
    {
      image && image.length > 10 ?
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${image}`}
      />
      :
      <FlexBetween >
      <div style={{ backgroundColor : 'grey', width : '60px', height : '60px', borderRadius : '100%', display : 'grid', placeItems : 'center'}}>
        <p style={{ fontSize : '16px'}}>
        {firstName && firstName.slice(0,1)}
        </p>
      </div>
      </FlexBetween>
    }
    </Box>
  );
};

export default UserImage;
