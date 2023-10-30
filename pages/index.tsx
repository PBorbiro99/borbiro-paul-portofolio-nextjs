import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Paul's Portofolio</title>
      </Head>

    <Header />

    {/* Hero */}
    <section id='hero' className='snap-center'>
      <Hero />
    </section>

    {/* About */}

    {/* Experience */}

    {/* Skills */}

    {/* Projects */}

    {/* Contact Me */}

    </div>
  );
};

export default Home;
