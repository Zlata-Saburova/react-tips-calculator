import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto 100px;
  width: 100%;
  max-width: 1440px;
  padding: 0 16px;
`;
export const StyledForm = styled.form`
  display: grid;
  gap: 45px;

  margin: 0 auto;
  max-width: 460px;
  padding-top: 170px;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  text-align: center;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  color: rgba(117, 108, 108, 0.57);
`;

export const InputItems = styled.div`
  display: grid;
  gap: 33px;

  margin: 0 auto;
  max-width: 460px;
  width: 100%;
`;

export const AmountWrapper = styled.div`
  display: flex;
`;

export const Total = styled.p`
  margin-right: 10px;

  font-weight: 500;
  font-size: 24px;
  line-height: 35px;

  color: #000000;
`;

export const TotalAmount = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
`;