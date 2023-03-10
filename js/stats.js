









/*---------------------- CONECTION ----------------------*/

let data
let date 
let past
let upcoming

(async function getData(){
  await fetch("https://mh.up.railway.app/api/amazing-events")
    .then( resp => resp.json() )
    .then( json =>  {
                      data = json.events;
                      date = json.currentDate.slice(0,10); 
                    }
            ) 
  
            /* Past  */
    await fetch("https://mh.up.railway.app/api/amazing-events?time=past")
    .then( resp => resp.json() )
    .then( json => past = json.events ) 
  
    /* Upcoming  */
    await fetch("https://mh.up.railway.app/api/amazing-events?time=upcoming")
    .then( resp => resp.json() )
    .then( json => upcoming = json.events ) 

    
    
    past.sort((a, b) => b.assistance - a.assistance);
    console.log( past[0].assistance );
    document.querySelector('#max-att').innerHTML = past[0].assistance 
})()
