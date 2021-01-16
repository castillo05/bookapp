import axios from 'axios';

const BASE_API = 'http://peaceful-beach-43333.herokuapp.com/web/api/';
const create = axios.create({
  baseURL:BASE_API,
  responseType:'json'
})

class Api {

  

  async getSuggestion(id) {
   try {
    const data= await axios.get(`${BASE_API}book`,{
      
    })
    console.log(data.data)
    return data.data;
   } catch (error) {
     console.log(error.message);
   }
   
   
  }

  async postBook(url='',data={},method='post',contentType='application/json'){
    try {
      return await create({
        method:'post',
        url:BASE_API+url,
        data:data,
        headers:{
            'Content-Type': contentType
        }
      })
     
    } catch (error) {
      alert(`${error.message} Favor llena todos los campos!`)
      console.log(error)
    }
  }

  
  async deleteBook(url='',data={},method='delete',contentType='application/json'){
    try {
      return await create({
        method:method,
        url:BASE_API+url,
        data:data,
        headers:{
            'Content-Type': contentType
        }
      })
     
    } catch (error) {
      alert(`${error.message} Favor llena todos los campos!`)
      console.log(error)
    }
  }

}



export default new Api();
