import baseURL from '../../url'

export function obtenerDatos(loginParams){
   //console.log(loginParams)
   return fetch(`${baseURL}/users`, {
      headers: new Headers({
     "Authorization": loginParams,
     "Content-Type":"application/json",
      "Accept":"application/json"
   }), 
    })
      .then((res) => {
        return res.json()
      }
     )
}