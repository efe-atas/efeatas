"use client";

import { EmbeddedTweet, TweetNotFound, type TweetProps } from "react-tweet";
import { getTweet } from "react-tweet/api";
import { useEffect, useState } from "react";
import "./tweet.css";

const TweetContent = ({ id, components, onError }: TweetProps) => {
  const [tweet, setTweet] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getTweet(id).then(setTweet).catch((err) => {
        if (onError) {
          setError(onError(err));
        } else {
          console.error(err);
          setError(err);
        }
      });
    }
  }, [id, onError]);

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={error} />;
  }

  return <EmbeddedTweet tweet={tweet} components={components} />;
};

export const ReactTweet = (props: TweetProps) => <TweetContent {...props} />;

export function TweetComponent({ id }: { id: string }) {
  return (
    <div className="tweet my-6">
      <div className={`flex justify-center`}>
        <ReactTweet id={id} />
      </div>
    </div>
  );
}
