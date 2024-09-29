import { Flex } from "antd";
import { CustomButton, Wrapper, CustomContainer, StyledImage, ChartWrapper } from "./diagrams-styled";
import { CustomProgress, Chart } from "../../ui";
import { circleDiagram, Text } from "../../../utils/constants";
import ChartImage from '../../../assets/images/chartday.svg'

export const Diagrams = () => {
  let options = {
    chart: {
      background: 'transparent',
      padding: 0,
      height: 250,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [2],
      curve: 'stepline'
    },
    title: {
      align: 'left'
    },
    xaxis: {
      categories: ['M','1','2','3','4','5','6','7','8','9','10','11','N','1','2','3','4','5','6','7','8','9','10','11','M'
      ],
      labels: {
        style: {
          color: ['#32BE61'],
          fontSize: '0px',
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (value: string | number) => {
          switch (value) {
            case 0: return 'On';
            case 1: return 'Dr';
            case 2: return 'Sb';
            case 3: return 'Off';
            default: return '';
          }
        },
        style: {
          fontSize: '0px',
        }
      },
    }
  }
  let hours = [
    {
      name: 'Status',
      data: [0, 1, 2, 3, 1, 0, 2, 3, 1, 0, 2, 3, 1, 0, 1, 2, 3, 1, 0, 2, 3, 1, 0, 3]
    },
  ] 
  return (
    <>
      <Wrapper>
        <Flex justify="space-between" align="center">
          <Flex gap={"middle"} align="center">
            {circleDiagram.map((item) => (
              <Flex gap={"small"} key={item.id} align="center">
                <Flex gap={"small"}>
                  <Text color={item.color} $font="500">
                    {item.title}
                  </Text>
                  <Text $font="bold">{item.valueData}</Text>
                </Flex>
                <CustomProgress percent={item.value} color={item.color} />
              </Flex>
            ))}
          </Flex>

          <Flex gap={"small"} style={{ margin: "20px 0" }}>
            <CustomButton>Report</CustomButton>
            <CustomButton>Certify</CustomButton>
            <CustomButton>Duplicate</CustomButton>

            <CustomButton>Al check</CustomButton>
            <CustomButton>Correction</CustomButton>
            <CustomButton>Current Location</CustomButton>
            <CustomButton>EHF</CustomButton>
          </Flex>
        </Flex>
        <CustomContainer>
          <StyledImage src={ChartImage}/>
          <ChartWrapper>
            <Chart options={options} series={hours} type={'line'} height={180} width={50}/>
          </ChartWrapper>
        </CustomContainer>
      </Wrapper>
    </>
  );
};
