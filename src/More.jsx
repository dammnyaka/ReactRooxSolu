import axios from 'axios';
import React, { useState } from 'react';

import './More.scss'


const More = ({activeItem,frf}) => {
//  console.log(activeItem)
  const [isReadonly, setIsReadonly] = useState(true);
  const [inputValue, setInputValue] = useState('')
    //  for(const[key,value]of Object.entries(activeItem)){
    //    console.log(`${key}:${value}`);
    //    setOmg(`${key}:${value}`);
    //  }
       

  const addItem = () => {
  axios.post('https://jsonplaceholder.typicode.com/users/',activeItem).then(({data})=> {
    onEdit();
    console.log(activeItem);
    console.log(data);
  })
}

const onEdit =() => {
  const newData = {
    id: activeItem.id,
    name: activeItem.name,
    username: activeItem.username,
    street: activeItem.address.street,
    email: activeItem.email,
    city: activeItem.address.city = inputValue,
    zipcode: activeItem.address.zipcode,
    phone: activeItem.phone,
    website: activeItem.website,
    comment: '',
  }
  return {...activeItem,newData};
}


  return (
    <div className='component_more'>
      <div className='component_more-head'>
          <div onClick={()=> addItem()}>Профиль пользователя</div>
          <button onClick={()=> setIsReadonly(false)}>Редактировать</button>
      </div>
      <div className='comp'>
        <div>
          <p>Name</p>
          <input readOnly={isReadonly} 
          // value={inputValue}
          // onChange={e => setInputValue(e.target.value)}
          type={"text"}
           placeholder={activeItem.name}
            />
        </div>
        <div>
          <p>User name</p>
          <input readOnly={isReadonly} type="text" placeholder={activeItem.username}/>
        </div>
        <div>
          <p>E-mail</p>
          <input readOnly={isReadonly} type="text" placeholder={activeItem.email}/>
        </div>
        <div>
          <p>Street</p>
          <input readOnly={isReadonly} type="text" placeholder={activeItem.address.street}/>
        </div>
        <div>
          <p>City</p>
          <input readOnly={isReadonly} value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder={activeItem.address.city}/>
        </div>
        <div>
          <p>Zipcode</p>
          <input readOnly={isReadonly} type="text" placeholder={activeItem.address.zipcode}/>
        </div>
        <div>
          <p>Phone</p>
          <input readOnly={isReadonly} type="text" placeholder={activeItem.phone}/>
        </div>
        <div>
          <p>Website</p>
          <input readOnly={isReadonly} type="text" placeholder={activeItem.website}/>
        </div>
        <div>
          <p>Comment</p>
          <input type="" placeholder="..."/>
        </div>
      </div>
      <div className='but_foot'>
        <button onClick={()=> frf(null)} className='back_item'>Назад</button>
        <button onClick={()=> setIsReadonly(true)} className='edit_ok'>Отправить</button>
      </div>
    </div>
  )
};
        





export default More;