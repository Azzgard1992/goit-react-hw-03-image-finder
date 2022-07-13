import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: ${p => p.theme.sizes.img}px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
