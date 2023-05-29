import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const OptionsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionsBtn = styled.button`
  min-width: 120px;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 32px;

  background: rgba(235, 235, 235, 0.15);
  box-shadow: 0 8px 3px -7px rgba(13, 83, 235, 0.2);
  backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(235, 235, 235, 0.18);
  cursor: pointer;

  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    backdrop-filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(1px) scale(1.05);
    backdrop-filter: none;
  }
`;
