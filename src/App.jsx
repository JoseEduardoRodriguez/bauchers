import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from 'react-hook-form';
import { uploadFile } from './firebase/config';

function App() {
  /*FORMULARIO*/

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isFormSubmitted, setFormSubmitted] = useState(false); 
  const [recibo, setRecibo] = useState(true);

  const onSubmit = async (data) => {
    console.log(data);
    // Puedes realizar acciones adicionales aquí si es necesario
    setFormSubmitted(true);



    // Espera unos segundos antes de reiniciar el formulario y ocultar el mensaje
    setTimeout(() => {
      setFormSubmitted(false);
      reset();
    }, 3000);
  };

  return (
      <div className="cuerpo">
        <form onSubmit={handleSubmit(onSubmit)}>

          <p>Registra tu comprobante de pago de la inscripción de tu curso</p>


          {/* nombre */}
          <label
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input className="form-control" type="text"
            {...register("nombre", {
              required: {
                value: true,
                message: "El nombre es requerido"
              },
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres"
              },
              maxLength: {
                value: 25,
                message: "El nombre no debe rebasar los 25 caracteres"
              },
              pattern: {
                value: /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/,
                message: "Solo se admite caracteres que sean letras"
              }
            })} />

          {errors.nombre && <span>{errors.nombre.message}</span>}



          {/* apellido Paterno */}
          <label
            htmlFor="apellidoPaterno"
          >
            Apellido Paterno
          </label>
          <input className="form-control" type="text"
            {...register("apellidoPaterno", {
              required: {
                value: true,
                message: "El Apellido Paterno es requerido",
              },
              minLength: {
                value: 3,
                message: "El apellido Paterno debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 12,
                message: "El apellido Paterno debe tener un maximo de 12 caracteres"
              },
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/,
                message: "Solo se admite caracteres que sean letras"
              }
            })} />
          {errors.apellidoPaterno && <span>{errors.apellidoPaterno.message}</span>}



          {/* apellido Materno */}
          <label
            htmlFor="apellidoMaterno"
          >
            Apellido Materno
          </label>
          <input className="form-control" type="text"
            {...register("apellidoMaterno", {
              required: {
                value: true,
                message: "El Apellido Materno es requerido",
              },
              minLength: {
                value: 3,
                message: "El apellido Materno debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 12,
                message: "El apellido Materno debe tener un maximo de 12 caracteres"
              },
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/,
                message: "Solo se admite caracteres que sean letras"
              }
            })} />
          {errors.apellidoMaterno && <span>{errors.apellidoMaterno.message}</span>}




          {/* numero de control */}
          <label
            htmlFor="numeroControl">Número de Control</label>
          <input className="form-control" type="text"
            {...register("numeroControl", {
              required: {
                value: true,
                message: "El numero de control es requerido"
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se admiten números"
              },
              minLength: {
                value: 8,
                message: "El numero de control debe tener 8 caracteres"
              },
              maxLength: {
                value: 8,
                message: "El numero de control debe tener 8 caracteres"
              }
            })} />
          {errors.numeroControl && <span>{errors.numeroControl.message}</span>}



          {/* carrera */}
          <label
            htmlFor="carrera"
          >
            Carrera
          </label>
          <select defaultValue={'DEFAULT'} className="form-select" aria-label="carrera"
            {...register("carrera", { required: true })}>
            <option value="DEFAULT" disabled>Selecciona tu carrera</option>
            <option value="IND">IND</option>
            <option value="IGEM">IGEM</option>
            <option value="IELEC">IELEC</option>
            <option value="IELEM">IELEM</option>
            <option value="ITICS">ITIC'S</option>
            <option value="ISIC">ISIC</option>
            <option value="EXTERNO">EXTERNO</option>
          </select>


          {/* nivel */}
          <label
            htmlFor="nivelCursar"
          >
            Nivel a Cursar
          </label>
          <select defaultValue={'DEFAULT'} className="form-select" aria-label="nivel"
            {...register("nivelCursar", { required: true })}>
            <option value="DEFAULT" disabled>Selecciona un nivel</option>
            <option value="level1">NIVEL 1</option>
            <option value="level2">NIVEL 2</option>
            <option value="level3">NIVEL 3</option>
            <option value="level4">NIVEL 4</option>
            <option value="level5">NIVEL 5</option>
            <option value="prep">PREP</option>
            <option value="med">MED</option>
          </select>



          {/* fecha de Pago */}
          <label
            htmlFor="fechaPago">Fecha de Pago</label>
          <input className="form-control" type="date"
            {...register("fechaPago", { required: true })} />
          {errors.fechaPago && <span>La fecha de pago es requerido</span>}



          {/* hora de Pago */}
          <label
            htmlFor="horaPago">Hora de Pago</label>
          <input className="form-control" type="time"
            {...register("horaPago", { required: true })} />
          {errors.horaPago && <span>La hora de pago es requerido</span>}


          {/* guia CIE */}
          <label
            htmlFor="guiaCIE">Guía CIE</label>
          <input className="form-control" type="text"
            {...register("guiaCIE", {
              required: {
                value: true,
                message: "La guía CIE es requerido"
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se admite numeros"
              },
              minLength: {
                value: 7,
                message: "La guía CIE debe tener 7 caracteres"
              },
              maxLength: {
                value: 7,
                message: "La guía CIE debe tener 7 caracteres"
              }
            })} />
          {errors.guiaCIE && <span>{errors.guiaCIE.message}</span>}



          {/* Referencia */}
          <label
            htmlFor="referencia">Referencia</label>
          <input className="form-control" type="text"
            {...register("referencia", {
              required: {
                value: true,
                message: "La referencia es requerido"
              },
            })} />
          {errors.referencia && <span>{errors.referencia.message}</span>}



          {/* Numero de convenio */}
          <label
            htmlFor="numeroConvenio">Numero de Convenio</label>
          <input className="form-control" type="text"
            {...register("numeroConvenio", {
              required: {
                value: true,
                message: "El numero de convenio es requerido"
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se admite numeros"
              }
            })} />
          {errors.numeroConvenio && <span>{errors.numeroConvenio.message}</span>}



          {/* Monto Pagado */}
          <label
            htmlFor="montoPagado">Monto Pagado</label>
          <input className="form-control" type="text"
            {...register("montoPagado", {
              required: {
                value: true,
                message: "El monto pagado es requerido"
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se admite numeros"
              }
            })} />
          {errors.montoPagado && <span>{errors.montoPagado.message}</span>}



          {/* Foto */}
          <label
            htmlFor="comprobantePago">Subir comprobante de pago</label>
          <input type="file" accept=".png, .jpg, .jpeg" style={{ padding: '4px 0px' }} onChange={e => uploadFile(e.target.values[0])}
            {...register("comprobantePago", {
              required: {
                value: true,
                message: "Es necesario subir el comprobante de pago"
              },
              validate: {
                validFileType: (value) => {
                  if (value[0]) {
                    const allowedExtensions = [".png", ".jpg", ".jpeg"];
                    const extension = value[0].name.substring(value[0].name.lastIndexOf('.'));
                    if (!allowedExtensions.includes(extension)) {
                      return "Es necesario subir un archivo con las extensiones .png, .jpg o .jpeg.";
                    }
                  }
                  return true;
                }
              }
            })} />
          {errors.comprobantePago && <span>{errors.comprobantePago.message}</span>}


          <div className="row" style={{ padding: '4px 0px' }}>
            <button type="submit">
              Enviar
            </button>
          </div>

          {isFormSubmitted && (
            <div className="alert alert-success" role="alert">
              Formulario enviado correctamente.
            </div>
          )}

        </form>
      </div>
  )
}

export default App