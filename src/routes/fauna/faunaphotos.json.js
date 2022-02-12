import {getFaunaPhotosQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

// Fetch all bird tagged photos to display in the birds page
export async function get() {
  const data = await client.fetch(/* groq */ `{
		"photos": ${getFaunaPhotosQuery()}
		
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
