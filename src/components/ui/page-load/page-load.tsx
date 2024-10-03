import { Wrapper } from "./styled";
interface Props {
  bg?: string;
}
export const PageLoad = ({ bg }: Props) => {
  return (
    <Wrapper $bg={bg}>
      <img src="/loader.svg" alt="sasa" />
    </Wrapper>
  );
};
