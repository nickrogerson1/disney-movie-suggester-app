export default function LoadingSpinner({ text }: { text: string }) {
    return (
        <div className="flex items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white mr-3"></div>
            <p className="text-sm text-gray-400">{text}</p>
        </div>
    )
}


  