const ProfileUser = () => {
  return (
    <div>
      <div className="perfil-clientefinal-perfil-clientefinal">
        <div className="perfil-clientefinal-formulario">
          <span className="perfil-clientefinal-text SemiBold·20·24">
            <span>Mis datos</span>
          </span>
          <div className="perfil-clientefinal-input-desktop2">
            <div className="perfil-clientefinal-txt">
              <span className="perfil-clientefinal-text02 Regular·14·20">
                <span>Nombre</span>
              </span>
            </div>
            <input type="text" className="perfil-clientefinal-input-desktop1" />
          </div>
          <div className="perfil-clientefinal-input-desktop21">
            <div className="perfil-clientefinal-txt1">
              <span className="perfil-clientefinal-text04 Regular·14·20">
                <span>Mail</span>
              </span>
            </div>
            <input
              type="email"
              className="perfil-clientefinal-input-desktop11"
            />
          </div>
          <div className="perfil-clientefinal-fila">
            <div className="perfil-clientefinal-input-desktop22">
              <div className="perfil-clientefinal-txt2">
                <span className="perfil-clientefinal-text06 Regular·14·20">
                  <span>DNI</span>
                </span>
              </div>
              <input
                type="text"
                className="perfil-clientefinal-input-desktop12"
              />
            </div>
            <div className="perfil-clientefinal-input-desktop3">
              <div className="perfil-clientefinal-txt3">
                <span className="perfil-clientefinal-text08 Regular·14·20">
                  <span>Teléfono</span>
                </span>
              </div>
              <input
                type="text"
                className="perfil-clientefinal-input-desktop13"
              />
            </div>
          </div>
          <div className="perfil-clientefinal-horario">
            <div className="perfil-clientefinal-input-desktop23">
              <div className="perfil-clientefinal-txt4">
                <span className="perfil-clientefinal-text10 Regular·14·20">
                  <span>Contraseña</span>
                </span>
              </div>
              <input
                type="password"
                className="perfil-clientefinal-input-desktop14"
              />
            </div>
            <div className="perfil-clientefinal-input-desktop31">
              <span className="perfil-clientefinal-text11">
                Editar Contraseña
              </span>
            </div>
          </div>
          <div className="perfil-clientefinal-c-t-a-desktop1">
            <span className="perfil-clientefinal-text12 Semibold·16·20">
              <span>Aceptar</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
