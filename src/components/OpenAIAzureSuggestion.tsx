import { AzureOpenAI } from "openai"

const fetchAzureChatCompletion = async (term: string) => {
    
    const apiKey = process.env.AZURE_API_KEY
    const endpoint = process.env.ENDPOINT
    const apiVersion = "2025-01-01-preview";
    const deployment = "gpt-4o-mini"; // This must match the deployment name
    const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

    try {
        const res = await client.chat.completions.create({
            messages: [
            {       
                role: "system",
                content: `You are a digital video assistant working for services such as Netflix, Disney+ and Amazon Prime.
                Your job is to provide movie suggestions based on the movies that the user specifies. Provide a quirky breakdown
                of what the user should watch next. It should only list the names of the movies after the introduction. Keep the
                response short and sweet. Always list at least 3 movies as suggestions. If the user mentions a movie genre, you
                should provide a suggestion based on that genre.
                `
            }, {
                role: "user",
                content: `I like ${term}`
            }],
            model: deployment,
            max_tokens:128,
            temperature: 0.7,
            top_p: 0.95,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: null
        })

    // Only requesting one suggestion so should be at [0] otherwise error
    return res.choices[0].message.content

    } catch (e){
        console.error('AZURE API ERROR', e)
        return "Failed to fetch suggestion!"
    }
}   



export default async function OpenAIAzureSuggestion({ term }: { term: string }) {
       
    const suggestion = await fetchAzureChatCompletion(term)

    return (
        <div className="flex space-x-5 p-10 pb-0 lg:px-10">
            <div className="animate-pulse rounded-full bg-gradient-to-t from-purple-400 
                h-10 w-10 border-2 flex-shrink-0 border-white mr-3" />
            <div>
                <p className="text-sm mb-2 text-purple-400">
                    AI (OpenAI) Assistant Suggests:
                </p>
                <p className="italic text-xl">&ldquo;{suggestion}&ldquo;</p>
            </div>
        </div>
    )
}