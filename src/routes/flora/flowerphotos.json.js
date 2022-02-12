import {getFloraPhotosQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

// Fetch all photos to display in the roll page
export async function get() {
  const data = await client.fetch(/* groq */ `{
		"photos": ${getFloraPhotosQuery()}
		
  }`)

  if (data) {
    return {
      status: 200,
      body: data
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
