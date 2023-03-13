


/*---------------------- CONECTION ----------------------*/

let data
let date 
let past
let upcoming


(async function getData(){
  await fetch("https://mh.up.railway.app/api/amazing-events")
    .then( resp => resp.json() ).then( json =>  {
                      data = json.events;
                      date = json.currentDate.slice(0,10); 
                    }
            ) 
  
    /* Past  */
    await fetch("https://mh.up.railway.app/api/amazing-events?time=past").then( resp => resp.json() ).then( json => past = json.events ) 
  
    /* Upcoming  */
    await fetch("https://mh.up.railway.app/api/amazing-events?time=upcoming").then( resp => resp.json() ).then( json => upcoming = json.events ) 

    /* Events with highest percentage of attendance */
    let sortedPastAtt = [...past].sort((a, b) => b.assistance - a.assistance);
        document.querySelector('#max-att').innerHTML = sortedPastAtt[0].assistance 
    /* Events with lowest percentage of attendance */
        document.querySelector('#min-att').innerHTML = sortedPastAtt[ sortedPastAtt.length-1 ].assistance 
    /* Events with larger capacity */
    let sortedPastCapac = past.sort((a, b) => b.capacity - a.capacity);
        document.querySelector('#max-cap').innerHTML = sortedPastCapac[0].capacity

        
        let categorias = [] //array de categorias de eventos SIN repetirse
        data.forEach( each => { !categorias.includes(each.category) && categorias.push(each.category) } )
        


        /* por cada categoria hacer:  */
        let stat_category_Up=[]
        let stat_category_Past=[]
        for (const categoria of categorias) {
                    /* Upcoming events statistics by category
                    Categories - Revenues - Percentage of attendance 
                    categoria - ganancia por categ - ( 100 * asist total estimada / capacidad  ) */
            /* ganancia total estimada */
            let acumRevenue_Cat_Up = upcoming.reduce( (acc , val) => { val.category == categoria ?  acc += val.price*val.estimate  : ""
            return acc },  0 )

            let acumCapacidad_Cat_Up = upcoming.reduce( (acc , val) => { val.category == categoria ?  acc += val.capacity  : "" 
                                                    return acc },  0 )
            let acumEstimado_Cat_Up = upcoming.reduce( (acc , val) => {val.category == categoria ?  acc += val.estimate  : ""
                                                    return acc },  0 )
            /* porcentaje de asistencia */
            let perc_att = 100 * acumEstimado_Cat_Up / acumCapacidad_Cat_Up

            !isNaN(perc_att) && stat_category_Up.push(
                `<tr>
                    <td> ${categoria} </td>
                    <td> ${acumRevenue_Cat_Up} </td>
                    <td> ${perc_att.toFixed(2)}% </td>
                </tr>`
            ) 


            /* ganancia total */
            let acumRevenue_Cat_Past = past.reduce( (acc , val) => { (val.category == categoria) && (acc += val.price*val.assistance) ;return acc },  0 )

            let acumCapacidad_Cat_Past = past.reduce( (acc , val) => { (val.category == categoria) && (acc += val.capacity); return acc },  0 )
            let acumEstimado_Cat_Past = past.reduce( (acc , val) => { (val.category == categoria) && (acc += val.assistance) ; return acc },  0 )
            /* porcentaje de asistencia */
            let perc_att_Past = 100 * acumEstimado_Cat_Past / acumCapacidad_Cat_Past


            !isNaN(perc_att_Past) && stat_category_Past.push(
                `<tr>
                    <td> ${categoria} </td>
                    <td> ${acumRevenue_Cat_Past} </td>
                    <td> ${perc_att_Past.toFixed(2)}% </td>
                </tr>`
            ) 
       } /* for of */

       document.querySelector("#upcomingStat").innerHTML = stat_category_Up.join("")
       document.querySelector("#pastStat").innerHTML = stat_category_Past.join("")
    }
       )()

