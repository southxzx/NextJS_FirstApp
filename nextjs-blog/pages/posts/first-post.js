import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First post</h1>
      {/* <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Yourname"
      /> */}
    </Layout>
  )
}