
import axios from 'axios';
import React, {  useEffect,useState } from 'react'
import More from './More.jsx';

function App() {
  
  const [asd,setAsd] = useState(null);
  const [isLoading,setLoading] = useState(false);
  const [activeItem, setActiveItem] = useState(null)


  useEffect(()=>{
    setLoading(false)
    axios.get('https://jsonplaceholder.typicode.com/users?_expand').then(({data}) => {
      setAsd(data);
      // console.log(data)
    }).finally(()=>{setLoading(true);}).catch(() => alert('error'));
  },[]);

  const [gorod, setGorod] = useState("ASC");
  const sorting = (obj) => {
    if(gorod === "ASC") {
      const sorted = [...asd].sort((a,b) => 
      a.address[obj] > b.address[obj] ? 1 : -1 &&
      a.company[obj] > b.company[obj] ? 1 : -1
    ) 
      setAsd(sorted);
      setGorod("DESC");
      // console.log(sorted)
    };
    if(gorod === "DESC") {
      const sorted = [...asd].sort((a,b) => 
        a.address[obj] < b.address[obj] ? 1 : -1 &&
        a.company[obj] < b.company[obj] ? 1 : -1
      );
      setAsd(sorted);
      setGorod("ASC");
      // console.log(sorted)
    }
  };

 
 
  return (
    <div className="qwe">
      {/* <p onClick={()=> console.log(asd)}>kdfogi</p> */}
        <div className='list'>
           <div className='list_bar'>
              <h4>Сортировка</h4>
              <button onClick={() => sorting('city')}>по городу</button>
              <button onClick={() => sorting('name')}>по компаниям</button>
           </div>

           {activeItem ?
            <More  
              activeItem={activeItem}  
              frf={setActiveItem}
            /> :
           (<div className='list_list'>
                <h3>Список</h3>
                <div>{isLoading && asd ? `Найдено ${asd.length} пользователей` : 0}</div>
              {isLoading ? (asd && asd.map((item,index) => (
                <div key={index} className='list_list-block'> 
                    <div>{'ФИО: '+ item.name}</div>
                    <div>{'город: '+ item.address.city}</div>
                    <div className='list_pog'>
                      <div>{'компания: '+ item.company.name}</div>
                      <button onClick={() => setActiveItem(item)} href="#">Подробнее</button>
                    </div>
                  </div>
            ))) : 
              <div className='loader'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
              </div>}
           </div>)}
        </div> 
    </div>
  );
}

export default App;
