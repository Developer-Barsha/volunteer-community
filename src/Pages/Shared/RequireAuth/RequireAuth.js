// function RequireAuth({ children }){
//     let auth = useAuth();
//     let location = useLocation();
  
//     if (!user) {
//       return <Navigate to="/login" state={{ from: location }} replace />;
//     }
  
//     return children;
//   }