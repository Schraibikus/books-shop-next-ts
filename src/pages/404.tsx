import Link from "next/link";

export default function PageNotFound(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mt-10 mb-5">
        <span className="text-red-500 font-bold">404</span> | К сожалению, такой
        страницы не существует
      </h1>
      <div className="text-3xl">
        Вы можете вернуться на{" "}
        <Link className="text-red-500 font-bold hover:text-red-700" href="/">
          главную страницу
        </Link>
      </div>
    </div>
  );
}
