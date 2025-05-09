export default async function AISuggestion({ term }: { term: string }) {
    let message;

    try {
        const url = `https://disney-clone1.azurewebsites.net/api/getaisuggestion?term=${term}`

        const res = await fetch(url, {
            method: "GET",
            next: {
                revalidate: 60 * 60 * 24 * 7 // cache it for one week
            }
        })

        message = await res.text()

    } catch(e) {
        console.error('OPENAPI ERROR:', e)
        return "Failed to fetch suggestion!"
    } finally {
        return (
            <div className="flex space-x-5 p-10 pb-0 lg:px-10">
                <div className="animate-pulse rounded-full bg-gradient-to-t from-white 
                to-gray-400 h-10 w-10 border-2 flex-shrink-0 border-white mr-3" />
                <div>
                    <p className="text-sm mb-2 text-gray-400">
                        AI (Azure function) Assistant Suggests:
                    </p>
                    <p className="italic text-xl">&ldquo;{message}&ldquo;</p>
                </div>
            </div>
        )
    }  
}
