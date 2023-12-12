const users = [
    { id: 1, name: "Deury", image: "https://robohash.org/robot1" },
    { id: 2, name: "Pedro", image: "https://robohash.org/robot2" },
    { id: 3, name: "Luis", image: "https://robohash.org/robot3" },
  ];

  
  export const GetUsers = ()=>{
    return users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img width="128px" src={user.image} alt="UserImage" />
        </div>
      );
    })
  }