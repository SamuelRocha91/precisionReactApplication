import { useState } from "react";

interface meausreList {
"measure_uuid": string,
"measure_datetime": string,
"measure_type": string,
"has_confirmed":string
"image_url": string
}
const apiUrl = import.meta.env.VITE_API_URL;
const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function ListMeasures() {
  const [ListMeasures, setListMeasures] = useState([] as meausreList[]);
  const  [code, setCode] = useState('')
  const fetchListMeasure = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    fetch(`${apiUrl}/${code}/list`, {
        headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => response.json()).then((data) => {
     console.log(data)
      const array = data.measure.map((meas: meausreList) => ({
        "measure_uuid": meas.measure_uuid,
        "measure_datetime": formatDate(new Date(meas.measure_datetime)),
        "measure_type": meas.measure_type,
        "has_confirmed": meas.has_confirmed.toString(),
        "image_url": meas.image_url
      }))
      console.log(array)
      setListMeasures(array);
    })
  }
  return (
      <>
       <div> 
        <h1 className="mb-4">Customer code</h1>
         <div className="mb-3">
          <input onChange={(e) => setCode(e.target.value)} type="text" placeholder="Insira aqui o código do cliente" />
          </div>
        <button className="btn btn-primary mb-4" onClick={(e) => fetchListMeasure(e)}>Listar medições</button>
        {ListMeasures && ListMeasures.length > 0 && (
          <div className="card list-group" style={{ width: '28rem', height: '10rem' }}>
          {ListMeasures.map((measure, i) => (
            <div key={i} className="list-group-item list-group-item-action">
              <h5 className="mb-2">Medição {i + 1}</h5>
              <div>
                <label className="form-label">Imagem da Medição:</label>
                <img
                  src={measure.image_url}
                  alt="Imagem da medição"
                  className="img-fluid card-img-top"
                  style={{ width: '28rem', height: '18rem' }}
                />
              </div>
              {/* Measure UUID */}
              <div className="mb-2">
                <label className="form-label">UUID da Medição:</label>
                <input
                  type="text"
                  className="form-control"
                  value={measure.measure_uuid}
                  readOnly
                />
              </div>
              
              {/* Measure Date */}
              <div className="mb-2">
                <label className="form-label">Data da Medição:</label>
                <input
                  type="date"
                  className="form-control"
                  value={measure.measure_datetime}
                  readOnly
                />
              </div>
              
              {/* Measure Type */}
              <div className="mb-2">
                <label className="form-label">Tipo da Medição:</label>
                <input
                  type="text"
                  className="form-control"
                  value={measure.measure_type}
                  readOnly
                />
              </div>
              
              {/* Measure Status */}
              <div className="mb-2">
                <label className="form-label">Status da Medição:</label>
                <input
                  type="text"
                  className="form-control"
                  value={measure.has_confirmed}
                  readOnly
                />
              </div>         
            </div>
          ))}
        </div>
      )}
       </div>
      </>
  )
}

export default ListMeasures;
