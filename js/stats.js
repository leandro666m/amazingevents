


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

    /* Events with highest percentage of attendance */
    let sortedPastAtt = [...past].sort((a, b) => b.assistance - a.assistance);
        document.querySelector('#max-att').innerHTML = sortedPastAtt[0].assistance 
    /* Events with lowest percentage of attendance */
        document.querySelector('#min-att').innerHTML = sortedPastAtt[ sortedPastAtt.length-1 ].assistance 
    /* Events with larger capacity */
    let sortedPastCapac = past.sort((a, b) => b.capacity - a.capacity);
        document.querySelector('#max-cap').innerHTML = sortedPastCapac[0].capacity

        
        /* Upcoming events statistics by category
        Categories - Revenues - Percentage of attendance 
        categoria - ganancia por categ - ( 100 * asist total estimada / capacidad  ) */
        
        let categorias = [] //array de categorias de eventos SIN repetirse
        data.forEach( each => { !categorias.includes(each.category) && categorias.push(each.category) } )
        
        /* por cada categoria hacer:  */
        for (const categoria of categorias) {

            /* ganancia total estimada */
            let acumRevenue_Categoria = upcoming.reduce( (acc , val) => { val.category == categoria ?  acc += val.price*val.estimate  : ""
            return acc },  0 )


            let acumCapacidad_Categoria = upcoming.reduce( (acc , val) => { val.category == categoria ?  acc += val.capacity  : "" 
                                                    return acc },  0 )
            let acumEstimado_Categoria = upcoming.reduce( (acc , val) => {val.category == categoria ?  acc += val.estimate  : ""
                                                    return acc },  0 )
            /* porcentaje de asistencia */
            let perc_att = 100 * acumEstimado_Categoria / acumCapacidad_Categoria
            
            
            let stat_category = [
                categoria,
                acumRevenue_Categoria, 
                perc_att
            ]

                       
            console.log(stat_category);
       document.querySelector("#upcomingStat").innerHTML = stat_category.map(each=>
        `<tr>
                                    <td> ${categoria} </td>
                                    <td> ${each.acumRevenue_Categoria} </td>
                                    <td> ${each.perc_att} </td>
                                </tr>`
        )
        


        

       } /* for of */
    }
       )()

