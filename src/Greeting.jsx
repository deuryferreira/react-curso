export const Greeting = ({name}) =>  <h1>Bienvenido a React, {name}</h1>;

export const UserCard = (props) => {
    console.log(props)
return <div>

<h1>{props.name}</h1>
<h2>💸 {props.amount}</h2>
<h5>{props.married ? "Married 💍" : "Not married 😉"}</h5>
<ul>
    <li>{props.address.street}</li>
    <li>{props.address.city}</li>
    <li>{props.address.country}</li>
</ul>
<p>Points:</p>
{props.points.map((point)=><li>{point}</li> ) }
</div>
};



















//TEST CASE FOR CARDS

/* <UserCard
      name="Deury"
      amount={5000}
      married={true}
      points={[10.5, 45.8, 33.23]}
      address={{
        street: "Juegos Panamericanos #26",
        city: "Bonao",
        country: "Dominican Republic",
      }}
    />

    <UserCard
      name="Manuel"
      amount={8000}
      married={false}
      points={[45, 20.8, 94.61]}
      address={{
        street: "Simon Bolivar #355",
        city: "San Juan",
        country: "Puerto Rico",
      }}
    /> */