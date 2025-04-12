"use client";

import { ReactNode } from "react";

export const LoginComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Accede a tu cuenta para ver y gestionar tus listas de tareas. Si aún
            no tenés una cuenta, podés crearla en segundos con Hanko.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};
