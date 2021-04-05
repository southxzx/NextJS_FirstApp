import axios from 'axios'

export const getSortedPostsData = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
    // console.log(res.data)
    return res.data
  } catch (error) {
    console.error(error);
  }
}

export const getAllPostIds = async () => {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  try {
    const data = await getSortedPostsData();
    return data.map((item) => {
      return {
        params: {
          id: `${item.id}`
        }
      }
    })
  } catch (error) {
    console.error("error", error);
  }

  // return fileNames.map(fileName => {
  //   return {
  //     params: {
  //       id: fileName.replace(/\.md$/, '')
  //     }
  //   }
  // })
}

export async function getPostData(id) {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    // console.log(res.data)
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export const jokeRadom = async () => {
  try {
    const res = await axios.get(`https://api.chucknorris.io/jokes/random`);
    return res.data
  } catch (error) {
    
  }
}