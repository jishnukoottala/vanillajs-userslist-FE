import axios from "axios";

const Home = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  const users = res.data;
  console.log("users --> ", users);

  const template = `
    
    <div class="container">
   
    
    <div class="header">Vanilla JS - SCSS Front End </div>

    <div class="users-container">    
    ${users
      .map(
        (data) =>
          `<div class="user-card"><div class="name">${data.name}</div>
          
          <div class="data-section">
          <div> <span class="subtitle">Email : </span> <span>${data.email} </span></div>
          <div> <span class="subtitle">Phone : </span> <span>${data.phone} </span></div>
          <div> <span class="subtitle">Username : </span> <span>${data.username} </span></div>
           <div> <span class="subtitle">Website : </span> <span>${data.website} </span></div>
          </div>
              </div>`
      )
      .join(" ")}</div>
   
    </div>
    `;

  return template;
};

export default Home;
