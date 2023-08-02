import axios from 'axios'





// today //
export const fetchTRendingMovied = async ()=>{
    const APP_KEY ="68d3cebf5e9c3cc439e7fdf5131ceec9";
  try{
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APP_KEY}`);
    console.log(data);
    
    return data

  }catch(error){
   console.log(error);
   
  }
}

// weekly //
export const fetchTRendingM = async ()=>{
  const APP_KEY ="68d3cebf5e9c3cc439e7fdf5131ceec9";
try{
  const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APP_KEY}`);
  console.log(data);
  
  return data

}catch(error){
 console.log(error);
 
}
}
// popular //


export const fetchPopularMovie = async ()=>{
    const APP_KEY ="68d3cebf5e9c3cc439e7fdf5131ceec9"
  try{
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APP_KEY}`);
    return data

  }catch(error){
   console.log(error);
   
  }
}
// now playing //


export const fetchNowPlaying = async ()=>{
  const APP_KEY ="68d3cebf5e9c3cc439e7fdf5131ceec9"
try{
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APP_KEY}`);
  return data

}catch(error){
 console.log(error);
 
}
}

// user api //

export const fetchuser = async ()=>{
  try{
      const{data}=await axios.get(`https://dummyjson.com/users`)
      return data
  }catch(err){
    console.log(err);
    
  }
}


// movie details //


export const fetchdetails = async (id:number)=>{
  const APP_KEY ="68d3cebf5e9c3cc439e7fdf5131ceec9"
  try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APP_KEY}`)
      
      return data
      
  }catch(err){
    console.log(err);
    
  }
}

// youtube  //


export const fetchvedio = async (id:number)=>{
  const APP_KEY ="68d3cebf5e9c3cc439e7fdf5131ceec9"
  try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APP_KEY}&append_to_response=videos`)
      console.log("rrrr",data);
      return data
      
  }catch(err){
    console.log(err);
    
  }
}


export const searchmovie = async(query:string)=>{
  const APP_KEY ="68d3cebf5e9c3cc439e7fdf5131ceec9"
  try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${APP_KEY}`)
      const limitedResults = data.results.slice(0, 5);
      return limitedResults; 
     }catch(err){
    console.log(err)
  }
}

