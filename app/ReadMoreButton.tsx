'use client';

import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
    article: Article;
}

function ReadMoreButton({article}: Props) {
    const router = useRouter();

    const handleClick = () => {
        const queryString = Object.entries(article)
        .map(([key, value]) => `${key}=${value}`.replace(/&/g, ""))
        .join('&');

        var finalQueryString = queryString.replace(/#/g, "");

        const url = `/article/article?${finalQueryString}`;
        router.push(url);
    }

  return (
    <button
        onClick={handleClick}
        className="bg-blue-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-blue-500"
    >Read More</button>
  )
}

export default ReadMoreButton



