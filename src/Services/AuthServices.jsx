import axios from 'axios';

const baseURL = "https://localhost:44360/api/";

const apiService = axios.create({
  baseURL,
});

export const AddUsers = async(Data) =>{
    try{
        const response = await apiService.post('Auth/Register',
        {
        FirstName: Data.FirstName,
        LastName: Data.LastName,
        Email:Data.Email,
        Password:Data.Password
        }
        )
        return response;
    }
   catch(error){
    console.log("Add user error",error)
    throw error
   }
   
}


export const loginUser = async (email, password) => {
  try {
    const response = await apiService.post('Auth/Login', {
      Email: email,
      Password: password
    });
    const { token } = response.data; 
    sessionStorage.setItem('token', token);
    return { token };
  } catch (error) {
    console.log("Login error", error);
    throw error;
  }
};
