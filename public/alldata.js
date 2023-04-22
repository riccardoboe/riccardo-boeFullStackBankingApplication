function AllData() {
  const ctx = React.useContext(UserContext);
  const [documents, setDocuments] = React.useState([]);
  const [authUser, setAuthUser] = React.useState(ctx.currentUser.name);

  React.useEffect(() => {
    fetch("account/all")
      .then((response) => response.json())
      .then((documents) => {
        setDocuments(documents);
        ctx.users = documents;
        console.log(ctx.users);
      });
  }, []);

  return (
    <div>
      <Nav authUser={authUser} />
      <Card
        bgcolor="secondary"
        header="AllData"
        body={
          <div>
            {
              <img
                src="bank.png"
                className="img-fluid"
                alt="Responsive image"
              />
            }
            <ul className="list-group">
              {documents.map((user) => (
                <li key={user._id} className="list-group-item text-secondary">
                  User ID: {user._id}
                  <br />
                  Username: {user.name}
                  <br />
                  Email Address: {user.email}
                  <br />
                  Password: {user.password}
                  <br />
                  Balance: ${user.balance}
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </div>
  );
}
