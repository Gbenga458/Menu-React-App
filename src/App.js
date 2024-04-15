import React, {useState} from 'react';
import Categories from './Categories';
import items from './data';
import Menu from './Menu';

const allCategories =['all',...  new Set (items.map((item)=> item.category))]
console.log(allCategories)
function App(){
  const [categories, setCategories] = useState(allCategories)
  const [menuItems, setMenuItems] = useState(items)

  const filterItems =(category)=>{
    if(category ==='all'){
      setMenuItems(items)
      return
    }
  
    const newItems= items.filter((item)=> item.category === category)
     setMenuItems(newItems)
  }
  return <main>
    <section className='menu section'>
      <div className='title'>
        <h1>our menu</h1>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems} />
    </section>
  </main>
}
export default App;