import React from 'react'
import { jokeRadom } from '../lib/posts'
import Image from 'next/image'
import Link from 'next/link'

const JokeRandom = ({ joke }) => {
  return (
    <div>
      <p>{joke.value}</p>
      <Image
        priority
        src="/images/chuck-norris.png"
        alt={joke.id}
        width={100}
        height={100}
      />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  )
}

export const getServerSideProps = async () => {
  const joke = await jokeRadom();
  return {
    props: {
      joke
    }
  }
}

export default JokeRandom
