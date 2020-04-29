import axios from 'axios';

const BASE_API = 'http://192.168.1.5:8000/api/';
const create = axios.create({
  baseURL:BASE_API,
  responseType:'json'
})

class Api {

  

  async getSuggestion(id) {
   try {
    const data= await axios.get(`${BASE_API}book`,{

    })
    return data.data;
   } catch (error) {
     console.log(error)
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
      // const data=await axios.post(`${BASE_API}`,book,{
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   }
      // });

      // return console.log('Libro Guardado')
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Api();
