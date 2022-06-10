// we have built this function as we will need it in multiple places in the app and we wont are code to be dry
export async function getNews(quers:string): Promise<any>{
    // fetch the data from the api
    const apiUrl = `https://gnews.io/api/v4/search?q=${quers}&token=${process.env.apikey}`
	const res = await fetch(apiUrl);
	return  await res.json();
}