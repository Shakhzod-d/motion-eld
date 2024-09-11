import { Flex } from "antd";
import { CustomButton, logsForm, Text } from "../../../utils/constants";
import { FormRow, FormTitle, StyleFlex, ValueBox } from "./form-styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const DriversForm = () => {
  const sidebarActive =useSelector((state:RootState)=>state.booleans.sidebarActive)
  return (
    <section style={{ marginBottom: "40px" }}>
      <Flex
        align="center"
        justify="space-between"
        style={{ marginBottom: "15px" }}
      >
        <Text size={32} $font="500">
          Log form
        </Text>
        <CustomButton
          type="primary"
          $background="#FC973A"
          padding="15px 25px"
          height="50px"
        >
          Correction & Annotation
        </CustomButton>
      </Flex>
      <StyleFlex gap={"15px"} justify="space-between" $active={sidebarActive}>
        <div>
          {logsForm.map((item) => (
            <FormRow key={item.id} align="center">
              <FormTitle>
                <Text color="#8C8C9B" $font="500" size={16}>
                  {item.title}
                </Text>
              </FormTitle>
              {item.title == "Trailers" || item.title == "Shipping docs" ? (
                <ValueBox>
                  <Text size={16} $font="400">
                    {item.value}
                  </Text>
                </ValueBox>
              ) : (
                <Text size={18}>{item.value}</Text>
              )}
            </FormRow>
          ))}
        </div>
        <div>
          {logsForm.map((item) => (
            <FormRow key={item.id} align="center">
              <FormTitle>
                <Text color="#8C8C9B" $font="500" size={16}>
                  {item.title}
                </Text>
              </FormTitle>
              {item.title == "Trailers" || item.title == "Shipping docs" ? (
                <ValueBox>
                  <Text size={16} $font="400">
                    {item.value}
                  </Text>
                </ValueBox>
              ) : (
                <Text size={18}>{item.value}</Text>
              )}
            </FormRow>
          ))}
        </div>
        <div>
          {logsForm.map((item) => (
            <FormRow key={item.id} align="center">
              <FormTitle>
                <Text color="#8C8C9B" $font="500" size={16}>
                  {item.title}
                </Text>
              </FormTitle>
              {item.title == "Trailers" || item.title == "Shipping docs" ? (
                <ValueBox>
                  <Text size={16} $font="400">
                    {item.value}
                  </Text>
                </ValueBox>
              ) : (
                <Text size={18}>{item.value}</Text>
              )}
            </FormRow>
          ))}
        </div>
      </StyleFlex>
    </section>
  );
};
