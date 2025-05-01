import React from 'react';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    
  } = news;

  return (
    <div className="card  bg-base-100 shadow-md rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex bg-base-200 items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">{new Date(author?.published_date).toDateString()}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img src={thumbnail_url} alt={title} className="w-full object-cover h-64" />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg">{title}</h2>
        <p className="text-sm text-gray-700">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}... <span className="text-blue-600 cursor-pointer">Read More</span>
            </>
          ) : details}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t">
          <div className="flex items-center text-orange-400 gap-1">
            {[...Array(rating?.number || 0)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-black text-sm ml-2">{rating?.number?.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
