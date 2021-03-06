import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Widget from "../components/Widget";

export default function Home() {
  const { data: session } = useSession();

  const x = process.env.FACEBOOK_ID;
  if (session) {
    return (
      <div className="h-screen bg-gray-100 overflow-hidden">
        <Head>
          <title>Facebook</title>
        </Head>

        <Header />
        <main className="flex">
          <Sidebar />
          <Feed />
          <Widget />
        </main>
      </div>
    );
  }

  return <Login />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return { props: { session: session } };
}
