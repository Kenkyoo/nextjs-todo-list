import { features } from "@/features/features";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Background from "../public/background.png";
import "animate.css";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center justify-items-center gap-2 bg-base-200 pt-5">
        <ListBulletIcon className="size-12 text-primary" />
        <h1 className="text-5xl font-bold text-center ">To-do App</h1>
      </div>
      <div className="overflow-hidden bg-base-200 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">
                  Hecha con tecnologías modernas
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty  sm:text-5xl">
                  Una app de tareas simple y funcional
                </p>
                <p className="mt-6 text-lg/8">
                  Esta aplicación fue desarrollada con Next.js y Prisma, usando
                  SQLite como base de datos. Permite gestionar múltiples listas
                  de tareas, personalizar el tema visual y autenticar usuarios
                  mediante Hanko. Todo el contenido se guarda en la nube de
                  forma segura.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-indigo-600"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src={Background}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 animate__animated animate__fadeInDown"
            />
          </div>
          <div className="text-center mt-2">
            <p className="py-6">
              Inicia sesión o registrate para comenzar a usar la aplicación.
            </p>
            <button className="btn btn-primary">
              <a href="/login" className="link link-hover">
                Get Started
              </a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
