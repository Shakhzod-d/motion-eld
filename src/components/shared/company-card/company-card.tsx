import { useState } from "react";
import { BtnGroup, Card } from "./company-styled";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { Button, Modal } from "antd";

interface CompanyCardProps {
  data: object;
}

const CompanyCard = ({}: CompanyCardProps) => {
  const [open, setOpen] = useState<boolean>(false);
  // console.log(data);

  return (
    <>
      <Card>
        <div className="card-name">
          <div className="card-img">
            <img src="/src/assets/company-logo.png" alt="logo" />
          </div>
          <div>
            <h2>Sandbox Motions</h2>
            <p>
              <FaPhoneAlt />
              <span>8184015296</span>
            </p>
            <p>
              <IoIosMail />
              <span>support@asritsolutions.com</span>
            </p>
          </div>
        </div>
        <div className="card-status">
          <span>Active</span>
        </div>
        <div className="card-contact">
          <p>
            <FaUser />
            <span>Farmon Muhammadiyev (Owner)</span>
          </p>
          <p>
            <FaPhoneAlt />
            <span>(318) 818-0000</span>
          </p>
          <p>
            <IoIosMail />
            <span>zavajan96@gmail.com</span>
          </p>
        </div>
        <div className="card-created">
          <p>Created: Apr 3rd 2023 </p>
          <p>Edited: Apr 3rd 2023</p>
        </div>
        <div className="card-edit" onClick={() => setOpen(!open)}>
          <CiEdit />
          <span>Edit</span>
        </div>
      </Card>
      <Modal
        title=""
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <BtnGroup className="close-btns">
          <Button className="btn-default">Clear Form</Button>
          <div>
            <Button className="btn-default" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button className="btn-primary" onClick={() => setOpen(false)}>
              Save
            </Button>
          </div>
        </BtnGroup>
      </Modal>
    </>
  );
};

export default CompanyCard;
