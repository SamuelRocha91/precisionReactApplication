import { MouseEventHandler } from "react";
import '../styles/measure.css'

export default function ConfirmMeasure(
  props: {
    responseHttp: {
      measure_uuid: string | number | readonly string[] | undefined;
      measure_value: string | number | readonly string[] | undefined; 
    };
    confirmMeasure: MouseEventHandler<HTMLButtonElement> | undefined;
  }) {
  const editMeasure = () => {
    const inputValue = document.getElementById('disabledInput')
    const btnEdit = document.getElementById('edit-btn')

    if (inputValue) {
      inputValue.removeAttribute('readOnly')
    };
    if (btnEdit) {
      btnEdit.style.display = 'none'
    }
  }
  return (
      <div className="confirm-measure">
        <h1>Confirme a medição</h1>
        <div className="form-confirm">
          <div>
            <label htmlFor="">Identificador da medição</label>
            <input className="form-control" id="disabledInput-one" type="text" value={props.responseHttp.measure_uuid} readOnly/>
          </div>
          <div>
            <label htmlFor="">Valor</label>
            <input className="form-control" id="disabledInput" type="text" value={props.responseHttp.measure_value} readOnly/>
          </div>
        </div>
        <div className="btns-actions">
          <button
            onClick={editMeasure}
            id="edit-btn"
            className="btn-measure-one"
           >
            Editar
          </button>
          <button className="btn-measure-two" onClick={ props.confirmMeasure }>Confirmar</button>
          </div>
      </div>
  )
}

