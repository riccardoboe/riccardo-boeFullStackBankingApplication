function Home() {
  const ctx = React.useContext(UserContext);
  const [authUser, setAuthUser] = React.useState(ctx.currentUser.name);

  return (
    <div>
      <Nav authUser={authUser} />
      <Card
        txtcolor="white"
        bgcolor="secondary"
        header="BadBank Landing Module"
        title="Welcome to Bad Bank"
        text="To start using this badbank create an account!"
        body={
          <img src="bank.png" className="img-fluid" alt="Responsive image" />
        }
      />
    </div>
  );
}
