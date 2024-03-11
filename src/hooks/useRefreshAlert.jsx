import { useEffect, useState } from "react";

const useRefreshAlert = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const beforeunloadHandler = (event) => {
      event.preventDefault();
      event.returnValue = "";

      setIsRefreshing(true);
    };

    window.addEventListener("beforeunload", beforeunloadHandler);

    return () =>
      window.removeEventListener("beforeunload", beforeunloadHandler);
  }, []);

  const confirmRefresh = () => {
    if (window.confirm("¿Estás seguro de que deseas actualizar la página?")) {
      setIsRefreshing(false);
      window.location.reload();
    } else {
      setIsRefreshing(false);
    }
  };

  return { isRefreshing, confirmRefresh };
};

export default useRefreshAlert;
