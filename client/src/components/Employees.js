import React, { useState, useEffect } from 'react';
import './Employees.css';
import Card from './Card';
import ListItem from './ListItem';


function Employees() {
    const [view, setView] = useState('');
    const [data, setData] = useState('1050');
    const [sorted, setSort] = useState(false);
    const [filterValue, setFilter] = useState('');

    const getResponse = async () => {
        const response = await fetch('/api');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        setData(body);
        setView('Groups');
    };

    useEffect(() => {
        getResponse();
    }, [])


    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    const getData = (filter_position='') => {
        let res = Array
            .from(data.employees)
            .filter(element => (
                (filter_position == '' || element.position == filter_position) & (element.name.toLocaleLowerCase().includes(filterValue) || element.position.toLocaleLowerCase().includes(filterValue)))
                );
        return (sorted == true) ? res.sort((a, b) => a.name > b.name ? -1 : 1) : res;
    }

    const getGroups = () => {
        return Array.from(data.employees)
            .map(element => {
                return element.position;
            })
            .filter(onlyUnique)
            .sort();
    }

  return (
    <div className='cards'>
        <div className='top-elements'>
            <h1>OUR EMPLOYEES</h1>
            <label className='seacrhForm'>
                <input type="text" placeholder='Enter the name..' onChange={(value) => setFilter(value.target.value.toLocaleLowerCase())}/>
            </label>
            <select onChange={(selected_view) => setView(selected_view.target.value)}>
                <option value="" disabled selected hidden>Change View</option>
                <option>Groups</option>
                <option>Cards</option>
                <option>Table</option>
            </select>
            <label className='checkbox'>
                Sort
                <input type="checkbox" checked={sorted} onChange={() => setSort(!sorted)}/>
            </label>
        </div>
        <>
            { (view == 'Cards') ?
            
            <div className='wrapper'>
                {getData().map(element => {
                    return (
                        <Card name={element.name} position={element.position} />
                    )
                })}
            </div> : null
            }
            {
                (view == 'Table') ?
                <table>
                    <tr className='first-row'>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                    {
                        getData()
                        .map(element => {
                            return (
                                <tr>
                                    <th>{element.name}</th>
                                    <th>{element.position}</th>
                                </tr>
                            )
                        })
                    }
                    {console.log(data.employees)}
                </table>
                :null
            }
            {
               (view == "Groups") ? 
               <div className='groups_container'>
                   {
                    getGroups().map(element => {
                        return <div className='group_container'>
                                    <div className='header'>
                                            <h3 className='header-text'>{element}</h3>
                                    </div>
                                    <div>
                                        {
                                            getData(element).map(x =>{
                                                return (
                                                    <ListItem name={x.name} position={x.position}/>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                   })
                }
               </div>
               :null
            }
        </>
    </div>
  )
}

export default Employees