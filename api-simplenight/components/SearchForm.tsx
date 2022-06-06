import { useRouter } from "next/router";

export default function SearchForm() {
    const router = useRouter();

    const handleSubmit = () => {
        router.push(`/search`);
    } 

    return (
        <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200 p-4">
            <div className="space-y-8 divide-y divide-gray-200">
                <div>
                    <div>
                        <label htmlFor="latitude" className="block mt-2 text-sm font-medium text-gray-700">
                            Latitude
                        </label>
                        <input type="number" name="latitude" id="latitude" placeholder="0" min = "-90" max = "90" step="0.0000001"></input>
                        <label htmlFor="longitude" className="block mt-2 text-sm font-medium text-gray-700">
                            Longitude
                        </label>
                        <input type="number" name="longitude" id="longitude" placeholder="0" min = "-180" max = "180" step="0.0000001"></input>
                        <div className="rounded-md shadow pt-2">
                            <button type="submit" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}