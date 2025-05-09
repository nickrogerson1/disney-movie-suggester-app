// Alternative method to call from client to server
// No longer in use

export async function GET(request: Request){
    const { searchParams } = new URL(request.url)
    const term = searchParams.get("term")

    const url = `https://disney-clone1.azurewebsites.net/api/getaisuggestion?term=${term}`

    const res = await fetch(url, {
        method: "GET",
        next: {
            revalidate: 60 * 60 * 24 * 7 // cache it for one week
        }
    })

    const message = await res.text()
    return Response.json({ message })
}