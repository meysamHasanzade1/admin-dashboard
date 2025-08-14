// components/UsersMobile.jsx
import Link from "next/link";
import Image from "next/image";

export default function UsersMobile({ users, handleDelete, setUsers }) {
  return (
    <div className=" space-y-4 mt-4">
      {users.map((user) => (
        <table
          key={user.id}
          className="w-full border border-slate-700 rounded-lg overflow-hidden"
        >
          <tbody>
            <tr className="bg-slate-800">
              <td className="px-4 py-2 font-bold w-1/3">Name</td>
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full object-cover"
                    alt=""
                    width={40}
                    height={40}
                    src="/icons8-user.png"
                  />
                  {user.name}
                </div>
              </td>
            </tr>
            <tr className="bg-slate-700">
              <td className="px-4 py-2 font-bold">Email</td>
              <td className="px-4 py-2">{user.email}</td>
            </tr>
            <tr className="bg-slate-800">
              <td className="px-4 py-2 font-bold">Created At</td>
              <td className="px-4 py-2">{user.createdAt.slice(0, 10)}</td>
            </tr>
            <tr className="bg-slate-700">
              <td className="px-4 py-2 font-bold">Role</td>
              <td className="px-4 py-2">
                {user.isAdmin ? "isAdmin" : "notAdmin"}
              </td>
            </tr>
            <tr className="bg-slate-800">
              <td className="px-4 py-2 font-bold">Status</td>
              <td className="px-4 py-2">
                {user.isActive ? "isActive" : "notActive"}
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="px-4 py-3 text-center bg-slate-900">
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className="bg-teal-500 text-white px-4 py-1 rounded mr-2">
                    View
                  </button>
                </Link>
                <button
                  onClick={() =>
                    handleDelete(user.id, () =>
                      setUsers((prev) => prev.filter((u) => u.id !== user.id))
                    )
                  }
                  className="bg-red-500 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}
