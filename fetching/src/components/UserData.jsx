const UserData = ({users}) => {
    return(
        <>
        {
            users.map((curUser) => {
                const {id, name, email, phone} = curUser;
                const { street, zipcode, city} = curUser.address

                return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td> {street}{' ,'}{zipcode}{' ,'}{city}</td>
                        <td>{phone}</td>
                    </tr>
                )
            })
        }
        </>
    )

}
export default  UserData