import ArticleList from "./ArticleList"

function Articles() {


    const articles = [
        { id: 1, title: "Introduzione a React" },
        { id: 2, title: "State e Props" },
        { id: 3, title: "Componenti e JSX" },
    ];

    return (

        <div>
            <h1>Articoli del blog</h1>
            <ArticleList articles={articles} />
        </div>

    )
}

export default Articles