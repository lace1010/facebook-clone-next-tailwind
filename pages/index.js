import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import { getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Widget from "../components/Widget";
import { db } from "../firebase";

export default function Home() {
  const { data: session } = useSession();

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

export async function getServersideProps(context) {
  const session = await getSession(context);

  return { props: { session: session } };
}
