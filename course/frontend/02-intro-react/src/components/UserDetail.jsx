export const UserDetail = ({ user }) => {
  return (
    <>
      <div>
        <p>Id: {user.id}</p>
        <p>Nombre: {user.name}</p>
        <p>Edad: {user.age}</p>
      </div>
    </>
  );
};
