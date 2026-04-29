import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const RequireAdmin = ({ children }: { children: JSX.Element }) => {
  const { user, isAdmin, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-sm font-sans text-muted-foreground">Loading…</div>
      </div>
    );
  }
  if (!user) return <Navigate to="/auth" replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 text-center">
        <h1 className="text-2xl font-display font-bold mb-2">Access denied</h1>
        <p className="text-muted-foreground font-sans max-w-md">
          Your account does not have admin privileges. Ask an administrator to grant you the
          <code className="mx-1 px-1.5 py-0.5 bg-muted rounded text-xs">admin</code>
          role.
        </p>
      </div>
    );
  }
  return children;
};

export default RequireAdmin;