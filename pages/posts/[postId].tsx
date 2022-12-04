import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
  post: any;
}

export default function PostDetailPageProps({ post }: PostDetailPageProps) {
  const router = useRouter();

  if (!post) return null;

  return (
    <div>
      <h1>Post Detail Page</h1>

      <p>{post.title}</p>
      <p>{post.author}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('get static paths');

  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

// export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
//   context: GetStaticPropsContext
// ) => {
//   // server side
//   // run build-time
//   console.log('get static props: ', context.params?.postId);

//   const postId = context.params?.postId;

//   if (!postId) return { notFound: true };

//   const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);

//   const data = await response.json();

//   return {
//     props: {
//       posts: data,
//     },
//   };
// };
