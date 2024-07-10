/**
 * Helper function to get the first adventure from the response
 * @param {*} response
 */
function getArticle(data) {
	if (data && data.articleList && data.articleList.items) {
		// expect there only to be a single adventure in the array
		if (data.articleList.items.length === 1) {
			const new_data=data.articleList.items[0];
			if((new_data.featuredImage)&&!(new_data.featuredImage?._path)&&(new_data.featuredImage?._authorUrl?.startsWith('https://delivery')))new_data.featuredImage._path=new_data.featuredImage._authorUrl;
			return new_data;
		}
	}
	return undefined;
}

export { getArticle };