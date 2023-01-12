import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: #000;
  backdrop-filter: blur(1.875rem);

  section {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.9px);
    -webkit-backdrop-filter: blur(3.9px);
  }

  .form-Group {
  }
`;
