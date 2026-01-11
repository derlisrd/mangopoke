export class NewsResponse {
    status!: string;
    totalResults!: number;
    articles!: Array<NewsArticle>;

    static fromJson(json: any): NewsResponse {
        const newsResponse = new NewsResponse();
        newsResponse.status = json.status;
        newsResponse.totalResults = json.totalResults;
        newsResponse.articles = json.articles.map((articleJson: any) => {
            const article = new NewsArticle();
            article.sourceId = articleJson.source.id;
            article.sourceName = articleJson.source.name;
            article.title = articleJson.title;
            article.url = articleJson.url;
            article.urlToImage = articleJson.urlToImage;
            article.publishedAt = articleJson.publishedAt;
            article.descripcion = articleJson.description;
            return article;
        });
        return newsResponse;
    }
}

export class NewsArticle{
    sourceId!: string | null;
    sourceName!: string;
    title!: string;
    url!: string;
    urlToImage!: string | null;
    publishedAt!: string;
    descripcion!: string | null;
}