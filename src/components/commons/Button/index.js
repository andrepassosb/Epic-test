
import styled, { css } from 'styled-components';

const ButtonBlue = css`
color: #417de0;
`;

const ButtonDefault = css`
background-image: linear-gradient(90deg, #417de0, #6799ec);
color: white;
;
`;

export const Button = styled.button`
  border: 0;
  font-weight: bold;
  width: 100%;
  height: 75px;
  
  ${(props) => {
    if (props.ghost) {
      return ButtonBlue;
    }
    return ButtonDefault;
  }}
  border-radius: 15px;
  transition: all .2s;
  &:hover,
  &:focus {
    transform: translateY(-4px)
  }`

export const ButtonPM= styled.button`
  border: 2px solid #ebebeb;
  font-weight: 500;
  width: 300px;
  height: 110px;
  background:white;
  
  
  border-radius: 15px;
  transition: all .2s;
  &:hover,
  &:focus {
    background:#f5f7ff;
    border:2px solid #8ba1ff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }`

const ButtonImage = styled.img`
width: 50px; 
height: 50px;
background: #f2f7ff;
border-radius: 10px;
padding:5px;
}
`
const Box = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: center; 
padding:20px;
`

  export function ButtonPaymentMethod({image, text}){
    return(
      <ButtonPM>
        <Box>
        <ButtonImage
         src={image}
        />
        <div style={{paddingLeft:'15px'}}>{text}</div>
        </Box>
      </ButtonPM>
    );
  }