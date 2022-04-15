import styled from "styled-components";

export const Select = styled.select`
  border-radius: 30px;
  max-width: 456px;
  width: 100%;

  padding: 20px 20px;

  background: #ffffff;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: rgba(117, 108, 108, 0.6);

  @media (max-width: 1024px) {
    max-width: 332px;
  }
`;
