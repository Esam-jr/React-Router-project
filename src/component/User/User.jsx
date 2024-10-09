import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-orange-500 text-center py-5 text-black text-3xl">
      User: {userid}
    </div>
  );
}

export default User;
