import React, { useState } from 'react';


function Ayuda() {
  const [activeDt, setActiveDt] = useState(null);

  const handleDtClick = (index) => {
    setActiveDt(index === activeDt ? null : index);
  };


  return (
    <footer className="piedepagina">
      <div className="wrapper">
        <h1 className="title">Ayuda</h1>

        <dl>
          {[
            { label: "Nombre de la imagen del comprobante    +", content: "La imagen del conprobante de pago debe de llevar tu número de control. Si eres estudiante externo debe de llevar tu nombre completo." },
            { label: "Número de Control    +", content: "Si eres estudiante externo teclea 8 veces '1'" },
            { label: "Guía CIE    +", content: "Si en tu recibo la Guía CIE comienza con varios ceros, ignora los primeros tres ceros" },
            { label: "Referencia    +", content: "Ingresa la Referencia que ingresaste al realizar el pago" },
            { label: "Numero de Convenio    +", content: "Ingresa el Numero de Convenio que ingresaste al realizar el pago" },
            { label: "Monto Pagado    +", content: "Ingresa el monto de tu inscripción de acuerdo al tipo de curso que vas a cursar" },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <dt
                onClick={() => handleDtClick(index)}
                className={index === activeDt ? 'active' : ''}
              >
                {item.label}
              </dt>
              <dd>
                {index === activeDt && <div>{item.content}</div>}
              </dd>
            </React.Fragment>
          ))}
        </dl>
      </div>

      <p className="piepag">
        A T E N T A M E N T E<br />
        COORDINACIÓN DE LENGUAS EXTRANJERAS.<br />
        Tels. 01 (427) 27 24118, 01 (427) 27 24178 Ext. 1200<br />
        Correo: lenguasitsjr@sjuanrio.tecnm.mx<br />
        Horarios de atención: lunes a viernes 09:00-15:00 y sábado de 08:00-11:00
      </p>
    </footer>
  );
}

export default Ayuda;