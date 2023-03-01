import { FaStar, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";

const DivStyles = styled.div`
  margin: 10px;
  width: 350px;
`;

const Card = ({ data }) => {
  // console.log(data);
  const {
    AltKategori,
    AnaKategori,
    AraKategori,
    Barkod,
    BarkodListesi,
    Birim,
    DovizTuru,
    Durum,
    Fiyat,
    GorselBuyuk,
    GorselKucuk,
    GtipCode,
    KDV,
    Marka,
    OzelKod,
    Stok,
    StokBalgat,
    StokMacun,
    UreticiKodu,
    UrunAciklama,
    UrunAciklama2,
    UrunAciklama3,
    UrunAciklama4,
    UrunDetaylari,
    UrunDetaylariGenel,
    UrunID,
    UrunKodu,
  } = data;
  return (
    <DivStyles>
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img
              src={GorselBuyuk}
              className="card-img img-fluid"
              width={96}
              height={350}
              alt=""
            />
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <a href="#" className="text-default mb-2" data-abc="true">
                {UrunAciklama}
              </a>
            </h6>
            <a href="#" className="text-muted" data-abc="true">
              {Marka}
            </a>
          </div>
          <h3 className="mb-0 font-weight-semibold">
            {Fiyat}
            {DovizTuru}
          </h3>
          <div>
            <FaStar size={22} color=" #d35400" />
            <FaStar size={22} color=" #d35400" />
            <FaStar size={22} color=" #d35400" />
            <FaStar size={22} color=" #d35400" />
            <FaStar size={22} color=" #d35400" />
          </div>
          <div className="text-muted mb-3">34 reviews</div>
          <button type="button" className="btn bg-cart">
            <FaCartPlus className="me-2" size={22} color="white" /> Add to cart
          </button>
        </div>
      </div>
    </DivStyles>
  );
};

export default Card;
