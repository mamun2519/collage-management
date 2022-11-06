import { useEffect, useState } from "react";

const useAdmin = (user: any) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  const email = user?.email;
  useEffect(() => {
    if (email) {
      fetch(`https://thawing-temple-32150.herokuapp.com/v1/user/chackAdmin/${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
      
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
