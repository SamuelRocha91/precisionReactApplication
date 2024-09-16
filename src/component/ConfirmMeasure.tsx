import { MouseEventHandler } from "react";

export default function ConfirmMeasure(props: { responseHttp: { measure_uuid: string | number | readonly string[] | undefined; measure_value: string | number | readonly string[] | undefined; }; confirmMeasure: MouseEventHandler<HTMLButtonElement> | undefined; }) {
  return (
       <div>
          <h1>Confirme a medição</h1>
            <div>
              <label htmlFor="">Identificador da medição</label>
              <input className="form-control" id="disabledInput" type="text" value={props.responseHttp.measure_uuid} readOnly/>
              <label htmlFor="">Valor</label>
              <input className="form-control" id="disabledInput" type="text" value={props.responseHttp.measure_value} readOnly/>
            </div>
            <div>
              <button>Editar</button>
              <button onClick={ props.confirmMeasure }>Confirmar</button>
            </div>
      </div>
  )
}

