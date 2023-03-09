let URLApi = "https://mh-h0bh.onrender.com/api/amazing"
/* fetch(URLApi)
    .then( response => response.json() )
    .then( datos => console.log(datos) )
    .catch( error=>console.log( error ) ) */
 events =""

async function importData(){
        try{
            const resp = await fetch(URLApi)
            events = await resp.json()
                console.log( events.response );
            printTemplates( events.response )

            
        }catch(error){
            console.log(` Error:  ${error}` ) 
        }
}

importData()