export const Greeting = ({name}) =>  <h1>Buenvenido a React {name}</h1>;

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
