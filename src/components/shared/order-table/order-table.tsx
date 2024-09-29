import { useState } from "react";
import { TableContainer, Column, Div, Department, Container, Text } from "./order-styled";
import { IoIosArrowUp } from "react-icons/io";
import { Data, Company } from "../../../utils/constants";

interface TableProps {
  data?: object;
  element?: object;
  selectEvent?: string;
}

export const OrderTablet = (props: TableProps) => {
  const [column, setColumn] = useState<boolean>(true)
  const [columnAnimate, setColumnAnimate] = useState<boolean>(true)
  const { data, selectEvent, element } = props;
  return (
    <TableContainer>
      <Column>
      {(selectEvent == 'company'? Company : Data).map((items, i)=>{
        return(
        <p key={i} style={{margin: "auto"}}>{items.title}</p>
      )})}
      </Column>
      <Container>

      <Div>
    <Department>  
      <p>Unity Eld LIc</p>
      <IoIosArrowUp style={{cursor: "pointer", rotate: column ? '180deg' : ''}} onClick={()=>{setColumn(!column)}}/>
    </Department>
    {data.map((items, i)=>{
      return(
    <Column key={i} display={column ? 'grid' : 'none'}>
        <Text>{items.company}</Text>
        <Text>{items.name}</Text>
        <Text  color='#FC973A'>{items.violations}</Text>
        <Text>{items.date}</Text>
        <Text  color='#32BE61'>{items.connection}</Text>
        <Text>{items.cycle}</Text>
        <Text  color='#3DA8D5'>{items.update}</Text>
    </Column>
      )})}
      </Div>

      <Div>
    <Department>
      <p>Bakht For Amir Inc</p>
      <IoIosArrowUp style={{cursor: "pointer", rotate: columnAnimate ? '180deg' : ''}} onClick={()=>{setColumnAnimate(!columnAnimate)}}/>
    </Department>
    {element.map((items, i)=>{
      return(
    <Column key={i} display={columnAnimate ? 'grid' : 'none'}>  
        <Text>{items.company}</Text>
        <Text>{items.name}</Text>
        <Text color='#FC973A'>{items.violations}</Text>
        <Text>{items.date}</Text>
        <Text color='#32BE61'>{items.connection}</Text>
        <Text>{items.cycle}</Text>
        <Text color='#3DA8D5'>{items.update}</Text>
    </Column>
      )})}
      </Div>
      </Container>
    </TableContainer>
  );
};
