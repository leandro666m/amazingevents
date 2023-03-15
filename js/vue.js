
const { createApp } = Vue

let obj_datos = 
{
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
}
  
  
  createApp(obj_datos).mount('#app')

