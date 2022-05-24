import React from "react";
import interceptors from "../../utils/interceptors";

const Members = () => {
  const [members, setMembers] = React.useState([]);
  React.useEffect(() => {
    interceptors.get("/users").then((res) => {
      setMembers(res.data);
    });
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Members</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered w-full text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member._id}>
                <td>{member?.name || "John Doe"}</td>
                <td>{member?.email}</td>
                <td>{member?.role || "Member"}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      console.log(member);
                    }}
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Members;
