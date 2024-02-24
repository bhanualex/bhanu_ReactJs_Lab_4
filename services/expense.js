
import axios from "axios"


const getAllExpences = async() =>
{
const Get_name_url = "http://localhost:4000/expenses";
const response = await axios.get(Get_name_url);
return response.data;
}
const createNewExpenseItem = async (newExpenseItem) => {

    const POST_EXPENSES_URL = "http://localhost:4000/expenses";
  
    const response = await axios.post(POST_EXPENSES_URL, newExpenseItem, {
      headers : {
        'Content-Type' : 'application/json'
      }
    })
  
    return response.data;
  }


export{getAllExpences,createNewExpenseItem}