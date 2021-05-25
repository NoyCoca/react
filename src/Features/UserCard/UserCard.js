function UserCard(props) {
    const {name, age, phone, photo, width, height} = props;
    return(<div className = "card"> 
        <h1> Name: {name} </h1>
        <h1> Age: {age} </h1>
        <h1> phone: {phone} </h1>

         <img style={{width: width , height:height}} src={photo}/>
         </div>)
}

export default UserCard;