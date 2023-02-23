import React from 'react'
import './css/list.css'

function List() {
  return (
    <>
    <div className='flex'>
        <div className='sidemenu'> Menu</div>
        <div className='employ'>
        <h1>Employee</h1>
        <fieldset>
            <legend>Filters</legend>
            <label htmlFor="">Status</label> 
            <select name="" id="mine">
                <option value="" disabled selected>Active Only / (All) / Deactivate Only</option>
                <option value="active">Active Only</option>
                <option value="all">All</option>
                <option value="deactivate">Deactivate Only</option>
            </select> <br /> <br />
            <label htmlFor="">Department</label>
            <select name="" id="">
                <option value="">-Select-</option>
            </select> <br /> <br />
            <label htmlFor="">Manager</label> 
            <select name="" id="mine1">
                <option value="">-Select-</option>
            </select>
            <div>
                <button>Filter</button>
            </div>
        </fieldset> 
        <div className='show'>
        <span>Show per Page</span> 
        <select name="number" id="">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="all">All</option>
        </select>
        <input type="search" name="" id="" />
    </div>
    <table>
        <tr>
            <th>Actions</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Telephone Number</th>
            <th>Email Address</th>
            <th>Manager</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>Actions</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Telephone Number</td>
            <td>Email Address</td>
            <td>Manager</td>
            <td>Status</td>
        </tr>
        <tr>
            <td>Actions</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Telephone Number</td>
            <td>Email Address</td>
            <td>Manager</td>
            <td>Status</td>
        </tr>
        <tr>
            <td>Actions</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Telephone Number</td>
            <td>Email Address</td>
            <td>Manager</td>
            <td>Status</td>
        </tr>
        <tr>
            <td>Actions</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Telephone Number</td>
            <td>Email Address</td>
            <td>Manager</td>
            <td>Status</td>
        </tr>
    </table>   
        </div>    
    </div>
    
    </>
  )
}

export default List