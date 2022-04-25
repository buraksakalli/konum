import { useEffect } from "react";
import { useKonum } from "./package";

export const App = () => {
  const { error, isAllowed, data } = useKonum();

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {isAllowed ? (
        <>
          <span>Latitude: {data?.lat}</span>
          <span>Longitude: {data?.lng}</span>
        </>
      ) : (
        <span>Not allowed</span>
      )}
    </div>
  );

  useEffect(() => {
    console.log({ data });
  }, [error, isAllowed, data]);
};
