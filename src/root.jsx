import React, { useEffect } from "react";
import {
  Outlet,
  NavLink,
  Link,
  useLoaderData,
  useLocation,
  useNavigation,
  useSubmit,
  redirect,
  Form,
} from "react-router-dom";
//import { getPosts, getMedia } from "./components/wpapi/posts";
import SampleCard from './components/SampleCard/SampleCard';


export async function loader({ request }) {
  console.log('rootLoader()');
//  const posts = await getPosts();
  const post =  {
    title   : 'Lorem Ipsum',
    content : 'Lorem ipsum test to be seen and not read for placement only. Lorem ipsum test to be seen.',
    image   : 'url(/src/assets/images/SampleCard_Image.png)'
  };
  return { post };
//  const media = await getMedia(posts[0].featured_media);
//  return { posts, media };
}

export default function Root() {
  console.log('Root()');
  const { post } = useLoaderData();
//  const navigation = useNavigation();

  return (
    <SampleCard post={post} />
  );
}
