import styled from 'styled-components';

export const PrevButton = styled.button`
  display: block;
  max-height: 50px;
  max-width: 50px;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 100%;
  font-size: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  top: 50%;
  left: 5%;
  background: rgba(129, 129, 129, 0.5);
  color: white;
  text-decoration: none;
  border: 0px;
`;
export const NextButton = styled.button`
  display: block;
  max-height: 50px;
  max-width: 50px;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 100%;
  font-size: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  top: 50%;
  right: 40%;
  background: rgba(129, 129, 129, 0.5);
  color: white;
  text-decoration: none;
  border: 0px;
`;
export const LightboxWrapper = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(31, 28, 28, 0.5);
  display: flex;
  align-items: center;
  button:hover {
    cursor: pointer;
    background: rgba(172, 170, 170, 0.5);
  }
  button:focus {
    box-shadow: none;
    border-color: transparent;
    outline: 0;
  }
`;

export const ImageLightbox = styled.div`
  background-color: black;
  justify-content: center;
  height: 80vh;
  width: 300%;
  text-align: center;
  display: flex;
`;

export const ContentLightbox = styled.div`
  width: 100%;
  padding: 5%;
  @media (max-width: 991px) {
    visibility: hidden;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 8px;
  top: 0;
  left: 0;
  transform: translateX(13%);
  display: flex;
`;

export const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;
