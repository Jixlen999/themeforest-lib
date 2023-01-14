import styled from 'styled-components';

export const EmailFieldWrapper = styled.div`
  width: 445px;
  border-radius: 6px;
  background: #c9dcec;
  display: flex;
  justify-content: space-between;
`;
export const EmailInput = styled.input`
  width: auto;
  padding: 15px 25px;
  background-color: transparent;
  border: none;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
  &:focus {
    outline: none;
  }
`;
export const EmailButton = styled.div`
  width: 125px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  background-color: white;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 6px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;
