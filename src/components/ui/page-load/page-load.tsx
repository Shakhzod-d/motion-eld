import { Wrapper } from "./styled";
interface Props {
  bg?: string;
  h?: string;
}
export const PageLoad = ({ bg ,h}: Props) => {
  return (
    <Wrapper $bg={bg} $h={h}>
      <img src="/loader.svg" alt="sasa" />
    </Wrapper>
  );
};
