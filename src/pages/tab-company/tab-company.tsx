import {
  AddBtn,
  CustomInput,
  Div,
  Label,
  Note,
  StyleFlex,
  UploadBtn,
} from "./styled";
import { TiDownload } from "react-icons/ti";
import { Text } from "../../utils/constants";
import { FaPlus } from "react-icons/fa6";

export const TabCompany = () => {
  return (
    <div>
      <StyleFlex gap={"small"} align="center">
        <Div>
          <Label>Company Name*</Label>
          <CustomInput />
        </Div>
        <Div>
          <Label>USDOT*</Label>
          <CustomInput />
        </Div>
        <Div>
          <Label>Terminal Address*</Label>
          <CustomInput />
        </Div>
        <AddBtn type="primary">
          <FaPlus />
        </AddBtn>
      </StyleFlex>

      <StyleFlex gap={"small"} align="center">
        <Div>
          <Label>Country</Label>
          <CustomInput />
        </Div>
        <Div>
          <Label>Status</Label>
          <CustomInput />
        </Div>
        <Div>
          <Label>Zip</Label>
          <CustomInput />
        </Div>
        <Div>
          <Label>City</Label>
          <CustomInput />
        </Div>
      </StyleFlex>

      <StyleFlex gap={"small"} align="center">
        <Div>
          <Label>Address Line 1</Label>
          <CustomInput />
        </Div>
        <Div>
          <Label>Address Line 2</Label>
          <CustomInput />
        </Div>
        <Div>
          <Label>Company Timezone*</Label>
          <CustomInput />
        </Div>
        <Div>
          <Label>State</Label>
          <CustomInput />
        </Div>
      </StyleFlex>

      <StyleFlex gap={"small"} align="center">
        <Div>
          <Label>Start of week</Label>
          <CustomInput />
        </Div>
        <Div>
          <Label>Email</Label>
          <CustomInput />
        </Div>
        <Div>
          <Label>Password</Label>
          <CustomInput />
        </Div>
        <Div>
          <Label>Phone Number</Label>
          <CustomInput />
        </Div>
      </StyleFlex>
      <UploadBtn>
        <TiDownload />
        <Text> Upload company logo</Text>
      </UploadBtn>
      <Note placeholder="Note" />
    </div>
  );
};
