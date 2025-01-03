import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchResult from './components/SearchResult/SearchResult';
export const IMP_URL=" http://localhost:9000";

const App = () => {
const [data,setData] = useState(null);
const [loading,setLoading]=useState(false);
const [error,setError]=useState(null);
const [filterData,setfilterData]=useState(null);
const [filterbtn,setfilterBtn]=useState("all");

useEffect(() => {
  const fetchFoodData = async ()=>{
    setLoading(true);
    try{
   const response = await fetch(IMP_URL);
   const json= await response.json();
   setData(json);
   setfilterData(json);
  setLoading(false);
  }
   catch(error){
   setError(error)
   }
  }
fetchFoodData();
if(error)return <div>{error}</div>
if(loading) return <div>loading...</div>
 
}, [])
const filterBtn=[
  {
    name:"All",
    type:"all"
  },
  {
    name:"BreakFast",
    type:"breakfast"
  },
  {
    name:"Dinner",
    type:"dinner"
  },
  {
    name:"Lunch",
    type:"lunch"
  },
 
]
const searchFood = (e)=>{
  const searchVal=e.target.value;
  console.log(searchVal);
  if(searchVal===""){ setfilterData(null); }
  const filter=data?.filter((food)=>food.name.toLowerCase().includes(searchVal.toLowerCase()));
  setfilterData(filter);
};
const filterFood=(type)=>{
if(type==="all"){
  setfilterData(data);
  setfilterBtn("all");
  return;
}
const filter=data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()));
  setfilterData(filter);
  setfilterBtn(type);
}

  return (<>

   <Container>
     <TopContainer>
      <div className='logo' alt="logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className='search'>
        <input 
         placeholder='Enter food...'
         onChange={searchFood}
         />
      </div>
     </TopContainer>
     <FilterContainer>
     {filterBtn.map((value)=>(

      <Button key={value.type} onClick={()=>filterFood(value.type)} >
        {value.name}
      </Button>
     ))}
      
     </FilterContainer>
  </Container>
    <SearchResult data={filterData} />
  </>
  );
};

export default App;
export const Container = styled.div`
max-width:1200px;
margin:0 auto;
overflow:hidden;
`;
const TopContainer = styled.div`
 min-height:140px;
 display:flex;
 padding:16px;
 justify-content:space-between;
 align-items:center;

 .search{
   input{
  background:transparent;
  border:3px solid red;
  padding:0 1rem;
  height:40px;
  font-size:16px;
  border-radius:10px;
  color:white;
 
   }
   input:active{
    border:5px solid white;
   }
  
 }
`;
const FilterContainer=styled.section`
 display:flex;
 justify-content:center;
 gap:1.2rem;
 padding-bottom:40px;

`;
export const Button=styled.button`

  background-color:#ff4343;
  border-radius:5px;
  padding:6px 12px;
  border:none;
  color:white;
  cursor:pointer;
  &:hover{
    background-color:#ff4243
  }

`;
