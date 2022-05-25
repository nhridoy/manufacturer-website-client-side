import React from "react";
import { useQuery } from "react-query";
import interceptors from "../../utils/interceptors";

const Members = () => {
  const {
    data: members,
    isLoading,
    refetch,
  } = useQuery("members", () => {
    return interceptors.get("/users");
  });

  const makeAdmin = (email) => {
    interceptors
      .put(`/user/admin`, {
        email,
      })
      .then((res) => {
        refetch();
      });
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

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
            {members?.data?.map((member) => (
              <tr key={member._id}>
                <td>{member?.name || "John Doe"}</td>
                <td>{member?.email}</td>
                <td>{member?.role || "Member"}</td>
                <td>
                  {member?.role !== "admin" ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => makeAdmin(member?.email)}
                    >
                      Make Admin
                    </button>
                  ) : (
                    <button className="btn btn-primary " disabled>
                      Admin
                    </button>
                  )}
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
