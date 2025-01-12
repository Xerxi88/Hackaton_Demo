
import styled from 'styled-components';
import market from '../../../assets/images/market.png';
import fair from'../../../assets/images/fair.png'




const CardContainer = styled.section`
  border: 1px solid #ddd;
  border-radius: 15px;
  overflow: hidden; 
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 200px; 
  margin-top: 1rem;
`;

const CardImage = styled.img`
  border-radius: 10px; 
  margin: 10px;
  max-width: 100%;
  height: 70%; 
  object-fit: cover;
`;

const CardTag = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: orange;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  text-align: center;
  font-size: 0.7rem;
`;

const CardTitle = styled.h3`
  margin: 0; 
  height: 30%; 
  display: flex;
  align-items: center; 
  justify-content: center; 
`;

const Card = ({card,setCardSelected}) => {

  return (
        <CardContainer onClick={()=>setCardSelected(card)}>
          <CardImage src={card.type==="Mercado"?market:fair}/>
          <CardTag>{card.type}</CardTag>
          <CardTitle>{card.title}</CardTitle>
        </CardContainer>
  );
}

export default Card;
