import Link from "next/link";

import Layout from "@/components/Layout/Layout";

export default function PageNotFound() {
  return (
    <Layout>
      <div>
        <h1>К сожалению, такой страницы не существует</h1>
        <div>
          Вы можете вернуться на <Link href="/">главную страницу</Link>, либо
          оставить свой комментарий на
          <Link href="/contacts"> странице контактов</Link>.
        </div>
      </div>
    </Layout>
  );
}
