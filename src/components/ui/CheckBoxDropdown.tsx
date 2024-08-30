import { Button, Checkbox } from "antd";
import { FC } from "react";
import { SlReload } from "react-icons/sl";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 10px;
  padding: 10px;
  width: 312px;
  backdrop-filter: blur(80px);
  box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.97);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Item = styled.div`
  border-radius: 10px;
  padding: 15px 25px;
  width: 292px;
  height: 49px;
  background: #f9f9fa;
`;
const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: orange;
    border-color: orange;
  }
  .ant-checkbox-checked:hover {
  }
  .ant-checkbox-checked::after {
    border-color: orange;
  }

  .ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: white; /* Check mark color */
  }
  .ant-checkbox-input:focus + .ant-checkbox-inner {
  }
`;
interface Props {
  item: string[];
  reloadBtn: boolean;
}
export const CheckboxDropdown: FC<Props> = ({ item, reloadBtn }) => {
  return (
    <Wrapper>
      <Item>
        {item.map((c, i) => (
          <StyledCheckbox
            value="Connect"
            style={{ borderColor: "red" }}
            key={i}
          >
            {c}
          </StyledCheckbox>
        ))}
      </Item>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {reloadBtn && (
          <Button
            type="primary"
            style={{
              background: " #f3f3f4",
              width: "100px",
              color: "#000",
              height: "49px",
            }}
          >
            <SlReload />
          </Button>
        )}
        <Button
          type="primary"
          style={{ background: "orange", width: "100%", height: "49px" }}
        >
          Apply{" "}
        </Button>
      </div>
    </Wrapper>
  );
};
