import styled from 'styled-components';

const Focus = styled.input`
  box-shadow: 0px 3px 3px #aaa;
  &:focus {
    box-shadow: unset !important;
  }
`;

export default Focus;
