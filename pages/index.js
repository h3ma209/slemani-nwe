import Head from "next/head";

import styles from "../styles/Home.module.css";
import Button from "../components/button";
import Product from "../components/Products";

export default function Home() {
  const BrandProducts = [
    {
      title: "Costadoro Olive Oil ",
      description:
        "One of the italy’s finest and high quality olive oil, the unfiltered extra virgin olive oil offers high neutrients",
      link: "https://www.oliocostadoro.com/us/",
      image: "/assets/Coil.jpg",
    },
    {
      title: "Good Day Cappucino",
      image: "/assets/goodday.png",
      link: "#",
      description:
        "One of the italy’s finest and high quality olive oil, the unfiltered extra virgin olive oil offers high neutrients",
    },
    // { title: "", image: "", link: "", description: "" },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Slemani nwe company</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <main className={styles.main}>
        {/* ------------ Landing ------------------ */}
        <div className="flex flex-wrap flex-col-reverse md:flex md:flex-row md:flex-nowrap justify-evenly min-h-screen   ">
          <div className="min-h-full w-full grid justify-items-center md:justify-items-start items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Slemani Nwe</h1>
              <p className=" text-xl md:text-2xl font-light  my-7">
                14 years of experience of importing and distributing, and still
                continuing
              </p>
              <Button text="Learn more"></Button>
            </div>
          </div>
          <div className="min-h-full w-full grid justify-items-center md:justify-items-end items-center">
            <img src="/assets/logo1.png" alt="logo" className="h-5/6 md:h-3/6" />
          </div>
        </div>

        <div className={styles.whitespace}></div>
        {/* ------------ About ------------------ */}
        <div className="relative flex flex-wrap flex-col-reverse md:flex md:flex-row md:flex-nowrap  justify-evenly min-h-screen   ">
          <div className="min-h-full w-full grid justify-items-center md:justify-items-start items-center">
            <div
              className={styles.aboutBg + " h-full w-full md:h-5/6 md:w-4/6"}
            >
              <div className={styles.overlay}></div>
            </div>
          </div>
          <div className="grid justify-items-start items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Slemani Nwe</h1>
              <p className="text-xl md:text-2xl font-light  my-7">
                Slemani Nwe  is an Importer and Distributer company based in the
                Iraq. We have been trading for over 14 years and are passionate
                about FMCG.
                <br></br>
                <br></br>
                Our strong relationship with both our suppliers and clients
                enables us to deliver the most popular brands in our area at the
                best possible prices.
                <br></br>
                <br></br>
                Our rapid success we believe is as a result of this, the
                competitive prices and the personal service that we provide.
              </p>
              <Button text="Learn more"></Button>
            </div>
          </div>
        </div>

        <div className={styles.whitespace}></div>

        {/* ------------ Brands ------------------ */}

        <div className="min-h-screen">
          <div className="grid grid-flow-row auto-rows-max place-items-center mb-40 md:mb-56">
            <div className={styles.landingLogo + " h-36 min-w-full"}></div>
            <div className="my-7"></div>
            <h1 className="text-xl md:text-2xl text-center font-bold">
              Slemani Nwe already have several power Brands.
            </h1>
          </div>

          <div className="brands grid grid-row-4 md:grid-cols-4 place-items-center gap-12 ">
            <img className="h-28" src="../assets/brands/gullon.png"></img>
            <img className="h-28" src="../assets/brands/diet.png"></img>
            <img className="h-28" src="../assets/brands/goodday.png"></img>
            <img className="h-28" src="../assets/brands/costa.png"></img>
          </div>
        </div>
        <div className={styles.whitespace}></div>

        {/* ------------ Products ------------------ */}
        {BrandProducts.map((product, index) => {
          let toRight = false;
          if (index % 2 == 0) {
            toRight = true;
          }
          return (
            <Product
              right={toRight}
              title={product.title}
              description={product.description}
              image={product.image}
              link={product.link}
              key={index}
            ></Product>
          );
        })}
        <div className={styles.whitespace}></div>
        {/* ------------ Contact ------------------ */}

        <div className="min-h-screen">
          <div className={styles.aboutBg}>
            <div className={styles.overlay + " px-3"}>
              <div className="flex min-h-screen md:flex-row flex-col justify-around ">
                <div className="min-h-full w-full grid justify-items-center items-center">
                  <div className="informations ">
                    <div className="grid gap-10">
                      {[
                        {
                          icon: "/assets/icons/1.svg",
                          text: "Mawlawy Street 13, Sulaimanyah, iraq",
                        },
                        {
                          icon: "/assets/icons/3.svg",
                          text: "+964-770-152-0589",
                        },
                        {
                          icon: "/assets/icons/2.svg",
                          text: "slemaninwe@mail.com",
                        },
                      ].map((item, index) => {
                        return (
                          <div className="info inline-flex  items-center" key={index}>
                            <img src={item.icon}></img>
                            <div className="mx-3"></div>
                            <span className="text-l" style={{ color: "white" }}>
                              {item.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="min-h-full w-full grid justify-items-center items-center">
                  {/* <div className="map-container"> */}
                  <iframe
                    className="h-5/6 w-5/6"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1622.9325314372772!2d45.436823005538955!3d35.55703460906854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e392b73b8d1c141!2sslemani%20nwe%20co.!5e0!3m2!1sen!2siq!4v1649506314558!5m2!1sen!2siq"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Product right="true" image='/assets/goodday.png'></Product> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://h3ma.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created By
          <span className={styles.logo + " mx-3 underline"}>
            <a> H E M A</a>
          </span>
        </a>
      </footer>
    </div>
  );
}
