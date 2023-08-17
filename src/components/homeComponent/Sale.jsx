import { Container } from 'components/SharedLayout.styled';
import { OfferNatural, OfferOffer, Info } from './Sale.styled';
import { SubTitleSt } from 'ui/Title/Title.styled';

function Sale() {
  return (
    <Container style={{ padding: '30px 0', display: 'flex', gap: 100 }}>
      <OfferNatural class="offer__natural">
        <SubTitleSt style={{ color: '#fff' }}>Natural!!</SubTitleSt>
        <Info>Get Garden Fresh Fruits</Info>
      </OfferNatural>
      <OfferOffer className="offer__offer">
        <SubTitleSt>Offer!!</SubTitleSt>
        <Info style={{ color: '#274C5B' }}>Get 10% off on Vegetables</Info>
      </OfferOffer>
    </Container>
  );
}

export default Sale;
