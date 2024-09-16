import { useState } from "react";
import ConfirmMeasure from "./ConfirmMeasure";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;


function CreateMeasure() {
  const [formFields, setFields] = useState({
    file: "",
    customerCode: "",
    date: "",
    type: ""
  })
  const [responseHttp, setResponse] = useState({
     measure_uuid: '',
    measure_value: 0
  })
  const navigator = useNavigate()
  const [loading, setLoading] = useState(false)

  const sendMeasure = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    console.log('vamos tentar criar')
    const jsonBody = JSON.stringify({
      image: formFields.file,
      customer_code: formFields.customerCode,
      measure_datetime: formFields.date,
      measure_type: formFields.type
    })
    fetch(`${apiUrl}/upload`, {
      method: "POST",
       headers: {
        'Content-Type': 'application/json'
      },
      body: jsonBody
    }).then((response) => {
      console.log(response)
      return response.json()
    })
      .then((data) => {
        console.log("auuuuueee")
        console.log(data)
        setResponse({
           measure_uuid: data.measure_uuid,
         measure_value: data.measure_value
        })
      }).finally(() => {
        console.log("aÊeee")
        setLoading(false)
      })
  }

  const confirmMeasure = () => {
    setLoading(true)
    fetch(`${apiUrl}/confirm`, {
      method: "PATCH",
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        confirmed_value: Number(responseHttp.measure_value),
        measure_uuid: responseHttp.measure_uuid
      })
    }).then((response) => response.json())
      .then((data) => console.log(data)).finally(() => {
        setLoading(false)
        Swal.fire("Medição confirmada com sucesso!")
        navigator('/')
      }
)
  }
  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log('aqui')
    if (name == "date") {
      return setFields(prevFields => ({
        ...prevFields,
        date: new Date(value).toISOString()
      }))
    } else if (name == "file") {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files?.[0];
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
       
            const base64String = reader.result;
            setFields(prevFields => ({
              ...prevFields,
              file: base64String
            }))
          }
        };
      }
    } else {
      setFields(prevFields => ({
        ...prevFields,
        [name]: value
      }))
    }
  }


  return (
    <div>
    { loading ? <h1>Carregando...</h1> : responseHttp.measure_uuid == "" ? (
      <form >
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="formFile" className="form-label">
            Carregue a imagem para a medição:
          </label>
          <input onChange={handleChangeField} id="formFile" className="form-control" type="file" name="file" accept="image/*" />
        </div>

        <div className="mb-3">
          <label htmlFor="customer-code" className="form-label">
            Digite o código do cliente:
          </label>
          <input onChange={handleChangeField} id="customer-code" type="text" name="customerCode" className="form-control" value={formFields.customerCode} />
        </div>

        <div className="mb-3 d-flex flex-column">
          <label htmlFor="date-time" className="form-label">Selecione a data:</label>
          <input onChange={handleChangeField} className="form-control" name="date" type="date" id="date-time" />
        </div>
        
        <div className="mb-3">
          <select onChange={handleChangeField} id="measure-type" className="form-select" name="type" value={formFields.type}>
            <option disabled value="">Escolha um tipo de medição</option>
            <option value="GAS">GAS</option>
            <option value="WATER">WATER</option>
          </select>
        </div>
        <button onClick={sendMeasure } className="btn btn-primary">Submit</button>
      </form>
     ) : (
      <ConfirmMeasure confirmMeasure={confirmMeasure} responseHttp={responseHttp} />
  )
      }
      </div>
  )
}

export default CreateMeasure;
