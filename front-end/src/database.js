const database = ({databases}) => {
    return (
        <div >
            {databases.map(database => (
                <div className="database-preview" key={database.id}>
                    <p>Email is {database.email}</p>
                    <p>First Name is {database.firstName}</p>
                    <p>Last Name is {database.lastName}</p>
                </div>
            ))
            }
        </div>
    );
}

export default database;