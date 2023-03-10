import Head from "next/head";
import {
  Header,
  WithUs,
  News,
  Blog,
  Services,
  Contact,
  Footer,
} from "@/containers";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A website for the BEMA - clinicals" />
        <meta
          name="keywords"
          content="clinic, BEMA, BEMA - clinicals, Uganda, East Africa, Africa, Disease, Health in Uganda, Welfare"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="author" content="Dennis Ssembatya" />
        <link rel="icon" type="image/svg" href="/assets/images/logo.png" />
        <title>BEMA - clinicals</title>
      </Head>
      <Header />
      <main>
        <WithUs />
        <News />
        <Blog />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
