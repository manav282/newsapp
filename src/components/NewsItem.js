import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, imageurl, newsurl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageurl ? imageurl : "https://images.hindustantimes.com/img/2022/07/20/1600x900/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1658276044849_1658276044849.jpeg"} className="card-img-top" alt="" style={{height:"300px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                            Read More
                        </a>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "85%", zIndex: "1" }}>{source}</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem