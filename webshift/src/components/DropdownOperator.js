const DropdownOperator = () => {
  return (
    <div className="operador-visualizacindereservas-c-t-a-desktop4">
      <form>
        <select className="operador-visualizacindereservas-text016">
          <option disabled={true} value="">
            Seleccionar..
          </option>
          <option value="confirmacion">Confirmacion</option>

          <option value="cancelar">Cancelar</option>
        </select>
      </form>
    </div>
  );
};

export default DropdownOperator;
