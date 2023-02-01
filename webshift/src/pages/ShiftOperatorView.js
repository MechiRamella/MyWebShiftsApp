import DropdownOperator from "../components/DropdownOperator";

const ShiftOperatorView = () => {
  return (
    <div>
      <div className="operador-visualizacindereservas-operador-visualizacindereservas">
        <div className="operador-visualizacindereservas-reservas">
          <div className="operador-visualizacindereservas-pedido-mi-cuenta">
            <div className="operador-visualizacindereservas-info">
              <span className="operador-visualizacindereservas-text Regular·12·16">
                <span>Nombre</span>
              </span>
              <span className="operador-visualizacindereservas-text002 Semibold·14·16">
                <span>Ivan Cruce</span>
              </span>
            </div>
            <div className="operador-visualizacindereservas-info01">
              <span className="operador-visualizacindereservas-text004 Regular·12·16">
                <span>Reserva</span>
              </span>
              <span className="operador-visualizacindereservas-text006 Semibold·14·16">
                <span>12/10/2022 - 13:00 hs</span>
              </span>
            </div>
            <div className="operador-visualizacindereservas-info02">
              <span className="operador-visualizacindereservas-text008 Regular·12·16">
                <span>Día de la reserva</span>
              </span>
              <span className="operador-visualizacindereservas-text010 Semibold·14·16">
                <span>10/10/2022</span>
              </span>
            </div>
            <div className="operador-visualizacindereservas-info03">
              <span className="operador-visualizacindereservas-text012 Regular·12·16">
                <span>N° de la reserva</span>
              </span>
              <span className="operador-visualizacindereservas-text014 Semibold·14·16">
                <span>1141472791015</span>
              </span>
            </div>
            <DropdownOperator />
          </div>
        </div>
        <span className="operador-visualizacindereservas-text126 SemiBold·20·24">
          <span>Reservas</span>
        </span>
      </div>
    </div>
  );
};

export default ShiftOperatorView;
