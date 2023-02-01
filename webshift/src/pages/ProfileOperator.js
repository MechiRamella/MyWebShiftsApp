const ProfileOperator = () => {
  return (
    <div>
      <div className="operador-operador">
        <div className="operador-formulario">
          <span className="operador-text SemiBold·20·24">
            <span>Mis datos</span>
          </span>
          <div className="operador-input-desktop2">
            <div className="operador-txt">
              <span className="operador-text02 Regular·14·20">
                <span>Nombre</span>
              </span>
            </div>
            <input type="text" className="operador-input-desktop1" />
          </div>
          <div className="operador-input-desktop21">
            <div className="operador-txt1">
              <span className="operador-text04 Regular·14·20">
                <span>Correo electrónico</span>
              </span>
            </div>
            <input type="email" className="operador-input-desktop11" />
          </div>
          <div className="operador-fila">
            <div className="operador-input-desktop22">
              <div className="operador-txt2">
                <span className="operador-text06 Regular·14·20">
                  <span>DNI</span>
                </span>
              </div>
              <input type="text" className="operador-input-desktop12" />
            </div>
            <div className="operador-input-desktop3">
              <div className="operador-txt3">
                <span className="operador-text08 Regular·14·20">
                  <span>Sucursal</span>
                </span>
              </div>
              <div className="operador-input-desktop13">
                <span className="operador-text10 Regular·14·20">
                  <span>Villa Crespo</span>
                </span>
                <svg
                  className="operador-user-interface"
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.7542 0.495703C1.42973 0.171236 0.903667 0.171236 0.579199 0.495703C0.254732 0.82017 0.254732 1.34624 0.579199 1.6707L6.29293 7.38443C6.68345 7.77495 7.31661 7.77495 7.70714 7.38443L13.4209 1.6707C13.7453 1.34624 13.7453 0.82017 13.4209 0.495703C13.0964 0.171236 12.5703 0.171236 12.2459 0.495703L7.00003 5.74154L1.7542 0.495703Z"
                    fill="#AFAFAF"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="operador-horario">
            <div className="operador-input-desktop23">
              <div className="operador-txt4">
                <span className="operador-text12 Regular·14·20">
                  <span>Contraseña</span>
                </span>
              </div>
              <input type="password" className="operador-input-desktop14" />
            </div>
            <div className="operador-input-desktop31">
              <span className="operador-txt5">Editar contraseña</span>
            </div>
          </div>
          <div className="operador-c-t-a-desktop1">
            <span className="operador-text14 Semibold·16·20">
              <span>Aceptar</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOperator;
