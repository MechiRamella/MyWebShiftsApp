import Dropdown from "../components/Dropdown";

const ShiftUser = () => {
  return (
    <div>
      <div className="clientefinal-reservadelcliente-clientefinal-reservadelcliente">
        <div className="clientefinal-reservadelcliente-reservas">
          <div className="clientefinal-reservadelcliente-pedido-mi-cuenta">
            <div className="clientefinal-reservadelcliente-info">
              <span className="clientefinal-reservadelcliente-text">
                <span>Nombre y Apellido</span>
              </span>
              <span className="clientefinal-reservadelcliente-text002">
                <span>Ivan Cruce</span>
              </span>
            </div>
            <div className="clientefinal-reservadelcliente-info01">
              <span className="clientefinal-reservadelcliente-text004">
                <span>Reserva</span>
              </span>
              <span className="clientefinal-reservadelcliente-text006">
                <span>12/10/2022 - 13:00 hs</span>
              </span>
            </div>
            <div className="clientefinal-reservadelcliente-info02">
              <span className="clientefinal-reservadelcliente-text008">
                <span>Sucursal</span>
              </span>
              <span className="clientefinal-reservadelcliente-text010">
                <span>Villa Crespo</span>
              </span>
            </div>
            <div className="clientefinal-reservadelcliente-info03">
              <span className="clientefinal-reservadelcliente-text012">
                <span>N° de la reserva</span>
              </span>
              <span className="clientefinal-reservadelcliente-text014">
                <span>1141472791015</span>
              </span>
            </div>
            <Dropdown />
          </div>
        </div>
        <span className="clientefinal-reservadelcliente-text126">
          <span>Reservas</span>
        </span>
      </div>
    </div>
  );
};

export default ShiftUser;
