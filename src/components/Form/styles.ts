import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  gap: 45px;

  margin: 0 auto;
  max-width: 460px;
  padding-top: 170px;
  width: 100%;

  @media (max-width: 1024px) {
    max-width: 340px;
  }
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 35px;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  color: rgba(117, 108, 108, 0.57);

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const InputContainer = styled.div`
  display: grid;
  gap: 33px;

  margin: 0 auto;
  max-width: 460px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 17px;
    max-width: 340px;
  }
`;

const Total = styled.p`
  margin-right: 10px;

  font-weight: 500;
  font-size: 24px;
  line-height: 35px;

  color: #000000;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export { StyledForm, Title, Text, InputContainer, Total };
