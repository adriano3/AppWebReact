export const Nombre=()=>{
    return <div>
      <h1>Adrian Obando Guaman</h1>
    </div>
    }

    export const Description=()=>{
        return <div>
          <h3>Descripcion</h3>
          <p>Soy una persona trabajadora, la mayor parte de mi tiempo paso trabajando </p>
        </div>
    }
    export const Pasatiempos=()=>{
      return <div>
        <h3>Pasatiempos</h3>
        <p>En mis tiempos libres me paso viendo videos y escuchando musica </p>
      </div>
    }
    export const Experencia = ()=>{
      return <div>
        <h3>Experencia</h3>
        <p>Tengo algunos años de experencia en el desarrollo web </p>
      </div>
    }
    export const Botones =()=>{
      return <div>
        <small>Probando algunos botones</small>
        <button>Enviar</button>
      </div>
    }
    // eslint-disable-next-line react-refresh/only-export-components
    export const Tablas=()=>{
      return <div>
        <table border={1} >
          <tr>
            <th colSpan={2}>FECHA</th>
            <td colSpan={2}>25 de Nombre de 2024 </td>
          </tr>
          <tr>
             <th>Inicio</th>
             <td>10:00</td>
          
            <th>Fin</th>
            <td>11:00</td>
           </tr>
           <tr>
            <td colSpan={2}>paciente</td>
            <th colSpan={2}>Adrian</th>
           </tr>
           <tr>
            <th colSpan={2}>fechaNaciemiento</th>
            <td colSpan={2}>15/02/19990</td>
           </tr>
          
        </table>
      </div>
    }