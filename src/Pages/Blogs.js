import { useState } from "react"
import { Users } from "../Users"

function Blogs() {

  const [query, setQuery] = useState("");

  return (
    <div className="app">
      <h1><span>Search</span> for the Title</h1>
      <input type="text" placeholder="Search...." className="search" onChange={(e) => { setQuery(e.target.value) }} />
      <table>
        <tbody>
          <tr>
            <th style={{color:'#05529aeb'}} className="blog_id">ID</th>
            <th style={{color:'#05529aeb'}} className="blog_title">TITLE</th>
            <th style={{color:'#05529aeb'}} className="blog_data">DESCRIPTION</th>
          </tr>
          {Users.filter(user=>(user.title || '').toLowerCase().includes(query)).map((item) => (
            <tr>
              <td className="blog_id">{item.id}</td>
              <td className="blog_title"><b>{item.title}</b></td>
              <td className="blog_data">{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}

export default Blogs

