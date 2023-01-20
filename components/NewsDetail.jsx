import React from "react";

const NewsDetail = ({ recent }) => {
    return (
        <div>

            <div className="p-4 max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 ">
                <h1 className="text-xl text-gray-900 font-bold">{recent.newsTitle}</h1>
            </div>
             <div>
                {recent.photo
                     ? <img 
                            src={recent.photo.url}
                className="p-4 max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 "/>
        : null
      }
      </div>
      {recent.newsText
      ? <div className="p-4 max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 text-sm leading-loose pb-12">
      <div dangerouslySetInnerHTML={{__html: recent.newsText.html}} />
      </div>
      : null}

        </div>
    )
}

export default NewsDetail
