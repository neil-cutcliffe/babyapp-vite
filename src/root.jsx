import { useEffect } from "react";
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
import { getPosts, getMedia } from "./components/wpapi/posts";
import Card4 from './components/Card4/Card4';


export async function loader({ request }) {
  console.log('rootLoader()');
  const posts = await getPosts();
  const media = await getMedia(posts[0].featured_media);
  return { posts, media };
}

export default function Root() {
  console.log('Root()');
  const { posts, media } = useLoaderData();
  const navigation = useNavigation();

  return (
    <Card4 post={posts[0]} media={media}/>
  );
}
