import { Flex } from "antd";
import { TransparentButton } from "../../../pages/ifta-reports/ifta-reports-styled";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
import { FaAudioDescription } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import {
  H2,
  Name,
  P,
  Phone,
  Status,
  StyledDatePicker,
} from "./driver-info-styled";
import { useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const dateFormat = "DD-MM-YYYY";

export const DriverInfo = () => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <Flex justify="space-between">
      <Flex gap={15}>
        <Flex gap={5}>
          <Link to={"/logs/drivers"}>
            <TransparentButton padding="20px 15px" width="54px" height="75px">
              <FaArrowLeft fill="#5D5E5F" />
            </TransparentButton>
          </Link>

          <TransparentButton padding="15px 20px" height="75px" width="403px">
            <Flex gap={64} align="center">
              <Flex vertical>
                <Name>Jonibek Muradov</Name>
                <Phone>
                  Phone No:{" "}
                  <span onClick={() => setShowPhone((prev) => !prev)}>
                    {showPhone ? " +998 33 340 02 03" : " Show phone"}
                  </span>
                </Phone>
              </Flex>

              <Flex gap={12} align="center">
                <Status background="#FC973A">Sleep</Status>
                <DiAndroid fill="#BABAC1" size={24} />
                <FaAudioDescription fill="#BABAC1" size={24} />
              </Flex>
            </Flex>
          </TransparentButton>
        </Flex>

        <Flex gap={5}>
          <TransparentButton
            padding="15px 20px"
            width="200px"
            height="75px"
            display="block"
          >
            <Flex vertical align="start" justify="start">
              <P>Worked hours:</P>
              <H2>No Working hours</H2>
            </Flex>
          </TransparentButton>
        </Flex>

        <Flex gap={5}>
          <TransparentButton
            padding="15px 20px"
            width="200px"
            height="75px"
            display="block"
          >
            <Flex vertical align="start" justify="start">
              <P>Certified:</P>
              <H2 color="#EF3E2D">No</H2>
            </Flex>
          </TransparentButton>
        </Flex>

        <Flex gap={5}>
          <TransparentButton
            padding="15px 20px"
            width="200px"
            height="75px"
            display="block"
          >
            <Flex vertical align="start" justify="start">
              <P>Violations:</P>
              <H2>No</H2>
            </Flex>
          </TransparentButton>
        </Flex>
      </Flex>

      <Flex gap={5}>
        <StyledDatePicker
          defaultValue={dayjs("03-10-2024", dateFormat)}
          minDate={dayjs("2019-08-01", dateFormat)}
          maxDate={dayjs("2020-10-31", dateFormat)}
        />

        <Flex gap={2}>
          <TransparentButton
            padding="10px 20px"
            width="52px"
            height="75px"
            border="10px 0px 0px 10px"
          >
            <MdOutlineKeyboardArrowLeft size={24} />
          </TransparentButton>
          <TransparentButton
            padding="10px 20px"
            width="52px"
            height="75px"
            border="0 10px 10px 0px"
          >
            <MdOutlineKeyboardArrowRight size={24} />
          </TransparentButton>
        </Flex>
      </Flex>
    </Flex>
  );
};
