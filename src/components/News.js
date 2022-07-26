import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title=`${this.capatilizefirst(this.props.category)} - TazaNews`
    }

    capatilizefirst=(string)=>{
            return string.charAt(0).toUpperCase()+string.slice(1);
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0308bd31f0594f08b21e39bf8108d986&page=1&pageSize=6`;
        let data = await fetch(url);
        this.setState({ loading: true });
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0308bd31f0594f08b21e39bf8108d986&page=${this.state.page + 1}&pageSize=6`;
        let data = await fetch(url);
        this.setState({ loading: true });
        let parsedData = await data.json();
        this.setState(
            {
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            }
        )

    }

    handlePreviousClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0308bd31f0594f08b21e39bf8108d986&page=${this.state.page - 1}&pageSize=6`;
        let data = await fetch(url);
        this.setState({ loading: true });
        let parsedData = await data.json();
        this.setState(
            {
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading: false
            }
        )
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>Top {this.capatilizefirst(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 6)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News