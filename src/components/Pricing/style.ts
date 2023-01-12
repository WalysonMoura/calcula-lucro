import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: #000;
  color: antiquewhite;
  backdrop-filter: blur(1.875rem);

  form {
    background: rgba(255, 255, 255, 0);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.9px);
    -webkit-backdrop-filter: blur(3.9px);

    h2 {
    }
  }

  .form-Group {
    .input-group {
      input {
       
        background: rgba(37, 37, 37, 0.27);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(37, 37, 37, 1);
      }
    }
  }
`;
