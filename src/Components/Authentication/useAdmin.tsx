import { useEffect, useState } from "react";

const useAdmin = (user: any) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  const email = user?.email;
  console.log(user);
  useEffect(() => {
    if (email) {
      fetch(
        `https://collage-management-backend.vercel.app/v1/user/chackAdmin/${email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
