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
    title   : 'Title Neil 3',
    content : 'Content Neil was here two.',
    image   : 'url(https://babyapps.io/test-1/wp-content/uploads/sites/14/2023/01/8344BA1F-CBA1-4E95-846C-66C913A43E30-2-scaled.jpeg)'
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
