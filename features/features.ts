import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export const features = [
  {
    name: "Autenticación con Hanko",
    description:
      "Los usuarios pueden iniciar sesión con autenticación biométrica o tradicional usando el sistema moderno de Hanko.",
    icon: LockClosedIcon,
  },
  {
    name: "Persistencia de datos con SQLite",
    description:
      "Todas las tareas y listas se almacenan en una base de datos SQLite, gestionada con Prisma ORM.",
    icon: ServerIcon,
  },
  {
    name: "Interfaz moderna y personalizable",
    description:
      "La interfaz está construida con Tailwind y permite cambiar entre distintos temas para mejorar la experiencia visual.",
    icon: CloudArrowUpIcon,
  },
];
