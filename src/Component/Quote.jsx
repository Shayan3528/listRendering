import { customers } from "../data/damiPostData";

export default function Quote() {
  let output = [];
  const items = customers.map((customer) => (
    <ul key={customer.id}>
      <h3>Name: {customer.f_name + " " + customer.l_name}</h3>
      <h4>Gender:{customer.gender} </h4>
      <h4>Age:{customer.age} </h4>
      <h5>Married:{customer.married ? " YES" : " NO"} </h5>
      <h5>Purched Items: </h5>
      {customer.purched.map((purches) => (
        <ul key={purches.id}>
          <li>{purches}</li>
        </ul>
      ))}
    </ul>
  ));
  items.forEach((item,index) => {
    output.push(<hr key={index + "-separator"} />);
    output.push(<p key={index + "-text"}> {item}</p>);
  });

  output.shift();

  return (
    <div>
      <h1> Customers Information</h1>
      {output}
    </div>
  );
}
