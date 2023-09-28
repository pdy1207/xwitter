import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser; // 유저가 로그인했는가?
  console.log("🚀 ~ file: protected-route.tsx:11 ~ user:", user);
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
}
